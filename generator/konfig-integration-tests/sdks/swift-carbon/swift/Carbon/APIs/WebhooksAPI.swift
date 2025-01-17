//
// WebhooksAPI.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

open class WebhooksAPI {

    weak var client: CarbonClient?

    public init(client: CarbonClient) {
        self.client = client
    }

    /**
     Add Webhook Url
     
     - parameter addWebhookProps: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func addUrlSync(addWebhookProps: AddWebhookProps, apiResponseQueue: DispatchQueue = CarbonAPI.apiResponseQueue, completion: @escaping ((_ data: Webhook?, _ error: Error?) -> Void)) -> RequestTask {
        return addUrlWithRequestBuilder(addWebhookProps: addWebhookProps).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Add Webhook Url
     
     - parameter addWebhookProps: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    private class func addUrlAsyncMappedParams(addWebhookProps: AddWebhookProps) async throws -> Webhook {
        return try await withCheckedThrowingContinuation { continuation in
            addUrlWithRequestBuilder(addWebhookProps: addWebhookProps).execute { result in
                switch result {
                case let .success(response):
                    continuation.resume(returning: response.body)
                case let .failure(error):
                    continuation.resume(throwing: error)
                }
            }
        }
    }

    /**
     Add Webhook Url
     
     - parameter addWebhookProps: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    open class func addUrl(
        url: String
    ) async throws -> Webhook {
        let addWebhookProps = AddWebhookProps(
            url: url
        )
        return try await withCheckedThrowingContinuation { continuation in
            addUrlWithRequestBuilder(addWebhookProps: addWebhookProps).execute { result in
                switch result {
                case let .success(response):
                    continuation.resume(returning: response.body)
                case let .failure(error):
                    continuation.resume(throwing: error)
                }
            }
        }
    }


    /**
     Add Webhook Url
     
     - parameter addWebhookProps: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    open func addUrl(
        url: String
    ) async throws -> Webhook {
        let addWebhookProps = AddWebhookProps(
            url: url
        )
        return try await withCheckedThrowingContinuation { continuation in
            addUrlWithRequestBuilder(addWebhookProps: addWebhookProps).execute { result in
                switch result {
                case let .success(response):
                    continuation.resume(returning: response.body)
                case let .failure(error):
                    continuation.resume(throwing: error)
                }
            }
        }
    }



    /**
     Add Webhook Url
     - POST /add_webhook
     - API Key:
       - type: apiKey authorization 
       - name: apiKey
     - parameter addWebhookProps: (body)  
     - returns: RequestBuilder<Webhook> 
     */
    open class func addUrlWithRequestBuilder(
            addWebhookProps: AddWebhookProps
    ) -> RequestBuilder<Webhook> {
        let basePath = CarbonAPI.basePath;
        let localVariablePath = "/add_webhook"
        let localVariableURLString = basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: addWebhookProps)

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        var localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        do {
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "authorization", value: CarbonAPI.apiKey, prefix: "Bearer ")
            let localVariableRequestBuilder: RequestBuilder<Webhook>.Type = CarbonAPI.requestBuilderFactory.getBuilder()
            let URLString = localVariableUrlComponents?.string ?? localVariableURLString
            return localVariableRequestBuilder.init(method: "POST", URLString: URLString, parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
        } catch {
            print("Error: \(error)")
        }
        fatalError("Error: Unable to send request to POST /add_webhook")
    }

    /**
     Add Webhook Url
     - POST /add_webhook
     - API Key:
       - type: apiKey authorization 
       - name: apiKey
     - parameter addWebhookProps: (body)  
     - returns: RequestBuilder<Webhook> 
     */
    open func addUrlWithRequestBuilder(
            addWebhookProps: AddWebhookProps
    ) -> RequestBuilder<Webhook> {
        let basePath = self.client!.basePath;
        let localVariablePath = "/add_webhook"
        let localVariableURLString = basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: addWebhookProps)

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        var localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        do {
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "authorization", value: self.client!.apiKey, prefix: "Bearer ")
            let localVariableRequestBuilder: RequestBuilder<Webhook>.Type = CarbonAPI.requestBuilderFactory.getBuilder()
            let URLString = localVariableUrlComponents?.string ?? localVariableURLString
            return localVariableRequestBuilder.init(method: "POST", URLString: URLString, parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
        } catch {
            print("Error: \(error)")
        }
        fatalError("Error: Unable to send request to POST /add_webhook")
    }


    /**
     Delete Webhook Url
     
     - parameter webhookId: (path)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func deleteUrlSync(webhookId: Int, apiResponseQueue: DispatchQueue = CarbonAPI.apiResponseQueue, completion: @escaping ((_ data: GenericSuccessResponse?, _ error: Error?) -> Void)) -> RequestTask {
        return deleteUrlWithRequestBuilder(webhookId: webhookId).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Delete Webhook Url
     
     - parameter webhookId: (path)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    private class func deleteUrlAsyncMappedParams(webhookId: Int) async throws -> GenericSuccessResponse {
        return try await withCheckedThrowingContinuation { continuation in
            deleteUrlWithRequestBuilder(webhookId: webhookId).execute { result in
                switch result {
                case let .success(response):
                    continuation.resume(returning: response.body)
                case let .failure(error):
                    continuation.resume(throwing: error)
                }
            }
        }
    }

    /**
     Delete Webhook Url
     
     - parameter webhookId: (path)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    open class func deleteUrl(
        webhookId: Int
    ) async throws -> GenericSuccessResponse {
        return try await withCheckedThrowingContinuation { continuation in
            deleteUrlWithRequestBuilder(webhookId: webhookId).execute { result in
                switch result {
                case let .success(response):
                    continuation.resume(returning: response.body)
                case let .failure(error):
                    continuation.resume(throwing: error)
                }
            }
        }
    }


    /**
     Delete Webhook Url
     
     - parameter webhookId: (path)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    open func deleteUrl(
        webhookId: Int
    ) async throws -> GenericSuccessResponse {
        return try await withCheckedThrowingContinuation { continuation in
            deleteUrlWithRequestBuilder(webhookId: webhookId).execute { result in
                switch result {
                case let .success(response):
                    continuation.resume(returning: response.body)
                case let .failure(error):
                    continuation.resume(throwing: error)
                }
            }
        }
    }



    /**
     Delete Webhook Url
     - DELETE /delete_webhook/{webhook_id}
     - API Key:
       - type: apiKey authorization 
       - name: apiKey
     - parameter webhookId: (path)  
     - returns: RequestBuilder<GenericSuccessResponse> 
     */
    open class func deleteUrlWithRequestBuilder(
            webhookId: Int
    ) -> RequestBuilder<GenericSuccessResponse> {
        let basePath = CarbonAPI.basePath;
        var localVariablePath = "/delete_webhook/{webhook_id}"
        let webhookIdPreEscape = "\(APIHelper.mapValueToPathItem(webhookId))"
        let webhookIdPostEscape = webhookIdPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{webhook_id}", with: webhookIdPostEscape, options: .literal, range: nil)
        let localVariableURLString = basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        var localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        do {
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "authorization", value: CarbonAPI.apiKey, prefix: "Bearer ")
            let localVariableRequestBuilder: RequestBuilder<GenericSuccessResponse>.Type = CarbonAPI.requestBuilderFactory.getBuilder()
            let URLString = localVariableUrlComponents?.string ?? localVariableURLString
            return localVariableRequestBuilder.init(method: "DELETE", URLString: URLString, parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
        } catch {
            print("Error: \(error)")
        }
        fatalError("Error: Unable to send request to DELETE /delete_webhook/{webhook_id}")
    }

    /**
     Delete Webhook Url
     - DELETE /delete_webhook/{webhook_id}
     - API Key:
       - type: apiKey authorization 
       - name: apiKey
     - parameter webhookId: (path)  
     - returns: RequestBuilder<GenericSuccessResponse> 
     */
    open func deleteUrlWithRequestBuilder(
            webhookId: Int
    ) -> RequestBuilder<GenericSuccessResponse> {
        let basePath = self.client!.basePath;
        var localVariablePath = "/delete_webhook/{webhook_id}"
        let webhookIdPreEscape = "\(APIHelper.mapValueToPathItem(webhookId))"
        let webhookIdPostEscape = webhookIdPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{webhook_id}", with: webhookIdPostEscape, options: .literal, range: nil)
        let localVariableURLString = basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        var localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        do {
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "authorization", value: self.client!.apiKey, prefix: "Bearer ")
            let localVariableRequestBuilder: RequestBuilder<GenericSuccessResponse>.Type = CarbonAPI.requestBuilderFactory.getBuilder()
            let URLString = localVariableUrlComponents?.string ?? localVariableURLString
            return localVariableRequestBuilder.init(method: "DELETE", URLString: URLString, parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
        } catch {
            print("Error: \(error)")
        }
        fatalError("Error: Unable to send request to DELETE /delete_webhook/{webhook_id}")
    }


    /**
     Webhook Urls
     
     - parameter webhookQueryInput: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func urlsSync(webhookQueryInput: WebhookQueryInput, apiResponseQueue: DispatchQueue = CarbonAPI.apiResponseQueue, completion: @escaping ((_ data: WebhookQueryResponse?, _ error: Error?) -> Void)) -> RequestTask {
        return urlsWithRequestBuilder(webhookQueryInput: webhookQueryInput).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Webhook Urls
     
     - parameter webhookQueryInput: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    private class func urlsAsyncMappedParams(webhookQueryInput: WebhookQueryInput) async throws -> WebhookQueryResponse {
        return try await withCheckedThrowingContinuation { continuation in
            urlsWithRequestBuilder(webhookQueryInput: webhookQueryInput).execute { result in
                switch result {
                case let .success(response):
                    continuation.resume(returning: response.body)
                case let .failure(error):
                    continuation.resume(throwing: error)
                }
            }
        }
    }

    /**
     Webhook Urls
     
     - parameter webhookQueryInput: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    open class func urls(
        pagination: Pagination? = nil, 
        orderBy: WebhookOrderByColumns? = nil, 
        orderDir: OrderDir? = nil, 
        filters: WebhookFilters? = nil
    ) async throws -> WebhookQueryResponse {
        let webhookQueryInput = WebhookQueryInput(
            pagination: pagination,
            orderBy: orderBy,
            orderDir: orderDir,
            filters: filters
        )
        return try await withCheckedThrowingContinuation { continuation in
            urlsWithRequestBuilder(webhookQueryInput: webhookQueryInput).execute { result in
                switch result {
                case let .success(response):
                    continuation.resume(returning: response.body)
                case let .failure(error):
                    continuation.resume(throwing: error)
                }
            }
        }
    }


    /**
     Webhook Urls
     
     - parameter webhookQueryInput: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @available(iOS 13.0, macOS 10.15, tvOS 13.0, watchOS 6.0, *)
    open func urls(
        pagination: Pagination? = nil, 
        orderBy: WebhookOrderByColumns? = nil, 
        orderDir: OrderDir? = nil, 
        filters: WebhookFilters? = nil
    ) async throws -> WebhookQueryResponse {
        let webhookQueryInput = WebhookQueryInput(
            pagination: pagination,
            orderBy: orderBy,
            orderDir: orderDir,
            filters: filters
        )
        return try await withCheckedThrowingContinuation { continuation in
            urlsWithRequestBuilder(webhookQueryInput: webhookQueryInput).execute { result in
                switch result {
                case let .success(response):
                    continuation.resume(returning: response.body)
                case let .failure(error):
                    continuation.resume(throwing: error)
                }
            }
        }
    }



    /**
     Webhook Urls
     - POST /webhooks
     - API Key:
       - type: apiKey authorization 
       - name: apiKey
     - parameter webhookQueryInput: (body)  
     - returns: RequestBuilder<WebhookQueryResponse> 
     */
    open class func urlsWithRequestBuilder(
            webhookQueryInput: WebhookQueryInput
    ) -> RequestBuilder<WebhookQueryResponse> {
        let basePath = CarbonAPI.basePath;
        let localVariablePath = "/webhooks"
        let localVariableURLString = basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: webhookQueryInput)

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        var localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        do {
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "authorization", value: CarbonAPI.apiKey, prefix: "Bearer ")
            let localVariableRequestBuilder: RequestBuilder<WebhookQueryResponse>.Type = CarbonAPI.requestBuilderFactory.getBuilder()
            let URLString = localVariableUrlComponents?.string ?? localVariableURLString
            return localVariableRequestBuilder.init(method: "POST", URLString: URLString, parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
        } catch {
            print("Error: \(error)")
        }
        fatalError("Error: Unable to send request to POST /webhooks")
    }

    /**
     Webhook Urls
     - POST /webhooks
     - API Key:
       - type: apiKey authorization 
       - name: apiKey
     - parameter webhookQueryInput: (body)  
     - returns: RequestBuilder<WebhookQueryResponse> 
     */
    open func urlsWithRequestBuilder(
            webhookQueryInput: WebhookQueryInput
    ) -> RequestBuilder<WebhookQueryResponse> {
        let basePath = self.client!.basePath;
        let localVariablePath = "/webhooks"
        let localVariableURLString = basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: webhookQueryInput)

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        var localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        do {
            try Authentication.setAuthenticationParameters(headers: &localVariableHeaderParameters, url: &localVariableUrlComponents, in: "header", name: "authorization", value: self.client!.apiKey, prefix: "Bearer ")
            let localVariableRequestBuilder: RequestBuilder<WebhookQueryResponse>.Type = CarbonAPI.requestBuilderFactory.getBuilder()
            let URLString = localVariableUrlComponents?.string ?? localVariableURLString
            return localVariableRequestBuilder.init(method: "POST", URLString: URLString, parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
        } catch {
            print("Error: \(error)")
        }
        fatalError("Error: Unable to send request to POST /webhooks")
    }

}
