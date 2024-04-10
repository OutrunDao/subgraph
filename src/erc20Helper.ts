import { Address, BigInt, Int8 } from "@graphprotocol/graph-ts";
import { ERC20 } from "../generated/OutswapV1Factory/Erc20";
 
export function tryFetchSymbol (address: Address): string {
  const contract = ERC20.bind(address)
  const callRet = contract.try_symbol()
  if (callRet.reverted) {
    return "unknown"
  }
  return callRet.value
}


export function tryFetchDecimals (address: Address): BigInt {
  const contract = ERC20.bind(address)
  const callRet = contract.try_decimals()
  // @dev define 18 when reverted, is this right??
  if (callRet.reverted) {
    return BigInt.fromString('18')
  }
  return BigInt.fromString(callRet.value.toString())
}

export function tryFetchName (address: Address): string {
  const contract = ERC20.bind(address)
  const callRet = contract.try_name()
  if (callRet.reverted) {
    return "unknown"
  }
  return callRet.value
}

export function tryFetchTotalSupply (address: Address): BigInt {
  const contract = ERC20.bind(address)
  const callRet = contract.try_totalSupply()
  if (callRet.reverted) {
    return BigInt.fromI32(0)
  }
  return callRet.value
}


