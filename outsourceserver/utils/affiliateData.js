import fs from "fs";
const PDATA_FILE = "../db/product.json";
const CDATA_FILE = "../db/carts.json";
const UDATA_FILE = "../db/users.json";
const PoDATA_FILE = "../db/posts.json";
const CoDATA_FILE = "../db/comments.json";
const TDATA_FILE = "../db/todos.json";
const QDATA_FILE = "../db/quotes.json";
const RDATA_FILE = "../db/recipes.json";
class FetchData {
	static Affiliate = async (address, category, file) => {
		const req = await fetch(address);
		const data = await req.json();

		let newData = JSON.stringify(data[category]);
		fs.appendFile(file, newData, (err) => {
			if (err) reject(err);
		});
		return data;
	};

	static Products = () =>
		this.Affiliate(
			"https://dummyjson.com/products?limit=194",
			"products",
			PDATA_FILE
		);

	static Carts = () =>
		this.Affiliate("https://dummyjson.com/carts?limit=50", "carts", CDATA_FILE);

	static Recipes = () =>
		this.Affiliate(
			"https://dummyjson.com/recipes?limit=50",
			"recipes",
			RDATA_FILE
		);

	static Users = () =>
		this.Affiliate(
			"https://dummyjson.com/users?limit=208",
			"users",
			UDATA_FILE
		);

	static Posts = () =>
		this.Affiliate(
			"https://dummyjson.com/posts?limit=251",
			"posts",
			PoDATA_FILE
		);

	static Comments = () =>
		this.Affiliate(
			"https://dummyjson.com/comments?limit=340",
			"comments",
			CoDATA_FILE
		);
		
	static Todos = () =>
		this.Affiliate(
			"https://dummyjson.com/todos?limit=254",
			"todos",
			TDATA_FILE
		);

	static Quotes = () =>
		this.Affiliate(
			"https://dummyjson.com/quotes?limit=1454",
			"quotes",
			QDATA_FILE
		);

	static Login = async (uName, uPass) => {
		const req = await fetch("https://dummyjson.com/auth/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				username: uName,
				password: uPass,
				expiresInMins: 30, // optional, defaults to 60
			}),
		});
		const data = await req.json();
		return data;
	};

	static GetUserAuth = async (token) => {
		const req = await fetch("https://dummyjson.com/auth/me", {
			method: "GET",
			headers: {
				Authorization: token,
			},
		});
		const data = req.json();
		return data;
	};

	static RefreshSession = async () => {
		const req = await fetch("https://dummyjson.com/auth/refresh", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				refreshToken: "/* YOUR_REFRESH_TOKEN_HERE */",
				expiresInMins: 30, // optional, defaults to 60
			}),
		});

		const data = await req.json();
		return data;
	};
}
await FetchData.Carts();
export default FetchData;
