'use client'
import React, {useState} from 'react';
import {useParams} from "next/navigation";
import {Products} from "../../../../../constants";
import Image from "next/image";
import {CustomButton} from "@/app/components";
import Carousel from "@/app/components/CustomCarousel";
import {useSelector} from "react-redux";
import {productProps} from "@/app/types";

const Page = () => {
    const {id} = useParams();
    const {cartItems} = useSelector((state: any) => state.cart)
    const [count, setCount] = useState(1)

    const selectedProduct = cartItems.find((product: productProps) => product.id === parseInt(id as string));

    if (!selectedProduct) {
        return <div className="pt-32 w-full h-screen flex justify-center items-center">Product with ID {id} not
            found.</div>;
    }

    const addCount = () => {
        setCount(count + 1)
    }

    const minusCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const {title, price, brand, image, category, description, quantity, size, weight} = selectedProduct;
    return (
        <div className="pt-28 px-44">
            <div className="flex py-10">
                <div className="w-1/2">
                    <div className="flex justify-center items-center">
                        <Image src={image} alt="brand_img" className="w-[450px] h-[450px]"/>
                    </div>
                </div>
                <div className="w-1/2 bg-gray-200 rounded-r-lg flex flex-col items-center">
                    <div className="text-2xl font-bold mt-6">
                        {title}
                    </div>
                    <div className="mx-4 mt-10 px-16">
                        {description}
                    </div>
                    <div className="flex justify-between w-full px-20 pt-6">
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
                            {price}$
                        </div>
                    </div>
                    <div className="flex gap-4 mt-8 w-full px-16">
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
                        Brand
                    </div>
                    <div className="ml-4 text-lg">
                        {brand}
                    </div>
                </div>
                <div className="w-1/3 bg-gray-200 py-4">
                    <div className="ml-4 text-xl font-bold">
                        Weight
                    </div>
                    <div className="ml-4 text-lg">
                        {weight}
                    </div>
                </div>
                <div className="w-1/3 bg-gray-200 py-4">
                    <div className="ml-4 text-xl font-bold">
                        Size
                    </div>
                    <div className="ml-4 text-lg">
                        {size}
                    </div>
                </div>
            </div>
            <div className="font-bold text-2xl">
                Trending Now
            </div>
            <Carousel/>
        </div>
    );
};

export default Page;