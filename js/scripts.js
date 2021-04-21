// Business logic for OrderPizza
function OrderPizza() {
  this.pizzas = {};
  this.currentId = 0;
}

OrderPizza.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
}

OrderPizza.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

OrderPizza.prototype.findPizza = function(id) {
  if (this.pizzas[id] != undefined) {
  return this.pizzas[id];
  } 
  return false;
}

// Business logic for Pizzas
function Pizza (topping, size) {
  this.topping = topping;
  this.size = size;
  this.price = 0;
}

Pizza.prototype.findCost = function() { // call it some
  if (this.size === "small") {
    this.price += 2;
  } else if (this.size === "medium") {
    this.price += 4;
  } else {
  this.price += 6;
  }
  if (this.toppings === "cheese") {
    this.price += 1;
  } else if (this.toopings === "Artichoke") {
    this.price += 2;
  } else {
    this.price += 3;
  }
  return this.price;
}

//For futute functionality 
// function showPizza(pizzaId, order) {
//   const pizza = order.findPizza(pizzaId);
//   $("#show-pizza").show();
//   $(".toppings").html(pizza.topping);
//   $(".size").html(pizza.size);
//   $(".price").html(pizza.price);// Price
// }
//For futute functionality 
// function attachPizzaListener(order) {
//   $("ul#pizza").on("click", "li", function() {
//   showPizza(this.id, order);
//   });

//For futute functionality 
// $("#buttons").on("click", ".deleteButton", function() {
//   orderPizza.deletePizza(this.id);
//   $("#show-pizza").hide();
//   displayPizzaDetails(orderPizza);
// });
// };

function displayPizzaDetails(orderPizzaToDisplay) {
  let orderList = $("ul#pizza");
  let htmlForPizzaInfo = "";
  Object.keys(orderPizzaToDisplay.pizzas).forEach(function(key) {
    const pizza = orderPizzaToDisplay.findPizza(key);
  htmlForPizzaInfo += "<li id=" + pizza.id + ">" + "Your topping: " + pizza.topping + 
  "<br>" +" The size: " + 
   pizza.size + " " 
  + "<br>" + "The cost of your pizza is: $ " +pizza.price + "</li>";
  })
  orderList.html(htmlForPizzaInfo);
};

$(document).ready(function() {
  let orderPizza = new OrderPizza();
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    const coco = $("#new-topping").val();//New
    const toto = $("#new-size").val();//New
    $("input#new-topping").val("");
    $("input#new-size").val("");
    
    //let cost = 0;//For futute functionality 
    let newPizza = new Pizza(coco, toto);//New
    orderPizza.addPizza(newPizza);
    let newPrice = newPizza.findCost();
    //attachPizzaListener(orderPizza);
    displayPizzaDetails(orderPizza);
  })
})
