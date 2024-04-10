'use client'
import React, {useEffect, useState} from 'react';
import {useParams} from "next/navigation";
import {CustomButton} from "@/app/components";
import Carousel from "@/app/components/CustomCarousel";
import {productProps} from "@/app/types";
import {useProducts} from "../../../../../hook/useProducts";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "@/app/features/CartSlice";

const Page = () => {
    const {id} = useParams();
    const dispatch = useDispatch()
    // @ts-ignore
    const data = useSelector(state => state.cart)

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchProducts())

    }, [dispatch]);
    console.log(data)
    const {cartItems} = useSelector((state: any) => state.cart)
    const [count, setCount] = useState(1)

    const {useGetIdOne} = useProducts()
    const {data: product, isSuccess} = useGetIdOne(Number(id))

    const addCount = () => {
        setCount(count + 1)
    }

    const minusCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <>
            {isSuccess && product ? (
                <div className="pt-28 px-44">
                    <div className="flex py-10">
                        <div className="w-1/2">
                            <div className="flex justify-center items-center">
                                <img src={product.image} alt="brand_img" className="w-[450px] h-[450px] p-6"/>
                            </div>
                        </div>
                        <div className="w-1/2 bg-gray-200 rounded-r-lg flex flex-col items-center px-20">
                            <div className="text-2xl font-bold mt-6">
                                {product.title}
                            </div>
                            <div className="mt-10 line-clamp-6">
                                {product.description}
                            </div>
                            <div className="flex justify-between w-full px-8 pt-6">
                                <div className="text-lg font-bold mt-1">
                                    Quantity
                                </div>
                                <div className="flex">
                                    <button
                                        className="w-10 h-10 border border-black bg-white text-black text-bold flex justify-center items-center"
                                        onClick={minusCount}
                                        disabled={count === 1}>-
                                    </button>
                                    <div
                                        className="w-10 h-10 border border-t-black border-b-black bg-gray-200 text-black text-bold flex justify-center items-center">{count}</div>
                                    <button
                                        className="w-10 h-10 border border-black bg-white text-black text-bold flex justify-center items-center"
                                        onClick={addCount}>+
                                    </button>
                                </div>
                                <div className="text-lg font-bold mt-1">
                                    {product.price}$
                                </div>
                            </div>
                            <div className="flex gap-4 mt-8 w-full">
                                <CustomButton title="ADD TO CART"
                                              containerStyles="border border-2 border-black bg-gray-200 px-6 py-2 font-bold w-1/2"/>
                                <CustomButton title="BUY NOW"
                                              containerStyles="bg-red-500 px-6 py-2 text-white font-bold w-1/2"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center py-16 gap-4">
                        <div className="w-1/3 bg-gray-200 py-4">
                            <div className="ml-4 text-xl font-bold">
                                Category
                            </div>
                            <div className="ml-4 text-lg">
                                {product.category}
                            </div>
                        </div>
                        <div className="w-1/3 bg-gray-200 py-4">
                            <div className="ml-4 text-xl font-bold">
                                Rating
                            </div>
                            <div className="ml-4 text-lg">
                                {product.rating.rate}
                            </div>
                        </div>
                        <div className="w-1/3 bg-gray-200 py-4">
                            <div className="ml-4 text-xl font-bold">
                                Rating Count
                            </div>
                            <div className="ml-4 text-lg">
                                {product.rating.count}
                            </div>
                        </div>
                    </div>
                    <div className="font-bold text-2xl">
                        Trending Now
                    </div>
                    <Carousel/>
                </div>
            ): (
                <>
                    <div className="pt-32 w-full h-screen flex justify-center items-center">Product with ID {id} not
                        found.
                    </div>;
                </>
            )}
        </>
    );
};

export default Page;