import axiosInstance from "../utils/axiosInstance";

export const completePurchase = async ({cardHolder, email, document, operationDate}) => {
    try {
        const {data} = axiosInstance.post(
            '/complete',
            {
                cardHolder,
                mail: email,
                document,
                operation_date: operationDate,
            }
        )
        return {result: data.resul_code}


    }catch (e) {
        return Promise.reject(e);
    }
}