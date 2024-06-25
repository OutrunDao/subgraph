import { Address, BigDecimal, BigInt, Bytes } from "@graphprotocol/graph-ts";

export const ZERO_BI = BigInt.fromI32(0)
export const ONE_BI = BigInt.fromI32(1)

export const ZERO_BD = BigDecimal.zero()
export const ONE_BD = BigDecimal.fromString('1')

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const FACTORY_ADDRESS = Address.fromString('0x7388d4A76D6Ec12946652c2953cd17B70E457f03')



export const RETH_ADDRESS = ('0x99766FEb8EA7F357bDBa860998D1Fb44d7fb89eA').toLowerCase()
export const WETH_ADDRESS = '0x4200000000000000000000000000000000000023'
export const USDB_ADDRESS = '0x4200000000000000000000000000000000000022'
export const RUSD_ADDRESS = ('0x6D78F8523Be0d36DDB874B4db5570c7E034F250A').toLowerCase()

export const ETH_ADDRESS = [
  RETH_ADDRESS
]

export const USD_ADDRESS = [
  RUSD_ADDRESS
]



// rebass tokens, dont count in tracked volume
export const UNTRACKED_PAIRS: string[] = []

// usdt pairs like WETH_USDB RETH_USDB 
export const USD_ETH_PAIRS = [
  // RETH-RUSD
  '0x8677E9D150731bFd63c03C0683d19E3E03c0CAdD'
]

export const BUNDLE_ETH = Bytes.fromHexString('0x01')