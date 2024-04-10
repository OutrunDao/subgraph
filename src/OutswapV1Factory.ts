import { BigDecimal, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { PairCreated as PairCreatedEvent } from "../generated/OutswapV1Factory/OutswapV1Factory"
import { Bundle, Pair, SwapFactory, Token } from "../generated/schema"
import { OutswapV1Pair } from "../generated/templates"
import { tryFetchDecimals, tryFetchName, tryFetchSymbol } from "./erc20Helper";
import { BUNDLE_ETH, FACTORY_ADDRESS, ZERO_BD, ZERO_BI } from "./constant";

export function handlePairCreated(event: PairCreatedEvent): void {
  OutswapV1Pair.create(event.params.pair);
  let factory = SwapFactory.load(Bytes.fromHexString(FACTORY_ADDRESS))
  if (factory === null) {
    factory = new SwapFactory(Bytes.fromHexString(FACTORY_ADDRESS))
    factory.pairCount = 0;
    factory.totalVolumeETH = ZERO_BD
    factory.totalLiquidityETH = ZERO_BD
    factory.totalVolumeUSD = ZERO_BD
    factory.untrackedVolumeUSD = ZERO_BD
    factory.totalLiquidityUSD = ZERO_BD
    factory.txCount = ZERO_BI

    // create new bundle
    let bundle = new Bundle(BUNDLE_ETH)
    bundle.ethPrice = ZERO_BD
    bundle.save()

  } 
  factory.pairCount = factory.pairCount + 1
  factory.save()

  let pair = new Pair(
    event.params.pair
  )
  const token0Address = event.params.token0
  const token1Address = event.params.token1
  let token0 = Token.load(token0Address)
  let token1 = Token.load(token1Address)

  if (token0 === null) {
    token0 = new Token(token0Address)
    token0.decimals = tryFetchDecimals(token0Address)
    token0.name = tryFetchName(token0Address)
    token0.symbol = tryFetchSymbol(token0Address)
    token0.derivedETH = ZERO_BD
  }
  if (token1 === null) {
    token1 = new Token(token1Address)
    token1.decimals = tryFetchDecimals(token1Address)
    token1.name = tryFetchName(token1Address)
    token1.symbol = tryFetchSymbol(token1Address)
    token1.derivedETH = ZERO_BD

  }
  pair.token0 = token0.id
  pair.token1 = token1.id
  pair.token0Price = ZERO_BD
  pair.token1Price = ZERO_BD
  pair.reserve0 = ZERO_BD
  pair.reserve1 = ZERO_BD
  pair.totalSupply = ZERO_BD
  pair.liquidityProviderCount = ZERO_BI
  pair.reserveETH = ZERO_BD
  pair.reserveUSD = ZERO_BD

  pair.volumeToken0 = ZERO_BD
  pair.volumeToken1 = ZERO_BD
  pair.volumeUSD = ZERO_BD

  token0.save()
  token1.save()
  pair.save()
}
