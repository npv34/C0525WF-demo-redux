"use client";

import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {increment} from "@/redux/features/counter/counterSlice";

function Counter() {
    const counter = useAppSelector(state => state.counter)
    const dispatch = useAppDispatch()


    const handleClick = () => {
        dispatch(increment())
    }

    return (
        <>
            Counter: {counter.value}
            <button
                onClick={handleClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                +
            </button>
        </>
    )
}

export default Counter;