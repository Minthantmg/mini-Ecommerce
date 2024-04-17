'use client'
import React, {useEffect} from 'react';
import {useRouter} from "next/navigation";

const _Footer = () => {
    const router = useRouter()

    const gotoHome = () => {
        router.push('/')
    }

    useEffect(() => {
            router.prefetch('/')
        }, []
    )
    return (
        <div className="flex flex-col justify-center items-center bg-black sm:py-16 py-8">
            <div className="flex justify-center items-center gap-10 font-bold text-white">
                <div onClick={gotoHome} className="cursor-pointer">
                    About
                </div>
                <div onClick={gotoHome} className="cursor-pointer">
                    FAQs
                </div>
                <div onClick={gotoHome} className="cursor-pointer">
                    News
                </div>
            </div>
            <div className="text-white text-sm mt-6 px-6 sm:px-0">
                Copyright © 2024 - All right reserved by Mini-mart Industries Ltd
            </div>
        </div>
    );
};

export default _Footer;