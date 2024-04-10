import {axiosInstance} from "../utils/axiosInstance";

export const getAllProducts = async () => {
    try {
        const res = await axiosInstance.get(`products/categories`)
        return res.data;
    } catch (e) {
        throw e;
    }
}

export const getAllProductsList = async () => {
    try {
        const res = await axiosInstance.get(`products?limit=8`)
        return res.data;
    } catch (e) {
        throw e;
    }
}

export const getIdOne = async (id:number) => {
    try {
        const res = await axiosInstance.get(`products/${id}`)
        return res.data;
    } catch (e) {
        throw e;
    }
}

export const getProductForCarousel = async () => {
    try {
        const res = await axiosInstance.get(`products/category/electronics?limit=8`)
        return res.data;
    } catch (e) {
        throw e;
    }
}

export const getSpecificProducts = async (category:string) => {
    try {
        const res = await axiosInstance.get(`products/category/${category}`)
        return res.data;
    } catch (e) {
        throw e;
    }
}


