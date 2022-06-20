import axiosInstance from "../utils/axiosInstance";

export const completePurchase = async ({name, email, dni, date}) => {
    try {
        const {data} = axiosInstance.post(
            '/complete',
            {
                name,
                mail: email,
                dni,
                operation_date: date,
            }
        )
        return {result: data.resul_code}


    }catch (e) {
        return Promise.reject(e);
    }
}