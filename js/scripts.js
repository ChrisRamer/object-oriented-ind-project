// Business Logic

function ShowDeliveryForm() {
	$(".deals-row").hide();
	$("#deliveryForm").fadeIn(500);
}

// User interface logic

$(document).ready(function () {
	$("#deliver").click(function (e) { 
		e.preventDefault();
		ShowDeliveryForm();
	});

	$("#delivery-form").submit(function (e) { 
		e.preventDefault();
		console.log("Form submitted!");
	});
});