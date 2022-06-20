import Premiere from "../models/Premiere";
import axiosInstance from "../utils/axiosInstance";


export const fetchAllPremieres = async () => {
    try {
        const {data} = await axiosInstance.get(
            '/premieres',
            {}
        );
        return data.premieres.map((p, index) => Premiere.map({id: index, ...p}));

    }catch (e) {
        return Promise.reject(e);
    }
};