"use client"

import {useAppSelector} from "@/redux/hooks";

function Header() {

    const cart = useAppSelector(state => state.cart)

    return (
        <>
            <div>
                Header: Cart({cart.totalQuantity})
            </div>
        </>
    )
}

export default Header;