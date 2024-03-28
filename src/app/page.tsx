import React from 'react';
import {CustomButton} from "@/app/components";
import CustomCard from "@/app/components/CustomCard";
import {Products} from "../../constants";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from "@/app/components/CustomCarousel";

const filteredProducts = Products.filter(product => product.brand === "Samsung");
const filteredProductsByCategory = Products.filter(product => product.category === "TV");
const Page = () => {

    return (
        <div className="container mx-auto px-10">
            <CustomButton title="hello" containerStyles="px-4 rounded-lg py-2 bg-black" textStyles="text-white"/>
            <div
                className="grid grid-cols-2 wide:grid-cols-4 tablet_wide:grid-cols-2 small_phone_wide:grid-cols-1 gap-4">
                {Products.slice(0, 8).map((product) => (
                    <CustomCard key={product.id} title={product.title} price={product.price} image={product.image}/>
                ))}
            </div>
            <div className="mt-4">
                This is Filtered Products
            </div>
            <div
                className="grid grid-cols-2 wide:grid-cols-4 tablet_wide:grid-cols-3 small_phone_wide:grid-cols-1 gap-4 my-4">
                {filteredProducts.map((product) => (
                    <CustomCard key={product.id} title={product.title} price={product.price} image={product.image}/>
                ))}
            </div>
            <div className="mt-4">
                This is Filtered Products by Category
            </div>
            <div
                className="grid grid-cols-2 wide:grid-cols-4 tablet_wide:grid-cols-3 small_phone_wide:grid-cols-1 gap-4 my-4">
                {filteredProductsByCategory.map((product) => (
                    <CustomCard key={product.id} title={product.title} price={product.price} image={product.image}/>
                ))}
            </div>
            <Carousel/>
        </div>
    );
};

export default Page;