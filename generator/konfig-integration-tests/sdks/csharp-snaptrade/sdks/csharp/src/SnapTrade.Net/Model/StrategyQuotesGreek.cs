/*
 * SnapTrade
 *
 * Connect brokerage accounts to your app for live positions and trading
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@snaptrade.com
 * Generated by: https://konfigthis.com
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = SnapTrade.Net.Client.OpenAPIDateConverter;

namespace SnapTrade.Net.Model
{
    /// <summary>
    /// StrategyQuotesGreek
    /// </summary>
    [DataContract(Name = "StrategyQuotes_greek")]
    public partial class StrategyQuotesGreek : IEquatable<StrategyQuotesGreek>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="StrategyQuotesGreek" /> class.
        /// </summary>
        /// <param name="delta">delta.</param>
        /// <param name="gamma">gamma.</param>
        /// <param name="theta">theta.</param>
        /// <param name="vega">vega.</param>
        /// <param name="rho">rho.</param>
        public StrategyQuotesGreek(double delta = default(double), double gamma = default(double), double theta = default(double), double vega = default(double), double rho = default(double)) : base()
        {
            this.Delta = delta;
            this.Gamma = gamma;
            this.Theta = theta;
            this.Vega = vega;
            this.Rho = rho;
            this.AdditionalProperties = new Dictionary<string, object>();
        }

        /// <summary>
        /// Gets or Sets Delta
        /// </summary>
        [DataMember(Name = "delta", EmitDefaultValue = false)]
        public double Delta { get; set; }

        /// <summary>
        /// Gets or Sets Gamma
        /// </summary>
        [DataMember(Name = "gamma", EmitDefaultValue = false)]
        public double Gamma { get; set; }

        /// <summary>
        /// Gets or Sets Theta
        /// </summary>
        [DataMember(Name = "theta", EmitDefaultValue = false)]
        public double Theta { get; set; }

        /// <summary>
        /// Gets or Sets Vega
        /// </summary>
        [DataMember(Name = "vega", EmitDefaultValue = false)]
        public double Vega { get; set; }

        /// <summary>
        /// Gets or Sets Rho
        /// </summary>
        [DataMember(Name = "rho", EmitDefaultValue = false)]
        public double Rho { get; set; }

        /// <summary>
        /// Gets or Sets additional properties
        /// </summary>
        [JsonExtensionData]
        public IDictionary<string, object> AdditionalProperties { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class StrategyQuotesGreek {\n");
            sb.Append("  ").Append(base.ToString().Replace("\n", "\n  ")).Append("\n");
            sb.Append("  Delta: ").Append(Delta).Append("\n");
            sb.Append("  Gamma: ").Append(Gamma).Append("\n");
            sb.Append("  Theta: ").Append(Theta).Append("\n");
            sb.Append("  Vega: ").Append(Vega).Append("\n");
            sb.Append("  Rho: ").Append(Rho).Append("\n");
            sb.Append("  AdditionalProperties: ").Append(AdditionalProperties).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as StrategyQuotesGreek);
        }

        /// <summary>
        /// Returns true if StrategyQuotesGreek instances are equal
        /// </summary>
        /// <param name="input">Instance of StrategyQuotesGreek to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(StrategyQuotesGreek input)
        {
            if (input == null)
            {
                return false;
            }
            return base.Equals(input) && 
                (
                    this.Delta == input.Delta ||
                    this.Delta.Equals(input.Delta)
                ) && base.Equals(input) && 
                (
                    this.Gamma == input.Gamma ||
                    this.Gamma.Equals(input.Gamma)
                ) && base.Equals(input) && 
                (
                    this.Theta == input.Theta ||
                    this.Theta.Equals(input.Theta)
                ) && base.Equals(input) && 
                (
                    this.Vega == input.Vega ||
                    this.Vega.Equals(input.Vega)
                ) && base.Equals(input) && 
                (
                    this.Rho == input.Rho ||
                    this.Rho.Equals(input.Rho)
                )
                && (this.AdditionalProperties.Count == input.AdditionalProperties.Count && !this.AdditionalProperties.Except(input.AdditionalProperties).Any());
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = base.GetHashCode();
                hashCode = (hashCode * 59) + this.Delta.GetHashCode();
                hashCode = (hashCode * 59) + this.Gamma.GetHashCode();
                hashCode = (hashCode * 59) + this.Theta.GetHashCode();
                hashCode = (hashCode * 59) + this.Vega.GetHashCode();
                hashCode = (hashCode * 59) + this.Rho.GetHashCode();
                if (this.AdditionalProperties != null)
                {
                    hashCode = (hashCode * 59) + this.AdditionalProperties.GetHashCode();
                }
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        public IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}