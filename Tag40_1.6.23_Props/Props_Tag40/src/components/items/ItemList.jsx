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
    // itemArray enthält Key/Value Paare und wird mit der Map Methode weiter verarbeitet
    // Object welches ToDo als Key und "Send Email" als Value 
    // 
    return (
        <>
        <h1>My ToDos</h1>
        <ul>
        {itemArray.map((item, index) => 
        <Item artikel={item} key={index} />)}
        </ul>
        </>
    )
    // Mit Map Methode können Values Parametern zugewiesen werdem
    // Artikel sind hier die Items des Array und der Key entspricht dem Index der einzelnen Elemente
    // Für jedes ToDo wird die Komponente Item gerendert um die einzelnen Items anzeigen zu lassen 
    //Das To-Do wird über die Props artikel erhalten und der Eigenschaft ToDo des Objekts entnommen.

}
export default ItemList