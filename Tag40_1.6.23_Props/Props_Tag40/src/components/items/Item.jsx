const Item = (props) => {
    console.log(props);
    return(
        <li> {props.artikel.ToDo}</li>
    )
}
export default Item

// die Item Funktion wird definiert und enthält das Parameter Props

// Dieser Code rendert ein Listenelement, das den Text eines To-Do-Eintrags enthält. Das To-Do wird über die Props artikel übergeben, und der Wert des To-Do-Eintrags wird aus dem Objekt extrahiert, das als Wert der artikel-Prop übergeben wird. Das Listenelement wird dann mit diesem Text erstellt.