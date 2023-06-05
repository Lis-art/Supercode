import Item from "./Item.jsx"

const ItemList = () => {
    const itemArray = [
        {
            ToDo: "Bug Grocery",   
        },{
            ToDo: "Send Email",
        },{
            ToDo: "Finish Assignment",
        },{
            ToDo: "Write Blog",
        },{
            ToDo: "Bake Cake",
        }
    ]
    return (
        <>
        <h1>My ToDos</h1>
        <ul>
        {itemArray.map((item, index) => 
        <Item 
        artikel={item} 
        key={index} />)}
        </ul>
        </>
    )
}
export default ItemList