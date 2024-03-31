import React from 'react';
import {Products} from "../../../constants";
import CustomCard from "@/app/components/CustomCard";
import Carousel from "@/app/components/CustomCarousel";
import Image from "next/image";
import women from "../../../public/women_collection.png"

const Hero = () => {
    return (
        <div className="wide:pt-32">
            <div className="flex">
                <div className="w-1/2 rounded-lg">
                    <Image src={women} alt="collection" width={0} height={0}/>
                </div>
                <div className="w-1/2">
                    hello
                </div>
            </div>
            <div className="font-bold text-xl">
                Product we are proud of
            </div>
            <div
                className="grid grid-cols-2 wide:grid-cols-4 tablet_wide:grid-cols-2 small_phone_wide:grid-cols-1 gap-4 wide:pt-8">
                {Products.slice(0, 8).map((product) => (
                    <CustomCard key={product.id} title={product.title} price={product.price} image={product.image}/>
                ))}
            </div>
            <div className="font-bold text-xl pt-16">
                Trending Now
            </div>
            <Carousel/>
        </div>
    );
};

export default Hero;