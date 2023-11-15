import ShoppingListItem from "./ShoppingListItem";

export default function ShoppingList({ items }) {
    return (
        <ul>
            {items.map(shoppingItem =>
                <ShoppingListItem
                    key={shoppingItem.id}
                    id={shoppingItem.id}
                    //alternatively instead of passing everything like that you can do :{...shoppingItem}
                    item={shoppingItem.item}
                    quantity={shoppingItem.quantity}
                    completed={shoppingItem.completed} />
            )}
        </ul>
    )
}