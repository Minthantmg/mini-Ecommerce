import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import {Products} from "../../../constants";
import Link from "next/link";
import {useProducts} from "../../../hook/useProducts";

const CustomCarousel = () => {
    const {useGetProductsForCarousel} = useProducts()
    const {data: products, isSuccess} = useGetProductsForCarousel()
    return (
        <>
            {isSuccess && (
                <div className="sm:pb-6 px-5 sm:px-0">
                    <Carousel>
                        <CarouselContent>
                            {products.map((product: any) => (
                                <CarouselItem className="sm:basis-1/4 my-4" key={product.id}>
                                    <Link href={`../../sections/product_page/${product.id}`}>
                                        <div
                                            className={`border-2 border-gray-300 hover:border-black bg-white cursor-pointer sm:w-66 
                                            h-[360px]`}
                                        >
                                            <div className="flex justify-center items-center">
                                                <img src={product.image} alt={product.title} className="w-52 h-52 sm:p-4 p-2"/>
                                            </div>
                                            <div className="flex flex-col mt-6 mb-4">
                                                <span className={`font-mono ml-4 line-clamp-3`}>{product.title}</span>
                                                <span
                                                    className={`font-bold font-mono ml-4 mt-2`}>{product.price}$</span>
                                            </div>
                                        </div>
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext/>
                    </Carousel>
                </div>
            )}
        </>
    );
};

export default CustomCarousel;