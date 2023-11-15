import './App.css';
import Slot from './Slot';
import ShoppingList from './ShoppingList';

const data = [
  { id: 1, item: "eggs", quantity: 12, completed: false },
  { id: 2, item: "milk", quantity: 1, completed: true },
  { id: 3, item: "carrots", quantity: 4, completed: false },
  { id: 4, item: "chicken breasts", quantity: 6, completed: true }
]
function App() {
  return (
    <div>
      <ShoppingList items={data} />
    </div>
    /*    <div>
        <h1>hey</h1>
      <Slot var1='🍒' var2='🍒' var3='🍒' />
        <Slot var1='🍒' var2='🍌' var3='🍒' /
      </div>
      >*/
  )
}

export default App


//Steps in order to create a vite project 
//1. npm create vite@latest -> configure it by giving a name, package name(it will create for you the dir) use vite and then javascript (3rd option)
//2. use npm install to get all the dependencies 
//3. npm run dev starts the server and you can see the result 