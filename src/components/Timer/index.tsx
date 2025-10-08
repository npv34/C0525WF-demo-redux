"use client";

import {useAppSelector} from "@/redux/hooks";

function Timer() {
    const counter = useAppSelector(state => state.counter)

    return (
        <>
            Timer: {counter.value}
        </>
    )
}

export default Timer;