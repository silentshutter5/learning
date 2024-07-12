import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const App = () => {
    //global states
    const [items, setItems] = useState([]);
    function handleItems(item){
        setItems((items) => [...items, item])
    }
    const onRemove = (id) => {
        setItems(items.filter((item) => item.id !== id));
    }
    return (
        <div>
            <Header />
            <Nav handleItems={handleItems} />
            <Listarea items={items} onRemove={onRemove}/>
            <Footer items={items}/>
        </div>
    );
}
const Header = () => {
    return <h2 className="text-red-700">ToDo List</h2>
}
const Nav = ({handleItems}) => {
    //local state
    const [name, setName] = useState("");
    const handleClick = () => {
        const newItem = {name, id: uuidv4()};
        handleItems(newItem);
        setName("");
    }


    return (
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleClick}
        className="bg-gray-600 hover:bg-orange-700 text-white font-bold py-1 px-1 rounded"
  >Add Task</button>

        </>
    );
}
const Listarea = ({items, onRemove}) => {
    return (
        <>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>Name:{item.name}  <button type="button" onClick={()=> onRemove(item.id)} class="bg-gray-700 hover:bg-orange-700 text-white font-bold py-1 px-1 rounded"
                    > Remove</button></li>
                ))}
            </ul>
        </>
    );
}

const List = ({ list }) => {
    return (
        <>
        <ul>
            {items.map((item) => (
                <li key={item.id}>{item.name} </li>

            ))}
        </ul>
        </>
    )
}

const Footer = ({items}) => {
    return (
        <>
        {items.length !== 0 ? (
            <p>You have <b>{items.length}</b>  tasks in your pipeline</p>
        ) : (
            <p>You can start adding tasks</p>
        )}
        </>
    );
}

export default App
