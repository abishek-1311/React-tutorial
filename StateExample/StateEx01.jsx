import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0); // Declare state variable 'count'

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}
