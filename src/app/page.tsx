'use client'
import React, {useEffect, useState} from 'react';
import {Hero} from "@/app/sections";
import Image from "next/image";
import close from "../../public/close.svg";
import Nav from "../app/components/_nav"

const Page = () => {
    return (
        <>
            <>
                <div className="relative container px-8 sm:px-32">
                    <Hero/>
                </div>
            </>
        </>
    );
};

export default Page;