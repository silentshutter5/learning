// import Navbar from './Navbar'

// const Home = ()=>{
//     return(
//         <div>
//             <Navbar />
//             <h1>Home</h1>
//         </div>
//     )
// }

// export default Home

import { usereducer } from "react";

const reducer = (state, action) => {

    switch(action.type){
        case "increment":
            return + 1;
        case "decreament":
            return - 1;

        
    }
}
