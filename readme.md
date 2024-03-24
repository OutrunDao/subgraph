build
- yarn codegen && yarn build

deploy
- yarn deploy

deploy key
- graph auth --studio 34f6aecd249d50fb6ce74658db8ba37e

索引

- OutswapV1Factory
  - PairCreated(indexed address,indexed address,address,uint256)

- OutswapV1Pair
  -  Mint(indexed address,indexed address,uint256,uint256) 
  -  Burn(indexed address,uint256,uint256,indexed address)