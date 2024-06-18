// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class ClaimMaxGas extends ethereum.Event {
  get params(): ClaimMaxGas__Params {
    return new ClaimMaxGas__Params(this);
  }
}

export class ClaimMaxGas__Params {
  _event: ClaimMaxGas;

  constructor(event: ClaimMaxGas) {
    this._event = event;
  }

  get recipient(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get gasAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ExtendLockTime extends ethereum.Event {
  get params(): ExtendLockTime__Params {
    return new ExtendLockTime__Params(this);
  }
}

export class ExtendLockTime__Params {
  _event: ExtendLockTime;

  constructor(event: ExtendLockTime) {
    this._event = event;
  }

  get positionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get extendDays(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newDeadLine(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get mintedRUY(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class GasManagerTransferred extends ethereum.Event {
  get params(): GasManagerTransferred__Params {
    return new GasManagerTransferred__Params(this);
  }
}

export class GasManagerTransferred__Params {
  _event: GasManagerTransferred;

  constructor(event: GasManagerTransferred) {
    this._event = event;
  }

  get previousGasManager(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newGasManager(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SetForceUnstakeFee extends ethereum.Event {
  get params(): SetForceUnstakeFee__Params {
    return new SetForceUnstakeFee__Params(this);
  }
}

export class SetForceUnstakeFee__Params {
  _event: SetForceUnstakeFee;

  constructor(event: SetForceUnstakeFee) {
    this._event = event;
  }

  get forceUnstakeFee(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class SetMaxLockupDays extends ethereum.Event {
  get params(): SetMaxLockupDays__Params {
    return new SetMaxLockupDays__Params(this);
  }
}

export class SetMaxLockupDays__Params {
  _event: SetMaxLockupDays;

  constructor(event: SetMaxLockupDays) {
    this._event = event;
  }

  get maxLockupDays(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class SetMinLockupDays extends ethereum.Event {
  get params(): SetMinLockupDays__Params {
    return new SetMinLockupDays__Params(this);
  }
}

export class SetMinLockupDays__Params {
  _event: SetMinLockupDays;

  constructor(event: SetMinLockupDays) {
    this._event = event;
  }

  get minLockupDays(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class SetOutUSDBVault extends ethereum.Event {
  get params(): SetOutUSDBVault__Params {
    return new SetOutUSDBVault__Params(this);
  }
}

export class SetOutUSDBVault__Params {
  _event: SetOutUSDBVault;

  constructor(event: SetOutUSDBVault) {
    this._event = event;
  }

  get outUSDBVault(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class StakeORUSD extends ethereum.Event {
  get params(): StakeORUSD__Params {
    return new StakeORUSD__Params(this);
  }
}

export class StakeORUSD__Params {
  _event: StakeORUSD;

  constructor(event: StakeORUSD) {
    this._event = event;
  }

  get positionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amountInORUSD(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amountInOSUSD(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get amountInRUY(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get deadline(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class Unstake extends ethereum.Event {
  get params(): Unstake__Params {
    return new Unstake__Params(this);
  }
}

export class Unstake__Params {
  _event: Unstake;

  constructor(event: Unstake) {
    this._event = event;
  }

  get positionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amountInORUSD(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get burnedOSUSD(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get burnedRUY(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class WithdrawYield extends ethereum.Event {
  get params(): WithdrawYield__Params {
    return new WithdrawYield__Params(this);
  }
}

export class WithdrawYield__Params {
  _event: WithdrawYield;

  constructor(event: WithdrawYield) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get burnedRUY(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get yieldAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ORUSDStakeManager__positionsOfResultValue0Struct extends ethereum.Tuple {
  get orUSDAmount(): BigInt {
    return this[0].toBigInt();
  }

  get osUSDAmount(): BigInt {
    return this[1].toBigInt();
  }

  get deadline(): BigInt {
    return this[2].toBigInt();
  }

  get closed(): boolean {
    return this[3].toBoolean();
  }

  get owner(): Address {
    return this[4].toAddress();
  }
}

export class ORUSDStakeManager__stakeResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getAmountInOSUSD(): BigInt {
    return this.value0;
  }

  getAmountInRUY(): BigInt {
    return this.value1;
  }
}

export class ORUSDStakeManager extends ethereum.SmartContract {
  static bind(address: Address): ORUSDStakeManager {
    return new ORUSDStakeManager("ORUSDStakeManager", address);
  }

  BLAST(): Address {
    let result = super.call("BLAST", "BLAST():(address)", []);

    return result[0].toAddress();
  }

  try_BLAST(): ethereum.CallResult<Address> {
    let result = super.tryCall("BLAST", "BLAST():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  DAY(): BigInt {
    let result = super.call("DAY", "DAY():(uint256)", []);

    return result[0].toBigInt();
  }

  try_DAY(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("DAY", "DAY():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MINSTAKE(): BigInt {
    let result = super.call("MINSTAKE", "MINSTAKE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MINSTAKE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("MINSTAKE", "MINSTAKE():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ORUSD(): Address {
    let result = super.call("ORUSD", "ORUSD():(address)", []);

    return result[0].toAddress();
  }

  try_ORUSD(): ethereum.CallResult<Address> {
    let result = super.tryCall("ORUSD", "ORUSD():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  OSUSD(): Address {
    let result = super.call("OSUSD", "OSUSD():(address)", []);

    return result[0].toAddress();
  }

  try_OSUSD(): ethereum.CallResult<Address> {
    let result = super.tryCall("OSUSD", "OSUSD():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  RATIO(): BigInt {
    let result = super.call("RATIO", "RATIO():(uint256)", []);

    return result[0].toBigInt();
  }

  try_RATIO(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("RATIO", "RATIO():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  RUY(): Address {
    let result = super.call("RUY", "RUY():(address)", []);

    return result[0].toAddress();
  }

  try_RUY(): ethereum.CallResult<Address> {
    let result = super.tryCall("RUY", "RUY():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  USDB(): Address {
    let result = super.call("USDB", "USDB():(address)", []);

    return result[0].toAddress();
  }

  try_USDB(): ethereum.CallResult<Address> {
    let result = super.tryCall("USDB", "USDB():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  avgStakeDays(): BigInt {
    let result = super.call("avgStakeDays", "avgStakeDays():(uint256)", []);

    return result[0].toBigInt();
  }

  try_avgStakeDays(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("avgStakeDays", "avgStakeDays():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  calcOSUSDAmount(amountInORUSD: BigInt): BigInt {
    let result = super.call(
      "calcOSUSDAmount",
      "calcOSUSDAmount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(amountInORUSD)],
    );

    return result[0].toBigInt();
  }

  try_calcOSUSDAmount(amountInORUSD: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "calcOSUSDAmount",
      "calcOSUSDAmount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(amountInORUSD)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  claimMaxGas(recipient: Address): BigInt {
    let result = super.call("claimMaxGas", "claimMaxGas(address):(uint256)", [
      ethereum.Value.fromAddress(recipient),
    ]);

    return result[0].toBigInt();
  }

  try_claimMaxGas(recipient: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "claimMaxGas",
      "claimMaxGas(address):(uint256)",
      [ethereum.Value.fromAddress(recipient)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  extendLockTime(positionId: BigInt, extendDays: BigInt): BigInt {
    let result = super.call(
      "extendLockTime",
      "extendLockTime(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(positionId),
        ethereum.Value.fromUnsignedBigInt(extendDays),
      ],
    );

    return result[0].toBigInt();
  }

  try_extendLockTime(
    positionId: BigInt,
    extendDays: BigInt,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "extendLockTime",
      "extendLockTime(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(positionId),
        ethereum.Value.fromUnsignedBigInt(extendDays),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  forceUnstakeFee(): BigInt {
    let result = super.call(
      "forceUnstakeFee",
      "forceUnstakeFee():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_forceUnstakeFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "forceUnstakeFee",
      "forceUnstakeFee():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  gasManager(): Address {
    let result = super.call("gasManager", "gasManager():(address)", []);

    return result[0].toAddress();
  }

  try_gasManager(): ethereum.CallResult<Address> {
    let result = super.tryCall("gasManager", "gasManager():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getStakedORUSD(): BigInt {
    let result = super.call("getStakedORUSD", "getStakedORUSD():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getStakedORUSD(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getStakedORUSD",
      "getStakedORUSD():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  idCounter(): BigInt {
    let result = super.call("idCounter", "idCounter():(uint256)", []);

    return result[0].toBigInt();
  }

  try_idCounter(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("idCounter", "idCounter():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  initialized(): boolean {
    let result = super.call("initialized", "initialized():(bool)", []);

    return result[0].toBoolean();
  }

  try_initialized(): ethereum.CallResult<boolean> {
    let result = super.tryCall("initialized", "initialized():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  maxLockupDays(): i32 {
    let result = super.call("maxLockupDays", "maxLockupDays():(uint16)", []);

    return result[0].toI32();
  }

  try_maxLockupDays(): ethereum.CallResult<i32> {
    let result = super.tryCall("maxLockupDays", "maxLockupDays():(uint16)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  minLockupDays(): i32 {
    let result = super.call("minLockupDays", "minLockupDays():(uint16)", []);

    return result[0].toI32();
  }

  try_minLockupDays(): ethereum.CallResult<i32> {
    let result = super.tryCall("minLockupDays", "minLockupDays():(uint16)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  outUSDBVault(): Address {
    let result = super.call("outUSDBVault", "outUSDBVault():(address)", []);

    return result[0].toAddress();
  }

  try_outUSDBVault(): ethereum.CallResult<Address> {
    let result = super.tryCall("outUSDBVault", "outUSDBVault():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  positionsOf(
    positionId: BigInt,
  ): ORUSDStakeManager__positionsOfResultValue0Struct {
    let result = super.call(
      "positionsOf",
      "positionsOf(uint256):((uint104,uint104,uint40,bool,address))",
      [ethereum.Value.fromUnsignedBigInt(positionId)],
    );

    return changetype<ORUSDStakeManager__positionsOfResultValue0Struct>(
      result[0].toTuple(),
    );
  }

  try_positionsOf(
    positionId: BigInt,
  ): ethereum.CallResult<ORUSDStakeManager__positionsOfResultValue0Struct> {
    let result = super.tryCall(
      "positionsOf",
      "positionsOf(uint256):((uint104,uint104,uint40,bool,address))",
      [ethereum.Value.fromUnsignedBigInt(positionId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<ORUSDStakeManager__positionsOfResultValue0Struct>(
        value[0].toTuple(),
      ),
    );
  }

  readGasBalance(): BigInt {
    let result = super.call("readGasBalance", "readGasBalance():(uint256)", []);

    return result[0].toBigInt();
  }

  try_readGasBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "readGasBalance",
      "readGasBalance():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  stake(
    amountInORUSD: BigInt,
    lockupDays: i32,
    positionOwner: Address,
    osUSDTo: Address,
    ruyTo: Address,
  ): ORUSDStakeManager__stakeResult {
    let result = super.call(
      "stake",
      "stake(uint256,uint16,address,address,address):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(amountInORUSD),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(lockupDays)),
        ethereum.Value.fromAddress(positionOwner),
        ethereum.Value.fromAddress(osUSDTo),
        ethereum.Value.fromAddress(ruyTo),
      ],
    );

    return new ORUSDStakeManager__stakeResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
    );
  }

  try_stake(
    amountInORUSD: BigInt,
    lockupDays: i32,
    positionOwner: Address,
    osUSDTo: Address,
    ruyTo: Address,
  ): ethereum.CallResult<ORUSDStakeManager__stakeResult> {
    let result = super.tryCall(
      "stake",
      "stake(uint256,uint16,address,address,address):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(amountInORUSD),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(lockupDays)),
        ethereum.Value.fromAddress(positionOwner),
        ethereum.Value.fromAddress(osUSDTo),
        ethereum.Value.fromAddress(ruyTo),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ORUSDStakeManager__stakeResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
      ),
    );
  }

  totalStaked(): BigInt {
    let result = super.call("totalStaked", "totalStaked():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalStaked(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalStaked", "totalStaked():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalYieldPool(): BigInt {
    let result = super.call("totalYieldPool", "totalYieldPool():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalYieldPool(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalYieldPool",
      "totalYieldPool():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  unstake(positionId: BigInt): BigInt {
    let result = super.call("unstake", "unstake(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(positionId),
    ]);

    return result[0].toBigInt();
  }

  try_unstake(positionId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("unstake", "unstake(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(positionId),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  withdrawYield(amountInRUY: BigInt): BigInt {
    let result = super.call(
      "withdrawYield",
      "withdrawYield(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(amountInRUY)],
    );

    return result[0].toBigInt();
  }

  try_withdrawYield(amountInRUY: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "withdrawYield",
      "withdrawYield(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(amountInRUY)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get gasManager(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get orUSD(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get osUSD(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get ruy(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AccumYieldPoolCall extends ethereum.Call {
  get inputs(): AccumYieldPoolCall__Inputs {
    return new AccumYieldPoolCall__Inputs(this);
  }

  get outputs(): AccumYieldPoolCall__Outputs {
    return new AccumYieldPoolCall__Outputs(this);
  }
}

export class AccumYieldPoolCall__Inputs {
  _call: AccumYieldPoolCall;

  constructor(call: AccumYieldPoolCall) {
    this._call = call;
  }

  get nativeYield(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AccumYieldPoolCall__Outputs {
  _call: AccumYieldPoolCall;

  constructor(call: AccumYieldPoolCall) {
    this._call = call;
  }
}

export class ClaimMaxGasCall extends ethereum.Call {
  get inputs(): ClaimMaxGasCall__Inputs {
    return new ClaimMaxGasCall__Inputs(this);
  }

  get outputs(): ClaimMaxGasCall__Outputs {
    return new ClaimMaxGasCall__Outputs(this);
  }
}

export class ClaimMaxGasCall__Inputs {
  _call: ClaimMaxGasCall;

  constructor(call: ClaimMaxGasCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ClaimMaxGasCall__Outputs {
  _call: ClaimMaxGasCall;

  constructor(call: ClaimMaxGasCall) {
    this._call = call;
  }

  get gasAmount(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ExtendLockTimeCall extends ethereum.Call {
  get inputs(): ExtendLockTimeCall__Inputs {
    return new ExtendLockTimeCall__Inputs(this);
  }

  get outputs(): ExtendLockTimeCall__Outputs {
    return new ExtendLockTimeCall__Outputs(this);
  }
}

export class ExtendLockTimeCall__Inputs {
  _call: ExtendLockTimeCall;

  constructor(call: ExtendLockTimeCall) {
    this._call = call;
  }

  get positionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get extendDays(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ExtendLockTimeCall__Outputs {
  _call: ExtendLockTimeCall;

  constructor(call: ExtendLockTimeCall) {
    this._call = call;
  }

  get amountInRUY(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get outUSDBVault_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get forceUnstakeFee_(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get minLockupDays_(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get maxLockupDays_(): i32 {
    return this._call.inputValues[3].value.toI32();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetForceUnstakeFeeCall extends ethereum.Call {
  get inputs(): SetForceUnstakeFeeCall__Inputs {
    return new SetForceUnstakeFeeCall__Inputs(this);
  }

  get outputs(): SetForceUnstakeFeeCall__Outputs {
    return new SetForceUnstakeFeeCall__Outputs(this);
  }
}

export class SetForceUnstakeFeeCall__Inputs {
  _call: SetForceUnstakeFeeCall;

  constructor(call: SetForceUnstakeFeeCall) {
    this._call = call;
  }

  get forceUnstakeFee_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetForceUnstakeFeeCall__Outputs {
  _call: SetForceUnstakeFeeCall;

  constructor(call: SetForceUnstakeFeeCall) {
    this._call = call;
  }
}

export class SetMaxLockupDaysCall extends ethereum.Call {
  get inputs(): SetMaxLockupDaysCall__Inputs {
    return new SetMaxLockupDaysCall__Inputs(this);
  }

  get outputs(): SetMaxLockupDaysCall__Outputs {
    return new SetMaxLockupDaysCall__Outputs(this);
  }
}

export class SetMaxLockupDaysCall__Inputs {
  _call: SetMaxLockupDaysCall;

  constructor(call: SetMaxLockupDaysCall) {
    this._call = call;
  }

  get maxLockupDays_(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class SetMaxLockupDaysCall__Outputs {
  _call: SetMaxLockupDaysCall;

  constructor(call: SetMaxLockupDaysCall) {
    this._call = call;
  }
}

export class SetMinLockupDaysCall extends ethereum.Call {
  get inputs(): SetMinLockupDaysCall__Inputs {
    return new SetMinLockupDaysCall__Inputs(this);
  }

  get outputs(): SetMinLockupDaysCall__Outputs {
    return new SetMinLockupDaysCall__Outputs(this);
  }
}

export class SetMinLockupDaysCall__Inputs {
  _call: SetMinLockupDaysCall;

  constructor(call: SetMinLockupDaysCall) {
    this._call = call;
  }

  get minLockupDays_(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class SetMinLockupDaysCall__Outputs {
  _call: SetMinLockupDaysCall;

  constructor(call: SetMinLockupDaysCall) {
    this._call = call;
  }
}

export class SetOutUSDBVaultCall extends ethereum.Call {
  get inputs(): SetOutUSDBVaultCall__Inputs {
    return new SetOutUSDBVaultCall__Inputs(this);
  }

  get outputs(): SetOutUSDBVaultCall__Outputs {
    return new SetOutUSDBVaultCall__Outputs(this);
  }
}

export class SetOutUSDBVaultCall__Inputs {
  _call: SetOutUSDBVaultCall;

  constructor(call: SetOutUSDBVaultCall) {
    this._call = call;
  }

  get outUSDBVault_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOutUSDBVaultCall__Outputs {
  _call: SetOutUSDBVaultCall;

  constructor(call: SetOutUSDBVaultCall) {
    this._call = call;
  }
}

export class StakeCall extends ethereum.Call {
  get inputs(): StakeCall__Inputs {
    return new StakeCall__Inputs(this);
  }

  get outputs(): StakeCall__Outputs {
    return new StakeCall__Outputs(this);
  }
}

export class StakeCall__Inputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }

  get amountInORUSD(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get lockupDays(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get positionOwner(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get osUSDTo(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get ruyTo(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class StakeCall__Outputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }

  get amountInOSUSD(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get amountInRUY(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}

export class TransferGasManagerCall extends ethereum.Call {
  get inputs(): TransferGasManagerCall__Inputs {
    return new TransferGasManagerCall__Inputs(this);
  }

  get outputs(): TransferGasManagerCall__Outputs {
    return new TransferGasManagerCall__Outputs(this);
  }
}

export class TransferGasManagerCall__Inputs {
  _call: TransferGasManagerCall;

  constructor(call: TransferGasManagerCall) {
    this._call = call;
  }

  get newGasManager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferGasManagerCall__Outputs {
  _call: TransferGasManagerCall;

  constructor(call: TransferGasManagerCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnstakeCall extends ethereum.Call {
  get inputs(): UnstakeCall__Inputs {
    return new UnstakeCall__Inputs(this);
  }

  get outputs(): UnstakeCall__Outputs {
    return new UnstakeCall__Outputs(this);
  }
}

export class UnstakeCall__Inputs {
  _call: UnstakeCall;

  constructor(call: UnstakeCall) {
    this._call = call;
  }

  get positionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UnstakeCall__Outputs {
  _call: UnstakeCall;

  constructor(call: UnstakeCall) {
    this._call = call;
  }

  get amountInORUSD(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class WithdrawYieldCall extends ethereum.Call {
  get inputs(): WithdrawYieldCall__Inputs {
    return new WithdrawYieldCall__Inputs(this);
  }

  get outputs(): WithdrawYieldCall__Outputs {
    return new WithdrawYieldCall__Outputs(this);
  }
}

export class WithdrawYieldCall__Inputs {
  _call: WithdrawYieldCall;

  constructor(call: WithdrawYieldCall) {
    this._call = call;
  }

  get amountInRUY(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawYieldCall__Outputs {
  _call: WithdrawYieldCall;

  constructor(call: WithdrawYieldCall) {
    this._call = call;
  }

  get yieldAmount(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}
