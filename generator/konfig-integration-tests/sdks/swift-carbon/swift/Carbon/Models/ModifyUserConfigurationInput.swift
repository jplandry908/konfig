//
// ModifyUserConfigurationInput.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct ModifyUserConfigurationInput: Codable, JSONEncodable, Hashable {

    public var configurationKeyName: String
    public var value: AnyCodable

    public init(configurationKeyName: String, value: AnyCodable) {
        self.configurationKeyName = configurationKeyName
        self.value = value
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case configurationKeyName = "configuration_key_name"
        case value
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(configurationKeyName, forKey: .configurationKeyName)
        try container.encode(value, forKey: .value)
    }
}
