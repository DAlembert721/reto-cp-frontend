import payuAxiosInstance from "../utils/payuAxiosInstance";

export const makePayment = async data => {
    try {
        const {data:result} = await payuAxiosInstance.post(
            '',
            {
                "language": "es",
                "command": "SUBMIT_TRANSACTION",
                "merchant": {
                    "apiKey": "4Vj8eK4rloUd272L48hsrarnUA",
                    "apiLogin": "pRRXKOl8ikMmt9u"
                },
                "transaction": {
                    "order": {
                        "accountId": "512323",
                        "referenceCode": "PRODUCT_TEST_2021-06-21T16:39:10.965Z",
                        "description": "Payment test description",
                        "language": "es",
                        "signature": "af24b22ad0aa0b14dbe3c21a07d9558c",
                        "notifyUrl": "http://www.payu.com/notify",
                        "additionalValues": {
                            "TX_VALUE": {
                                "value": data.amount,
                                "currency": "PEN"
                            }
                        },
                        "buyer": {
                            "fullName": data.cardHolder,
                            "emailAddress": data.email,
                            "contactPhone": "",
                            "dniNumber": data.document,
                            "shippingAddress": {
                                "street1": "",
                                "street2": "",
                                "city": "",
                                "state": "",
                                "country": "",
                                "postalCode": "",
                                "phone": ""
                            }
                        },
                    },
                    "payer": {
                        "dniType": data.documentType,
                        "billingAddress": {
                            "state": "",
                        }
                    },
                    "creditCard": {
                        "number": data.card,
                        "securityCode": data.cvv,
                        "expirationDate": data.expirationYear+ "/" + data.expirationYear,
                        "name": "APPROVED"
                    },
                    "extraParameters": {
                        "INSTALLMENTS_NUMBER": 1
                    },
                    "type": "AUTHORIZATION_AND_CAPTURE",
                    "paymentMethod": "VISA",
                    "paymentCountry": "PE",
                },
                "test": true
            }
        )
        return result;
    }catch (e) {
        return Promise.reject(e);
    }
}