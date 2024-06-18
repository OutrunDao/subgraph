import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ClaimMaxGas,
  ExtendLockTime,
  GasManagerTransferred,
  OwnershipTransferred,
  SetForceUnstakeFee,
  SetMaxLockupDays,
  SetMinLockupDays,
  SetOutETHVault,
  StakeORETH,
  Unstake,
  WithdrawYield
} from "../generated/ORETHStakeManager/ORETHStakeManager"

export function createClaimMaxGasEvent(
  recipient: Address,
  gasAmount: BigInt
): ClaimMaxGas {
  let claimMaxGasEvent = changetype<ClaimMaxGas>(newMockEvent())

  claimMaxGasEvent.parameters = new Array()

  claimMaxGasEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  claimMaxGasEvent.parameters.push(
    new ethereum.EventParam(
      "gasAmount",
      ethereum.Value.fromUnsignedBigInt(gasAmount)
    )
  )

  return claimMaxGasEvent
}

export function createExtendLockTimeEvent(
  positionId: BigInt,
  extendDays: BigInt,
  newDeadLine: BigInt,
  mintedREY: BigInt
): ExtendLockTime {
  let extendLockTimeEvent = changetype<ExtendLockTime>(newMockEvent())

  extendLockTimeEvent.parameters = new Array()

  extendLockTimeEvent.parameters.push(
    new ethereum.EventParam(
      "positionId",
      ethereum.Value.fromUnsignedBigInt(positionId)
    )
  )
  extendLockTimeEvent.parameters.push(
    new ethereum.EventParam(
      "extendDays",
      ethereum.Value.fromUnsignedBigInt(extendDays)
    )
  )
  extendLockTimeEvent.parameters.push(
    new ethereum.EventParam(
      "newDeadLine",
      ethereum.Value.fromUnsignedBigInt(newDeadLine)
    )
  )
  extendLockTimeEvent.parameters.push(
    new ethereum.EventParam(
      "mintedREY",
      ethereum.Value.fromUnsignedBigInt(mintedREY)
    )
  )

  return extendLockTimeEvent
}

export function createGasManagerTransferredEvent(
  previousGasManager: Address,
  newGasManager: Address
): GasManagerTransferred {
  let gasManagerTransferredEvent = changetype<GasManagerTransferred>(
    newMockEvent()
  )

  gasManagerTransferredEvent.parameters = new Array()

  gasManagerTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousGasManager",
      ethereum.Value.fromAddress(previousGasManager)
    )
  )
  gasManagerTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "newGasManager",
      ethereum.Value.fromAddress(newGasManager)
    )
  )

  return gasManagerTransferredEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSetForceUnstakeFeeEvent(
  forceUnstakeFee: BigInt
): SetForceUnstakeFee {
  let setForceUnstakeFeeEvent = changetype<SetForceUnstakeFee>(newMockEvent())

  setForceUnstakeFeeEvent.parameters = new Array()

  setForceUnstakeFeeEvent.parameters.push(
    new ethereum.EventParam(
      "forceUnstakeFee",
      ethereum.Value.fromUnsignedBigInt(forceUnstakeFee)
    )
  )

  return setForceUnstakeFeeEvent
}

export function createSetMaxLockupDaysEvent(
  maxLockupDays: i32
): SetMaxLockupDays {
  let setMaxLockupDaysEvent = changetype<SetMaxLockupDays>(newMockEvent())

  setMaxLockupDaysEvent.parameters = new Array()

  setMaxLockupDaysEvent.parameters.push(
    new ethereum.EventParam(
      "maxLockupDays",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(maxLockupDays))
    )
  )

  return setMaxLockupDaysEvent
}

export function createSetMinLockupDaysEvent(
  minLockupDays: i32
): SetMinLockupDays {
  let setMinLockupDaysEvent = changetype<SetMinLockupDays>(newMockEvent())

  setMinLockupDaysEvent.parameters = new Array()

  setMinLockupDaysEvent.parameters.push(
    new ethereum.EventParam(
      "minLockupDays",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(minLockupDays))
    )
  )

  return setMinLockupDaysEvent
}

export function createSetOutETHVaultEvent(
  outETHVault: Address
): SetOutETHVault {
  let setOutEthVaultEvent = changetype<SetOutETHVault>(newMockEvent())

  setOutEthVaultEvent.parameters = new Array()

  setOutEthVaultEvent.parameters.push(
    new ethereum.EventParam(
      "outETHVault",
      ethereum.Value.fromAddress(outETHVault)
    )
  )

  return setOutEthVaultEvent
}

export function createStakeORETHEvent(
  positionId: BigInt,
  account: Address,
  amountInORETH: BigInt,
  amountInOSETH: BigInt,
  amountInREY: BigInt,
  deadline: BigInt
): StakeORETH {
  let stakeOrethEvent = changetype<StakeORETH>(newMockEvent())

  stakeOrethEvent.parameters = new Array()

  stakeOrethEvent.parameters.push(
    new ethereum.EventParam(
      "positionId",
      ethereum.Value.fromUnsignedBigInt(positionId)
    )
  )
  stakeOrethEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  stakeOrethEvent.parameters.push(
    new ethereum.EventParam(
      "amountInORETH",
      ethereum.Value.fromUnsignedBigInt(amountInORETH)
    )
  )
  stakeOrethEvent.parameters.push(
    new ethereum.EventParam(
      "amountInOSETH",
      ethereum.Value.fromUnsignedBigInt(amountInOSETH)
    )
  )
  stakeOrethEvent.parameters.push(
    new ethereum.EventParam(
      "amountInREY",
      ethereum.Value.fromUnsignedBigInt(amountInREY)
    )
  )
  stakeOrethEvent.parameters.push(
    new ethereum.EventParam(
      "deadline",
      ethereum.Value.fromUnsignedBigInt(deadline)
    )
  )

  return stakeOrethEvent
}

export function createUnstakeEvent(
  positionId: BigInt,
  amountInORETH: BigInt,
  burnedOSETH: BigInt,
  burnedREY: BigInt
): Unstake {
  let unstakeEvent = changetype<Unstake>(newMockEvent())

  unstakeEvent.parameters = new Array()

  unstakeEvent.parameters.push(
    new ethereum.EventParam(
      "positionId",
      ethereum.Value.fromUnsignedBigInt(positionId)
    )
  )
  unstakeEvent.parameters.push(
    new ethereum.EventParam(
      "amountInORETH",
      ethereum.Value.fromUnsignedBigInt(amountInORETH)
    )
  )
  unstakeEvent.parameters.push(
    new ethereum.EventParam(
      "burnedOSETH",
      ethereum.Value.fromUnsignedBigInt(burnedOSETH)
    )
  )
  unstakeEvent.parameters.push(
    new ethereum.EventParam(
      "burnedREY",
      ethereum.Value.fromUnsignedBigInt(burnedREY)
    )
  )

  return unstakeEvent
}

export function createWithdrawYieldEvent(
  account: Address,
  burnedREY: BigInt,
  yieldAmount: BigInt
): WithdrawYield {
  let withdrawYieldEvent = changetype<WithdrawYield>(newMockEvent())

  withdrawYieldEvent.parameters = new Array()

  withdrawYieldEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  withdrawYieldEvent.parameters.push(
    new ethereum.EventParam(
      "burnedREY",
      ethereum.Value.fromUnsignedBigInt(burnedREY)
    )
  )
  withdrawYieldEvent.parameters.push(
    new ethereum.EventParam(
      "yieldAmount",
      ethereum.Value.fromUnsignedBigInt(yieldAmount)
    )
  )

  return withdrawYieldEvent
}
