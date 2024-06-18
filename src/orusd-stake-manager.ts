import { Address, BigDecimal, BigInt, Bytes, store } from "@graphprotocol/graph-ts";

import {
  ClaimMaxGas as ClaimMaxGasEvent,
  ExtendLockTime as ExtendLockTimeEvent,
  StakeORUSD as StakeORUSDEvent,
  Unstake as UnstakeEvent,
} from "../generated/ORUSDStakeManager/ORUSDStakeManager"
import {
  StakeORUSD,
} from "../generated/schema"


export function handleExtendLockTime(event: ExtendLockTimeEvent): void {
  let entity = StakeORUSD.load(Bytes.fromI32(event.params.positionId.toI32()))
  if (entity) {
    entity.deadline = event.params.newDeadLine
    entity.amountInRUY = new BigDecimal(event.params.mintedRUY).plus(entity.amountInRUY)
  
    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash
  
    entity.save()
  }
 
}

export function handleStakeORUSD(event: StakeORUSDEvent): void {
  let entity = new StakeORUSD(
    Bytes.fromI32(event.params.positionId.toI32()),
  )
  entity.positionId = event.params.positionId
  entity.account = event.params.account
  entity.amountInORUSD = new BigDecimal(event.params.amountInORUSD)
  entity.amountInOSUSD =  new BigDecimal(event.params.amountInOSUSD)
  entity.amountInRUY =  new BigDecimal(event.params.amountInRUY)
  entity.deadline = event.params.deadline

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.status = BigInt.fromI32(1);

  entity.save()
}

export function handleUnstake(event: UnstakeEvent): void {
  let entity = StakeORUSD.load(Bytes.fromI32(event.params.positionId.toI32()))
  if (entity) {
    entity.status = BigInt.fromI32(0);
    entity.save()
  }
}
