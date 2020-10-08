// Business Logic

const deliveryFee = 420;

function Pizza() {
	this.size = "Large";
	this.toppings = [];
	this.crust = "Regular";
}

Pizza.prototype.makePizza = function(size, toppings, crust) {
	this.size = size;
	this.toppings = toppings;
	this.crust = crust;
}

Pizza.prototype.getPrice = function() {
	let price = 0;

	switch (this.size) {
		case "Small":
			price += 500;
			break;
		case "Medium":
			price += 1000;
			break;
		case "Large":
			price += 2000;
			break;
		case "ExtraLarge":
			price += 5000;
			break;
	}

	for (var i = 0; i < this.toppings.length; i++) {
		price += 1000;
	}

	switch (this.crust) {
		case "Regular":
			price += 250;
			break;
		case "Thick":
			price += 750;
			break;
		case "Thin":
			price += 500;
			break;
	}

	return price + deliveryFee;
}

function ShowPizzaForm(form) {
	$(".deals-row").hide();
	$(".order-row").hide();
	if (form === "deliver") {
		$("#deliveryForm").fadeIn(500);
	}
	else if (form  === "pickup") {
		$("#pickupForm").fadeIn(500);
	}
}

function OrderPizza() {
	const size = $("#pizzaSizeInput").val();
	const toppings = $("#pizzaToppingsInput").val();
	const crust = $("#pizzaCrustInput").val();
	pizza.makePizza(size, toppings, crust);
	$("#deliveryForm").hide();
	$("#pickupForm").hide();
	$("#paymentForm").show();
	$("#pizzaSize").text("Size: " + pizza.size);
	$("#pizzaToppings").text("Toppings:  " + pizza.toppings);
	$("#pizzaCrust").text("Crust: " + pizza.crust);
	$("#taxCost").text("Delivery: $" + deliveryFee + " Rupeess");
	$("#totalCost").text("Total: " + pizza.getPrice() + " Rupees");
}

// User interface logic

let pizza = new Pizza();

$(document).ready(function () {
	$("#deliver").click(function (e) { 
		e.preventDefault();
		ShowPizzaForm("deliver");
	});

	$("#pickup").click(function (e) { 
		e.preventDefault();
		ShowPizzaForm("pickup");
	});

	$("#dilivery-form").submit(function (e) { 
		e.preventDefault();
		OrderPizza();
	});

	$("#pickup-form").submit(function (e) { 
		e.preventDefault();
		OrderPizza();
	});

	$("#confirmPayment").click(function (e) { 
		e.preventDefault();
		$("#paymentForm").hide();
		$("#confirmation").show();
	});

	$("#toHome").click(function (e) { 
		location.reload();
	});
});