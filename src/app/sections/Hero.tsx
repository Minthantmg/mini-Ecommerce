'use client'
import React from 'react';
import CustomCard from "@/app/components/CustomCard";
import Carousel from "@/app/components/CustomCarousel";
import image_four from "../../../public/f4.jpg"
import Link from "next/link";
import Image from "next/image";
import {useProducts} from "../../../hook/useProducts";
import Loading from "@/app/components/loading";
import ErrorGif from "@/app/components/errorGif";
import electronic from "../../../public/electronic.jpg"
import kitchen from "../../../public/kitchen.jpg"
import living from "../../../public/living.jpg"
import banner_one from "../../../public/banner1.jpg"
import banner_two from "../../../public/banner2.jpg"

const Hero = () => {
    const {useGetProductsList} = useProducts()
    const {data: products, isSuccess, isLoading, isError} = useGetProductsList()
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
            {isLoading && <Loading/>}
            {isError && <ErrorGif/>}
            {isSuccess && (
                <>
                    <div className="sm:pt-32 pt-28">
                        <div className="sm:flex">
                            <div
                                className="sm:w-1/2 rounded-lg h-[300px] sm:h-[500px] flex justify-start items-end group hover:opacity-90 cursor-pointer">
                                <Image src={electronic} alt="electronic"
                                       className="h-[300px] sm:h-[500px] w-full rounded-lg" priority/>
                                <div className="absolute z-10 ml-4 mb-6">
                                    <div className="text-white font-bold text-3xl group-hover:text-opacity-70">
                                        Electronic
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 rounded-lg h-[500px] mt-4 sm:mt-0">
                                <div className="h-[240px] flex gap-4">
                                    <div
                                        className="w-1/2 bg-gray-300 rounded-lg sm:ml-4 text-white flex items-end group hover:opacity-90 cursor-pointer">
                                        <Image src={living} alt="kitchen_img" className="h-[240px] rounded-lg"/>
                                        <div
                                            className="absolute z-10 m-4 sm:ml-4 sm:mb-4 text-3xl font-bold group-hover:text-opacity-70">
                                            Living
                                        </div>
                                    </div>
                                    <div
                                        className="w-1/2 rounded-lg flex items-end group hover:opacity-90 cursor-pointer">
                                        <Image src={kitchen} alt="kitchen_img" className="h-[240px] rounded-lg"/>
                                        <div
                                            className="absolute z-10 m-4 text-white text-3xl font-bold group-hover:text-opacity-70">
                                            Kitchen
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="group hover:opacity-90 rounded-lg h-[240px] mt-4 sm:ml-4 flex items-end cursor-pointer">
                                    <Image src={image_four} alt="header_image_four"
                                           className="h-60 rounded-lg"/>
                                    <div
                                        className="absolute z-10 text-white m-6 text-3xl font-bold group-hover:text-opacity-70">
                                        Furniture
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
                            <div
                                className="sm:w-1/2 bg-gray-200 flex flex-col justify-center items-center sm:rounded-l-lg">
                                <div className="sm:ml-20 p-10 sm:p-0">
                                    <div className="font-bold text-3xl">
                                        Creative harmonious living
                                    </div>
                                    <div className="sm:mr-16 mt-2 text-black">
                                        Products are all made to standard sizes so that you can mix and match them
                                        freely.
                                    </div>
                                    <div className="mt-4 w-fit bg-black text-white">
                                        <button className="px-4 py-2">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 sm:h-96 hidden sm:block">
                                <Image src={banner_one} alt="banner_one" className="w-full sm:h-96 sm:rounded-r-lg"/>
                            </div>
                        </div>

                        <div className="font-bold text-xl pt-16">
                            Trending Now
                        </div>
                        <Carousel/>

                        <div className="sm:flex sm:pt-10 sm:pb-20 pt-4 pb-4">
                            <div className="sm:w-1/2 sm:h-96 hidden sm:block">
                                <Image src={banner_two} alt="banner_two" className="sm:h-96 rounded-l-lg"/>
                            </div>
                            <div
                                className="sm:w-1/2 bg-gray-200 flex flex-col justify-center items-center sm:rounded-r-lg">
                                <div className="sm:ml-20 p-10 sm:p-0">
                                    <div className="font-bold text-3xl">
                                        Comfortable & Elegante Living
                                    </div>
                                    <div className="sm:mr-16 mt-2 text-black">
                                        Products are all made to standard sizes so that you can mix and match them
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