'use client'
import React, {useEffect} from 'react';
import Cart from '../../../public/cart'
import {useRouter} from "next/navigation";

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
            <div className="flex justify-between items-center fixed bg-white w-full px-32 border border-b-gray-100">
                <div className="rounded-full bg-red-500 text-white text-xs mx-2 my-2 px-1.5 py-7 font-bold cursor-pointer"
                     onClick={gotoHome}>
                    ミニマート
                </div>
                <div className="flex gap-10">
                    <div className="font-mono cursor-pointer" onClick={gotoCategories}>
                        CATEGORIES
                    </div>
                    <div className="font-mono cursor-pointer">
                        PRODUCT PAGE
                    </div>
                    <div>
                        <span>0</span>
                        <div className="absolute">
                            <Cart />
                        </div>
                    </div>
                    {/*<div className="avatar indicator">*/}
                    {/*    <span className="indicator-item badge badge-secondary">0</span>*/}
                    {/*    <div className="cursor-pointer">*/}
                    {/*        <Cart/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default _Nav;