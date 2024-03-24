import { PairCreated as PairCreatedEvent } from "../generated/OutswapV1Factory/OutswapV1Factory"
import { PairCreated } from "../generated/schema"
import { OutswapV1Pair } from "../generated/templates"

export function handlePairCreated(event: PairCreatedEvent): void {
  let entity = new PairCreated(
    event.params.pair
  )
  OutswapV1Pair.create(event.params.pair);
  entity.token0 = event.params.token0
  entity.token1 = event.params.token1
  entity.pair = event.params.pair

  entity.save()
}
