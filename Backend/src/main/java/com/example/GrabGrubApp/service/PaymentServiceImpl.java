package com.example.GrabGrubApp.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.example.GrabGrubApp.model.Order;
import com.example.GrabGrubApp.response.PaymentResponse;
import com.stripe.Stripe;
import com.stripe.model.checkout.Session;
//import com.stripe.param.billingportal.SessionCreateParams;
import com.stripe.param.checkout.SessionCreateParams;

@Service
public class PaymentServiceImpl implements PaymentService {

    @Value("${strip.api.key}")
    private String stripeSecretKey;

    @Override
    public PaymentResponse createPaymentLink(Order order) {
        Stripe.apiKey=stripeSecretKey;

        SessionCreateParams params=SessionCreateParams.builder()
                                    .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
                                    .setMode(SessionCreateParams.Mode.PAYMENT)
                                    .setSuccessUrl("http://localhost:3000/payment/success/"+order.getId())
                                    .setCancelUrl("http://localhost:3000/payment/fail")
                                    .addLineItem(SessionCreateParams.LineItem.builder().setQuantity(1L)
                                                    .setPriceData(SessionCreateParams.LineItem.PriceData.builder()
                                                        .setCurrency("usd")
                                                        .setUnitAmount((long) order.getTotalPrice()*100)
                                                        .setProductData(SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                                                    .setName("GrabGrub")
                                                                    .build())
                                                        .build())
                                                .build())  
        
        Session session=Session.create(params);

        PaymentResponse res=new PaymentResponse();
        res.setPayment_url(session.getUrl());

        return res;
    }

}
