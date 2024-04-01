'use client'
import React, {useEffect, useState} from 'react';
import Left from "../../../../public/left";
import {useRouter} from "next/navigation";
import {filterItems, Products} from "../../../../constants";
import CustomCard from "@/app/components/CustomCard";
import {Button} from "@/components/ui/button";
import {CustomButton} from "@/app/components";

const Page = () => {
    const router = useRouter()
    const [filter, setFilter] = useState("1")

    const goBack = () => {
        router.push('/')
    }

    const handleToggle = () => {

    }

    useEffect(() => {
            router.prefetch('/')
        }, []
    )

    return (
        <div className="py-32 px-32">
            <div className="flex items-center cursor-pointer" onClick={goBack}>
                <div>
                    <Left/>
                </div>
                <div className="ml-1">Home</div>
            </div>
            <div className="flex justify-center items-center gap-2">
                {filterItems.map((item) => (
                    <CustomButton title={item.name} containerStyles="border px-2 py-2 hover:border-black border-2"/>
                ))}
            </div>
            <div
                className="grid grid-cols-2 wide:grid-cols-4 tablet_wide:grid-cols-2 small_phone_wide:grid-cols-1 gap-4 wide:pt-10">
                {Products.map((product) => (
                    <CustomCard key={product.id} title={product.title} price={product.price} image={product.image} containerStyles="border-2"/>
                ))}
            </div>
        </div>
    );
};

export default Page;