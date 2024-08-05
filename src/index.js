import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? ( //here we are using conditional rendering
        <>{/*here it (<></>) means react fragment so that means that here we wanted to render the <p>paragraph element about the pizza</p> with the menu but we could not do that seperately coz they need a single parent element which we solved it by wrapping inside <div></div> but it messes up the formatting so just need something like they can rendered seperately without the need of seperate parent and we achieved it using react fragment (i.e<></>) from lec at 2:00 -->So this is actually not really what we want.We do not want to render one elementwhich contains these two,but we really want to render these two elements here,so these two elements in separatewithout having one element as a parent of these two, right.And so this is the case in which we need a React Fragment.So a React Fragment basically lets us group some elements ithout leaving any trace in the HTML tree, so in the DOM.*/}
          { /*<></> <- we can also write <React.Fragment key="sometimes we need key"> </React.Fragment> and it would work the same */}
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu.Please come back later </p>
      )}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas\spinaci.jpg"
        price={ 10}
      />
      <Pizza
        name="Pizza Fungi"
        ingredients="Tomato,mushrooms"
        price={ 12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

// function Pizza(props) {here we are using the passed in props
function Pizza({ pizzaObj }) {
  //here we can directly access the prop-name by destructuring
  console.log(pizzaObj);

  // if (pizzaObj.soldOut) return null; //then the pizza that was soldOUt would not render

  return (
    // conditional way of adding classes👇
    <li className={`pizza ${pizzaObj.soldOut? 'sold-out':''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {/* {pizzaObj.soldOut?<span>SOLD OUT</span>:<span>pizzaObj.price</span>} */}
        <span>{pizzaObj.soldOut? "SOLD OUT":pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );

  // return React.createElement('footer',null,'We are currently open');
}

// function Order(props) {
function Order({ closeHour, openHour }) {
  //directly accessing the passed in prop(closeHour,closeHour) by destructuring
  /*So this is how we take a piece of JSX
when the JSX in a component is getting a little bit too big
and simply extract it into its own component.
And then if that JSX depends on some value
that was in the parent component, so like this close hour,
then we simply pass it in as a prop.
And so this is something that we're going to do all the time
when we build our React applications. */
  return (
    <div className="order">
      <p>
        We are open from {openHour}:00 to {closeHour}:00.Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// i have written many comments which describe many things about these compoents inside Test2.js but what its not working whenever i am using it so i have it as a sepreate file
