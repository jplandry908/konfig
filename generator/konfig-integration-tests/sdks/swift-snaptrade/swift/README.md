<div align="center">

[![Visit SnapTrade](./header.png)](https://snaptrade.com)

# [SnapTrade](https://snaptrade.com)<a id="snaptrade"></a>

Connect brokerage accounts to your app for live positions and trading

[![CocoaPods](https://img.shields.io/badge/pod-v1.0.0-blue)](https://cocoapods.org/pods/SnapTrade)

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
  * [Swift Package Manager](#swift-package-manager)
  * [Carthage](#carthage)
  * [CocoaPods](#cocoapods)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`snaptrade.apiStatus.check`](#snaptradeapistatuscheck)
  * [`snaptrade.accountInformation.getAllUserHoldings`](#snaptradeaccountinformationgetalluserholdings)
  * [`snaptrade.accountInformation.getUserAccountBalance`](#snaptradeaccountinformationgetuseraccountbalance)
  * [`snaptrade.accountInformation.getUserAccountDetails`](#snaptradeaccountinformationgetuseraccountdetails)
  * [`snaptrade.accountInformation.getUserAccountOrders`](#snaptradeaccountinformationgetuseraccountorders)
  * [`snaptrade.accountInformation.getUserAccountPositions`](#snaptradeaccountinformationgetuseraccountpositions)
  * [`snaptrade.accountInformation.getUserHoldings`](#snaptradeaccountinformationgetuserholdings)
  * [`snaptrade.accountInformation.listUserAccounts`](#snaptradeaccountinformationlistuseraccounts)
  * [`snaptrade.accountInformation.updateUserAccount`](#snaptradeaccountinformationupdateuseraccount)
  * [`snaptrade.authentication.deleteSnapTradeUser`](#snaptradeauthenticationdeletesnaptradeuser)
  * [`snaptrade.authentication.getUserJWT`](#snaptradeauthenticationgetuserjwt)
  * [`snaptrade.authentication.listSnapTradeUsers`](#snaptradeauthenticationlistsnaptradeusers)
  * [`snaptrade.authentication.loginSnapTradeUser`](#snaptradeauthenticationloginsnaptradeuser)
  * [`snaptrade.authentication.registerSnapTradeUser`](#snaptradeauthenticationregistersnaptradeuser)
  * [`snaptrade.authentication.resetSnapTradeUserSecret`](#snaptradeauthenticationresetsnaptradeusersecret)
  * [`snaptrade.connections.detailBrokerageAuthorization`](#snaptradeconnectionsdetailbrokerageauthorization)
  * [`snaptrade.connections.listBrokerageAuthorizations`](#snaptradeconnectionslistbrokerageauthorizations)
  * [`snaptrade.connections.removeBrokerageAuthorization`](#snaptradeconnectionsremovebrokerageauthorization)
  * [`snaptrade.connections.sessionEvents`](#snaptradeconnectionssessionevents)
  * [`snaptrade.errorLogs.listUserErrors`](#snaptradeerrorlogslistusererrors)
  * [`snaptrade.options.getOptionStrategy`](#snaptradeoptionsgetoptionstrategy)
  * [`snaptrade.options.getOptionsChain`](#snaptradeoptionsgetoptionschain)
  * [`snaptrade.options.getOptionsStrategyQuote`](#snaptradeoptionsgetoptionsstrategyquote)
  * [`snaptrade.options.listOptionHoldings`](#snaptradeoptionslistoptionholdings)
  * [`snaptrade.options.placeOptionStrategy`](#snaptradeoptionsplaceoptionstrategy)
  * [`snaptrade.referenceData.getCurrencyExchangeRatePair`](#snaptradereferencedatagetcurrencyexchangeratepair)
  * [`snaptrade.referenceData.getPartnerInfo`](#snaptradereferencedatagetpartnerinfo)
  * [`snaptrade.referenceData.getSecurityTypes`](#snaptradereferencedatagetsecuritytypes)
  * [`snaptrade.referenceData.getStockExchanges`](#snaptradereferencedatagetstockexchanges)
  * [`snaptrade.referenceData.getSymbols`](#snaptradereferencedatagetsymbols)
  * [`snaptrade.referenceData.getSymbolsByTicker`](#snaptradereferencedatagetsymbolsbyticker)
  * [`snaptrade.referenceData.listAllBrokerageAuthorizationType`](#snaptradereferencedatalistallbrokerageauthorizationtype)
  * [`snaptrade.referenceData.listAllBrokerages`](#snaptradereferencedatalistallbrokerages)
  * [`snaptrade.referenceData.listAllCurrencies`](#snaptradereferencedatalistallcurrencies)
  * [`snaptrade.referenceData.listAllCurrenciesRates`](#snaptradereferencedatalistallcurrenciesrates)
  * [`snaptrade.referenceData.symbolSearchUserAccount`](#snaptradereferencedatasymbolsearchuseraccount)
  * [`snaptrade.trading.cancelUserAccountOrder`](#snaptradetradingcanceluseraccountorder)
  * [`snaptrade.trading.getOrderImpact`](#snaptradetradinggetorderimpact)
  * [`snaptrade.trading.getUserAccountQuotes`](#snaptradetradinggetuseraccountquotes)
  * [`snaptrade.trading.placeForceOrder`](#snaptradetradingplaceforceorder)
  * [`snaptrade.trading.placeOCOOrder`](#snaptradetradingplaceocoorder)
  * [`snaptrade.trading.placeOrder`](#snaptradetradingplaceorder)
  * [`snaptrade.transactionsAndReporting.getActivities`](#snaptradetransactionsandreportinggetactivities)
  * [`snaptrade.transactionsAndReporting.getReportingCustomRange`](#snaptradetransactionsandreportinggetreportingcustomrange)

<!-- tocstop -->

## Installation<a id="installation"></a>


### Swift Package Manager<a id="swift-package-manager"></a>

1. In Xcode, select *File > Add Packages…* and enter `https://github.com/passiv/snaptrade-sdks/tree/main/swift` as the repository URL.
1. Select the latest version number from our [tags page](https://github.com/passiv/snaptrade-sdks/tree/main/swift/tags).
1. Add the *SnapTrade* product to the [target of your app](https://developer.apple.com/documentation/swift_packages/adding_package_dependencies_to_your_app).

### Carthage<a id="carthage"></a>

1. Add this line to your `Cartfile`:
```shell
github "passiv/snaptrade-sdks/tree/main/swift"
```
2. Follow the [Carthage installation instructions](https://github.com/Carthage/Carthage#if-youre-building-for-ios-tvos-or-watchos).
3. In the future, to update to the latest version of the SDK, run the following command: `carthage update snaptrade-sdks/tree/main/swift`

### CocoaPods<a id="cocoapods"></a>

1. Add `source 'https://github.com/CocoaPods/Specs.git'` to your `Podfile`
2. Add `pod 'SnapTrade', '~> 1.0.0'` to your `Podfile`

Your `Podfile` should look like:
```ruby
# Podfile
source 'https://github.com/CocoaPods/Specs.git'

target 'Example' do
  pod 'SnapTrade', '~> 1.0.0'
end
```
3. Run `pod install`

```shell
❯ pod install
Analyzing dependencies
Downloading dependencies
Installing SnapTrade 1.0.0
Generating Pods project
Integrating client project
Pod installation complete! There is 1 dependency from the Podfile and 2 total pods installed.
```

4. In the future, to update to the latest version of the SDK, run: `pod update SnapTrade`

## Getting Started<a id="getting-started"></a>

```swift
import SnapTrade

let snaptrade = SnapTradeClient(
    // Defining the base path is optional and defaults to https://api.snaptrade.com/api/v1
    // basePath: "https://api.snaptrade.com/api/v1"
)

let checkResponse = try await snaptrade.apiStatus.check()
```

## Reference<a id="reference"></a>


### `snaptrade.apiStatus.check`<a id="snaptradeapistatuscheck"></a>

Check whether the API is operational and verify timestamps.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let checkResponse = try await snaptrade.apiStatus.check()
```

#### 🔄 Return<a id="🔄-return"></a>

[Status](./SnapTrade/Models/Status.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.accountInformation.getAllUserHoldings`<a id="snaptradeaccountinformationgetalluserholdings"></a>

List all accounts for the user, plus balances, positions, and orders for each account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let userId = "userId_example"
let userSecret = "userSecret_example"
let brokerageAuthorizations = UUID().uuidString
let getAllUserHoldingsResponse = try await snaptrade.accountInformation.getAllUserHoldings(
    userId: userId,
    userSecret: userSecret,
    brokerageAuthorizations: brokerageAuthorizations
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


##### brokerageAuthorizations: `String`<a id="brokerageauthorizations-string"></a>

Optional. Comma seperated list of authorization IDs (only use if filtering is needed on one or more authorizations).


#### 🔄 Return<a id="🔄-return"></a>

[AccountHoldings](./SnapTrade/Models/AccountHoldings.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/holdings` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.accountInformation.getUserAccountBalance`<a id="snaptradeaccountinformationgetuseraccountbalance"></a>

A list of account balances for the specified account (one per currency that the account holds).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let userId = "userId_example"
let userSecret = "userSecret_example"
let accountId = UUID().uuidString
let getUserAccountBalanceResponse = try await snaptrade.accountInformation.getUserAccountBalance(
    userId: userId,
    userSecret: userSecret,
    accountId: accountId
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


##### accountId: `String`<a id="accountid-string"></a>

The ID of the account to get balances.


#### 🔄 Return<a id="🔄-return"></a>

[Balance](./SnapTrade/Models/Balance.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/balances` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.accountInformation.getUserAccountDetails`<a id="snaptradeaccountinformationgetuseraccountdetails"></a>

Return details of a specific investment account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let userId = "userId_example"
let userSecret = "userSecret_example"
let accountId = UUID().uuidString
let getUserAccountDetailsResponse = try await snaptrade.accountInformation.getUserAccountDetails(
    userId: userId,
    userSecret: userSecret,
    accountId: accountId
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


##### accountId: `String`<a id="accountid-string"></a>

The ID of the account to get detail of.


#### 🔄 Return<a id="🔄-return"></a>

[Account](./SnapTrade/Models/Account.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.accountInformation.getUserAccountOrders`<a id="snaptradeaccountinformationgetuseraccountorders"></a>

Fetch all recent orders from a user's account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let userId = "userId_example"
let userSecret = "userSecret_example"
let accountId = UUID().uuidString
let state = "state_example"
let days = 987
let getUserAccountOrdersResponse = try await snaptrade.accountInformation.getUserAccountOrders(
    userId: userId,
    userSecret: userSecret,
    accountId: accountId,
    state: state,
    days: days
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


##### accountId: `String`<a id="accountid-string"></a>

The ID of the account to get orders.


##### state: `String`<a id="state-string"></a>

defaults value is set to \"all\"


##### days: `Int`<a id="days-int"></a>

Number of days in the past to fetch the most recent orders. Defaults to the last 90 days if no value is passed in.


#### 🔄 Return<a id="🔄-return"></a>

[AccountOrderRecord](./SnapTrade/Models/AccountOrderRecord.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/orders` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.accountInformation.getUserAccountPositions`<a id="snaptradeaccountinformationgetuseraccountpositions"></a>

List account positions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let userId = "userId_example"
let userSecret = "userSecret_example"
let accountId = UUID().uuidString
let getUserAccountPositionsResponse = try await snaptrade.accountInformation.getUserAccountPositions(
    userId: userId,
    userSecret: userSecret,
    accountId: accountId
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


##### accountId: `String`<a id="accountid-string"></a>

The ID of the account to get positions.


#### 🔄 Return<a id="🔄-return"></a>

[Position](./SnapTrade/Models/Position.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/positions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.accountInformation.getUserHoldings`<a id="snaptradeaccountinformationgetuserholdings"></a>

List balances, positions and orders for the specified account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let accountId = UUID().uuidString
let userId = "userId_example"
let userSecret = "userSecret_example"
let getUserHoldingsResponse = try await snaptrade.accountInformation.getUserHoldings(
    accountId: accountId,
    userId: userId,
    userSecret: userSecret
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `String`<a id="accountid-string"></a>

The ID of the account to fetch holdings for.


##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


#### 🔄 Return<a id="🔄-return"></a>

[AccountHoldingsAccount](./SnapTrade/Models/AccountHoldingsAccount.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/holdings` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.accountInformation.listUserAccounts`<a id="snaptradeaccountinformationlistuseraccounts"></a>

List accounts

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let userId = "userId_example"
let userSecret = "userSecret_example"
let listUserAccountsResponse = try await snaptrade.accountInformation.listUserAccounts(
    userId: userId,
    userSecret: userSecret
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


#### 🔄 Return<a id="🔄-return"></a>

[Account](./SnapTrade/Models/Account.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.accountInformation.updateUserAccount`<a id="snaptradeaccountinformationupdateuseraccount"></a>

Update details of an investment account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let userId = "userId_example"
let userSecret = "userSecret_example"
let accountId = UUID().uuidString
let updateUserAccountResponse = try await snaptrade.accountInformation.updateUserAccount(
    userId: userId,
    userSecret: userSecret,
    accountId: accountId
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


##### accountId: `String`<a id="accountid-string"></a>

The ID of the account to update.


#### 🔄 Return<a id="🔄-return"></a>

[Account](./SnapTrade/Models/Account.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.authentication.deleteSnapTradeUser`<a id="snaptradeauthenticationdeletesnaptradeuser"></a>

Deletes a user you've registered over the SnapTrade API, and any data associated with them or their investment accounts.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let userId = "userId_example"
let deleteSnapTradeUserResponse = try await snaptrade.authentication.deleteSnapTradeUser(
    userId: userId
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>


#### 🔄 Return<a id="🔄-return"></a>

[DeleteUserResponse](./SnapTrade/Models/DeleteUserResponse.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/snapTrade/deleteUser` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.authentication.getUserJWT`<a id="snaptradeauthenticationgetuserjwt"></a>

Generate encrypted JWT token

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let userId = "userId_example"
let userSecret = "userSecret_example"
let getUserJWTResponse = try await snaptrade.authentication.getUserJWT(
    userId: userId,
    userSecret: userSecret
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


#### 🔄 Return<a id="🔄-return"></a>

[EncryptedResponse](./SnapTrade/Models/EncryptedResponse.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/snapTrade/encryptedJWT` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.authentication.listSnapTradeUsers`<a id="snaptradeauthenticationlistsnaptradeusers"></a>

Returns a list of users you've registered over the SnapTrade API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let listSnapTradeUsersResponse = try await snaptrade.authentication.listSnapTradeUsers()
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/snapTrade/listUsers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.authentication.loginSnapTradeUser`<a id="snaptradeauthenticationloginsnaptradeuser"></a>

Logs in a SnapTrade user and returns an authenticated connection portal URL for them to use to connect a brokerage account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let userId = "userId_example"
let userSecret = "userSecret_example"
let broker = "broker_example"
let immediateRedirect = true
let customRedirect = "customRedirect_example"
let reconnect = "reconnect_example"
let connectionType = "connectionType_example"
let connectionPortalVersion = "connectionPortalVersion_example"
let loginSnapTradeUserResponse = try await snaptrade.authentication.loginSnapTradeUser(
    userId: userId,
    userSecret: userSecret,
    broker: broker,
    immediateRedirect: immediateRedirect,
    customRedirect: customRedirect,
    reconnect: reconnect,
    connectionType: connectionType,
    connectionPortalVersion: connectionPortalVersion
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


##### broker: `String`<a id="broker-string"></a>

Slug of the brokerage to connect the user to


##### immediateRedirect: `Bool`<a id="immediateredirect-bool"></a>

When set to True, user will be redirected back to the partner's site instead of the connection portal


##### customRedirect: `String`<a id="customredirect-string"></a>

URL to redirect the user to after the user connects their brokerage account


##### reconnect: `String`<a id="reconnect-string"></a>

The UUID of the brokerage connection to be reconnected. This parameter should be left empty unless you are reconnecting a disabled connection. See ‘Reconnecting Accounts’ for more information.


##### connectionType: `String`<a id="connectiontype-string"></a>

Sets whether the connection should be read or trade


##### connectionPortalVersion: `String`<a id="connectionportalversion-string"></a>

Sets the version of the connection portal to render, with a default to 'v2'


#### 🔄 Return<a id="🔄-return"></a>

[AuthenticationLoginSnapTradeUser200Response](./SnapTrade/Models/AuthenticationLoginSnapTradeUser200Response.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/snapTrade/login` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.authentication.registerSnapTradeUser`<a id="snaptradeauthenticationregistersnaptradeuser"></a>

Create SnapTrade user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let userId = "userId_example"
let registerSnapTradeUserResponse = try await snaptrade.authentication.registerSnapTradeUser(
    userId: userId
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>

SnapTrade User ID. Provided by SnapTrade Partner. Can be any string, as long as it's unique to a user


#### 🔄 Return<a id="🔄-return"></a>

[UserIDandSecret](./SnapTrade/Models/UserIDandSecret.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/snapTrade/registerUser` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.authentication.resetSnapTradeUserSecret`<a id="snaptradeauthenticationresetsnaptradeusersecret"></a>

Obtain a new user secret for a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let userId = "userId_example"
let userSecret = "userSecret_example"
let resetSnapTradeUserSecretResponse = try await snaptrade.authentication.resetSnapTradeUserSecret(
    userId: userId,
    userSecret: userSecret
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>

SnapTrade User ID. Provided by SnapTrade Partner. Can be any string, as long as it's unique to a user


##### userSecret: `String`<a id="usersecret-string"></a>

SnapTrade User Secret randomly generated by SnapTrade. This should be considered priviledged information and if compromised, you should delete and re-create this SnapTrade user.


#### 🔄 Return<a id="🔄-return"></a>

[UserIDandSecret](./SnapTrade/Models/UserIDandSecret.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/snapTrade/resetUserSecret` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.connections.detailBrokerageAuthorization`<a id="snaptradeconnectionsdetailbrokerageauthorization"></a>

Get brokerage authorization details

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let authorizationId = UUID().uuidString
let userId = "userId_example"
let userSecret = "userSecret_example"
let detailBrokerageAuthorizationResponse = try await snaptrade.connections.detailBrokerageAuthorization(
    authorizationId: authorizationId,
    userId: userId,
    userSecret: userSecret
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorizationId: `String`<a id="authorizationid-string"></a>

The ID of a brokerage authorization object.


##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


#### 🔄 Return<a id="🔄-return"></a>

[BrokerageAuthorization](./SnapTrade/Models/BrokerageAuthorization.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/authorizations/{authorizationId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.connections.listBrokerageAuthorizations`<a id="snaptradeconnectionslistbrokerageauthorizations"></a>

List all brokerage authorizations for the user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let userId = "userId_example"
let userSecret = "userSecret_example"
let listBrokerageAuthorizationsResponse = try await snaptrade.connections.listBrokerageAuthorizations(
    userId: userId,
    userSecret: userSecret
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


#### 🔄 Return<a id="🔄-return"></a>

[BrokerageAuthorization](./SnapTrade/Models/BrokerageAuthorization.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/authorizations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.connections.removeBrokerageAuthorization`<a id="snaptradeconnectionsremovebrokerageauthorization"></a>

Delete brokerage authorization

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let authorizationId = UUID().uuidString
let userId = "userId_example"
let userSecret = "userSecret_example"
let removeBrokerageAuthorizationResponse = try await snaptrade.connections.removeBrokerageAuthorization(
    authorizationId: authorizationId,
    userId: userId,
    userSecret: userSecret
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorizationId: `String`<a id="authorizationid-string"></a>

The ID of the Authorization to delete.


##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/authorizations/{authorizationId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.connections.sessionEvents`<a id="snaptradeconnectionssessionevents"></a>

List all session events for the partner

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let partnerClientId = "partnerClientId_example"
let userId = "userId_example"
let sessionId = "sessionId_example"
let sessionEventsResponse = try await snaptrade.connections.sessionEvents(
    partnerClientId: partnerClientId,
    userId: userId,
    sessionId: sessionId
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### partnerClientId: `String`<a id="partnerclientid-string"></a>


##### userId: `String`<a id="userid-string"></a>

Optional comma seperated list of user IDs used to filter the request on specific users


##### sessionId: `String`<a id="sessionid-string"></a>

Optional comma seperated list of session IDs used to filter the request on specific users


#### 🔄 Return<a id="🔄-return"></a>

[ConnectionsSessionEvents200ResponseInner](./SnapTrade/Models/ConnectionsSessionEvents200ResponseInner.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sessionEvents` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.errorLogs.listUserErrors`<a id="snaptradeerrorlogslistusererrors"></a>

Retrieve error logs on behalf of your SnapTrade users

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let userId = "userId_example"
let userSecret = "userSecret_example"
let listUserErrorsResponse = try await snaptrade.errorLogs.listUserErrors(
    userId: userId,
    userSecret: userSecret
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


#### 🔄 Return<a id="🔄-return"></a>

[UserErrorLog](./SnapTrade/Models/UserErrorLog.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/snapTrade/listUserErrors` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.options.getOptionStrategy`<a id="snaptradeoptionsgetoptionstrategy"></a>

Creates an option strategy object that will be used to place an option strategy order

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let underlyingSymbolId = "underlyingSymbolId_example"
let legs = [
OptionLeg(
    action: "action_example",
    optionSymbolId: "optionSymbolId_example",
    quantity: 123
)
]
let strategyType = "strategyType_example"
let userId = "userId_example"
let userSecret = "userSecret_example"
let accountId = UUID().uuidString
let getOptionStrategyResponse = try await snaptrade.options.getOptionStrategy(
    underlyingSymbolId: underlyingSymbolId,
    legs: legs,
    strategyType: strategyType,
    userId: userId,
    userSecret: userSecret,
    accountId: accountId
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### underlying_symbol_id: `String`<a id="underlying_symbol_id-string"></a>


##### legs: `[OptionLeg]`<a id="legs-optionleg"></a>


##### strategy_type: `String`<a id="strategy_type-string"></a>


##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


##### accountId: `String`<a id="accountid-string"></a>

The ID of the account to create the option strategy object in.


#### 🔄 Return<a id="🔄-return"></a>

[StrategyQuotes](./SnapTrade/Models/StrategyQuotes.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/optionStrategy` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.options.getOptionsChain`<a id="snaptradeoptionsgetoptionschain"></a>

Get the options chain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let userId = "userId_example"
let userSecret = "userSecret_example"
let accountId = UUID().uuidString
let symbol = UUID().uuidString
let getOptionsChainResponse = try await snaptrade.options.getOptionsChain(
    userId: userId,
    userSecret: userSecret,
    accountId: accountId,
    symbol: symbol
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


##### accountId: `String`<a id="accountid-string"></a>

The ID of the account to get the options chain from.


##### symbol: `String`<a id="symbol-string"></a>

Universal symbol ID if symbol


#### 🔄 Return<a id="🔄-return"></a>

[OptionChainInner](./SnapTrade/Models/OptionChainInner.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/optionsChain` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.options.getOptionsStrategyQuote`<a id="snaptradeoptionsgetoptionsstrategyquote"></a>

Get latest market data of option strategy

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let userId = "userId_example"
let userSecret = "userSecret_example"
let accountId = UUID().uuidString
let optionStrategyId = UUID().uuidString
let getOptionsStrategyQuoteResponse = try await snaptrade.options.getOptionsStrategyQuote(
    userId: userId,
    userSecret: userSecret,
    accountId: accountId,
    optionStrategyId: optionStrategyId
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


##### accountId: `String`<a id="accountid-string"></a>

The ID of the account the strategy will be placed in.


##### optionStrategyId: `String`<a id="optionstrategyid-string"></a>

Option strategy id obtained from response when creating option strategy object


#### 🔄 Return<a id="🔄-return"></a>

[StrategyQuotes](./SnapTrade/Models/StrategyQuotes.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/optionStrategy/{optionStrategyId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.options.listOptionHoldings`<a id="snaptradeoptionslistoptionholdings"></a>

Get the options holdings in the account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let userId = "userId_example"
let userSecret = "userSecret_example"
let accountId = UUID().uuidString
let listOptionHoldingsResponse = try await snaptrade.options.listOptionHoldings(
    userId: userId,
    userSecret: userSecret,
    accountId: accountId
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


##### accountId: `String`<a id="accountid-string"></a>

The ID of the account to fetch options holdings for.


#### 🔄 Return<a id="🔄-return"></a>

[OptionsPosition](./SnapTrade/Models/OptionsPosition.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/options` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.options.placeOptionStrategy`<a id="snaptradeoptionsplaceoptionstrategy"></a>

Place an option strategy order on the brokerage

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let orderType = OrderType(
    
)
let timeInForce = TimeInForceStrict(
    
)
let userId = "userId_example"
let userSecret = "userSecret_example"
let accountId = UUID().uuidString
let optionStrategyId = UUID().uuidString
let price = 987
let placeOptionStrategyResponse = try await snaptrade.options.placeOptionStrategy(
    orderType: orderType,
    timeInForce: timeInForce,
    userId: userId,
    userSecret: userSecret,
    accountId: accountId,
    optionStrategyId: optionStrategyId,
    price: price
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### order_type: `OrderType`<a id="order_type-ordertype"></a>


##### time_in_force: `TimeInForceStrict`<a id="time_in_force-timeinforcestrict"></a>


##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


##### accountId: `String`<a id="accountid-string"></a>

The ID of the account to execute the strategy in.


##### optionStrategyId: `String`<a id="optionstrategyid-string"></a>

Option strategy id obtained from response when creating option strategy object


##### price: `Double`<a id="price-double"></a>

Trade Price if limit or stop limit order


#### 🔄 Return<a id="🔄-return"></a>

[StrategyOrderRecord](./SnapTrade/Models/StrategyOrderRecord.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/optionStrategy/{optionStrategyId}/execute` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.referenceData.getCurrencyExchangeRatePair`<a id="snaptradereferencedatagetcurrencyexchangeratepair"></a>

Return the exchange rate of a currency pair

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let currencyPair = "currencyPair_example"
let getCurrencyExchangeRatePairResponse = try await snaptrade.referenceData.getCurrencyExchangeRatePair(
    currencyPair: currencyPair
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### currencyPair: `String`<a id="currencypair-string"></a>

A currency pair based on currency code for example, {CAD-USD}


#### 🔄 Return<a id="🔄-return"></a>

[ExchangeRatePairs](./SnapTrade/Models/ExchangeRatePairs.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/currencies/rates/{currencyPair}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.referenceData.getPartnerInfo`<a id="snaptradereferencedatagetpartnerinfo"></a>

Get metadata related to Snaptrade partner

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let getPartnerInfoResponse = try await snaptrade.referenceData.getPartnerInfo()
```

#### 🔄 Return<a id="🔄-return"></a>

[PartnerData](./SnapTrade/Models/PartnerData.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/snapTrade/partners` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.referenceData.getSecurityTypes`<a id="snaptradereferencedatagetsecuritytypes"></a>

List security types available on SnapTrade.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let getSecurityTypesResponse = try await snaptrade.referenceData.getSecurityTypes()
```

#### 🔄 Return<a id="🔄-return"></a>

[SecurityType](./SnapTrade/Models/SecurityType.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/securityTypes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.referenceData.getStockExchanges`<a id="snaptradereferencedatagetstockexchanges"></a>

List exchanges

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let getStockExchangesResponse = try await snaptrade.referenceData.getStockExchanges()
```

#### 🔄 Return<a id="🔄-return"></a>

[Exchange](./SnapTrade/Models/Exchange.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/exchanges` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.referenceData.getSymbols`<a id="snaptradereferencedatagetsymbols"></a>

Search for symbols

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let substring = "substring_example"
let getSymbolsResponse = try await snaptrade.referenceData.getSymbols(
    substring: substring
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### substring: `String`<a id="substring-string"></a>


#### 🔄 Return<a id="🔄-return"></a>

[UniversalSymbol](./SnapTrade/Models/UniversalSymbol.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/symbols` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.referenceData.getSymbolsByTicker`<a id="snaptradereferencedatagetsymbolsbyticker"></a>

Get details of a symbol by the ticker or the universal_symbol_id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let query = "query_example"
let getSymbolsByTickerResponse = try await snaptrade.referenceData.getSymbolsByTicker(
    query: query
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### query: `String`<a id="query-string"></a>

The ticker or universal_symbol_id of the UniversalSymbol to get.


#### 🔄 Return<a id="🔄-return"></a>

[UniversalSymbol](./SnapTrade/Models/UniversalSymbol.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/symbols/{query}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.referenceData.listAllBrokerageAuthorizationType`<a id="snaptradereferencedatalistallbrokerageauthorizationtype"></a>

List of all brokerage authorization types

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let brokerage = "brokerage_example"
let listAllBrokerageAuthorizationTypeResponse = try await snaptrade.referenceData.listAllBrokerageAuthorizationType(
    brokerage: brokerage
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### brokerage: `String`<a id="brokerage-string"></a>

Comma separated value of brokerage slugs


#### 🔄 Return<a id="🔄-return"></a>

[BrokerageAuthorizationTypeReadOnly](./SnapTrade/Models/BrokerageAuthorizationTypeReadOnly.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/brokerageAuthorizationTypes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.referenceData.listAllBrokerages`<a id="snaptradereferencedatalistallbrokerages"></a>

List brokerages

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let listAllBrokeragesResponse = try await snaptrade.referenceData.listAllBrokerages()
```

#### 🔄 Return<a id="🔄-return"></a>

[Brokerage](./SnapTrade/Models/Brokerage.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/brokerages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.referenceData.listAllCurrencies`<a id="snaptradereferencedatalistallcurrencies"></a>

List currencies

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let listAllCurrenciesResponse = try await snaptrade.referenceData.listAllCurrencies()
```

#### 🔄 Return<a id="🔄-return"></a>

[Currency](./SnapTrade/Models/Currency.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/currencies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.referenceData.listAllCurrenciesRates`<a id="snaptradereferencedatalistallcurrenciesrates"></a>

List currency exchange rates

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let listAllCurrenciesRatesResponse = try await snaptrade.referenceData.listAllCurrenciesRates()
```

#### 🔄 Return<a id="🔄-return"></a>

[ExchangeRatePairs](./SnapTrade/Models/ExchangeRatePairs.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/currencies/rates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.referenceData.symbolSearchUserAccount`<a id="snaptradereferencedatasymbolsearchuseraccount"></a>

Search for symbols available in an account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let userId = "userId_example"
let userSecret = "userSecret_example"
let accountId = UUID().uuidString
let substring = "substring_example"
let symbolSearchUserAccountResponse = try await snaptrade.referenceData.symbolSearchUserAccount(
    userId: userId,
    userSecret: userSecret,
    accountId: accountId,
    substring: substring
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


##### accountId: `String`<a id="accountid-string"></a>

The ID of the account to search for symbols within.


##### substring: `String`<a id="substring-string"></a>


#### 🔄 Return<a id="🔄-return"></a>

[UniversalSymbol](./SnapTrade/Models/UniversalSymbol.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/symbols` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.trading.cancelUserAccountOrder`<a id="snaptradetradingcanceluseraccountorder"></a>

Cancel open order in account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let userId = "userId_example"
let userSecret = "userSecret_example"
let accountId = UUID().uuidString
let brokerageOrderId = "brokerageOrderId_example"
let cancelUserAccountOrderResponse = try await snaptrade.trading.cancelUserAccountOrder(
    userId: userId,
    userSecret: userSecret,
    accountId: accountId,
    brokerageOrderId: brokerageOrderId
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


##### accountId: `String`<a id="accountid-string"></a>

The ID of the account to cancel the order in.


##### brokerage_order_id: `String`<a id="brokerage_order_id-string"></a>


#### 🔄 Return<a id="🔄-return"></a>

[AccountOrderRecord](./SnapTrade/Models/AccountOrderRecord.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/orders/cancel` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.trading.getOrderImpact`<a id="snaptradetradinggetorderimpact"></a>

Check impact of trades on account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let userId = "userId_example"
let userSecret = "userSecret_example"
let accountId = "accountId_example"
let action = Action(
    
)
let orderType = OrderType(
    
)
let price = 987
let stop = 987
let timeInForce = TimeInForceStrict(
    
)
let units = 
let universalSymbolId = "universalSymbolId_example"
let notionalValue = 
let getOrderImpactResponse = try await snaptrade.trading.getOrderImpact(
    userId: userId,
    userSecret: userSecret,
    accountId: accountId,
    action: action,
    orderType: orderType,
    price: price,
    stop: stop,
    timeInForce: timeInForce,
    units: units,
    universalSymbolId: universalSymbolId,
    notionalValue: notionalValue
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


##### account_id: `String`<a id="account_id-string"></a>


##### action: `Action`<a id="action-action"></a>


##### order_type: `OrderType`<a id="order_type-ordertype"></a>


##### price: `Double`<a id="price-double"></a>

Trade Price if limit or stop limit order


##### stop: `Double`<a id="stop-double"></a>

Stop Price. If stop loss or stop limit order, the price to trigger the stop


##### time_in_force: `TimeInForceStrict`<a id="time_in_force-timeinforcestrict"></a>


##### units: [`Double`](./SnapTrade/Models/ModelDouble.swift)<a id="units-doublesnaptrademodelsmodeldoubleswift"></a>


##### universal_symbol_id: `String`<a id="universal_symbol_id-string"></a>


##### notional_value: [`Double`](./SnapTrade/Models/ModelDouble.swift)<a id="notional_value-doublesnaptrademodelsmodeldoubleswift"></a>


#### 🔄 Return<a id="🔄-return"></a>

[ManualTradeAndImpact](./SnapTrade/Models/ManualTradeAndImpact.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/trade/impact` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.trading.getUserAccountQuotes`<a id="snaptradetradinggetuseraccountquotes"></a>

Get symbol quotes

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let userId = "userId_example"
let userSecret = "userSecret_example"
let symbols = "symbols_example"
let accountId = "accountId_example"
let useTicker = true
let getUserAccountQuotesResponse = try await snaptrade.trading.getUserAccountQuotes(
    userId: userId,
    userSecret: userSecret,
    symbols: symbols,
    accountId: accountId,
    useTicker: useTicker
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


##### symbols: `String`<a id="symbols-string"></a>

List of universal_symbol_id or tickers to get quotes for.


##### accountId: `String`<a id="accountid-string"></a>

The ID of the account to get quotes.


##### useTicker: `Bool`<a id="useticker-bool"></a>

Should be set to True if providing tickers.


#### 🔄 Return<a id="🔄-return"></a>

[SymbolsQuotesInner](./SnapTrade/Models/SymbolsQuotesInner.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/quotes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.trading.placeForceOrder`<a id="snaptradetradingplaceforceorder"></a>

Place a trade with NO validation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let userId = "userId_example"
let userSecret = "userSecret_example"
let accountId = "accountId_example"
let action = Action(
    
)
let orderType = OrderType(
    
)
let price = 987
let stop = 987
let timeInForce = TimeInForceStrict(
    
)
let units = 
let universalSymbolId = "universalSymbolId_example"
let notionalValue = 
let placeForceOrderResponse = try await snaptrade.trading.placeForceOrder(
    userId: userId,
    userSecret: userSecret,
    accountId: accountId,
    action: action,
    orderType: orderType,
    price: price,
    stop: stop,
    timeInForce: timeInForce,
    units: units,
    universalSymbolId: universalSymbolId,
    notionalValue: notionalValue
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


##### account_id: `String`<a id="account_id-string"></a>


##### action: `Action`<a id="action-action"></a>


##### order_type: `OrderType`<a id="order_type-ordertype"></a>


##### price: `Double`<a id="price-double"></a>

Trade Price if limit or stop limit order


##### stop: `Double`<a id="stop-double"></a>

Stop Price. If stop loss or stop limit order, the price to trigger the stop


##### time_in_force: `TimeInForceStrict`<a id="time_in_force-timeinforcestrict"></a>


##### units: [`Double`](./SnapTrade/Models/ModelDouble.swift)<a id="units-doublesnaptrademodelsmodeldoubleswift"></a>


##### universal_symbol_id: `String`<a id="universal_symbol_id-string"></a>


##### notional_value: [`Double`](./SnapTrade/Models/ModelDouble.swift)<a id="notional_value-doublesnaptrademodelsmodeldoubleswift"></a>


#### 🔄 Return<a id="🔄-return"></a>

[AccountOrderRecord](./SnapTrade/Models/AccountOrderRecord.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/trade/place` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.trading.placeOCOOrder`<a id="snaptradetradingplaceocoorder"></a>

Place a OCO (One Cancels Other) order

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let userId = "userId_example"
let userSecret = "userSecret_example"
let firstTradeId = TODO
let secondTradeId = TODO
let placeOCOOrderResponse = try await snaptrade.trading.placeOCOOrder(
    userId: userId,
    userSecret: userSecret,
    firstTradeId: firstTradeId,
    secondTradeId: secondTradeId
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


##### first_trade_id: `AnyCodable`<a id="first_trade_id-anycodable"></a>

The ID of first trade object obtained from trade/impact endpoint


##### second_trade_id: `AnyCodable`<a id="second_trade_id-anycodable"></a>

The ID of second trade object obtained from trade/impact endpoint


#### 🔄 Return<a id="🔄-return"></a>

[AccountOrderRecord](./SnapTrade/Models/AccountOrderRecord.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/trade/oco` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.trading.placeOrder`<a id="snaptradetradingplaceorder"></a>

Place order

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let tradeId = UUID().uuidString
let userId = "userId_example"
let userSecret = "userSecret_example"
let placeOrderResponse = try await snaptrade.trading.placeOrder(
    tradeId: tradeId,
    userId: userId,
    userSecret: userSecret
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tradeId: `String`<a id="tradeid-string"></a>

The ID of trade object obtained from trade/impact endpoint


##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


#### 🔄 Return<a id="🔄-return"></a>

[AccountOrderRecord](./SnapTrade/Models/AccountOrderRecord.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/trade/{tradeId}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.transactionsAndReporting.getActivities`<a id="snaptradetransactionsandreportinggetactivities"></a>

Returns activities (transactions) for a user. Specifying start and end date is highly recommended for better performance

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let userId = "userId_example"
let userSecret = "userSecret_example"
let startDate = "startDate_example"
let endDate = "endDate_example"
let accounts = "accounts_example"
let brokerageAuthorizations = "brokerageAuthorizations_example"
let type = "type_example"
let getActivitiesResponse = try await snaptrade.transactionsAndReporting.getActivities(
    userId: userId,
    userSecret: userSecret,
    startDate: startDate,
    endDate: endDate,
    accounts: accounts,
    brokerageAuthorizations: brokerageAuthorizations,
    type: type
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


##### startDate: `String`<a id="startdate-string"></a>


##### endDate: `String`<a id="enddate-string"></a>


##### accounts: `String`<a id="accounts-string"></a>

Optional comma seperated list of account IDs used to filter the request on specific accounts


##### brokerageAuthorizations: `String`<a id="brokerageauthorizations-string"></a>

Optional comma seperated list of brokerage authorization IDs used to filter the request on only accounts that belong to those authorizations


##### type: `String`<a id="type-string"></a>

Optional comma seperated list of types to filter activities by. This is not an exhaustive list, if we fail to match to these types, we will return the raw description from the brokerage. Potential values include - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT


#### 🔄 Return<a id="🔄-return"></a>

[UniversalActivity](./SnapTrade/Models/UniversalActivity.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/activities` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.transactionsAndReporting.getReportingCustomRange`<a id="snaptradetransactionsandreportinggetreportingcustomrange"></a>

Returns performance information (contributions, dividends, rate of return, etc) for a specific timeframe. Please note that Total Equity Timeframe and Rate of Returns are experimental features. Please contact support@snaptrade.com if you notice any inconsistencies.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```swift
let startDate = "startDate_example"
let endDate = "endDate_example"
let userId = "userId_example"
let userSecret = "userSecret_example"
let accounts = "accounts_example"
let detailed = true
let frequency = "frequency_example"
let getReportingCustomRangeResponse = try await snaptrade.transactionsAndReporting.getReportingCustomRange(
    startDate: startDate,
    endDate: endDate,
    userId: userId,
    userSecret: userSecret,
    accounts: accounts,
    detailed: detailed,
    frequency: frequency
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### startDate: `String`<a id="startdate-string"></a>


##### endDate: `String`<a id="enddate-string"></a>


##### userId: `String`<a id="userid-string"></a>


##### userSecret: `String`<a id="usersecret-string"></a>


##### accounts: `String`<a id="accounts-string"></a>

Optional comma seperated list of account IDs used to filter the request on specific accounts


##### detailed: `Bool`<a id="detailed-bool"></a>

Optional, increases frequency of data points for the total value and contribution charts if set to true


##### frequency: `String`<a id="frequency-string"></a>

Optional frequency for the rate of return chart (defaults to monthly). Possible values are daily, weekly, monthly, quarterly, yearly.


#### 🔄 Return<a id="🔄-return"></a>

[PerformanceCustom](./SnapTrade/Models/PerformanceCustom.swift)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/performance/custom` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---



## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)