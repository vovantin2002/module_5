import { useState } from "react";

function useCounter(firstCount, step) {
    const [count, setCount] = useState(firstCount)
    const increment = () => {
        setCount((count) => count + step)
    }
    return [count, increment]
}

function Counter() {
    const [count1, setCount1] = useCounter(0, 1);
    const [count2, setCountTwo] = useCounter(0, 2);
    return (
        <div>
            <button onClick={setCount1}>Add 1</button>
            <p>Count: {count1}</p>
            <button onClick={setCountTwo}>Add 2</button>
            <p>Count: {count2}</p>
        </div>
    );
}
export default Counter;