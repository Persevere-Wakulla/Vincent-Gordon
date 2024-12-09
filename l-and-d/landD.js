// ********* GLOBAL VARIABLES ************* //
const product = document.getElementById("products");
const categories = document.getElementById("categories");
const user = document.getElementById("user");
const myProfile = document.getElementById("myProfile");
const shoppingCart = document.getElementById("shoppingCart");
const cart = document.getElementById("cart");
const search = document.getElementById("search");
const btn = document.querySelectorAll("button");
const signInBtn = document.getElementById("signInBtn");
const signUpBtn = document.getElementById("signUpBtn");
const storeLanding = document.getElementById("storeLanding");
const main = document.getElementById("main");
const signUpPage = document.getElementById("signUpPage");
const formCancelBtn = document.querySelector(".formCancelBtn");
const signInPage = document.getElementById("signInPage");
const formSignUpBtn = document.querySelector(".formSignUpBtn");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const profilePic = document.getElementById("profilePic");
const myAccount = document.querySelector(".myAccount");
const hiddenMenu = document.querySelector(".hiddenMenu");
const cartQuantity = document.querySelector(".quantity");
let basket = 0;
let activeCart = [];
let asyncUserInfo;
let asyncCartInfo;
let products = "products";
let users = "users";
let carts = "carts";
let api = "https://fakestoreapi.com/";
const res = await fetch(`${api}${products}`);
const asyncResult = await res.json();
let userImages = [
	"user-images/alvin.png",
	"user-images/avatar.png",
	"user-images/brownhair.png",
	"user-images/buisness man.png",
	"user-images/Copy-of-IMG_4979-2.png",
	"user-images/image-of-me-removebg-preview.png",
	"user-images/pascal.png",
	"user-images/pic2.png",
	"user-images/profile-pic-2.png",
	"user-images/Screenshot-2023-07-04-at-14.53.03-150x150.png",
];
// *********** EVENT LISTENERS ********** //

btn.forEach((elem, index, arr) => {
	elem.addEventListener("click", () => {
		let name = elem.textContent;
		console.log(name);
		let item = asyncResult.filter((item) => item.category === name);
		createCategory(item);
		if (name === "products") {
			showLanding(hiddenMenu, "none");

			createCategory(asyncResult);
		} else if (name === "LogOut") {
			showHome(storeLanding, main, "block", "none");
		} else if (name === "categories") {
			showLanding(hiddenMenu, "flex");
			showLanding(user, "none");
		}
	});
});
search.addEventListener("input", () => {
	mySearch(asyncResult);
});
// ********* FUNCTIONS ************ //
async function grabMore(api, users) {
	const res = await fetch(`${api}${users}`);
	const myUser = await res.json();
	asyncUserInfo = myUser;
}
async function grabCarts(api, carts) {
	const res = await fetch(`${api}${carts}`);
	const myUser = await res.json();
	asyncCartInfo = myUser;
}

const storeFront = document.getElementById("storeFront");
let star = "⭐";
let like = "👍";
function createCategory(arr) {
	let mapArr = arr.map((item) => {
		let ratingSystem = item.rating.rate + star;
		let likeSystem = item.rating.count + like;
		let card = ` <div id="singleCard">
                <div> <img src="${item.image}" alt="image" id="itemImg">
                    <span id="title">${item.title}</span>
                </div>
                <div><span id="description">${item.description}</span>
                    <span id="price">$${item.price}</span>`;
		card += `
                    <p id="ratings"><span id="votes">${likeSystem}</span> <span
                            id="stars">${ratingSystem}</span></p>
                </div>
            </div>
            `;
		return card;
	});
	// console.log(mapArr);
	mapArr = mapArr.join("");
	storeFront.innerHTML = mapArr;
}
let searchArr = [];
function mySearch(arr) {
	let query = search.value;
	searchArr = arr.filter((item) => {
		if (item.title.toLowerCase().includes(query.toLowerCase())) {
			return item;
		}
		createCategory(searchArr);
	});
	if (query && searchArr.length == 0) {
		alert("item does not exist");
	} else if (query === "") {
		createCategory(asyncResult);
	}
}

function showLanding(elem1, class1) {
	elem1.style.display = class1;
}

function showHome(elem1, elem2, class1, class2) {
	elem1.style.display = class1;
	elem2.style.display = class2;
}

function showCategories(elem1, elem2, elem3, class1, class2, class3) {
	elem1.style.display = class1;
	elem2.style.display = class2;
	elem3.style.display = class3;
}

function showAccount(elem1, elem2, elem3, elem4, class1, class2) {
	elem1.style.display = class1;
	elem2, (style.display = class2);
	elem3, (style.display = class2);
	elem4, (style.display = class2);
}

signInBtn.addEventListener("click", () => {
	showHome(signInPage, storeLanding, "block", "none");
	grabMore(api, users);
	setTimeout(() => {
		buildAccounts(asyncUserInfo, userImages);
	}, 1000);
});
signUpBtn.addEventListener("click", () => {
	showHome(signUpPage, storeLanding, "block", "none");
});
formCancelBtn.addEventListener("click", () => {
	showHome(storeLanding, signUpPage, "block", "none");
});
formSignUpBtn.addEventListener("click", (e) => {
	showHome(signInPage, signUpPage, "block", "none");
	grabMore(api, users);
	setTimeout(() => {
		buildAccounts(asyncUserInfo, userImages);
		console.log(asyncUserInfo);
	}, 1000);
});

categories.addEventListener("click", () => {
	showLanding(hiddenMenu, "flex");
});

function buildAccounts(arr, userImages) {
	for (let i = 0; i < arr.length; i++) {
		arr[i].image = "";
		for (let j = 0; j < 1; j++) {
			arr[i].image = userImages.pop();
		}
	}
	createAccountCard(arr);
}

function createAccountCard(arr) {
	let person = arr.map((item) => {
		let card = ` <div class="profileContainer" >
                    <img id="profilePic" src="${item.image}" alt="">
                    <div class="nameContainer">
                      <p id="firstName">${item.name.firstname}</p>
                      <p id="lastName">${item.name.lastname}</p>
                      <button class="profileLogin" type="button">${item.username}</button>
                    </div>
               </div>`;
		return card;
	});
	person = person.join("");
	myAccount.innerHTML = person;
}

myAccount.addEventListener("click", (e) => {
	let userName = e.target.textContent;
    console.log(asyncUserInfo,userName);
    
	grabCart(asyncUserInfo, userName);
});

function grabCart(asyncUserInfo, userName) {
	grabCarts(api, carts);
	setTimeout(() => {
		matchCartToBuyer(asyncUserInfo, asyncCartInfo, userName);
	}, 1000);
}

function matchCartToBuyer(asyncUserInfo, asyncCartInfo, userName) {
	const filterUser = asyncUserInfo.filter(
		(person) => person.username === userName
	);
	filterUser.forEach((id) => {
		const filterCart = asyncCartInfo.filter((cart) => cart.id === id.id);
		showCategories(main, signInPage, user, "block", "none", "flex");
		userCartPage(filterUser, filterCart, asyncResult);
	});
}

function userCartPage(userInfo, userCart, product) {
	// console.log(userInfo,userCart,product);
	saveInfo(userInfo);
	const userBasket = userCart.filter((item) => {
		let basket = item.products.forEach((item) => {
			let items = item.productId;
			let quantity = item.quantity;
			const indvidualItem = product.filter((item) => item.id === items);
			createCheckOutCard(indvidualItem, quantity, userInfo);
			return;
		});
	});
}

function createCheckOutCard(customersBasket, numOfItems, customerInfo) {
	basket += numOfItems;
	cartQuantity.textContent = `${Math.max(basket)}`;
	console.log(customersBasket, numOfItems, customerInfo);
	let basketDescription = customersBasket.map((item) => {
		const itemImg = document.createElement("img");
		const itemDiv = document.createElement("div");
		itemDiv.className = "flex";
		const itemTitle = document.createElement("h1");
		const itemPrice = document.createElement("p");
		const itemQuantity = document.createElement("p");
		itemImg.src = item.image;
		itemTitle.textContent = item.title;
		itemPrice.textContent = `$${item.price.toFixed(2)}`;
		itemQuantity.textContent = `Qty: ${numOfItems}`;
		console.log(itemImg);
		user.append(itemDiv);
		itemDiv.append(itemImg, itemTitle, itemPrice);
		itemPrice.append(itemQuantity);
	});
}

function saveInfo(customerInfo) {
	myProfile.addEventListener("click", (e) => {
		console.log(e, customerInfo);
		customerInfo.forEach((item) => {
			const customerCard = document.createElement("div");
			customerCard.className = "customerCard";
			const custPhone = document.createElement("p");
			custPhone.textContent = item.phone;
			const custUserName = document.createElement("p");
			custUserName.textContent = item.username;
			const custEmail = document.createElement("p");
			custEmail.textContent = item.email;
			const custImg = document.createElement("img");
			custImg.src = item.image;
			console.log(item.name);
			const custAddressDiv = document.createElement("div");
			const custStreet = document.createElement("p");
			custStreet.textContent = item.address.street;
			const custCity = document.createElement("p");
			custCity.textContent = item.address.city;
			const custHouse = document.createElement("p");
			custHouse.textContent = item.address.number;
			const custZipCode = document.createElement("p");
			custZipCode.textContent = item.address.zipcode;

			const custName = document.createElement("h1");
			custName.textContent = `${item.name.firstname} ${item.name.lastname}`;

			user.append(customerCard);
			customerCard.append(
				custImg,
				custName,
				custPhone,
				custEmail,
				custUserName
			);
			customerCard.append(custAddressDiv);
			custAddressDiv.append(custStreet, custHouse, custZipCode, custCity);
		});
	});
}
