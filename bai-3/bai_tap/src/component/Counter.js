import { useState } from "react";

function Counter() {
    let [count, setCount] = useState(0);
    let [countTwo, setCountTwo] = useState(0);
    const handleClick = () => {
        const newValue = count + 1;
        setCount(newValue);
    };
    const handleClick2 = () => {
        const newValue = countTwo + 2;
        setCountTwo(newValue);
    };

    return (
        <div>
            Count: {count}
            <div>
                <button onClick={handleClick}>Add 1</button>
            </div>
            Count: {countTwo}
            <div>
                <button onClick={handleClick2}>Add 2</button>
            </div>
        </div>
    );
}
export default Counter;