export default function ShoppingListItem({ id, completed, item, quantity }) {
    const style = { color: completed ? "grey" : "red", textDecoration: completed ? "line-through" : "none" }
    return (<li key={id} style={style}>  {item} - {quantity} </li>);

}