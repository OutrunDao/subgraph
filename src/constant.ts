import { Address, BigDecimal, BigInt, Bytes } from "@graphprotocol/graph-ts";

export const ZERO_BI = BigInt.fromI32(0)
export const ONE_BI = BigInt.fromI32(1)

export const ZERO_BD = BigDecimal.zero()
export const ONE_BD = BigDecimal.fromString('1')

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const FACTORY_ADDRESS = Address.fromString('0x583758BBD5B5fAF2983Be70B8E551829E1fbCc91')



export const RETH_ADDRESS = ('0xF62f5dB01cb60d80219F478D5CDffB6398Cee9A5').toLowerCase()
export const WETH_ADDRESS = '0x4200000000000000000000000000000000000023'
export const USDB_ADDRESS = '0x4200000000000000000000000000000000000022'
export const RUSD_ADDRESS = '0xe04b19ed724A328C804e82e7196dcef18570bfae'

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
  '0x523d550dFF0fd7FF7fc21DF6B2BB5CE6dFB5f3f0'
]

export const BUNDLE_ETH = Bytes.fromHexString('0x01')