import { BigDecimal, BigInt, Bytes } from "@graphprotocol/graph-ts";

export const ZERO_BI = BigInt.fromI32(0)
export const ONE_BI = BigInt.fromI32(1)

export const ZERO_BD = BigDecimal.zero()
export const ONE_BD = BigDecimal.fromString('1')

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'.toLowerCase()



export const RETH_ADDRESS = '0x4E06Dc746f8d3AB15BC7522E2B3A1ED087F14617'.toLowerCase()
export const WETH_ADDRESS = '0x4200000000000000000000000000000000000023'
export const USDB_ADDRESS = '0x4200000000000000000000000000000000000022'
export const RUSD_ADDRESS = '0x671540e1569b8E82605C3eEA5939d326C4Eda457'.toLowerCase()

export const ETH_ADDRESS = [
  RETH_ADDRESS,
  WETH_ADDRESS
]

export const USD_ADDRESS = [
  USDB_ADDRESS,
  RUSD_ADDRESS
]



// rebass tokens, dont count in tracked volume
export const UNTRACKED_PAIRS: string[] = []

// usdt pairs like WETH_USDB RETH_USDB 
export const USD_ETH_PAIRS = [
  RETH_ADDRESS
]

export const BUNDLE_ETH = Bytes.fromHexString('ETH')