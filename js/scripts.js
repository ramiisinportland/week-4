// Business logic for OrderPizza
"use strict"

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
// This is a price function 
Pizza.prototype.findCost = function() { // call it some
  if (this.size === "small") {
    this.price += `Your Total cost: $2`;
  } else if (this.size === "medium") {
    this.price += `Your Total cost: $4`;
  } else if (this.size === "large") {
  this.price += `Your Total cost: $6`;
  } 
  console.log(this.price);
  return this.price;
}

// UI Logic 
function showPizza(pizzaId) {
  const pizza = pizza.findPizza(pizzaId);
  $("#show-pizza").show();
  $(".toppings").html(pizza.topping);s
  $(".size").html(pizza.size);
  $(".price").html(pizza.price);// Price
  
}

function attachPizzaListener() {
  $("ul#pizza").on("click", "li", function() {
   showPizza(this.id);
  });


$("#buttons").on("click", ".deleteButton", function() {
  orderPizza.deletePizza(this.id);
  $("#show-pizza").hide();
  displayPizzaDetails(orderPizza);
});
};

function displayPizzaDetails(orderPizzaToDisplay) {
  let orderList = $("ul#pizza");
  let htmlForPizzaInfo = "";
  Object.keys(orderPizzaToDisplay.pizzas).forEach(function(key) {
    const pizza = orderPizzaToDisplay.findPizza(key);
  htmlForPizzaInfo += "<li id" + pizza.id + ">" + "Your topping: " + pizza.topping + 
  "<br>" +" The size: " + 
   pizza.size + " " 
  + "<br>" + pizza.price + "</li>";
  });
  orderList.html(htmlForPizzaInfo);
};

let orderPizza = new OrderPizza();
$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    const coco = $("#new-topping").val();//New
    const toto = $("#new-size").val();//New
    $("input#new-topping").val("");
    $("input#new-size").val("");
    
    let cost = 0;
    let newPizza = new Pizza(coco, toto, cost);//New
    orderPizza.addPizza(newPizza);
    let newPrice = newPizza.findCost();
    attachPizzaListener();
   displayPizzaDetails(orderPizza);
  })
})