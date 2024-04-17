'use client'
import React, {useEffect} from 'react';
import {Products} from "../../../constants";
import CustomCard from "@/app/components/CustomCard";
import Carousel from "@/app/components/CustomCarousel";
import image_four from "../../../public/f4.jpg"
import Link from "next/link";
import Image from "next/image";
import {useProducts} from "../../../hook/useProducts";
import Loading from "@/app/components/loading";
import {isError} from "node:util";
import ErrorGif from "@/app/components/errorGif";

const Hero = () => {
    const {useGetProductsList} = useProducts()
    const {data: products, isSuccess,isLoading,isError} = useGetProductsList()
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
            {isLoading && <Loading />}
            {isError && <ErrorGif />}
            {isSuccess && (
                <>
                    <div className="sm:pt-32 pt-28">
                        <div className="sm:flex">
                            <div className="sm:w-1/2 rounded-lg h-[300px] sm:h-[500px] bg-pink-200 flex justify-start items-end">
                                <div className="ml-4 mb-6">
                                    <div className="text-white font-bold text-3xl">
                                        Spring 2024
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 rounded-lg h-[500px] mt-4 sm:mt-0">
                                <div className="h-[240px] flex gap-4">
                                    <div className="w-1/2 bg-gray-300 rounded-lg sm:ml-4 text-white flex items-end">
                                        <div className="sm:ml-4 sm:mb-4 text-3xl font-bold">
                                            Health
                                        </div>
                                    </div>
                                    <div className="w-1/2 bg-pink-400 rounded-lg flex items-end">
                                        <div className="m-4 text-white text-3xl font-bold">
                                            New
                                        </div>
                                    </div>
                                </div>
                                <div className="group hover:opacity-90 rounded-lg h-[240px] mt-4 sm:ml-4 flex items-end">
                                    <Image src={image_four} alt="header_image_four"
                                           className="h-60 absolute rounded-lg sm:w-[560px] w-[335px]"/>
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
                            className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-4 pb-4 sm:pb-0">
                            {products.map((item: any) => (
                                <Link href={`./sections/product_page/${item.id}`} key={item.id}>
                                    <CustomCard title={item.title} price={item.price}
                                                image={item.image}
                                                containerStyles="border-2"/>
                                </Link>
                            ))}
                        </div>

                        <div className="sm:flex sm:mt-20 mt-8 pb-4 sm:pb-0">
                            <div className="sm:w-1/2 bg-gray-200 flex flex-col justify-center items-center">
                                <div className="sm:ml-32 p-10 sm:p-0">
                                    <div className="font-bold text-3xl">
                                        Creative harmonious living
                                    </div>
                                    <div className="sm:mr-32 mt-2 text-black">
                                        RAOUF Products are all made to standard sizes so that you can mix and match them
                                        freely.
                                    </div>
                                    <div className="mt-4 w-fit bg-black text-white">
                                        <button className="px-4 py-2">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 bg-gray-400 sm:h-96 hidden sm:block">
                            </div>
                        </div>

                        <div className="font-bold text-xl pt-16">
                            Trending Now
                        </div>
                        <Carousel/>

                        <div className="sm:flex sm:pt-10 sm:pb-20 pt-4 pb-4">
                            <div className="sm:w-1/2 bg-gray-400 sm:h-96 hidden sm:block">
                            </div>
                            <div className="sm:w-1/2 bg-gray-200 flex flex-col justify-center items-center">
                                <div className="sm:ml-32 p-10 sm:p-0">
                                    <div className="font-bold text-3xl">
                                        Comfortable & Elegante Living
                                    </div>
                                    <div className="sm:mr-32 mt-2 text-black">
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