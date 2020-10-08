// Business Logic

const tax = 1234567890;

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
	let price;

	switch (this.size) {
		case Small:
			price += 500;
			break;
		case Medium:
			price += 1000;
			break;
		case Large:
			price += 2000;
			break;
		case ExtraLarge:
			price += 99999999;
			break;
	}

	for (var i = 0; i < this.toppings.length; i++) {
		price += 1000;
	}

	return price;
}

function ShowDeliveryForm() {
	$(".deals-row").hide();
	$("#deliveryForm").fadeIn(500);
}

// User interface logic

let pizza = new Pizza();

$(document).ready(function () {
	$("#deliver").click(function (e) { 
		e.preventDefault();
		ShowDeliveryForm();
	});

	$("#dilivery-form").submit(function (e) { 
		e.preventDefault();
		const size = $("#pizzaSizeInput").val();
		const toppings = $("#pizzaToppingsInput").val();
		const crust = $("#pizzaCrustInput").val();
		pizza.makePizza(size, toppings, crust);
	});
});