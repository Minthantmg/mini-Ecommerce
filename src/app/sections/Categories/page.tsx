'use client'
import React, {useEffect, useState} from 'react';
import Left from "../../../../public/left";
import {useRouter} from "next/navigation";
import {filterItems, Products} from "../../../../constants";
import CustomCard from "@/app/components/CustomCard";
import {Button} from "@/components/ui/button";
import {CustomButton} from "@/app/components";
import {clickIdProps} from "@/app/types";
import {useSelector} from "react-redux";
import Link from "next/link";

const Page = () => {
    const router = useRouter()
    const {cartItems, total, amount} = useSelector((state: any) => state.cart)
    const [filter, setFilter] = useState("All")

    const goBack = () => {
        router.push('/')
    }

    const handleToggle = ({clickedItemId}: clickIdProps) => {
        setFilter(clickedItemId)
    };

    const filteredProducts = Products.filter((product) => product.category === filter.toString());


    useEffect(() => {
            router.prefetch('/')
        }, []
    )

    return (
        <div className="py-32 px-44">
            <div className="flex items-center cursor-pointer" onClick={goBack}>
                <div>
                    <Left/>
                </div>
                <div className="ml-1">Home</div>
            </div>
            <div className="flex justify-center items-center gap-2">
                {filterItems.map((item) => (
                    <CustomButton key={item.name} title={item.name}
                                  containerStyles="border px-2 py-2 hover:border-black border-2"
                                  handleClick={() => handleToggle({clickedItemId: item.category})}/>
                ))}
            </div>
            {filter === "All" && (
                <>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:pt-10">
                        {Products.map((product) => (
                            <Link href={`./product_page/${product.id}`}>
                                <CustomCard key={product.id} title={product.title} price={product.price}
                                            image={product.image} containerStyles="border-2">
                                </CustomCard>
                            </Link>
                        ))}
                    </div>
                </>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:pt-10">
                {filteredProducts.map((product) => (
                    <Link href={`./product_page/${product.id}`}>
                        <CustomCard key={product.id} title={product.title} price={product.price} image={product.image}
                                    containerStyles="border-2"/>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Page;