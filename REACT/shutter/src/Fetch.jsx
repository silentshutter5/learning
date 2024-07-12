import { useState } from 'react';


const useHookie = () => {
    const [count, setCount] = useState(0);

    //increment
    const increment = setCount(count + 1);

    //decrement
    const decrement = setCount(count - 1);

    return[count, increment, decrement];
};

export default useHookie;