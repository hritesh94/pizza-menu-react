//Module bundler expects the entry point to be called index.js so thats why we need to name it index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import ReactDOM from "react-dom/"; react 17

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//component👇
function App() {
  //also like everything is renedered be app only
  //its not neccessary to call this 'App' but its a convention also its first letter should start with capital like here "A"
  return (
    //here it can only return only 1 element so this is why we are using div which returns all the elements inside it as div is only one
    <div className="container">
      <Header />
      <Menu />
      <Footer />
      {/*We nested this pizza inside this app component but we should not nest like the whole function pizza inside the app it will still work but its a bad practice lec 36 at 3:36  ,so never nest the function declaration but always declare them in the top level*/}
    </div>
  );
}

function Header() {
  // so to use or include style we inside jsx we need to write 'style' like we do in HTML but here we need to include object inside like this style={object} and this "object"={can contain any description of styling} like we did with h1
  // const style = { color: 'red', fontSize: '48px', textTransform: 'uppercase' };
  // return <h1 style={style}>Fast React Pizza Co.</h1>;

  const style = {};

  return (
    <Header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </Header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {/*here we write props(it stands for property) that is inside where are rendering 
          <Pizza 
          name='value' ingredients='value' photoName='' <-- this are all props 
          price={ 12}//to activate the 'js' mode we need to write {}

           */}
      {/* so now to render lists of pizza from pizzaData object we need to create a div element and inside we will use map function to map every element of object PizzaData to display 
           like this👇
          <div>
        {pizzaData.map(pizza => <Pizza pizzaObj={pizza} <====== here instead of passing manually like name={pizzaData.name}  we can just pass in the pizza objects as a prop and use it inside the child element 
        
        />)}
      </div>
      */}
      <div>
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
        {/* we also need key to identify each element coz react requires it for better optimization */}

        {/* also we could have directly written the list components like this👇
          {pizzaData.map(pizza => <Pizza
          
           <img src={pizzaphotoName} alt={pizza.name}></img>
              <h3>{pizza.name}</h3>
                <p>{pizza.ingredients}</p>/>)}


                so all that matters here is we return the JSX 
         */}
      </div>
      <Pizza />
      <Pizza />
    </main>
  );
}

/*another fundamental React concept, which is props.

And props is essentially

how we pass data between components.

And in particular, from parent components

to child components.

So we can imagine props as being

like a communication channel

between a parent and a child component. */

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // console.log(hour);
  //SO in strict mode our components are rendered twice so thats we get the alert or the console.log(hour) twice
  // if ( hour >= openHour && hour <= closeHour) alert("We are currently open");
  // else alert("Sorry we are closed");

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We are currently open
    </footer>
  );

  // return React.createElement('footer',null,"We are currently open")
}

function Pizza(props) {
  //here we are receiving props i.e the props
  //when writing components the function name should start with Uppercase letter and the function should return a markup
  return (
    <div>
      {/*now we can use props which is an object */}
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
      <h3>{props.pizzaObj.name}</h3>
      <p>{props.pizzaObj.ingredients}</p>
      {/* now 👆 here as you can we are using passed in pizzaObj that was passed from parentElement as map and we are using it here as prop so this way we can render lists lec46 at like 4:00 */}
    </div>
  );
}

//react 18v
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before 18v
// ReactDOM.render(<App />,document.getElementById("root"));
