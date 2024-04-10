/* eslint-disable prefer-const */
import { Pair, Token, Bundle } from '../generated/schema'
import { BigDecimal, Address, BigInt } from '@graphprotocol/graph-ts/index'
import { ZERO_BD, ADDRESS_ZERO, ONE_BD, UNTRACKED_PAIRS, BUNDLE_ETH, FACTORY_ADDRESS ,ETH_ADDRESS,USD_ADDRESS, RETH_ADDRESS, USD_ETH_PAIRS} from './constant'
import {OutswapV1Factory} from '../generated/OutswapV1Factory/OutswapV1Factory'
const factoryContract = OutswapV1Factory.bind(Address.fromString(FACTORY_ADDRESS))

export function getEthPriceInUSD(): BigDecimal {
  let pairs = [] as Pair[]
  for (let i = 0; i<= USD_ETH_PAIRS.length;i++) {
    let pair = Pair.load(Address.fromHexString(USD_ETH_PAIRS[i]))
    if (pair !== null) pairs.push(pair)
  }
  if (!pairs.length) return ZERO_BD

  let totalLiquidityETH = ZERO_BD;
  for (let i=0; i<= pairs.length; i++) {
    totalLiquidityETH = ETH_ADDRESS.includes(pairs[i].token0.toHex()) ? totalLiquidityETH.plus(pairs[i].reserve0) : totalLiquidityETH.plus(pairs[i].reserve1)
  }
  if (totalLiquidityETH.equals(ZERO_BD)) return ZERO_BD
  let price = ZERO_BD
  for (let i=0; i<= pairs.length; i++) {
    let pairNext = pairs[i]
    if (ETH_ADDRESS.includes(pairNext.token0.toHex())) {
      // token0 is eth, token1 is usd
      price = pairNext.token1Price.times(pairNext.reserve0.div(totalLiquidityETH)).plus(price)
    } else {
      // token1 is eth, token0 is usd
      price = pairNext.token0Price.times(pairNext.reserve1.div(totalLiquidityETH)).plus(price)
    }
  }

  return price
}

// token where amounts should contribute to tracked volume and liquidity
let WHITELIST: string[] = ETH_ADDRESS.concat(USD_ADDRESS)

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
let MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('400000')

// minimum liquidity for price to get tracked
let MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('2')

/**
 * Search through graph to find derived Eth per token.
 * @todo update to be derived ETH (add stablecoin estimates)
 **/
export function findEthPerToken(token: Token): BigDecimal {
  if (ETH_ADDRESS.includes(token.id.toHex())) {
    return ONE_BD
  }
  // loop through whitelist and check if paired with any
  for (let i = 0; i < WHITELIST.length; ++i) {
    let pairAddress = factoryContract.getPair(Address.fromBytes(token.id), Address.fromString(WHITELIST[i]))
    if (pairAddress.toHexString() != ADDRESS_ZERO) {
      const pair = Pair.load(pairAddress)!
      if (pair.token0 == token.id && pair.reserveETH.gt(MINIMUM_LIQUIDITY_THRESHOLD_ETH)) {
        let token1 = Token.load(pair.token1)
        if (!token1) continue;
        return pair.token1Price.times(token1.derivedETH as BigDecimal) // return token1 per our token * Eth per token 1
      }
      if (pair.token1 == token.id && pair.reserveETH.gt(MINIMUM_LIQUIDITY_THRESHOLD_ETH)) {
        let token0 = Token.load(pair.token0)
        if (!token0) continue
        return pair.token0Price.times(token0.derivedETH as BigDecimal) // return token0 per our token * ETH per token 0
      }
    }
  }
  return ZERO_BD // nothing was found return 0
}

/**
 * Accepts tokens and amounts, return tracked amount based on token whitelist
 * If one token on whitelist, return amount in that token converted to USD.
 * If both are, return average of two amounts
 * If neither is, return 0
 */
export function getTrackedVolumeUSD(
  tokenAmount0: BigDecimal,
  token0: Token,
  tokenAmount1: BigDecimal,
  token1: Token,
  pair: Pair
): BigDecimal {
  const bundle = Bundle.load(BUNDLE_ETH)!
  let price0 = token0.derivedETH.times(bundle.ethPrice)
  let price1 = token1.derivedETH.times(bundle.ethPrice)

  // dont count tracked volume on these pairs - usually rebass tokens
  if (UNTRACKED_PAIRS.includes(pair.id.toHex())) {
    return ZERO_BD
  }
  const token0Address = token0.id.toHex()
  const token1Address = token1.id.toHex()


  // if less than 5 LPs, require high minimum reserve amount amount or return 0
  if (pair.liquidityProviderCount.lt(BigInt.fromI32(5))) {
    let reserve0USD = pair.reserve0.times(price0)
    let reserve1USD = pair.reserve1.times(price1)
    if (WHITELIST.includes(token0Address) && WHITELIST.includes(token1Address)) {
      if (reserve0USD.plus(reserve1USD).lt(MINIMUM_USD_THRESHOLD_NEW_PAIRS)) {
        return ZERO_BD
      }
    }
    if (WHITELIST.includes(token0Address) && !WHITELIST.includes(token1Address)) {
      if (reserve0USD.times(BigDecimal.fromString('2')).lt(MINIMUM_USD_THRESHOLD_NEW_PAIRS)) {
        return ZERO_BD
      }
    }
    if (!WHITELIST.includes(token0Address) && WHITELIST.includes(token1Address)) {
      if (reserve1USD.times(BigDecimal.fromString('2')).lt(MINIMUM_USD_THRESHOLD_NEW_PAIRS)) {
        return ZERO_BD
      }
    }
  }

  // both are whitelist tokens, take average of both amounts
  if (WHITELIST.includes(token0Address) && WHITELIST.includes(token1Address)) {
    return tokenAmount0
      .times(price0)
      .plus(tokenAmount1.times(price1))
      .div(BigDecimal.fromString('2'))
  }

  // take full value of the whitelisted token amount
  if (WHITELIST.includes(token0Address) && !WHITELIST.includes(token1Address)) {
    return tokenAmount0.times(price0)
  }

  // take full value of the whitelisted token amount
  if (!WHITELIST.includes(token0Address) && WHITELIST.includes(token1Address)) {
    return tokenAmount1.times(price1)
  }

  // neither token is on white list, tracked volume is 0
  return ZERO_BD
}

/**
 * Accepts tokens and amounts, return tracked amount based on token whitelist
 * If one token on whitelist, return amount in that token converted to USD * 2.
 * If both are, return sum of two amounts
 * If neither is, return 0
 */
export function getTrackedLiquidityUSD(
  tokenAmount0: BigDecimal,
  token0: Token,
  tokenAmount1: BigDecimal,
  token1: Token
): BigDecimal {
  let bundle = Bundle.load(BUNDLE_ETH)!
  let price0 = token0.derivedETH.times(bundle.ethPrice)
  let price1 = token1.derivedETH.times(bundle.ethPrice)
  const token0Address = token0.id.toHex()
  const token1Address = token1.id.toHex()
  // both are whitelist tokens, take average of both amounts
  if (WHITELIST.includes(token0Address) && WHITELIST.includes(token1Address)) {
    return tokenAmount0.times(price0).plus(tokenAmount1.times(price1))
  }

  // take double value of the whitelisted token amount
  if (WHITELIST.includes(token0Address) && !WHITELIST.includes(token1Address)) {
    return tokenAmount0.times(price0).times(BigDecimal.fromString('2'))
  }

  // take double value of the whitelisted token amount
  if (!WHITELIST.includes(token0Address) && WHITELIST.includes(token1Address)) {
    return tokenAmount1.times(price1).times(BigDecimal.fromString('2'))
  }

  // neither token is on white list, tracked volume is 0
  return ZERO_BD
}
