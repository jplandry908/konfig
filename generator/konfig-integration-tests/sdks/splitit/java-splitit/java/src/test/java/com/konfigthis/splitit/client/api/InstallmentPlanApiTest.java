/*
 * splitit-web-api-v3
 * Splitit's Web API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by Konfig (https://konfigthis.com).
 * Do not edit the class manually.
 */


package com.konfigthis.splitit.client.api;

import com.konfigthis.splitit.client.ApiException;
import com.konfigthis.splitit.client.ApiClient;
import com.konfigthis.splitit.client.ApiException;
import com.konfigthis.splitit.client.Configuration;
import com.konfigthis.splitit.client.model.AddressData;
import com.konfigthis.splitit.client.model.AddressDataModel;
import com.konfigthis.splitit.client.model.AuthorizationModel;
import com.konfigthis.splitit.client.model.BluesnapVaultedShopperToken;
import com.konfigthis.splitit.client.model.CardBrand;
import com.konfigthis.splitit.client.model.CardData;
import com.konfigthis.splitit.client.model.CardType;
import com.konfigthis.splitit.client.model.CheckInstallmentsEligibilityRequest;
import com.konfigthis.splitit.client.model.EventsEndpointsModel;
import com.konfigthis.splitit.client.model.GwAuthorizationStatus;
import com.konfigthis.splitit.client.model.IdentifierContract;
import com.konfigthis.splitit.client.model.InitiatePlanResponse;
import com.konfigthis.splitit.client.model.InitiateRedirectionEndpointsModel;
import com.konfigthis.splitit.client.model.Installment;
import com.konfigthis.splitit.client.model.InstallmentPlanCancelResponse;
import com.konfigthis.splitit.client.model.InstallmentPlanCreateRequest;
import com.konfigthis.splitit.client.model.InstallmentPlanCreateResponse;
import com.konfigthis.splitit.client.model.InstallmentPlanGetResponse;
import com.konfigthis.splitit.client.model.InstallmentPlanInitiateRequest;
import com.konfigthis.splitit.client.model.InstallmentPlanRefundRequest;
import com.konfigthis.splitit.client.model.InstallmentPlanRefundResponse;
import com.konfigthis.splitit.client.model.InstallmentPlanSearchResponse;
import com.konfigthis.splitit.client.model.InstallmentPlanUpdateRequestByIdentifier;
import com.konfigthis.splitit.client.model.InstallmentPlanUpdateResponse;
import com.konfigthis.splitit.client.model.InstallmentStatus;
import com.konfigthis.splitit.client.model.InstallmentsEligibilityResponse;
import com.konfigthis.splitit.client.model.LinksData;
import com.konfigthis.splitit.client.model.LinksModel;
import com.konfigthis.splitit.client.model.MockerShopperToken;
import java.time.OffsetDateTime;
import com.konfigthis.splitit.client.model.PaymentMethodModel;
import com.konfigthis.splitit.client.model.PaymentMethodType;
import com.konfigthis.splitit.client.model.PaymentPlanOptionModel;
import com.konfigthis.splitit.client.model.PlanData;
import com.konfigthis.splitit.client.model.PlanDataModel;
import com.konfigthis.splitit.client.model.PlanStatus;
import com.konfigthis.splitit.client.model.ProcessingData;
import com.konfigthis.splitit.client.model.ProcessingData2;
import com.konfigthis.splitit.client.model.PurchaseMethod;
import com.konfigthis.splitit.client.model.RedirectionEndpointsModel;
import com.konfigthis.splitit.client.model.RefundModel;
import com.konfigthis.splitit.client.model.RefundStatus;
import com.konfigthis.splitit.client.model.RefundStrategy;
import com.konfigthis.splitit.client.model.RefundSummary;
import com.konfigthis.splitit.client.model.SearchInstallmentPlanResponseItem;
import com.konfigthis.splitit.client.model.ShippingStatus;
import com.konfigthis.splitit.client.model.ShippingStatus2;
import com.konfigthis.splitit.client.model.ShopperData;
import com.konfigthis.splitit.client.model.SpreedlyToken;
import com.konfigthis.splitit.client.model.ThreeDSData;
import com.konfigthis.splitit.client.model.ThreeDSData2;
import com.konfigthis.splitit.client.model.ThreeDsRedirectDataV3;
import com.konfigthis.splitit.client.model.UpdateOrderRequest;
import com.konfigthis.splitit.client.model.UxSettingsModel;
import com.konfigthis.splitit.client.model.VerifyAuthorizationResponse;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeAll;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for InstallmentPlanApi
 */
@Disabled
public class InstallmentPlanApiTest {

    private static InstallmentPlanApi api;

    
    @BeforeAll
    public static void beforeClass() {
        ApiClient apiClient = Configuration.getDefaultApiClient();
        api = new InstallmentPlanApi(apiClient);
    }

    /**
     * @throws ApiException if the Api call fails
     */
    @Test
    public void cancelTest() throws ApiException {
        String installmentPlanNumber = null;
        String xSplititIdempotencyKey = null;
        String xSplititTouchPoint = null;
        InstallmentPlanCancelResponse response = api.cancel(installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint)
                .execute();
        // TODO: test validations
    }

    /**
     * @throws ApiException if the Api call fails
     */
    @Test
    public void checkEligibilityTest() throws ApiException {
        String xSplititIdempotencyKey = null;
        String xSplititTouchPoint = null;
        PlanData planData = null;
        CardData cardDetails = null;
        AddressData billingAddress = null;
        InstallmentsEligibilityResponse response = api.checkEligibility(xSplititIdempotencyKey, xSplititTouchPoint)
                .planData(planData)
                .cardDetails(cardDetails)
                .billingAddress(billingAddress)
                .execute();
        // TODO: test validations
    }

    /**
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getTest() throws ApiException {
        String installmentPlanNumber = null;
        String xSplititIdempotencyKey = null;
        String xSplititTouchPoint = null;
        InstallmentPlanGetResponse response = api.get(installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint)
                .execute();
        // TODO: test validations
    }

    /**
     * @throws ApiException if the Api call fails
     */
    @Test
    public void postTest() throws ApiException {
        Boolean autoCapture = null;
        String xSplititIdempotencyKey = null;
        String xSplititTouchPoint = null;
        Boolean attempt3dSecure = null;
        ShopperData shopper = null;
        PlanDataModel planData = null;
        AddressDataModel billingAddress = null;
        InitiateRedirectionEndpointsModel redirectUrls = null;
        UxSettingsModel uxSettings = null;
        EventsEndpointsModel eventsEndpoints = null;
        ProcessingData processingData = null;
        String xSplititTestMode = null;
        InitiatePlanResponse response = api.post(autoCapture, xSplititIdempotencyKey, xSplititTouchPoint)
                .attempt3dSecure(attempt3dSecure)
                .shopper(shopper)
                .planData(planData)
                .billingAddress(billingAddress)
                .redirectUrls(redirectUrls)
                .uxSettings(uxSettings)
                .eventsEndpoints(eventsEndpoints)
                .processingData(processingData)
                .xSplititTestMode(xSplititTestMode)
                .execute();
        // TODO: test validations
    }

    /**
     * @throws ApiException if the Api call fails
     */
    @Test
    public void post2Test() throws ApiException {
        Boolean autoCapture = null;
        Boolean termsAndConditionsAccepted = null;
        String xSplititIdempotencyKey = null;
        String xSplititTouchPoint = null;
        Boolean attempt3dSecure = null;
        ShopperData shopper = null;
        PlanDataModel planData = null;
        AddressDataModel billingAddress = null;
        PaymentMethodModel paymentMethod = null;
        RedirectionEndpointsModel redirectUrls = null;
        ProcessingData processingData = null;
        EventsEndpointsModel eventsEndpoints = null;
        String xSplititTestMode = null;
        InstallmentPlanCreateResponse response = api.post2(autoCapture, termsAndConditionsAccepted, xSplititIdempotencyKey, xSplititTouchPoint)
                .attempt3dSecure(attempt3dSecure)
                .shopper(shopper)
                .planData(planData)
                .billingAddress(billingAddress)
                .paymentMethod(paymentMethod)
                .redirectUrls(redirectUrls)
                .processingData(processingData)
                .eventsEndpoints(eventsEndpoints)
                .xSplititTestMode(xSplititTestMode)
                .execute();
        // TODO: test validations
    }

    /**
     * @throws ApiException if the Api call fails
     */
    @Test
    public void refundTest() throws ApiException {
        Double amount = null;
        String installmentPlanNumber = null;
        String xSplititIdempotencyKey = null;
        String xSplititTouchPoint = null;
        RefundStrategy refundStrategy = null;
        InstallmentPlanRefundResponse response = api.refund(amount, installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint)
                .refundStrategy(refundStrategy)
                .execute();
        // TODO: test validations
    }

    /**
     * @throws ApiException if the Api call fails
     */
    @Test
    public void searchTest() throws ApiException {
        String xSplititIdempotencyKey = null;
        String xSplititTouchPoint = null;
        String installmentPlanNumber = null;
        String refOrderNumber = null;
        Map<String, String> extendedParams = null;
        InstallmentPlanSearchResponse response = api.search(xSplititIdempotencyKey, xSplititTouchPoint)
                .installmentPlanNumber(installmentPlanNumber)
                .refOrderNumber(refOrderNumber)
                .extendedParams(extendedParams)
                .execute();
        // TODO: test validations
    }

    /**
     * @throws ApiException if the Api call fails
     */
    @Test
    public void updateOrderTest() throws ApiException {
        String installmentPlanNumber = null;
        String xSplititIdempotencyKey = null;
        String xSplititTouchPoint = null;
        String trackingNumber = null;
        String refOrderNumber = null;
        ShippingStatus shippingStatus = null;
        Boolean capture = null;
        InstallmentPlanUpdateResponse response = api.updateOrder(installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint)
                .trackingNumber(trackingNumber)
                .refOrderNumber(refOrderNumber)
                .shippingStatus(shippingStatus)
                .capture(capture)
                .execute();
        // TODO: test validations
    }

    /**
     * @throws ApiException if the Api call fails
     */
    @Test
    public void updateOrder2Test() throws ApiException {
        String xSplititIdempotencyKey = null;
        String xSplititTouchPoint = null;
        String refOrderNumber = null;
        String trackingNumber = null;
        Boolean capture = null;
        ShippingStatus2 shippingStatus = null;
        IdentifierContract identifier = null;
        InstallmentPlanUpdateResponse response = api.updateOrder2(xSplititIdempotencyKey, xSplititTouchPoint)
                .refOrderNumber(refOrderNumber)
                .trackingNumber(trackingNumber)
                .capture(capture)
                .shippingStatus(shippingStatus)
                .identifier(identifier)
                .execute();
        // TODO: test validations
    }

    /**
     * @throws ApiException if the Api call fails
     */
    @Test
    public void verifyAuthorizationTest() throws ApiException {
        String installmentPlanNumber = null;
        String xSplititIdempotencyKey = null;
        String xSplititTouchPoint = null;
        VerifyAuthorizationResponse response = api.verifyAuthorization(installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint)
                .execute();
        // TODO: test validations
    }

}