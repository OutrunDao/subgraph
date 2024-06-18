import { Address, BigDecimal, BigInt, Bytes, store } from "@graphprotocol/graph-ts";
import {
  ExtendLockTime as ExtendLockTimeEvent,
  StakeORETH as StakeORETHEvent,
  Unstake as UnstakeEvent,
} from "../generated/ORETHStakeManager/ORETHStakeManager"
import {
  StakeORETH,
} from "../generated/schema"


export function handleExtendLockTime(event: ExtendLockTimeEvent): void {
  let entity = StakeORETH.load(Bytes.fromI32(event.params.positionId.toI32()))
  if (entity) {
    entity.deadline = event.params.newDeadLine
    entity.amountInREY = new BigDecimal(event.params.mintedREY).plus(entity.amountInREY)

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
  }
  
}


export function handleStakeORETH(event: StakeORETHEvent): void {
  let entity = new StakeORETH(
    Bytes.fromI32(event.params.positionId.toI32())
  )
  entity.positionId = event.params.positionId
  entity.account = event.params.account
  entity.amountInORETH = new BigDecimal(event.params.amountInORETH)
  entity.amountInOSETH =new BigDecimal(event.params.amountInOSETH)
  entity.amountInREY = new BigDecimal(event.params.amountInREY)
  entity.deadline = event.params.deadline

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.status = BigInt.fromI32(1);
  entity.save()
}

export function handleUnstake(event: UnstakeEvent): void {
  let entity = StakeORETH.load(Bytes.fromI32(event.params.positionId.toI32()))
  if (entity) {
    entity.status = BigInt.fromI32(0);
    entity.save()
  }
  
}
