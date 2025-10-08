"use client"
import {useAppDispatch} from "@/redux/hooks";
import {addToCart} from "@/redux/features/cart/cartSlice";

function ProductList() {

    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(addToCart(10))
    }

    return (
        <>
            Xiaomi:
            <button
                onClick={handleClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to cart
            </button>
        </>
    )
}

export default ProductList;