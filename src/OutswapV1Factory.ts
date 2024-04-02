import { PairCreated as PairCreatedEvent } from "../generated/OutswapV1Factory/OutswapV1Factory"
import { PairCreated } from "../generated/schema"
import { OutswapV1Pair } from "../generated/templates"
import {ethereum, Value} from '@graphprotocol/graph-ts'
export function handlePairCreated(event: PairCreatedEvent): void {
  let entity = new PairCreated(
    event.params.pair
  )
  // const erc20 = new ethereum.SmartContractCall('ERC20', event.params.token0, 'symbol', 'symbol()', [])
  // entity.token0Symbol = ethereum.call(erc20)?.toString() || null

  OutswapV1Pair.create(event.params.pair);
  entity.token0 = event.params.token0
  entity.token1 = event.params.token1

  entity.pair = event.params.pair

  entity.save()
}
