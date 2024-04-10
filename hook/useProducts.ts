import { useQuery } from "@tanstack/react-query";
import {
    getAllProducts,
    getAllProductsList,
    getIdOne,
    getProductForCarousel,
    getSpecificProducts
} from "../apis/product";

const useGetProductsCategoryList = () => {
    return useQuery({
        queryKey: ["get", "category"],
        queryFn: getAllProducts,
    });
};

const useGetProductsList = () => {
    return useQuery({
        queryKey: ["get", "products"],
        queryFn: getAllProductsList,
    });
};

const useGetProductsForCarousel = () => {
    return useQuery({
        queryKey: ["get", "carousel"],
        queryFn: getProductForCarousel,
    });
};

const useGetIdOne = (id:number) => {
    return useQuery({
        queryKey: ["get", "idOne",id],
        queryFn: () => getIdOne(id),
    });
};

const useGetCategoryById = (category:string) => {
    return useQuery({
        queryKey: ['get', 'category_id', category],
        queryFn: () => getSpecificProducts(category),
    });
};


export const useProducts = () => {
    return {
        useGetProductsCategoryList,
        useGetCategoryById,
        useGetProductsList,
        useGetProductsForCarousel,
        useGetIdOne
    };
};