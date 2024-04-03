import {
  Mint as MintEvent,
  Burn as BurnEvent,
  Sync as SyncEvent
} from "../generated/templates/OutswapV1Pair/OutswapV1Pair";
import { ERC20 } from "../generated/templates/Erc20/ERC20";
import { LiquidityHolding, PairCreated, PairTvl } from "../generated/schema";
import { Address, BigInt, Value } from "@graphprotocol/graph-ts";
import { store, ethereum, log } from "@graphprotocol/graph-ts";

export function handleMint(event: MintEvent): void {
  // entity id: pair address + user address


  let id = event.address.toHex() + "-" + event.params.to.toHex();
  let entity = LiquidityHolding.load(id);
  // find from PairCreated entity where pair address is equal to event.address
  let pairCreated = PairCreated.load(event.address)!;
  if (entity == null) {
    entity = new LiquidityHolding(id);
    entity.amount0 = event.params.amount0;
    entity.amount1 = event.params.amount1;
  } else {
    entity.amount0 = event.params.amount0.plus(entity.amount0);
    entity.amount1 = event.params.amount1.plus(entity.amount1);
    // const result = ethereum.call(new ethereum.SmartContractCall('ERC20',  Address.fromBytes(pairCreated.token0), 'symbol', 'symbol()', []))
    // const result = 
    const callRet0 = ERC20.bind(Address.fromBytes(pairCreated.token0)).try_symbol()
    if(!callRet0.reverted) entity.symbol0 = callRet0.value

    const callRet1 = ERC20.bind(Address.fromBytes(pairCreated.token1)).try_symbol()
    if (!callRet1.reverted) entity.symbol1 = callRet1.value
    
  }
  entity.pair = event.address;
  entity.user = event.params.to;
  entity.token0 = pairCreated.token0;
  entity.token1 = pairCreated.token1;
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

export function handleSync(event: SyncEvent): void {
  let id = event.address.toHex(); 
  let entity = PairTvl.load(id)
  let pairCreated = PairCreated.load(event.address)!;

  if (!entity) {
    entity = new PairTvl(id)
    entity.token0 = pairCreated.token0
    entity.token1 = pairCreated.token1
    entity.pair = event.address
    const callRet0 = ERC20.bind(Address.fromBytes(pairCreated.token0)).try_symbol()
    if(!callRet0.reverted) entity.symbol0 = callRet0.value

    const callRet1 = ERC20.bind(Address.fromBytes(pairCreated.token1)).try_symbol()
    if (!callRet1.reverted) entity.symbol1 = callRet1.value
  }
  if (event.params.reserve0.equals(BigInt.zero()) || event.params.reserve1.equals(BigInt.zero()) ) {
    return store.remove("PairTvl", id);
  }
  
  entity.reserve0 = event.params.reserve0
  entity.reserve1 = event.params.reserve1
  entity.save()
}