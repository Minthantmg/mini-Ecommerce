'use client'
import React, {useEffect, useState} from 'react';
import Left from "../../../../public/left";
import {useRouter} from "next/navigation";
import {Products} from "../../../../constants";
import CustomCard from "@/app/components/CustomCard";
import {CustomButton} from "@/app/components";
import {clickIdProps} from "@/app/types";
import {useSelector} from "react-redux";
import Link from "next/link";
import {useProducts} from "../../../../hook/useProducts";
import Loading from "@/app/components/loading";
import ErrorGif from "@/app/components/errorGif";

const Page = () => {
    const router = useRouter()
    const {cartItems, total, amount} = useSelector((state: any) => state.cart)
    const [filter, setFilter] = useState("All")
    const [category, setCategory] = useState("electronics")

    const {useGetProductsCategoryList, useGetCategoryById} = useProducts()
    const {data: categories, isSuccess} = useGetProductsCategoryList()
    const {data: categoryId, isSuccess: isIdSuccess, isLoading, isError} = useGetCategoryById(category)


    const goBack = () => {
        router.push('/')
    }

    const handleToggle = ({clickedItemId}: clickIdProps) => {
        setCategory(clickedItemId)
    };

    const filteredProducts = Products.filter((product) => product.category === filter.toString());


    useEffect(() => {
            router.prefetch('/')
        }, []
    )

    return (
        <>
            {isLoading && <Loading/>}
            {isError && <ErrorGif/>}
            {isSuccess && isIdSuccess && (
                <div className="py-32 px-44">
                    <div className="flex items-center cursor-pointer" onClick={goBack}>
                        <div>
                            <Left/>
                        </div>
                        <div className="ml-1">Home</div>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                        {categories.map((item: any) => (
                            <div key={item.name}>
                                <CustomButton title={item}
                                              containerStyles="border px-2 py-2 hover:border-black border-2"
                                              handleClick={() => handleToggle({clickedItemId: item})}/>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:pt-10">
                        {categoryId.map((product: any) => (
                            <Link href={`./product_page/${product.id}`} key={product.id}>
                                <CustomCard title={product.title} price={product.price}
                                            image={product.image}
                                            containerStyles="border-2"/>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};
export default Page;