<div align="center">

[![Visit SnapTrade](./header.png)](https://snaptrade.com)

# [SnapTrade](https://snaptrade.com)<a id="snaptrade"></a>

Connect brokerage accounts to your app for live positions and trading

[![npm](https://img.shields.io/badge/gem-v2.0.4-blue)](https://rubygems.org/gems/snaptrade/versions/2.0.4)
[![More Info](https://img.shields.io/badge/More%20Info-Click%20Here-orange)](https://snaptrade.com/)

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Raw HTTP Response](#raw-http-response)
- [Reference](#reference)
  * [`snaptrade.account_information.get_all_user_holdings`](#snaptradeaccount_informationget_all_user_holdings)
  * [`snaptrade.account_information.get_user_account_balance`](#snaptradeaccount_informationget_user_account_balance)
  * [`snaptrade.account_information.get_user_account_details`](#snaptradeaccount_informationget_user_account_details)
  * [`snaptrade.account_information.get_user_account_orders`](#snaptradeaccount_informationget_user_account_orders)
  * [`snaptrade.account_information.get_user_account_positions`](#snaptradeaccount_informationget_user_account_positions)
  * [`snaptrade.account_information.get_user_holdings`](#snaptradeaccount_informationget_user_holdings)
  * [`snaptrade.account_information.list_user_accounts`](#snaptradeaccount_informationlist_user_accounts)
  * [`snaptrade.account_information.update_user_account`](#snaptradeaccount_informationupdate_user_account)
  * [`snaptrade.api_status.check`](#snaptradeapi_statuscheck)
  * [`snaptrade.authentication.delete_snap_trade_user`](#snaptradeauthenticationdelete_snap_trade_user)
  * [`snaptrade.authentication.get_user_jwt`](#snaptradeauthenticationget_user_jwt)
  * [`snaptrade.authentication.list_snap_trade_users`](#snaptradeauthenticationlist_snap_trade_users)
  * [`snaptrade.authentication.login_snap_trade_user`](#snaptradeauthenticationlogin_snap_trade_user)
  * [`snaptrade.authentication.register_snap_trade_user`](#snaptradeauthenticationregister_snap_trade_user)
  * [`snaptrade.authentication.reset_snap_trade_user_secret`](#snaptradeauthenticationreset_snap_trade_user_secret)
  * [`snaptrade.connections.detail_brokerage_authorization`](#snaptradeconnectionsdetail_brokerage_authorization)
  * [`snaptrade.connections.list_brokerage_authorizations`](#snaptradeconnectionslist_brokerage_authorizations)
  * [`snaptrade.connections.remove_brokerage_authorization`](#snaptradeconnectionsremove_brokerage_authorization)
  * [`snaptrade.connections.session_events`](#snaptradeconnectionssession_events)
  * [`snaptrade.error_logs.list_user_errors`](#snaptradeerror_logslist_user_errors)
  * [`snaptrade.options.get_option_strategy`](#snaptradeoptionsget_option_strategy)
  * [`snaptrade.options.get_options_chain`](#snaptradeoptionsget_options_chain)
  * [`snaptrade.options.get_options_strategy_quote`](#snaptradeoptionsget_options_strategy_quote)
  * [`snaptrade.options.list_option_holdings`](#snaptradeoptionslist_option_holdings)
  * [`snaptrade.options.place_option_strategy`](#snaptradeoptionsplace_option_strategy)
  * [`snaptrade.reference_data.get_currency_exchange_rate_pair`](#snaptradereference_dataget_currency_exchange_rate_pair)
  * [`snaptrade.reference_data.get_partner_info`](#snaptradereference_dataget_partner_info)
  * [`snaptrade.reference_data.get_security_types`](#snaptradereference_dataget_security_types)
  * [`snaptrade.reference_data.get_stock_exchanges`](#snaptradereference_dataget_stock_exchanges)
  * [`snaptrade.reference_data.get_symbols`](#snaptradereference_dataget_symbols)
  * [`snaptrade.reference_data.get_symbols_by_ticker`](#snaptradereference_dataget_symbols_by_ticker)
  * [`snaptrade.reference_data.list_all_brokerage_authorization_type`](#snaptradereference_datalist_all_brokerage_authorization_type)
  * [`snaptrade.reference_data.list_all_brokerages`](#snaptradereference_datalist_all_brokerages)
  * [`snaptrade.reference_data.list_all_currencies`](#snaptradereference_datalist_all_currencies)
  * [`snaptrade.reference_data.list_all_currencies_rates`](#snaptradereference_datalist_all_currencies_rates)
  * [`snaptrade.reference_data.symbol_search_user_account`](#snaptradereference_datasymbol_search_user_account)
  * [`snaptrade.trading.cancel_user_account_order`](#snaptradetradingcancel_user_account_order)
  * [`snaptrade.trading.get_order_impact`](#snaptradetradingget_order_impact)
  * [`snaptrade.trading.get_user_account_quotes`](#snaptradetradingget_user_account_quotes)
  * [`snaptrade.trading.place_force_order`](#snaptradetradingplace_force_order)
  * [`snaptrade.trading.place_oco_order`](#snaptradetradingplace_oco_order)
  * [`snaptrade.trading.place_order`](#snaptradetradingplace_order)
  * [`snaptrade.transactions_and_reporting.get_activities`](#snaptradetransactions_and_reportingget_activities)
  * [`snaptrade.transactions_and_reporting.get_reporting_custom_range`](#snaptradetransactions_and_reportingget_reporting_custom_range)

<!-- tocstop -->

## Installation<a id="installation"></a>

Add to Gemfile:

```ruby
gem 'snaptrade', '~> 2.0.4'
```

## Getting Started<a id="getting-started"></a>

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"
result = snaptrade.account_information.get_all_user_holdings(
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
  brokerage_authorizations: "917c8734-8470-4a3e-a18f-57c3f2ee6631",
)
p result
```

## Raw HTTP Response<a id="raw-http-response"></a>

To access the raw HTTP response, suffix any method with `_with_http_info`.

```ruby
result = snaptrade.account_information.get_all_user_holdings_with_http_info(
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
  brokerage_authorizations: "917c8734-8470-4a3e-a18f-57c3f2ee6631",
)
p result[0] # [Array<AccountHoldings>] Deserialized data
p.result[1] # [Integer] HTTP status code
p.result[2] # [Hash] HTTP headers
p.result[3] # [Faraday::Response] Raw HTTP response
```

## Reference<a id="reference"></a>


### `snaptrade.account_information.get_all_user_holdings`<a id="snaptradeaccount_informationget_all_user_holdings"></a>

List all accounts for the user, plus balances, positions, and orders for each account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.account_information.get_all_user_holdings(
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
  brokerage_authorizations: "917c8734-8470-4a3e-a18f-57c3f2ee6631",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
##### brokerage_authorizations: `String`<a id="brokerage_authorizations-string"></a>
Optional. Comma seperated list of authorization IDs (only use if filtering is
needed on one or more authorizations).

#### 🔄 Return<a id="🔄-return"></a>

[AccountHoldings](./lib/snaptrade/models/account_holdings.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/holdings` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.account_information.get_user_account_balance`<a id="snaptradeaccount_informationget_user_account_balance"></a>

A list of account balances for the specified account (one per currency that the account holds).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.account_information.get_user_account_balance(
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
  account_id: "accountId_example",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
##### account_id: `String`<a id="account_id-string"></a>
The ID of the account to get balances.

#### 🔄 Return<a id="🔄-return"></a>

[Balance](./lib/snaptrade/models/balance.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/balances` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.account_information.get_user_account_details`<a id="snaptradeaccount_informationget_user_account_details"></a>

Return details of a specific investment account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.account_information.get_user_account_details(
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
  account_id: "accountId_example",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
##### account_id: `String`<a id="account_id-string"></a>
The ID of the account to get detail of.

#### 🔄 Return<a id="🔄-return"></a>

[Account](./lib/snaptrade/models/account.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.account_information.get_user_account_orders`<a id="snaptradeaccount_informationget_user_account_orders"></a>

Fetch all recent orders from a user's account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.account_information.get_user_account_orders(
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
  account_id: "accountId_example",
  state: "all",
  days: 30,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
##### account_id: `String`<a id="account_id-string"></a>
The ID of the account to get orders.

##### state: `String`<a id="state-string"></a>
defaults value is set to \"all\"

##### days: `Integer`<a id="days-integer"></a>
Number of days in the past to fetch the most recent orders. Defaults to the last
90 days if no value is passed in.

#### 🔄 Return<a id="🔄-return"></a>

[AccountOrderRecord](./lib/snaptrade/models/account_order_record.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/orders` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.account_information.get_user_account_positions`<a id="snaptradeaccount_informationget_user_account_positions"></a>

List account positions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.account_information.get_user_account_positions(
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
  account_id: "accountId_example",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
##### account_id: `String`<a id="account_id-string"></a>
The ID of the account to get positions.

#### 🔄 Return<a id="🔄-return"></a>

[Position](./lib/snaptrade/models/position.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/positions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.account_information.get_user_holdings`<a id="snaptradeaccount_informationget_user_holdings"></a>

List balances, positions and orders for the specified account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.account_information.get_user_holdings(
  account_id: "917c8734-8470-4a3e-a18f-57c3f2ee6631",
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### account_id: `String`<a id="account_id-string"></a>
The ID of the account to fetch holdings for.

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
#### 🔄 Return<a id="🔄-return"></a>

[AccountHoldingsAccount](./lib/snaptrade/models/account_holdings_account.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/holdings` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.account_information.list_user_accounts`<a id="snaptradeaccount_informationlist_user_accounts"></a>

List accounts

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.account_information.list_user_accounts(
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
#### 🔄 Return<a id="🔄-return"></a>

[Account](./lib/snaptrade/models/account.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.account_information.update_user_account`<a id="snaptradeaccount_informationupdate_user_account"></a>

Update details of an investment account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.account_information.update_user_account(
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
  account_id: "accountId_example",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
##### account_id: `String`<a id="account_id-string"></a>
The ID of the account to update.

#### 🔄 Return<a id="🔄-return"></a>

[Account](./lib/snaptrade/models/account.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.api_status.check`<a id="snaptradeapi_statuscheck"></a>

Check whether the API is operational and verify timestamps.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.api_status.check
p result
```

#### 🔄 Return<a id="🔄-return"></a>

[Status](./lib/snaptrade/models/status.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.authentication.delete_snap_trade_user`<a id="snaptradeauthenticationdelete_snap_trade_user"></a>

Deletes a user you've registered over the SnapTrade API, and any data associated with them or their investment accounts.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.authentication.delete_snap_trade_user(
  user_id: "John.doe@snaptrade.com",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `String`<a id="user_id-string"></a>
#### 🔄 Return<a id="🔄-return"></a>

[DeleteUserResponse](./lib/snaptrade/models/delete_user_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/snapTrade/deleteUser` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.authentication.get_user_jwt`<a id="snaptradeauthenticationget_user_jwt"></a>

Generate encrypted JWT token

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.authentication.get_user_jwt(
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
#### 🔄 Return<a id="🔄-return"></a>

[EncryptedResponse](./lib/snaptrade/models/encrypted_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/snapTrade/encryptedJWT` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.authentication.list_snap_trade_users`<a id="snaptradeauthenticationlist_snap_trade_users"></a>

Returns a list of users you've registered over the SnapTrade API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.authentication.list_snap_trade_users
p result
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/snapTrade/listUsers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.authentication.login_snap_trade_user`<a id="snaptradeauthenticationlogin_snap_trade_user"></a>

Logs in a SnapTrade user and returns an authenticated connection portal URL for them to use to connect a brokerage account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.authentication.login_snap_trade_user(
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
  broker: "ALPACA",
  immediate_redirect: true,
  custom_redirect: "https://snaptrade.com",
  reconnect: "8b5f262d-4bb9-365d-888a-202bd3b15fa1",
  connection_type: "read",
  connection_portal_version: "v2",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
##### broker: `String`<a id="broker-string"></a>
Slug of the brokerage to connect the user to

##### immediateRedirect: `Boolean`<a id="immediateredirect-boolean"></a>
When set to True, user will be redirected back to the partner's site instead of
the connection portal

##### customRedirect: `String`<a id="customredirect-string"></a>
URL to redirect the user to after the user connects their brokerage account

##### reconnect: `String`<a id="reconnect-string"></a>
The UUID of the brokerage connection to be reconnected. This parameter should be
left empty unless you are reconnecting a disabled connection. See ‘Reconnecting
Accounts’ for more information.

##### connectionType: [`ConnectionType`](./lib/snaptrade/models/connection_type.rb)<a id="connectiontype-connectiontypelibsnaptrademodelsconnection_typerb"></a>
Sets whether the connection should be read or trade

##### connectionPortalVersion: [`ConnectionPortalVersion`](./lib/snaptrade/models/connection_portal_version.rb)<a id="connectionportalversion-connectionportalversionlibsnaptrademodelsconnection_portal_versionrb"></a>
Sets the version of the connection portal to render, with a default to 'v2'

#### 🔄 Return<a id="🔄-return"></a>

[AuthenticationLoginSnapTradeUser200Response](./lib/snaptrade/models/authentication_login_snap_trade_user200_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/snapTrade/login` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.authentication.register_snap_trade_user`<a id="snaptradeauthenticationregister_snap_trade_user"></a>

Create SnapTrade user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.authentication.register_snap_trade_user(
  user_id: "snaptrade-user-123",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>
SnapTrade User ID. Provided by SnapTrade Partner. Can be any string, as long as
it's unique to a user

#### 🔄 Return<a id="🔄-return"></a>

[UserIDandSecret](./lib/snaptrade/models/user_i_dand_secret.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/snapTrade/registerUser` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.authentication.reset_snap_trade_user_secret`<a id="snaptradeauthenticationreset_snap_trade_user_secret"></a>

Obtain a new user secret for a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.authentication.reset_snap_trade_user_secret(
  user_id: "snaptrade-user-123",
  user_secret: "h81@cx1lkalablakwjaltkejraj11=",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `String`<a id="userid-string"></a>
SnapTrade User ID. Provided by SnapTrade Partner. Can be any string, as long as
it's unique to a user

##### userSecret: `String`<a id="usersecret-string"></a>
SnapTrade User Secret randomly generated by SnapTrade. This should be considered
priviledged information and if compromised, you should delete and re-create this
SnapTrade user.

#### 🔄 Return<a id="🔄-return"></a>

[UserIDandSecret](./lib/snaptrade/models/user_i_dand_secret.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/snapTrade/resetUserSecret` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.connections.detail_brokerage_authorization`<a id="snaptradeconnectionsdetail_brokerage_authorization"></a>

Get brokerage authorization details

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.connections.detail_brokerage_authorization(
  authorization_id: "2bcd7cc3-e922-4976-bce1-9858296801c3",
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization_id: `String`<a id="authorization_id-string"></a>
The ID of a brokerage authorization object.

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
#### 🔄 Return<a id="🔄-return"></a>

[BrokerageAuthorization](./lib/snaptrade/models/brokerage_authorization.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/authorizations/{authorizationId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.connections.list_brokerage_authorizations`<a id="snaptradeconnectionslist_brokerage_authorizations"></a>

List all brokerage authorizations for the user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.connections.list_brokerage_authorizations(
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
#### 🔄 Return<a id="🔄-return"></a>

[BrokerageAuthorization](./lib/snaptrade/models/brokerage_authorization.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/authorizations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.connections.remove_brokerage_authorization`<a id="snaptradeconnectionsremove_brokerage_authorization"></a>

Delete brokerage authorization

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
snaptrade.connections.remove_brokerage_authorization(
  authorization_id: "2bcd7cc3-e922-4976-bce1-9858296801c3",
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization_id: `String`<a id="authorization_id-string"></a>
The ID of the Authorization to delete.

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/authorizations/{authorizationId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.connections.session_events`<a id="snaptradeconnectionssession_events"></a>

List all session events for the partner

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.connections.session_events(
  partner_client_id: "SNAPTRADETEST",
  user_id: "917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2",
  session_id: "917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### partner_client_id: `String`<a id="partner_client_id-string"></a>
##### user_id: `String`<a id="user_id-string"></a>
Optional comma seperated list of user IDs used to filter the request on specific
users

##### session_id: `String`<a id="session_id-string"></a>
Optional comma seperated list of session IDs used to filter the request on
specific users

#### 🔄 Return<a id="🔄-return"></a>

[ConnectionsSessionEvents200ResponseInner](./lib/snaptrade/models/connections_session_events200_response_inner.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sessionEvents` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.error_logs.list_user_errors`<a id="snaptradeerror_logslist_user_errors"></a>

Retrieve error logs on behalf of your SnapTrade users

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.error_logs.list_user_errors(
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
#### 🔄 Return<a id="🔄-return"></a>

[UserErrorLog](./lib/snaptrade/models/user_error_log.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/snapTrade/listUserErrors` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.options.get_option_strategy`<a id="snaptradeoptionsget_option_strategy"></a>

Creates an option strategy object that will be used to place an option strategy order

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.options.get_option_strategy(
  underlying_symbol_id: "2bcd7cc3-e922-4976-bce1-9858296801c3",
  legs: [
        {
            "action" => "BUY_TO_OPEN",
            "option_symbol_id" => "SPY220819P00200000",
            "quantity" => 1,
        }
    ],
  strategy_type: "CUSTOM",
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
  account_id: "accountId_example",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### underlying_symbol_id: `String`<a id="underlying_symbol_id-string"></a>
##### legs: Array<[`OptionLeg`](./lib/snaptrade/models/option_leg.rb)><a id="legs-array"></a>
##### strategy_type: [`StrategyType`](./lib/snaptrade/models/strategy_type.rb)<a id="strategy_type-strategytypelibsnaptrademodelsstrategy_typerb"></a>
##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
##### account_id: `String`<a id="account_id-string"></a>
The ID of the account to create the option strategy object in.

#### 🔄 Return<a id="🔄-return"></a>

[StrategyQuotes](./lib/snaptrade/models/strategy_quotes.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/optionStrategy` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.options.get_options_chain`<a id="snaptradeoptionsget_options_chain"></a>

Get the options chain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.options.get_options_chain(
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
  account_id: "accountId_example",
  symbol: "symbol_example",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
##### account_id: `String`<a id="account_id-string"></a>
The ID of the account to get the options chain from.

##### symbol: `String`<a id="symbol-string"></a>
Universal symbol ID if symbol

#### 🔄 Return<a id="🔄-return"></a>

[OptionChainInner](./lib/snaptrade/models/option_chain_inner.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/optionsChain` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.options.get_options_strategy_quote`<a id="snaptradeoptionsget_options_strategy_quote"></a>

Get latest market data of option strategy

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.options.get_options_strategy_quote(
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
  account_id: "accountId_example",
  option_strategy_id: "2bcd7cc3-e922-4976-bce1-9858296801c3",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
##### account_id: `String`<a id="account_id-string"></a>
The ID of the account the strategy will be placed in.

##### option_strategy_id: `String`<a id="option_strategy_id-string"></a>
Option strategy id obtained from response when creating option strategy object

#### 🔄 Return<a id="🔄-return"></a>

[StrategyQuotes](./lib/snaptrade/models/strategy_quotes.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/optionStrategy/{optionStrategyId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.options.list_option_holdings`<a id="snaptradeoptionslist_option_holdings"></a>

Get the options holdings in the account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.options.list_option_holdings(
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
  account_id: "accountId_example",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
##### account_id: `String`<a id="account_id-string"></a>
The ID of the account to fetch options holdings for.

#### 🔄 Return<a id="🔄-return"></a>

[OptionsPosition](./lib/snaptrade/models/options_position.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/options` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.options.place_option_strategy`<a id="snaptradeoptionsplace_option_strategy"></a>

Place an option strategy order on the brokerage

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.options.place_option_strategy(
  order_type: "Limit",
  time_in_force: "FOK",
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
  account_id: "2bcd7cc3-e922-4976-bce1-9858296801c3",
  option_strategy_id: "2bcd7cc3-e922-4976-bce1-9858296801c3",
  price: 31.33,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### order_type: [`OrderType`](./lib/snaptrade/models/order_type.rb)<a id="order_type-ordertypelibsnaptrademodelsorder_typerb"></a>
Order Type

##### time_in_force: [`TimeInForceStrict`](./lib/snaptrade/models/time_in_force_strict.rb)<a id="time_in_force-timeinforcestrictlibsnaptrademodelstime_in_force_strictrb"></a>
Trade time in force examples: * FOK - Fill Or Kill * Day - Day * GTC - Good Til
Canceled

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
##### account_id: `String`<a id="account_id-string"></a>
The ID of the account to execute the strategy in.

##### option_strategy_id: `String`<a id="option_strategy_id-string"></a>
Option strategy id obtained from response when creating option strategy object

##### price: `Float`<a id="price-float"></a>
Trade Price if limit or stop limit order

#### 🔄 Return<a id="🔄-return"></a>

[StrategyOrderRecord](./lib/snaptrade/models/strategy_order_record.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/optionStrategy/{optionStrategyId}/execute` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.reference_data.get_currency_exchange_rate_pair`<a id="snaptradereference_dataget_currency_exchange_rate_pair"></a>

Return the exchange rate of a currency pair

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.reference_data.get_currency_exchange_rate_pair(
  currency_pair: "currencyPair_example",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### currency_pair: `String`<a id="currency_pair-string"></a>
A currency pair based on currency code for example, {CAD-USD}

#### 🔄 Return<a id="🔄-return"></a>

[ExchangeRatePairs](./lib/snaptrade/models/exchange_rate_pairs.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/currencies/rates/{currencyPair}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.reference_data.get_partner_info`<a id="snaptradereference_dataget_partner_info"></a>

Get metadata related to Snaptrade partner

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.reference_data.get_partner_info
p result
```

#### 🔄 Return<a id="🔄-return"></a>

[PartnerData](./lib/snaptrade/models/partner_data.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/snapTrade/partners` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.reference_data.get_security_types`<a id="snaptradereference_dataget_security_types"></a>

List security types available on SnapTrade.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.reference_data.get_security_types
p result
```

#### 🔄 Return<a id="🔄-return"></a>

[SecurityType](./lib/snaptrade/models/security_type.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/securityTypes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.reference_data.get_stock_exchanges`<a id="snaptradereference_dataget_stock_exchanges"></a>

List exchanges

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.reference_data.get_stock_exchanges
p result
```

#### 🔄 Return<a id="🔄-return"></a>

[Exchange](./lib/snaptrade/models/exchange.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/exchanges` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.reference_data.get_symbols`<a id="snaptradereference_dataget_symbols"></a>

Search for symbols

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.reference_data.get_symbols(
  substring: "apple",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### substring: `String`<a id="substring-string"></a>
#### 🔄 Return<a id="🔄-return"></a>

[UniversalSymbol](./lib/snaptrade/models/universal_symbol.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/symbols` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.reference_data.get_symbols_by_ticker`<a id="snaptradereference_dataget_symbols_by_ticker"></a>

Get details of a symbol by the ticker or the universal_symbol_id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.reference_data.get_symbols_by_ticker(
  query: "query_example",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### query: `String`<a id="query-string"></a>
The ticker or universal_symbol_id of the UniversalSymbol to get.

#### 🔄 Return<a id="🔄-return"></a>

[UniversalSymbol](./lib/snaptrade/models/universal_symbol.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/symbols/{query}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.reference_data.list_all_brokerage_authorization_type`<a id="snaptradereference_datalist_all_brokerage_authorization_type"></a>

List of all brokerage authorization types

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.reference_data.list_all_brokerage_authorization_type(
  brokerage: "QUESTRADE,ALPACA",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### brokerage: `String`<a id="brokerage-string"></a>
Comma separated value of brokerage slugs

#### 🔄 Return<a id="🔄-return"></a>

[BrokerageAuthorizationTypeReadOnly](./lib/snaptrade/models/brokerage_authorization_type_read_only.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/brokerageAuthorizationTypes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.reference_data.list_all_brokerages`<a id="snaptradereference_datalist_all_brokerages"></a>

List brokerages

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.reference_data.list_all_brokerages
p result
```

#### 🔄 Return<a id="🔄-return"></a>

[Brokerage](./lib/snaptrade/models/brokerage.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/brokerages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.reference_data.list_all_currencies`<a id="snaptradereference_datalist_all_currencies"></a>

List currencies

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.reference_data.list_all_currencies
p result
```

#### 🔄 Return<a id="🔄-return"></a>

[Currency](./lib/snaptrade/models/currency.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/currencies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.reference_data.list_all_currencies_rates`<a id="snaptradereference_datalist_all_currencies_rates"></a>

List currency exchange rates

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.reference_data.list_all_currencies_rates
p result
```

#### 🔄 Return<a id="🔄-return"></a>

[ExchangeRatePairs](./lib/snaptrade/models/exchange_rate_pairs.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/currencies/rates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.reference_data.symbol_search_user_account`<a id="snaptradereference_datasymbol_search_user_account"></a>

Search for symbols available in an account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.reference_data.symbol_search_user_account(
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
  account_id: "accountId_example",
  substring: "apple",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
##### account_id: `String`<a id="account_id-string"></a>
The ID of the account to search for symbols within.

##### substring: `String`<a id="substring-string"></a>
#### 🔄 Return<a id="🔄-return"></a>

[UniversalSymbol](./lib/snaptrade/models/universal_symbol.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/symbols` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.trading.cancel_user_account_order`<a id="snaptradetradingcancel_user_account_order"></a>

Cancel open order in account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.trading.cancel_user_account_order(
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
  account_id: "accountId_example",
  brokerage_order_id: "2bcd7cc3-e922-4976-bce1-9858296801c3",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
##### account_id: `String`<a id="account_id-string"></a>
The ID of the account to cancel the order in.

##### brokerage_order_id: `String`<a id="brokerage_order_id-string"></a>
#### 🔄 Return<a id="🔄-return"></a>

[AccountOrderRecord](./lib/snaptrade/models/account_order_record.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/orders/cancel` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.trading.get_order_impact`<a id="snaptradetradingget_order_impact"></a>

Check impact of trades on account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.trading.get_order_impact(
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
  account_id: "2bcd7cc3-e922-4976-bce1-9858296801c3",
  action: "BUY",
  order_type: "Limit",
  price: 31.33,
  stop: 31.33,
  time_in_force: "FOK",
  units: 3.14,
  universal_symbol_id: "2bcd7cc3-e922-4976-bce1-9858296801c3",
  notional_value: 100,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
##### account_id: `String`<a id="account_id-string"></a>
##### action: [`Action`](./lib/snaptrade/models/action.rb)<a id="action-actionlibsnaptrademodelsactionrb"></a>
Trade Action

##### order_type: [`OrderType`](./lib/snaptrade/models/order_type.rb)<a id="order_type-ordertypelibsnaptrademodelsorder_typerb"></a>
Order Type

##### price: `Float`<a id="price-float"></a>
Trade Price if limit or stop limit order

##### stop: `Float`<a id="stop-float"></a>
Stop Price. If stop loss or stop limit order, the price to trigger the stop

##### time_in_force: [`TimeInForceStrict`](./lib/snaptrade/models/time_in_force_strict.rb)<a id="time_in_force-timeinforcestrictlibsnaptrademodelstime_in_force_strictrb"></a>
Trade time in force examples: * FOK - Fill Or Kill * Day - Day * GTC - Good Til
Canceled

##### units: [`Float`](./lib/snaptrade/models/float.rb)<a id="units-floatlibsnaptrademodelsfloatrb"></a>
##### universal_symbol_id: `String`<a id="universal_symbol_id-string"></a>
##### notional_value: [`Float`](./lib/snaptrade/models/float.rb)<a id="notional_value-floatlibsnaptrademodelsfloatrb"></a>
#### 🔄 Return<a id="🔄-return"></a>

[ManualTradeAndImpact](./lib/snaptrade/models/manual_trade_and_impact.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/trade/impact` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.trading.get_user_account_quotes`<a id="snaptradetradingget_user_account_quotes"></a>

Get symbol quotes

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.trading.get_user_account_quotes(
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
  symbols: "symbols_example",
  account_id: "accountId_example",
  use_ticker: true,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
##### symbols: `String`<a id="symbols-string"></a>
List of universal_symbol_id or tickers to get quotes for.

##### account_id: `String`<a id="account_id-string"></a>
The ID of the account to get quotes.

##### use_ticker: `Boolean`<a id="use_ticker-boolean"></a>
Should be set to True if providing tickers.

#### 🔄 Return<a id="🔄-return"></a>

[SymbolsQuotesInner](./lib/snaptrade/models/symbols_quotes_inner.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/quotes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.trading.place_force_order`<a id="snaptradetradingplace_force_order"></a>

Place a trade with NO validation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.trading.place_force_order(
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
  account_id: "2bcd7cc3-e922-4976-bce1-9858296801c3",
  action: "BUY",
  order_type: "Limit",
  price: 31.33,
  stop: 31.33,
  time_in_force: "FOK",
  units: 3.14,
  universal_symbol_id: "2bcd7cc3-e922-4976-bce1-9858296801c3",
  notional_value: 100,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
##### account_id: `String`<a id="account_id-string"></a>
##### action: [`Action`](./lib/snaptrade/models/action.rb)<a id="action-actionlibsnaptrademodelsactionrb"></a>
Trade Action

##### order_type: [`OrderType`](./lib/snaptrade/models/order_type.rb)<a id="order_type-ordertypelibsnaptrademodelsorder_typerb"></a>
Order Type

##### price: `Float`<a id="price-float"></a>
Trade Price if limit or stop limit order

##### stop: `Float`<a id="stop-float"></a>
Stop Price. If stop loss or stop limit order, the price to trigger the stop

##### time_in_force: [`TimeInForceStrict`](./lib/snaptrade/models/time_in_force_strict.rb)<a id="time_in_force-timeinforcestrictlibsnaptrademodelstime_in_force_strictrb"></a>
Trade time in force examples: * FOK - Fill Or Kill * Day - Day * GTC - Good Til
Canceled

##### units: [`Float`](./lib/snaptrade/models/float.rb)<a id="units-floatlibsnaptrademodelsfloatrb"></a>
##### universal_symbol_id: `String`<a id="universal_symbol_id-string"></a>
##### notional_value: [`Float`](./lib/snaptrade/models/float.rb)<a id="notional_value-floatlibsnaptrademodelsfloatrb"></a>
#### 🔄 Return<a id="🔄-return"></a>

[AccountOrderRecord](./lib/snaptrade/models/account_order_record.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/trade/place` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.trading.place_oco_order`<a id="snaptradetradingplace_oco_order"></a>

Place a OCO (One Cancels Other) order

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.trading.place_oco_order(
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
  first_trade_id: None,
  second_trade_id: None,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
##### first_trade_id: `Object`<a id="first_trade_id-object"></a>
The ID of first trade object obtained from trade/impact endpoint

##### second_trade_id: `Object`<a id="second_trade_id-object"></a>
The ID of second trade object obtained from trade/impact endpoint

#### 🔄 Return<a id="🔄-return"></a>

[AccountOrderRecord](./lib/snaptrade/models/account_order_record.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/trade/oco` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.trading.place_order`<a id="snaptradetradingplace_order"></a>

Place order

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.trading.place_order(
  trade_id: "tradeId_example",
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### trade_id: `String`<a id="trade_id-string"></a>
The ID of trade object obtained from trade/impact endpoint

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
#### 🔄 Return<a id="🔄-return"></a>

[AccountOrderRecord](./lib/snaptrade/models/account_order_record.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/trade/{tradeId}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.transactions_and_reporting.get_activities`<a id="snaptradetransactions_and_reportingget_activities"></a>

Returns activities (transactions) for a user. Specifying start and end date is highly recommended for better performance

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.transactions_and_reporting.get_activities(
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
  start_date: "2022-01-24",
  end_date: "2022-01-24",
  accounts: "917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2",
  brokerage_authorizations: "917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2",
  type: "DIVIDEND",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
##### start_date: `Date`<a id="start_date-date"></a>
##### end_date: `Date`<a id="end_date-date"></a>
##### accounts: `String`<a id="accounts-string"></a>
Optional comma seperated list of account IDs used to filter the request on
specific accounts

##### brokerage_authorizations: `String`<a id="brokerage_authorizations-string"></a>
Optional comma seperated list of brokerage authorization IDs used to filter the
request on only accounts that belong to those authorizations

##### type: `String`<a id="type-string"></a>
Optional comma seperated list of types to filter activities by. This is not an
exhaustive list, if we fail to match to these types, we will return the raw
description from the brokerage. Potential values include - DIVIDEND - BUY - SELL
- CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN -
EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN -
INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN -
INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI -
FXT

#### 🔄 Return<a id="🔄-return"></a>

[UniversalActivity](./lib/snaptrade/models/universal_activity.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/activities` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `snaptrade.transactions_and_reporting.get_reporting_custom_range`<a id="snaptradetransactions_and_reportingget_reporting_custom_range"></a>

Returns performance information (contributions, dividends, rate of return, etc) for a specific timeframe. Please note that Total Equity Timeframe and Rate of Returns are experimental features. Please contact support@snaptrade.com if you notice any inconsistencies.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = snaptrade.transactions_and_reporting.get_reporting_custom_range(
  start_date: "2022-01-24",
  end_date: "2022-01-24",
  user_id: "John.doe@snaptrade.com",
  user_secret: "USERSECRET123",
  accounts: "917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2",
  detailed: true,
  frequency: "monthly",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### start_date: `Date`<a id="start_date-date"></a>
##### end_date: `Date`<a id="end_date-date"></a>
##### user_id: `String`<a id="user_id-string"></a>
##### user_secret: `String`<a id="user_secret-string"></a>
##### accounts: `String`<a id="accounts-string"></a>
Optional comma seperated list of account IDs used to filter the request on
specific accounts

##### detailed: `Boolean`<a id="detailed-boolean"></a>
Optional, increases frequency of data points for the total value and
contribution charts if set to true

##### frequency: `String`<a id="frequency-string"></a>
Optional frequency for the rate of return chart (defaults to monthly). Possible
values are daily, weekly, monthly, quarterly, yearly.

#### 🔄 Return<a id="🔄-return"></a>

[PerformanceCustom](./lib/snaptrade/models/performance_custom.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/performance/custom` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)