'use client'
import React, {useEffect} from 'react';
import {Products} from "../../../constants";
import CustomCard from "@/app/components/CustomCard";
import Carousel from "@/app/components/CustomCarousel";
import image_four from "../../../public/f4.jpg"
import Link from "next/link";
import Image from "next/image";
import {useProducts} from "../../../hook/useProducts";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "@/app/features/CartSlice";

const Hero = () => {
    const {useGetProductsList} = useProducts()
    const {data: products, isSuccess} = useGetProductsList()
    // const dispatch = useDispatch()
    // // @ts-ignore
    // const data = useSelector(state => state.cart)
    //
    // useEffect(() => {
    //     // @ts-ignore
    //     dispatch(fetchProducts())
    //
    // }, [dispatch]);
    // console.log(data)

    return (
        <>
            {isSuccess && (
                <>
                    <div className="sm:pt-32">
                        <div className="flex">
                            <div className="w-1/2 rounded-lg h-[500px] bg-pink-200 flex justify-start items-end">
                                <div className="ml-4 mb-6">
                                    <div className="text-white font-bold text-3xl">
                                        Spring 2024
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 rounded-lg h-[500px]">
                                <div className="h-[240px] flex gap-4">
                                    <div className="w-1/2 bg-gray-300 rounded-lg ml-4 text-white flex items-end">
                                        <div className="ml-4 mb-4 text-3xl font-bold">
                                            Health
                                        </div>
                                    </div>
                                    <div className="w-1/2 bg-pink-400 rounded-lg flex items-end">
                                        <div className="m-4 text-white text-3xl font-bold">
                                            New
                                        </div>
                                    </div>
                                </div>
                                <div className="group hover:opacity-90 rounded-lg h-[240px] mt-4 ml-4 flex items-end">
                                    <Image src={image_four} alt="header_image_four"
                                           className="h-60 absolute rounded-lg w-[560px]"/>
                                    <div
                                        className="relative text-white m-6 text-3xl font-bold group-hover:text-opacity-70">
                                        New
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="font-bold text-2xl pt-10">
                            Product we are proud of
                        </div>
                        <div
                            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:pt-4">
                            {products.map((item: any) => (
                                <Link href={`./sections/product_page/${item.id}`} key={item.id}>
                                    <CustomCard title={item.title} price={item.price}
                                                image={item.image}
                                                containerStyles="border-2"/>
                                </Link>
                            ))}
                        </div>

                        <div className="flex mt-20">
                            <div className="w-1/2 bg-gray-200 flex flex-col justify-center items-center">
                                <div className="ml-32">
                                    <div className="font-bold text-3xl">
                                        Creative harmonious living
                                    </div>
                                    <div className="mr-32 mt-2 text-black">
                                        RAOUF Products are all made to standard sizes so that you can mix and match them
                                        freely.
                                    </div>
                                    <div className="mt-4 w-fit bg-black text-white">
                                        <button className="px-4 py-2">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 bg-gray-400 h-96">
                            </div>
                        </div>

                        <div className="font-bold text-xl pt-16">
                            Trending Now
                        </div>
                        <Carousel/>

                        <div className="flex pt-10 pb-20">
                            <div className="w-1/2 bg-gray-400 h-96">
                            </div>
                            <div className="w-1/2 bg-gray-200 flex flex-col justify-center items-center">
                                <div className="ml-32">
                                    <div className="font-bold text-3xl">
                                        Comfortable & Elegante Living
                                    </div>
                                    <div className="mr-32 mt-2 text-black">
                                        RAOUF Products are all made to standard sizes so that you can mix and match them
                                        freely.
                                    </div>
                                    <div className="mt-4 w-fit bg-black text-white">
                                        <button className="px-4 py-2">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Hero;