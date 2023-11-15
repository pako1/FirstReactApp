export default function Slot({ var1, var2, var3}) {
    const condition = var1 === var2 && var1 === var3;
    const style = { color: condition ? "green" : "red" };
    return (
        <div>
            <h1>{var1}{var2}{var3}</h1>
            <h3>{condition ? "You Win" : "You Lose"}</h3>
            {condition ? <h4 style={style}>Congrats</h4> : null}
        </div>
    )
}