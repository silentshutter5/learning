import { useMemo } from "react"
let items = [
    {id: 1, name: "Worm gummybears"},
    {id: 2, name: "Shark gummybears"},
    {id: 3, name: "Mint chocolate"},
];
const processedItems = (items) => {
    return items.map(item => ({ id: item.id, name: item.name.toUpperCase() }));
}
const DefaultApp = ({ items }) => {
    const memoizedItems = useMemo(() => processedItems(items), [items]);
    return (
        <ul>
            {memoizedItems.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
}
const App = () => <DefaultApp items={items} />;
export default App