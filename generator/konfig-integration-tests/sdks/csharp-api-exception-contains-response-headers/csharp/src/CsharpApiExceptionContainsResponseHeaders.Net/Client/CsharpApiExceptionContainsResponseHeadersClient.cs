/*
 * csharp-api-exception-contains-response-headers API
 *
 * A simple API based for testing csharp-api-exception-contains-response-headers.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@example.com
 * Generated by: https://konfigthis.com
 */


using CsharpApiExceptionContainsResponseHeaders.Net.Api;

namespace CsharpApiExceptionContainsResponseHeaders.Net.Client
{
    /// <summary>
    ///  SDK client
    /// </summary>
    public class CsharpApiExceptionContainsResponseHeadersClient
    {
        /// <summary>
        /// API instance
        /// </summary>
        public virtual ITestApi Test { get; set; }

        /// <summary>
        /// Configuration instance
        /// </summary>
        public readonly Configuration Configuration;

        /// <summary>
        /// Constructor
        /// </summary>
        public CsharpApiExceptionContainsResponseHeadersClient()
        {
            Configuration = new Configuration();
            init();
        }

        private void init()
        {
            Test = new TestApi(Configuration);
        }

        /// <summary>
        /// Setter for base path
        /// </summary>
        public CsharpApiExceptionContainsResponseHeadersClient SetBasePath(string basePath)
        {
            Configuration.BasePath = basePath;
            init();
            return this;
        }

        /// <summary>
        /// Setter for verify SSL configuration. Set to false when you want to disable SSL verification.
        /// </summary>
        public CsharpApiExceptionContainsResponseHeadersClient SetVerifySsl(bool verifySsl)
        {
            Configuration.VerifySsl = verifySsl;
            init();
            return this;
        }

        /// <summary>
        /// Setter for Access Token
        /// </summary>
        public CsharpApiExceptionContainsResponseHeadersClient SetAccessToken(string accessToken)
        {
            Configuration.AccessToken = accessToken;
            init();
            return this;
        }

        /// <summary>
        /// Setter for API Key
        /// </summary>
        public CsharpApiExceptionContainsResponseHeadersClient SetApiKey(string apiKey)
        {
            Configuration.ApiKey["X-API-KEY"] = apiKey;
            init();
            return this;
        }
    }
}