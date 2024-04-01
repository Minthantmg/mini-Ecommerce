'use client'
import React, {useEffect} from 'react';
import Cart from '../../../public/cart'
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
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

const _Nav = () => {
    const router = useRouter()

    const gotoCategories = () => {
        router.push('/sections/Categories')
    }

    const gotoHome = () => {
        router.push('/')
    }

    useEffect(() => {
            router.prefetch('/')
            router.prefetch('/sections/Categories')
        }, []
    )

    return (
        <div>
            <div className="flex justify-between items-center fixed z-10 bg-white w-full px-32 shadow-sm">
                <div
                    className="rounded-full bg-red-500 text-white text-xs mx-2 my-2 px-1.5 py-7 font-bold cursor-pointer"
                    onClick={gotoHome}>
                    ミニマート
                </div>
                <div className="flex gap-10">
                    <div className="font-mono cursor-pointer hover:underline" onClick={gotoCategories}>
                        CATEGORIES
                    </div>
                    <div className="font-mono cursor-pointer hover:underline">
                        PRODUCT PAGE
                    </div>
                    <div>
                        <Sheet>
                            <SheetTrigger>
                                <div className="indicator">
                                    <span className="indicator-item badge badge-primary text-white">0</span>
                                    <Cart/>
                                </div>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                                    <SheetDescription>
                                        This action cannot be undone. This will permanently delete your account
                                        and remove your data from our servers.
                                    </SheetDescription>
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