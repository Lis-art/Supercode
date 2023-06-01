import Item from './Item'

const ItemList = () => {
    const itemArray = [
        {
            namen: "Tisch",
            beschreibung: "Guter Tisch",
            preis: 50,
        }, {
            namen: "Fisch",
            beschreibung: "Guter Fisch",
            preis: 50,
        }, {
            namen: "Brot",
            beschreibung: "Guter Tisch",
            preis: 50,
        },
    ]
/*     return(
        <>
            <p>Unser Angebot</p>
            <Item artikel={itemArray[0]} zustand = "okay" />
            <Item artikel={itemArray[1]} zustand = "okay" />
            <Item artikel={itemArray[2]} zustand = "okay" />
        </>
    ) */
    return(
        <>
            <p>Unser Angebot</p>
            {itemArray.map((item) => <Item artikel={item} />)}
        </>
    )
}
export default ItemList
