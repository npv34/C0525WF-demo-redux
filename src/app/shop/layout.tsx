"use client"

import Header from "@/components/Shop/Header";

// @ts-ignore
function ShopLayout({children}) {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}

export default ShopLayout;