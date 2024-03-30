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

const CustomCarousel = () => {
    return (
        <div className="wide:pt-4">
            <Carousel>
                <CarouselContent>
                    {Products.map((product) => (
                        <CarouselItem className="wide:basis-1/5 basis-1/2 my-4">
                            <div
                                className={`border border-gray-300 hover:border-black bg-white cursor-pointer`}
                            >
                                <div className="flex justify-center items-center">
                                    <Image src={product.image} alt={product.title} className="w-52 h-52"/>
                                </div>
                                <div className="flex flex-col mt-6 mb-4">
                                    <span className={`font-mono ml-4`}>{product.title}</span>
                                    <span className={`font-bold font-mono ml-4 mt-2`}>{product.price}$</span>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default CustomCarousel;