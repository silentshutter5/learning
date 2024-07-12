import useHookie from './Fetch';

const Appps = () => {

    const [count, increment, decrement] = useHookie();

     return (
         <div>
             <p>Count: {count}</p>
           <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
         </div>

     )};

   export default Appps 