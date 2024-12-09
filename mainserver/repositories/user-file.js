// Load the node file system module
import fs from "fs";
// Path/file name to the product data
const UDATA_FILE = "..//MongoDB/db/users.json";

// console.log(fs.readFile(UDATA_FILE, function));
//Product userRepo object
const userRepo = {};
// Retrieve an array of product objects
userRepo.get = function (resolve, reject) {
	// Read from file
	fs.readFile(UDATA_FILE, function (err, data) {
		// Error invoke reject() callback
		if (err) {
			reject(err);
		} else {
			// Success Conert to json
			let products = JSON.parse(data);
			//Invoke revolve() callback
			resolve(products);
		}
	});
};

// Retrive single  product object
userRepo.getById = function (id, resolve, reject) {
	fs.readFile(UDATA_FILE, function (err, data) {
		if (err) {
			reject(err);
		} else {
			let products = JSON.parse(data);
			// Find the row by product id
			let product = products.find((row) => row.productID == id);
			//product is undefined if not found
			resolve(product);
		}
	});
};

//Search for one or many products
userRepo.search = function (search, resolve, reject) {
	if (search) {
		fs.readFile(UDATA_FILE, function (err, data) {
			if (err) {
				reject(err);
			} else {
				let products = JSON.parse(data);
				products = products.filter(
					(row) =>
						(search.name
							? row.name.toLowerCase().indexOf(search.name.toLowerCase()) >= 0
							: true) &&
						(search.listPrice
							? parseFloat(row.listPrice) > parseFloat(search.listPrice)
							: true)
				);
				resolve(products);
			}
		});
	}
};

//Insert a new product object
userRepo.insert = function (newData, resolve, reject) {
	fs.readFile(UDATA_FILE, function (err, data) {
		if (err) {
			reject(err);
		} else {
			let products = JSON.parse(data);
			products.push(newData);
			//stringify and save array to file
			fs.writeFile(UDATA_FILE, JSON.stringify(products), function (err) {
				if (err) {
					reject(err);
				} else {
					resolve(newData);
				}
			});
		}
	});
};

// Update an existing product object
userRepo.update = function (changeData, id, resolve, reject) {
	fs.readFile(UDATA_FILE, function (err, data) {
		if (err) {
			reject(err);
		} else {
			let products = JSON.parse(data);
			let product = products.find((row) => row.productID == id);
			if (product) {
				//move changed data to corresponding object
				Object.assign(product, changeData);
				//stringify product array save to file
				fs.writeFile(UDATA_FILE, JSON.stringify(products), function (err) {
					if (err) {
						reject(err);
					} else {
						resolve(product);
					}
				});
			}
		}
	});
};

// Delete an existin object
userRepo.delete = function (id, resolve, reject) {
	fs.readFile(UDATA_FILE, function (err, data) {
		if (err) {
			reject(err);
		} else {
			let products = JSON.parse(data);
			//Find product to delete
			let index = products.findIndex((row) => row.productID == id);
			if (index != -1) {
				// Remove row from array
				products.splice(index, 1);
				fs.writeFile(UDATA_FILE, JSON.stringify(products), function (err) {
					if (err) {
						reject(err);
					} else {
						resolve(index);
					}
				});
			}
		}
	});
};

export default userRepo;