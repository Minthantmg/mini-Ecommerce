'use client'
import React, {useState} from 'react';
import {useParams} from "next/navigation";
import {CustomButton} from "@/app/components";
import Carousel from "@/app/components/CustomCarousel";
import {useProducts} from "../../../../../hook/useProducts";
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart, calculateTotal} from "@/app/features/CartDataSlice";
import {useToast} from "@/components/ui/use-toast";
import Loading from "@/app/components/loading";
import ErrorGif from "@/app/components/errorGif";

const Page = () => {
    const {id} = useParams();
    const [count, setCount] = useState(1)
    const {total} = useSelector((state: any) => state.cartData)
    const {toast} = useToast()

    const {useGetIdOne} = useProducts()
    const {data: product, isSuccess, isLoading} = useGetIdOne(Number(id))

    const addCount = () => {
        setCount(count + 1)
    }

    const minusCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const dispatch = useDispatch();

    const addToCartHandler = () => {
        if (!product || !count) {
            console.error('Missing product or count data in addToCartHandler');
            return;
        }
        dispatch(addItemToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: count,
            image: product.image
        }));
        dispatch(calculateTotal(total))
        toast({
            title: "Item added to the cart!",
        })
    };

    const buyNow = () => {
        toast({
            title: "Successfully Bought!",
        })
    }

    return (
        <>
            {isLoading ? (
                <Loading/>
            ) : isSuccess && product ? (
                <div className="pt-28 sm:px-44 px-8">
                    <div className="sm:flex py-10">
                        <div className="sm:w-1/2">
                            <div className="flex justify-center items-center">
                                <img src={product.image} alt="brand_img" className="w-[450px] sm:h-[450px] h-[400px]
                                p-6"/>
                            </div>
                        </div>
                        <div
                            className="sm:w-1/2 bg-gray-200 rounded-r-lg flex flex-col items-center sm:px-20 px-4 pt-4 sm:pt-0">
                            <div className="text-2xl font-bold mt-6">
                                {product.title}
                            </div>
                            <div className="mt-10 line-clamp-6">
                                {product.description}
                            </div>
                            <div className="flex justify-between w-full sm:px-8 pt-6">
                                <div className="text-lg font-bold mt-1">
                                    Quantity
                                </div>
                                <div className="flex">
                                    <button
                                        className="w-10 h-10 border border-black bg-white text-black text-bold flex justify-center items-center"
                                        onClick={minusCount}
                                        disabled={count === 1}>-
                                    </button>
                                    <div
                                        className="w-10 h-10 border border-t-black border-b-black bg-gray-200 text-black text-bold flex justify-center items-center">{count}</div>
                                    <button
                                        className="w-10 h-10 border border-black bg-white text-black text-bold flex justify-center items-center"
                                        onClick={addCount}>+
                                    </button>
                                </div>
                                <div className="text-lg font-bold mt-1">
                                    {product.price}$
                                </div>
                            </div>
                            <div className="flex gap-4 mt-8 w-full pb-8">
                                <CustomButton title="ADD TO CART"
                                              containerStyles="border border-2 border-black bg-gray-200 px-6 py-2 font-bold w-1/2"
                                              handleClick={addToCartHandler}/>
                                <CustomButton title="BUY NOW"
                                              containerStyles="bg-red-500 px-6 py-2 text-white font-bold w-1/2"
                                              handleClick={buyNow}/>
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex justify-center items-center py-16 sm:gap-4">
                        <div className="sm:w-1/3 bg-gray-200 py-4">
                            <div className="ml-4 text-xl font-bold">
                                Category
                            </div>
                            <div className="ml-4 text-lg">
                                {product.category}
                            </div>
                        </div>
                        <div className="sm:w-1/3 bg-gray-200 py-4 mt-4 sm:mt-0">
                            <div className="ml-4 text-xl font-bold">
                                Rating
                            </div>
                            <div className="ml-4 text-lg">
                                {product.rating.rate}
                            </div>
                        </div>
                        <div className="sm:w-1/3 bg-gray-200 py-4 mt-4 sm:mt-0">
                            <div className="ml-4 text-xl font-bold">
                                Rating Count
                            </div>
                            <div className="ml-4 text-lg">
                                {product.rating.count}
                            </div>
                        </div>
                    </div>
                    <div className="font-bold text-2xl">
                        Trending Now
                    </div>
                    <div className="py-4 sm:py-0">
                        <Carousel/>
                    </div>
                </div>
            ) : (
                <>
                    <ErrorGif/>
                </>
            )}
        </>
    );
};

export default Page;