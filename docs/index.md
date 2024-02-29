# Solidity API

## PikaMoon

_A simple ERC20 token contract that allows minting and burning of tokens._

### ecoSystemWallet

```solidity
address ecoSystemWallet
```

### marketingWallet

```solidity
address marketingWallet
```

### uniswapV2Pair

```solidity
address uniswapV2Pair
```

### isExcludeFromTax

```solidity
mapping(address => bool) isExcludeFromTax
```

### automatedMarketMakerPairs

```solidity
mapping(address => bool) automatedMarketMakerPairs
```

### marketingTax

```solidity
uint16 marketingTax
```

### ecosystemTax

```solidity
uint16 ecosystemTax
```

### burnTax

```solidity
uint16 burnTax
```

### feeMultiply

```solidity
uint32 feeMultiply
```

### isTaxEnabled

```solidity
bool isTaxEnabled
```

### SetAutomatedMarketMakerPair

```solidity
event SetAutomatedMarketMakerPair(address pair, bool value)
```

### constructor

```solidity
constructor() public
```

### initialize

```solidity
function initialize(string _name, string _symbol, uint256 _cap, address _ecosystemdevelopment, address _marketing) public
```

### _authorizeUpgrade

```solidity
function _authorizeUpgrade(address newImplementation) internal
```

_Function that should revert when `msg.sender` is not authorized to upgrade the contract. Called by
{upgradeToAndCall}.

Normally, this function will use an xref:access.adoc[access control] modifier such as {Ownable-onlyOwner}.

```solidity
function _authorizeUpgrade(address) internal onlyOwner {}
```_

### setAutomatedMarketMakerPair

```solidity
function setAutomatedMarketMakerPair(address pair, bool value) public
```

### decimals

```solidity
function decimals() public pure returns (uint8)
```

_Function to get decimals._

### mint

```solidity
function mint(address to, uint256 amount) external
```

_Function to mint new tokens and assign them to a specified address._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| to | address | The address to which the new tokens are minted. |
| amount | uint256 | The amount of tokens to be minted. |

### burn

```solidity
function burn(address owner, uint256 amount) external
```

_Function to burn existing tokens from a specified owner's balance._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| owner | address | The address from which the tokens are burned. |
| amount | uint256 | The amount of tokens to be burned. |

### changeFeeMultiply

```solidity
function changeFeeMultiply(uint32 _feeMultiply) external
```

_Function to change fee Multiply_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _feeMultiply | uint32 | The address to ecosystem wallet. |

### changeEcoSystemWallet

```solidity
function changeEcoSystemWallet(address _ecoSystemWallet) external
```

_Function to set ecosystem address._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _ecoSystemWallet | address | The address to ecosystem wallet. |

### changeMarketingWallet

```solidity
function changeMarketingWallet(address _marketing) external
```

_Function to set marketing address._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _marketing | address | The address to  marketing wallet. |

### excludeFromTax

```solidity
function excludeFromTax(address _user, bool _isExcludeFromTax) external
```

_Function to update isExcludeFromTax mapping to exclude or include From Tax_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _user | address | The address to be exclude or include From Tax |
| _isExcludeFromTax | bool | true or false |

### toggleTax

```solidity
function toggleTax() external
```

_Function to toggle tax_

### setMarketingTax

```solidity
function setMarketingTax(uint16 _marketingTax) external
```

_Function to set Marketing Tax_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _marketingTax | uint16 | tax value |

### setEcoSystemTax

```solidity
function setEcoSystemTax(uint16 _ecosystemTax) external
```

_Function to set EcoSystem Tax_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _ecosystemTax | uint16 | tax value |

### setBurnTax

```solidity
function setBurnTax(uint16 _burnTax) external
```

_Function to set burn Tax_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _burnTax | uint16 | tax value |

### transfer

```solidity
function transfer(address to, uint256 value) public returns (bool)
```

Pikamoon incorporates a small 2.5% transaction tax on Sell orders & Transfers.
There is NO buy Tax when purchasing $PIKA. The Pikamoon token is used to support our metaverse
and marketplace, therefore we want to reward hodlers of Pikamoon by punishing those leaving our ecosystem.
1% of the tax will go towards marketing, 1% towards the ecosystem development fund / P2E Rewards
and 0.5% burned forever!

_Moves a `value` amount of tokens from the caller's account to `to`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| to | address | The address to which the tokens are being transfered. |
| value | uint256 | The amount of tokens to be transfered. |

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 value) public returns (bool)
```

Pikamoon incorporates a small 2.5% transaction tax on Sell orders & Transfers.
There is NO buy Tax when purchasing $PIKA. The Pikamoon token is used to support our metaverse
and marketplace, therefore we want to reward hodlers of Pikamoon by punishing those leaving our ecosystem.
1% of the tax will go towards marketing, 1% towards the ecosystem development fund / P2E Rewards
and 0.5% burned forever!

_Moves a `value` amount of tokens from `from` to `to` using the
allowance mechanism. `value` is then deducted from the caller's
allowance._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| from | address | The address from which the tokens are being transfered. |
| to | address | The address to which the tokens are being transfered. |
| value | uint256 | The amount of tokens to be transfered. |

### calculateTax

```solidity
function calculateTax(address from, address to, uint256 value) public view returns (uint256 tax, uint256 burnAmount, uint256 marketingAmount, uint256 ecosystemAmount)
```

_Function to calculate the tax_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| from | address | address on which tax is applied |
| to | address | address on which tax is applied |
| value | uint256 | amount on which tax is calculated |

## IPikaMoon

### mint

```solidity
function mint(address to, uint256 amount) external
```

### burn

```solidity
function burn(address owner, uint256 amount) external
```

## IUniswapV2Router01

### factory

```solidity
function factory() external pure returns (address)
```

### WETH

```solidity
function WETH() external pure returns (address)
```

### addLiquidity

```solidity
function addLiquidity(address tokenA, address tokenB, uint256 amountADesired, uint256 amountBDesired, uint256 amountAMin, uint256 amountBMin, address to, uint256 deadline) external returns (uint256 amountA, uint256 amountB, uint256 liquidity)
```

### addLiquidityETH

```solidity
function addLiquidityETH(address token, uint256 amountTokenDesired, uint256 amountTokenMin, uint256 amountETHMin, address to, uint256 deadline) external payable returns (uint256 amountToken, uint256 amountETH, uint256 liquidity)
```

### removeLiquidity

```solidity
function removeLiquidity(address tokenA, address tokenB, uint256 liquidity, uint256 amountAMin, uint256 amountBMin, address to, uint256 deadline) external returns (uint256 amountA, uint256 amountB)
```

### removeLiquidityETH

```solidity
function removeLiquidityETH(address token, uint256 liquidity, uint256 amountTokenMin, uint256 amountETHMin, address to, uint256 deadline) external returns (uint256 amountToken, uint256 amountETH)
```

### removeLiquidityWithPermit

```solidity
function removeLiquidityWithPermit(address tokenA, address tokenB, uint256 liquidity, uint256 amountAMin, uint256 amountBMin, address to, uint256 deadline, bool approveMax, uint8 v, bytes32 r, bytes32 s) external returns (uint256 amountA, uint256 amountB)
```

### removeLiquidityETHWithPermit

```solidity
function removeLiquidityETHWithPermit(address token, uint256 liquidity, uint256 amountTokenMin, uint256 amountETHMin, address to, uint256 deadline, bool approveMax, uint8 v, bytes32 r, bytes32 s) external returns (uint256 amountToken, uint256 amountETH)
```

### swapExactTokensForTokens

```solidity
function swapExactTokensForTokens(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline) external returns (uint256[] amounts)
```

### swapTokensForExactTokens

```solidity
function swapTokensForExactTokens(uint256 amountOut, uint256 amountInMax, address[] path, address to, uint256 deadline) external returns (uint256[] amounts)
```

### swapExactETHForTokens

```solidity
function swapExactETHForTokens(uint256 amountOutMin, address[] path, address to, uint256 deadline) external payable returns (uint256[] amounts)
```

### swapTokensForExactETH

```solidity
function swapTokensForExactETH(uint256 amountOut, uint256 amountInMax, address[] path, address to, uint256 deadline) external returns (uint256[] amounts)
```

### swapExactTokensForETH

```solidity
function swapExactTokensForETH(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline) external returns (uint256[] amounts)
```

### swapETHForExactTokens

```solidity
function swapETHForExactTokens(uint256 amountOut, address[] path, address to, uint256 deadline) external payable returns (uint256[] amounts)
```

### quote

```solidity
function quote(uint256 amountA, uint256 reserveA, uint256 reserveB) external pure returns (uint256 amountB)
```

### getAmountOut

```solidity
function getAmountOut(uint256 amountIn, uint256 reserveIn, uint256 reserveOut) external pure returns (uint256 amountOut)
```

### getAmountIn

```solidity
function getAmountIn(uint256 amountOut, uint256 reserveIn, uint256 reserveOut) external pure returns (uint256 amountIn)
```

### getAmountsOut

```solidity
function getAmountsOut(uint256 amountIn, address[] path) external view returns (uint256[] amounts)
```

### getAmountsIn

```solidity
function getAmountsIn(uint256 amountOut, address[] path) external view returns (uint256[] amounts)
```

## IUniswapV2Router02

### removeLiquidityETHSupportingFeeOnTransferTokens

```solidity
function removeLiquidityETHSupportingFeeOnTransferTokens(address token, uint256 liquidity, uint256 amountTokenMin, uint256 amountETHMin, address to, uint256 deadline) external returns (uint256 amountETH)
```

### removeLiquidityETHWithPermitSupportingFeeOnTransferTokens

```solidity
function removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(address token, uint256 liquidity, uint256 amountTokenMin, uint256 amountETHMin, address to, uint256 deadline, bool approveMax, uint8 v, bytes32 r, bytes32 s) external returns (uint256 amountETH)
```

### swapExactTokensForTokensSupportingFeeOnTransferTokens

```solidity
function swapExactTokensForTokensSupportingFeeOnTransferTokens(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline) external
```

### swapExactETHForTokensSupportingFeeOnTransferTokens

```solidity
function swapExactETHForTokensSupportingFeeOnTransferTokens(uint256 amountOutMin, address[] path, address to, uint256 deadline) external payable
```

### swapExactTokensForETHSupportingFeeOnTransferTokens

```solidity
function swapExactTokensForETHSupportingFeeOnTransferTokens(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline) external
```

## IUniswapV2Factory

### PairCreated

```solidity
event PairCreated(address token0, address token1, address pair, uint256)
```

### feeTo

```solidity
function feeTo() external view returns (address)
```

### feeToSetter

```solidity
function feeToSetter() external view returns (address)
```

### getPair

```solidity
function getPair(address tokenA, address tokenB) external view returns (address pair)
```

### allPairs

```solidity
function allPairs(uint256) external view returns (address pair)
```

### allPairsLength

```solidity
function allPairsLength() external view returns (uint256)
```

### createPair

```solidity
function createPair(address tokenA, address tokenB) external returns (address pair)
```

### setFeeTo

```solidity
function setFeeTo(address) external
```

### setFeeToSetter

```solidity
function setFeeToSetter(address) external
```

## CommanErrors

_This smart contract defines custom errors that can be thrown during specific conditions in contracts._

### ZeroAmount

```solidity
error ZeroAmount()
```

### ZeroAddress

```solidity
error ZeroAddress()
```

### PairIsAlreadyGivenValue

```solidity
error PairIsAlreadyGivenValue()
```

## ClaimBonusPika

### merkleRoot

```solidity
bytes32 merkleRoot
```

### constructor

```solidity
constructor(address _token, bytes32 _merkleRoot) public
```

### claimBonusPika

```solidity
function claimBonusPika(uint256 _amount, bytes32[] _merkleProof) public payable
```

### updateMerkleRoot

```solidity
function updateMerkleRoot(bytes32 _merkleRoot) public
```

### withdrawTokens

```solidity
function withdrawTokens() external
```

## PikaStaking

### User

_Data structure representing token holder._

```solidity
struct User {
  uint256 pendingYield;
  uint256 totalWeight;
  uint256 yieldRewardsPerWeightPaid;
  struct Stake.Data[] stakes;
}
```

### yieldRewardsPerWeight

```solidity
uint256 yieldRewardsPerWeight
```

_Used to calculate yield rewards.
This value is different from "reward per token" used in flash pool.
Note: stakes are different in duration and "weight" reflects that._

### totalWeight

```solidity
uint256 totalWeight
```

_The yield is distributed proportionally to pool weights;
     total weight is here to help in determining the proportion._

### lastYieldDistribution

```solidity
uint256 lastYieldDistribution
```

_Timestamp of the last yield distribution event._

### poolToken

```solidity
address poolToken
```

_Link to the pool token instance, for example PIKA or PIKA/ETH pair._

### weight

```solidity
uint256 weight
```

you can lock your tokens for a period between 1 and 12 months. 
    This changes your token weight. By increasing the duration of your lock, 
    you will increase the token weight of the locked tokens. 
    The maximum weight of a locked token is 2 , 
    which occurs when you lock for a period of 12 months.
    
    @dev Pool weight, initial values are 200 for PIKA pool and 800 for PIKA/ETH.

### globalWeight

```solidity
uint256 globalWeight
```

_Used to calculate rewards, keeps track of the tokens weight locked in staking._

### poolTokenReserve

```solidity
uint256 poolTokenReserve
```

_total pool token reserve_

### pikaPerSecond

```solidity
uint192 pikaPerSecond
```

_PIKA/second determines yield farming reward base
     used by the yield pools controlled by the factory._

### secondsPerUpdate

```solidity
uint256 secondsPerUpdate
```

_PIKA/second decreases by 3% every seconds/update
     an update is triggered by executing `updatePIKAPerSecond` public function._

### endTime

```solidity
uint256 endTime
```

_End time is the last timestamp when PIKA/second can be decreased;
     it is implied that yield farming stops after that timestamp._

### lastRatioUpdate

```solidity
uint256 lastRatioUpdate
```

_Each time the PIKA/second ratio gets updated, the timestamp
     when the operation has occurred gets recorded into `lastRatioUpdate`.
This timestamp is then used to check if seconds/update `secondsPerUpdate`
     has passed when decreasing yield reward by 3%._

### users

```solidity
mapping(address => struct PikaStaking.User) users
```

_Token holder storage, maps token holder address to their data record._

### LogStake

```solidity
event LogStake(address by, address from, uint256 stakeId, uint256 value, uint256 lockUntil)
```

_Fired in _stake() and stakeAsPool() in PIKAPool contract._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| by | address | address that executed the stake function (user or pool) |
| from | address | token holder address, the tokens will be returned to that address |
| stakeId | uint256 | id of the new stake created |
| value | uint256 | value of tokens staked |
| lockUntil | uint256 | timestamp indicating when tokens should unlock (max 2 years) |

### LogUpdateRewards

```solidity
event LogUpdateRewards(address by, address from, uint256 yieldValue)
```

_Fired in `_updateRewards()`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| by | address | an address which processed the rewards (staker or PIKA pool contract            in case of a multiple claim call) |
| from | address | an address which received the yield |
| yieldValue | uint256 | value of yield processed |

### LogUnstakeLocked

```solidity
event LogUnstakeLocked(address to, uint256 stakeId, uint256 value)
```

_Fired in `unstakeLocked()`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| to | address | address receiving the tokens (user) |
| stakeId | uint256 | id value of the stake |
| value | uint256 | number of tokens unstaked |

### LogUpdatePikaPerSecond

```solidity
event LogUpdatePikaPerSecond(address by, uint256 newPIKAPerSecond)
```

_Fired in `updatePIKAPerSecond()`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| by | address | an address which executed an action |
| newPIKAPerSecond | uint256 | new PIKA/second value |

### LogSync

```solidity
event LogSync(address by, uint256 yieldRewardsPerWeight, uint256 lastYieldDistribution)
```

_Fired in `_sync()` and dependent functions (stake, unstake, etc.)._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| by | address | an address which performed an operation |
| yieldRewardsPerWeight | uint256 | updated yield rewards per weight value |
| lastYieldDistribution | uint256 | usually, current timestamp |

### LogUpdatePIKAPerSecond

```solidity
event LogUpdatePIKAPerSecond(address by, uint256 newPikaPerSecond)
```

_Fired in `updatePIKAPerSecond()`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| by | address | an address which executed an action |
| newPikaPerSecond | uint256 | new PIKA/second value |

### LogClaimYieldRewards

```solidity
event LogClaimYieldRewards(address by, address from, uint256 value)
```

_Fired in `_claimYieldRewards()`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| by | address | an address which claimed the rewards (staker or PIKA pool contract            in case of a multiple claim call) |
| from | address | an address which received the yield |
| value | uint256 | value of yield paid |

### LogSetEndTime

```solidity
event LogSetEndTime(address by, uint32 endTime)
```

_Fired in `setEndTime()`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| by | address | an address which executed the action |
| endTime | uint32 | new endTime value |

### LogChangePoolWeight

```solidity
event LogChangePoolWeight(address by, address poolAddress, uint256 weight)
```

_Fired in `changePoolWeight()`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| by | address | an address which executed an action |
| poolAddress | address | deployed pool instance address |
| weight | uint256 | new pool weight |

### constructor

```solidity
constructor(address _poolToken) public
```

### stake

```solidity
function stake(uint256 _value, uint256 _lockDuration) external
```

Stakes specified value of tokens for the specified value of time,
     and pays pending yield rewards if any.

_Requires value to stake and lock duration to be greater than zero._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _value | uint256 | value of tokens to stake |
| _lockDuration | uint256 | stake duration as unix timestamp |

### unstake

```solidity
function unstake(uint256 _stakeId, uint256 _value) external
```

_Unstakes a stake that has been previously locked, and is now in an unlocked
     state. Otherwise it transfers PIKA
     from the contract balance._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _stakeId | uint256 | stake ID to unstake from, zero-indexed |
| _value | uint256 | value of tokens to unstake |

### claimYieldRewards

```solidity
function claimYieldRewards() external
```

_claims all pending staking rewards._

### setEndTime

```solidity
function setEndTime(uint32 _endTime) external
```

_Updates yield generation ending timestamp._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _endTime | uint32 | new end time value to be stored |

### changePoolWeight

```solidity
function changePoolWeight(uint256 _weight) external
```

_Changes the weight of the pool;
     executed by the pool itself or by the factory owner._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _weight | uint256 | new weight value to set to |

### pause

```solidity
function pause(bool _shouldPause) external
```

_Set paused/unpaused state in the staking contract._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _shouldPause | bool | whether the contract should be paused/unpausd |

### updatePIKAPerSecond

```solidity
function updatePIKAPerSecond() public
```

Decreases PIKA/second reward by 3%, can be executed
     no more than once per `secondsPerUpdate` seconds.

### _sync

```solidity
function _sync() internal
```

_Used internally, mostly by children implementations, see `sync()`.

Updates smart contract state (`yieldRewardsPerWeight`, `lastYieldDistribution`),
     updates factory state via `updatePIKAPerSecond`_

### _updateReward

```solidity
function _updateReward(address _staker) internal
```

_Must be called every time user.totalWeight is changed.
Syncs the global pool state, processes the user pending rewards (if any),
     and updates check points values stored in the user struct.
If user is coming from v1 pool, it expects to receive this v1 user weight
     to include in rewards calculations._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _staker | address | user address |

### _now256

```solidity
function _now256() internal view returns (uint256)
```

### shouldUpdateRatio

```solidity
function shouldUpdateRatio() public view returns (bool)
```

_Verifies if `secondsPerUpdate` has passed since last PIKA/second
     ratio update and if PIKA/second reward can be decreased by 3%._

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if enough time has passed and `updatePIKAPerSecond` can be executed. |

### pendingRewards

```solidity
function pendingRewards(address _staker) external view returns (uint256 pendingYield)
```

Calculates current yield rewards value available for address specified.

_See `_pendingRewards()` for further details.

External `pendingRewards()` returns pendingYield and pendingRevDis
        accumulated with already stored user.pendingYield and user.pendingRevDis._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _staker | address | an address to calculate yield rewards value for |

### balanceOf

```solidity
function balanceOf(address _user) external view returns (uint256 balance)
```

Returns total staked token balance for the given address.
Expected to be called externally through `eth_call`. Gas shouldn't
        be an issue here.

_Loops through stakes and returns total balance._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _user | address | an address to query balance for |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| balance | uint256 | total staked token balance |

### getStakesLength

```solidity
function getStakesLength(address _user) external view returns (uint256)
```

Returns number of stakes for the given address. Allows iteration over stakes.

_See `getStake()`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _user | address | an address to query stake length for |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | number of stakes for the given address |

### getStake

```solidity
function getStake(address _user, uint256 _stakeId) external view returns (struct Stake.Data)
```

Returns information on the given stake for the given address.

_See getStakesLength._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _user | address | an address to query stake for |
| _stakeId | uint256 | zero-indexed stake ID for the address specified |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct Stake.Data | stake info as Stake structure |

## IPikaStaking

### stake

```solidity
function stake(uint256 _value, uint256 _lockDuration) external
```

### unstake

```solidity
function unstake(uint256 _stakeId, uint256 _value) external
```

### claimYieldRewards

```solidity
function claimYieldRewards() external
```

### setEndTime

```solidity
function setEndTime(uint32 _endTime) external
```

### changePoolWeight

```solidity
function changePoolWeight(uint256 _weight) external
```

### pause

```solidity
function pause(bool _shouldPause) external
```

### updatePIKAPerSecond

```solidity
function updatePIKAPerSecond() external
```

### shouldUpdateRatio

```solidity
function shouldUpdateRatio() external view returns (bool)
```

### pendingRewards

```solidity
function pendingRewards(address _staker) external view returns (uint256 pendingYield)
```

### balanceOf

```solidity
function balanceOf(address _user) external view returns (uint256 balance)
```

### getStakesLength

```solidity
function getStakesLength(address _user) external view returns (uint256)
```

### getStake

```solidity
function getStake(address _user, uint256 _stakeId) external view returns (struct Stake.Data)
```

## Stake

_Stake library used by PIKA pool and Uniswap LP Pool.

Responsible to manage weight calculation and store important constants
     related to stake period, base weight and multipliers utilized._

### Data

```solidity
struct Data {
  uint256 value;
  uint256 lockedFrom;
  uint256 lockedUntil;
}
```

### WEIGHT_MULTIPLIER

```solidity
uint256 WEIGHT_MULTIPLIER
```

_Stake weight is proportional to stake value and time locked, precisely
     "stake value wei multiplied by (fraction of the year locked plus one)".
To avoid significant precision loss due to multiplication by "fraction of the year" [0, 1],
     weight is stored multiplied by 1e6 constant, as an integer.
Corner case 1: if time locked is zero, weight is stake value multiplied by 1e6 + base weight
Corner case 2: if time locked is two years, division of
            (lockedUntil - lockedFrom) / MAX_STAKE_PERIOD is 1e6, and
     weight is a stake value multiplied by 2 * 1e6._

### BASE_WEIGHT

```solidity
uint256 BASE_WEIGHT
```

_Minimum weight value, if result of multiplication using WEIGHT_MULTIPLIER
     is 0 (e.g stake flexible), then BASE_WEIGHT is used._

### MIN_STAKE_PERIOD

```solidity
uint256 MIN_STAKE_PERIOD
```

_Minimum period that someone can lock a stake for._

### MAX_STAKE_PERIOD

```solidity
uint256 MAX_STAKE_PERIOD
```

_Maximum period that someone can lock a stake for._

### REWARD_PER_WEIGHT_MULTIPLIER

```solidity
uint256 REWARD_PER_WEIGHT_MULTIPLIER
```

_Rewards per weight are stored multiplied by 1e20 as uint._

### YIELD_STAKE_WEIGHT_MULTIPLIER

```solidity
uint256 YIELD_STAKE_WEIGHT_MULTIPLIER
```

_When we know beforehand that staking is done for yield instead of
     executing `weight()` function we use the following constant._

### weight

```solidity
function weight(struct Stake.Data _self) internal view returns (uint256)
```

### earned

```solidity
function earned(uint256 _weight, uint256 _rewardPerWeight, uint256 _rewardPerWeightPaid) internal pure returns (uint256)
```

_Converts stake weight (not to be mixed with the pool weight) to
     PIKA reward value, applying the 10^12 division on weight_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _weight | uint256 | stake weight |
| _rewardPerWeight | uint256 | PIKA reward per weight |
| _rewardPerWeightPaid | uint256 | last reward per weight value used for user earnings |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | reward value normalized to 10^12 |

### getRewardPerWeight

```solidity
function getRewardPerWeight(uint256 _reward, uint256 _globalWeight) internal pure returns (uint256)
```

_Converts reward PIKA value to stake weight (not to be mixed with the pool weight),
     applying the 10^12 multiplication on the reward.
     - OR -
Converts reward PIKA value to reward/weight if stake weight is supplied as second
     function parameter instead of reward/weight._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _reward | uint256 | yield reward |
| _globalWeight | uint256 | total weight in the pool |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | reward per weight value |

