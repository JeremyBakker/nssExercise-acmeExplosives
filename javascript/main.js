/////////////////////////////
//    GLOBAL VARIABLES	   //
/////////////////////////////

let categories = [];
let types = [];
let products = [];


/////////////////////////////
//      AJAX REQUESTS      //
/////////////////////////////

let getCategories = () => {

	return new Promise ((resolve, reject) => {
		$.ajax({
			url:"categories.json",
			type: "GET",
			success: (categoryData) => {
				for (var i in categoryData) {
					categories[i] = categoryData[i];
				}
				resolve();
			},
			error: () => {reject("Product Categories Failed to Load");}
		});
	});
};

let getTypes = () => {

	return new Promise ((resolve, reject) => {
		$.ajax({
			url:"types.json",
			type: "GET",
			success: (typesData) => {
				for (var i in typesData) {
					types[i] = typesData[i];
				}
				resolve();
			},
			error: () => {reject("Product Types Failed to Load");}
		});
	});
};

let getProducts = () => {

	return new Promise ((resolve, reject) => {
		$.ajax({
			url:"products.json",
			type: "GET",
			success: (productsData) => {
				for (var i in productsData.products) {
					products[i] = productsData.products[i]; 	
				}
				resolve();
			},
			error: () => {reject("Products Failed to Load");}
		});
	});
};

getCategories().then(getTypes, console.error).then(getProducts, console.error);


/////////////////////////////
//       SELECT BOX        //
//     EVENT LISTENER      //
/////////////////////////////

$("#selectBox").change(() => {
	if (event.currentTarget.value === "consumer") {
	consumerProducts();
	}
	if (event.currentTarget.value === "professional"){
	professionalProducts();
	}
});


/////////////////////////////
//     FILLING THE DOM     //
/////////////////////////////

function consumerProducts() {
	console.log("Consumer Products");
	$("#cardContainer").empty();
	buildCardHolder("Consumer");
	buildConsumerCard();
};

function professionalProducts() {
	console.log("Professional Products");
	$("#cardContainer").empty();
	buildCardHolder("Professional");
	buildProfessionalCard();
};

function buildCardHolder(Category) {
	$("#cardContainer").append(`
		<h2 class="text-center">Product Category<h2>
		<h3 class="text-center">${Category}<h3>
		<div class="container">
		</div>
	`);
};

function buildConsumerCard() {
	for (var i = 0; i < types.types.length; i++) {
		console.log("Hello, container.");
		$(".container").append(
			`<div class="col-md-12 row">
				<h3 class="text-center">Type</h3>
				<h4 id=type${[i]} class="text-center">${types.types[i].name}</h4>   
    		</div>
    		<br>
    		`
    	);
	}
	for (var i = 0; i < Object.keys(products[0]).length; i++){
		if (Object.values(products[0])[i].type === 0 && Object.values(products[0])[i].category === 0) {
			$("#type0").append(
				`<h6>${Object.values(products[0])[i].name}</h6>
				<p>${Object.values(products[0])[i].description}</p>`
			);
		}
		if (Object.values(products[0])[i].type === 1 && Object.values(products[0])[i].category === 0) {
			$("#type1").append(
				`<h6>${Object.values(products[0])[i].name}</h6>
				<p>${Object.values(products[0])[i].description}</p>`
			);
		}
		if (Object.values(products[0])[i].type === 2 && Object.values(products[0])[i].category === 0) {
			$("#type2").append(
				`<h6>${Object.values(products[0])[i].name}</h6>
				<p>${Object.values(products[0])[i].description}</p>`
			);
		}
	}	
};

function buildProfessionalCard() {
	for (var i = 0; i < types.types.length; i++) {
		console.log("Hello, container.");
		$(".container").append(
			`<div class="col-md-12 row">
				<h3 class="text-center">Type</h3>
				<h4 id=type${[i]} class="text-center">${types.types[i].name}</h4>   
    		</div>
    		`
    	);
	}
	for (var i = 0; i < Object.keys(products[0]).length; i++){

		if (Object.values(products[0])[i].type === 0 && Object.values(products[0])[i].category === 1) {
			$("#type0").append(`
				<h6>${Object.values(products[0])[i].name}</h6>
				<p>${Object.values(products[0])[i].description}</p>`
			);
		}
		if (Object.values(products[0])[i].type === 1 && Object.values(products[0])[i].category === 1) {
			$("#type1").append(
				`<h6>${Object.values(products[0])[i].name}</h6>
				<p>${Object.values(products[0])[i].description}</p>`
			);
		}
		if (Object.values(products[0])[i].type === 2 && Object.values(products[0])[i].category === 1) {
			$("#type2").append(
				`<h6>${Object.values(products[0])[i].name}</h6>
				<p>${Object.values(products[0])[i].description}</p>`
			);
		}
	}	
};


