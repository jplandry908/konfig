/*
SnapTrade

Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Balance } from './balance';
import { BrokerageAuthorization } from './brokerage-authorization';
import { CalculatedTrade } from './calculated-trade';
import { ExcludedAsset } from './excluded-asset';
import { PortfolioGroupSettings } from './portfolio-group-settings';
import { Position } from './position';
import { TargetAsset } from './target-asset';
import { UniversalSymbol } from './universal-symbol';

/**
 * Summary of all relevant information about a portfolio group.
 * @export
 * @interface PortfolioGroupInfo
 */
export interface PortfolioGroupInfo {
    [key: string]: any;

    /**
     * 
     * @type {Array<UniversalSymbol>}
     * @memberof PortfolioGroupInfo
     */
    'symbols'?: Array<UniversalSymbol>;
    /**
     * 
     * @type {Array<UniversalSymbol>}
     * @memberof PortfolioGroupInfo
     */
    'quotable_symbols'?: Array<UniversalSymbol>;
    /**
     * 
     * @type {Array<Balance>}
     * @memberof PortfolioGroupInfo
     */
    'balances'?: Array<Balance>;
    /**
     * 
     * @type {Array<Position>}
     * @memberof PortfolioGroupInfo
     */
    'positions'?: Array<Position>;
    /**
     * 
     * @type {Array<TargetAsset>}
     * @memberof PortfolioGroupInfo
     */
    'target_positions'?: Array<TargetAsset>;
    /**
     * 
     * @type {Array<Position>}
     * @memberof PortfolioGroupInfo
     */
    'ideal_positions'?: Array<Position>;
    /**
     * 
     * @type {Array<ExcludedAsset>}
     * @memberof PortfolioGroupInfo
     */
    'excluded_positions'?: Array<ExcludedAsset>;
    /**
     * 
     * @type {Array<CalculatedTrade>}
     * @memberof PortfolioGroupInfo
     */
    'calculated_trades'?: Array<CalculatedTrade>;
    /**
     * 
     * @type {Array<BrokerageAuthorization>}
     * @memberof PortfolioGroupInfo
     */
    'brokerage_authorizations'?: Array<BrokerageAuthorization>;
    /**
     * 
     * @type {number}
     * @memberof PortfolioGroupInfo
     */
    'accuracy'?: number;
    /**
     * 
     * @type {PortfolioGroupSettings}
     * @memberof PortfolioGroupInfo
     */
    'settings'?: PortfolioGroupSettings;
}
