import { Address, BigDecimal, BigInt, Bytes, Int8, ethereum } from '@graphprotocol/graph-ts';
import { ONE_BI, ZERO_BD, ZERO_BI } from './constant';
import { LiquidityPosition, Pair, PairDayData, User } from '../generated/schema';

export function exponentToBigDecimal(decimals: BigInt): BigDecimal {
  let bd = BigDecimal.fromString('1')
  for (let i = ZERO_BI; i.lt(decimals as BigInt); i = i.plus( BigInt.fromI32(1))) {
    bd = bd.times(BigDecimal.fromString('10'))
  }
  return bd
}


export function formatUnits(amount: BigInt, decimals: BigInt): BigDecimal {
  if (decimals.equals(ZERO_BI)) {
    return amount.toBigDecimal()
  }
  return amount.toBigDecimal().div(exponentToBigDecimal(decimals))
}

export function isIncludeIn(list: string[], addr: Bytes): bool {
  for (let i = 0; i< list.length;i ++) {
    if (Address.fromString(list[i]).equals(addr)) return true
  }
  return false
}



export function createLiquidityPosition(exchange: Address, user: Address): LiquidityPosition {
  let id = exchange
    .toHexString()
    .concat('-')
    .concat(user.toHexString())
  let liquidityTokenBalance = LiquidityPosition.load(id)
  if (liquidityTokenBalance === null) {
    let pair = Pair.load(exchange)! 
    pair.liquidityProviderCount = pair.liquidityProviderCount.plus(ONE_BI)
    liquidityTokenBalance = new LiquidityPosition(id)
    liquidityTokenBalance.liquidityTokenBalance = ZERO_BD
    liquidityTokenBalance.pair = exchange
    liquidityTokenBalance.user = user
    liquidityTokenBalance.save()
    pair.save()
  }
  // if (liquidityTokenBalance === null) log.error('LiquidityTokenBalance is null', [id])
  return liquidityTokenBalance as LiquidityPosition
}


export function createUser(address: Address): void {
  let id = address
  let user = User.load(id)
  if (user === null) {
    user = new User(id)
    user.usdSwapped = ZERO_BD
    user.save()
  }
}

export function updatePairDayData(event: ethereum.Event): PairDayData {
  let timestamp = event.block.timestamp.toI32()
  let dayID = timestamp / 86400
  let dayStartTimestamp = dayID * 86400
  let dayPairID = event.address
    .toHexString()
    .concat('-')
    .concat(BigInt.fromI32(dayID).toString())
  let pair = Pair.load(event.address)!
  let pairDayData = PairDayData.load(dayPairID)
  if (pairDayData === null) {
    pairDayData = new PairDayData(dayPairID)
    pairDayData.date = dayStartTimestamp
    pairDayData.token0 = pair.token0
    pairDayData.token1 = pair.token1
    pairDayData.pairAddress = event.address
    pairDayData.dailyVolumeToken0 = ZERO_BD
    pairDayData.dailyVolumeToken1 = ZERO_BD
    pairDayData.dailyVolumeUSD = ZERO_BD
    pairDayData.dailyTxns = ZERO_BI
  }

  pairDayData.totalSupply = pair.totalSupply
  pairDayData.reserve0 = pair.reserve0
  pairDayData.reserve1 = pair.reserve1
  pairDayData.reserveUSD = pair.reserveUSD
  pairDayData.dailyTxns = pairDayData.dailyTxns.plus(ONE_BI)
  pairDayData.save()

  return pairDayData as PairDayData
}