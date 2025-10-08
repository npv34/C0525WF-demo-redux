"use client"

import Counter from "@/components/Counter";
import Timer from "@/components/Timer";

function CounterPage() {
    return (
        <>
            <Counter/>
            <div>
                <Timer/>
            </div>
        </>
    )
}

export default CounterPage;