//main.js
import { getOrders, addNewOrder } from "./orders.js";

document.getElementById("app").innerHTML = `
<h1> Dagwood's Sub Shop</h1>
<div class = >
  <h3> Please Make Your Sandwich</h3>
  <div class= "subForm">
    <div class= "bread">
            <p><b>Pick your bread</b></p>
                <input id ="flatbread" name="bread" type="radio" value="flatbread" />
                <label for="flatbread">Flatbread</label>
                <input id ="Wheat" name="bread" type="radio" value="Wheat" />
                <label for="Wheat">Wheat</label>
                <input id ="White" name="bread" type="radio" value="White" />
                <label for="White">White</label>
                <input id ="Asiago Cheese" name="bread" type="radio" value="Asiago Cheese" /
                <label for="Asiago Cheese">Asiago Cheese</label>
                <input id ="Italian Herb and Cheese" name="bread" type="radio" value="Italian Herb and Cheese" />
                <label for="Italian Herb and Cheese">Italian Herb and Cheese </label>
            </div>
            <div class ="meat">
            <p><b>Choose Your Meat</b></p>
                <input id="Smoked Ham" name="meat" type="radio" value="Smoked Ham" />
                <label for="Smoked Ham">Smoked Ham</label>
                <input id="Turkey" name="meat" type="radio" value="Turkey" />
                <label for="Turkey">Turkey</label>
                <input id="Salami" name="meat" type="radio" value="Salami" />
                <label for="Salami">Salami</label>
                <input id="Chicken" name="meat" type="radio" value="Chicken" />
                <label for="Chicken">Chicken</label>
            </div>
            <br>
            <div class="vegetables"
            <p><b>Pick your Vegetables (Select all that apply)</b></p>
            <ul>
                <li>
                    <input id="Avocado" name="vegetables" type="checkbox" value="Avocado" />
                    <label for="Avocado">Avocado</label>
                </li>
                <li>
                    <input id="Carrots" name="vegetables" type="checkbox" value="Carrots" />
                    <label for="Carrots">Carrots</label>
                </li>
                <li>
                    <input id="Cucumbers" name="vegetables" type="checkbox" value="Cucumbers" />
                    <label for="Cucumbers">Cucumbers</label>
                </li>
                <li>
                    <input id="Lettuce" name="vegetables" type="checkbox" value="Lettuce" />
                    <label for="Lettuce">Lettuce</label>
                </li>
                <li>
                    <input id="Spinach" name="vegetables" type="checkbox" value="Spinach" />
                    <label for="Spinach">Spinach</label>
                </li>
                <li>
                    <input id="Spinach" name="vegetables" type="checkbox" value="Spinach" />
                    <label for="Spinach">Spinach</label>
                </li>
                <li>
                    <input id="Jalapeno" name="vegetables" type="checkbox" value="Jalapeno" />
                    <label for="Jalapeno">Jalapeno</label>
                </li>
                <li>
                    <input id="Olives" name="vegetables" type="checkbox" value="Olives" />
                    <label for="Olives">Olives</label>
                </li>
                <li>
                    <input id="Pickles" name="vegetables" type="checkbox" value="Pickles" />
                    <label for="Pickles">Pickles</label>
                </li>
            </div>
            <div class="Sauces"
            <p><b>Pick your Sauce (Select all that apply)</b></p>
            <ul>
                <li>
                    <input id="Habanero Hot Sauce" name="sauces" type="checkbox" value="Habanero Hot Sauce" />
                    <label for="Habanero Hot Sauce">Habanero Hot Sauce</label>
                </li>
                <li>
                    <input id="Blue Cheese Dressing" name="sauces" type="checkbox" value="Blue Cheese Dressing" />
                    <label for="Blue Cheese Dressing">Blue Cheese Dressing</label>
                </li>
                <li>
                    <input id="Smoky BBQ" name="sauces" type="checkbox" value="Smoky BBQ" />
                    <label for="Smoky BBQ">Smoky BBQ</label>
                </li>
                <li>
                    <input id="Chipotle Southwest" name="sauces" type="checkbox" value="Chipotle Southwest" />
                    <label for="Chipotle Southwest">Chipotle Southwest</label>
                </li>
                <li>
                    <input id="Mayonnaise" name="sauces" type="checkbox" value="Mayonnaise" />
                    <label for="Mayonnaise">Mayonnaise</label>
                </li>
                <li>
                    <input id="Garlic Aioli" name="sauces" type="checkbox" value="Garlic Aioli" />
                    <label for="Garlic Aioli">Garlic Aioli</label>
                </li>
                <li>
                    <input id="Sweet Onion" name="sauces" type="checkbox" value="Sweet Onion" />
                    <label for="Sweet Onion">Sweet Onion</label>
                </li>
                <li>
                    <input id="Honey Mustard" name="sauces" type="checkbox" value="Honey Mustard" />
                    <label for="Honey Mustard">Honey Mustard</label>
                </li>
                <li>
                    <input id="Ranch Dressing" name="sauces" type="checkbox" value="Ranch Dressing" />
                    <label for="Ranch Dressing">Ranch Dressing</label>
                </li>
                <li>
                    <input id="Tomato Sauce" name="sauces" type="checkbox" value="Tomato Sauce" />
                    <label for="Tomato Sauce">Tomato Sauce</label>
                </li>
                <li>
                    <input id="Spicy Mayo" name="sauces" type="checkbox" value="Spicy Mayo" />
                    <label for="Spicy Mayo">Spicy Mayo</label>
                </li>
            </div>
            <div class="extras">
                <label for="specialInstructions">Notes/Special Instructions</label>
            <div>
                <textarea id="specialInstructions"></textArea>
            </div>
            </div>
            <div>
      <button id="submitOrder">Submit Order</button>
    </div>
    <h3>Recent Orders</h3>
  </div>
   </div>
    </div>
    <div id ="orders"></div>
</div>`;

const displayOrders = () => {
  let taco = "";
  for (const order of getOrders()) {
    taco += `<ul>
        <li>Bread: ${order.bread}</li>
        <li>Meat: ${order.meat} </li>
        <li>Vegetables: ${order.vegetables} </li>
        <li>Sauces: ${order.sauces}
        <li>Instructions: ${order.instructions}</li>
        </ul>`;
  }
  return taco;
};

document.getElementById("orders").innerHTML = displayOrders();

document.addEventListener("click", (e) => {
  if (e.target.id === "submitOrder") {
    let breadOrder = document.querySelector("input[name=bread]")?.value;
    const meatElements = document.querySelector("input[name=meat]:checked")?.value;
    const myVegetables = document.querySelectorAll("input[name=vegetables]:checked");
    const mySauces = document.querySelectorAll("input[name=sauces]:checked");
    const vegetablesArray = []
    myVegetables.forEach(vegetableElement => {vegetablesArray.push(vegetableElement.value)})  
    
    const saucesArray = []
    mySauces.forEach(sauceElement => {saucesArray.push(sauceElement.value)}) 
    
    
    const notes = document.getElementById("specialInstructions")?.value
    let newOrder = {
      id: "",
      bread: breadOrder,
      meat: meatElements,
      vegetables: vegetablesArray,
      sauces: saucesArray,
      instructions: notes,
    }
    addNewOrder(newOrder);
  }

});

document.addEventListener("stateChanged", (event) => {
  document.getElementById("orders").innerHTML = displayOrders();
});
