import { Address, BigDecimal, BigInt, Bytes } from "@graphprotocol/graph-ts";

export const ZERO_BI = BigInt.fromI32(0)
export const ONE_BI = BigInt.fromI32(1)

export const ZERO_BD = BigDecimal.zero()
export const ONE_BD = BigDecimal.fromString('1')

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const FACTORY_ADDRESS = Address.fromString('0x3cEca1C6e131255e7C95788D40581934E84A1F9d')



export const RETH_ADDRESS = '0x4E06Dc746f8d3AB15BC7522E2B3A1ED087F14617'
export const WETH_ADDRESS = '0x4200000000000000000000000000000000000023'
export const USDB_ADDRESS = '0x4200000000000000000000000000000000000022'
export const RUSD_ADDRESS = '0x671540e1569b8E82605C3eEA5939d326C4Eda457'

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
  // RETH-RUSD
  '0x465be10a03dc42a557e14ec19d4e519f2f91bf6f'
]

export const BUNDLE_ETH = Bytes.fromHexString('0x01')