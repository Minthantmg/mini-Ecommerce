
'use client'
import React, {useEffect} from 'react';
import Left from "../../../../public/left";
import {useRouter} from "next/navigation";
import {Products} from "../../../../constants";
import CustomCard from "@/app/components/CustomCard";

const Page = () => {
    const router = useRouter()

    const goBack = () => {
        router.push('/')
    }

    useEffect(() => {
            router.prefetch('/')
        },[]
    )

    return (
        <div className="pt-32 px-32">
            <div className="flex items-center cursor-pointer" onClick={goBack}>
                <div>
                    <Left />
                </div>
                <div className="ml-1">Home</div>
            </div>
            <div
                className="grid grid-cols-2 wide:grid-cols-4 tablet_wide:grid-cols-2 small_phone_wide:grid-cols-1 gap-4 wide:pt-10">
                {Products.map((product) => (
                    <CustomCard key={product.id} title={product.title} price={product.price} image={product.image}/>
                ))}
            </div>
        </div>
    );
};

export default Page;