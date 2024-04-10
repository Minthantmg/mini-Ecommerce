'use client'
import React, {useEffect} from 'react';
import Cart from '../../../public/cart'
import {useRouter} from "next/navigation";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {useSelector} from "react-redux";
import Empty from "@/app/components/empty";
import Close from "../../../public/close";
import {cartItemProps, productProps} from "@/app/types";
import Image from "next/image";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";

const _Nav = () => {
    const router = useRouter()
    const {cartItems, total, amount} = useSelector((state: any) => state.cart)
    const {cartData} = useSelector((state: any) => state.cartData)
    const gotoCategories = () => {
        router.push('/sections/Categories')
    }

    const gotoProductPage = () => {
        router.push('/sections/product_page/1')
    }

    const gotoHome = () => {
        router.push('/')
    }

    useEffect(() => {
            router.prefetch('/')
            router.prefetch('/sections/Categories')
            router.prefetch('/sections/product_page/1')
        }, []
    )

    return (
        <div>
            <div className="flex justify-between items-center fixed z-10 bg-white w-full px-44 shadow-sm">
                <div
                    className="rounded-full bg-red-500 text-white text-xs mx-2 my-2 px-1.5 py-7 font-bold cursor-pointer"
                    onClick={gotoHome}>
                    ミニマート
                </div>
                <div className="flex gap-10">
                    <div className="font-mono cursor-pointer hover:underline" onClick={gotoCategories}>
                        CATEGORIES
                    </div>
                    <div className="font-mono cursor-pointer hover:underline" onClick={gotoProductPage}>
                        PRODUCT PAGE
                    </div>
                    <div>
                        <Sheet>
                            <SheetTrigger>
                                <div className="indicator">
                                    <span className="indicator-item badge badge-primary text-white"
                                          style={{visibility: cartData.length > 0 ? 'visible' : 'hidden'}}>
                                        {cartData.length}
                                    </span>
                                    <Cart/>
                                </div>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <div>
                                        {cartData.length < 1 ? (
                                            <div>
                                                <SheetTitle>Your Shopping Cart({cartData.length})</SheetTitle>
                                                <Empty/>
                                            </div>
                                        ) : (
                                            <>
                                                <SheetTitle>Your Shopping Cart({amount})</SheetTitle>
                                                <SheetDescription>
                                                    <ScrollArea className="h-[550px] rounded-md border">
                                                        <div>
                                                            {cartData.map((item: cartItemProps) => (
                                                                <div key={item.id}>
                                                                    <div className="p-4 border border-black flex">
                                                                        <div
                                                                            className="w-1/5 flex justify-center items-center border border-l-1">
                                                                            <Image src={item.image} alt="cart_img"/>
                                                                        </div>
                                                                        <div className="w-4/5">
                                                                            <div className="flex justify-between">
                                                                                <div
                                                                                    className="text-black text-xl mx-2 font-bold">
                                                                                    {item.title}
                                                                                </div>
                                                                                <div
                                                                                    className="text-black text-xl font-bold">
                                                                                    {item.price}$
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="flex justify-between items-center mt-5 mx-2">
                                                                                <div className="flex">
                                                                                    <button
                                                                                        className="px-2.5 text-lg bg-black text-white">-
                                                                                    </button>
                                                                                    <div
                                                                                        className="px-2.5 text-lg">{item.quantity}</div>
                                                                                    <div
                                                                                        className="px-2.5 text-lg bg-black text-white">+
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <Close/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <ScrollBar orientation="horizontal"/>
                                                    </ScrollArea>
                                                    <div
                                                        className="mt-2">-----------------------------------------------------------
                                                    </div>
                                                    <div className="mt-2 font-bold text-lg text-black">
                                                        Subtotal
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <div className="font-bold text-lg text-black">
                                                            {total}$
                                                        </div>
                                                        <div
                                                            className="border sm:px-4 sm:py-2 cursor-pointer border-black bg-white hover:bg-black hover:text-white">
                                                            Go to Checkout
                                                        </div>
                                                    </div>
                                                </SheetDescription>
                                            </>
                                        )}
                                    </div>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default _Nav;