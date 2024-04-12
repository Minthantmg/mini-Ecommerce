'use client'
import type {Metadata} from "next";
import "./globals.css";
import Nav from "@/app/components/_nav";
import Footer from "@/app/components/_footer";
import React from "react";
import {store} from '@/store'
import {Provider} from 'react-redux'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "@/components/ui/toaster";

const queryClient = new QueryClient()

const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <html lang="en" className="!scroll-smooth bg-white">
                <body className="bg-white text-black">
                <Nav/>
                {children}
                <Toaster />
                <Footer/>
                </body>
                </html>
            </Provider>
        </QueryClientProvider>
    );
}
