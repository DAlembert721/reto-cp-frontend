import axiosInstance from "../utils/axiosInstance";
import CandyStoreItem from "../models/CandyStoreItem";

export const fetchAllCandyStoreItems = async () => {
    try {
        const {data} = await axiosInstance.get(
            '/candystore',
            {}
        );
        return data.items.map((item, index) => CandyStoreItem.map({...item, id: index}));
    }catch (e) {
        return Promise.reject(e);
    }
}