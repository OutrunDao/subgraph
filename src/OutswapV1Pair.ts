import {
  Mint as MintEvent,
  Burn as BurnEvent,
} from "../generated/templates/OutswapV1Pair/OutswapV1Pair";
import { LiquidityHolding } from "../generated/schema";
import { BigInt } from "@graphprotocol/graph-ts";
import { store } from "@graphprotocol/graph-ts";

export function handleMint(event: MintEvent): void {
  // entity id: pair address + user address

  let id = event.address.toHex() + "-" + event.params.to.toHex();
  let entity = LiquidityHolding.load(id);
  if (entity == null) {
    entity = new LiquidityHolding(id);
    entity.amount0 = event.params.amount0;
    entity.amount1 = event.params.amount1;
  } else {
    entity.amount0 = event.params.amount0.plus(entity.amount0);
    entity.amount1 = event.params.amount1.plus(entity.amount1);
  }
  entity.pair = event.address;
  entity.user = event.params.to;
  entity.save();
}

export function handleBurn(event: BurnEvent): void {
  // entity id: pair address + user address

  let id = event.address.toHex() + "-" + event.params.to.toHex();
  let entity = LiquidityHolding.load(id)!;
  entity.pair = event.address;
  entity.user = event.params.to;
  entity.amount0 = entity.amount0.minus(event.params.amount0);
  entity.amount1 = entity.amount1.minus(event.params.amount1);
  if (
    entity.amount0.equals(BigInt.fromI32(0)) ||
    entity.amount1.equals(BigInt.fromI32(0))
  ) {
    store.remove("LiquidityHolding", id);
  } else {
    entity.save();
  }
}
