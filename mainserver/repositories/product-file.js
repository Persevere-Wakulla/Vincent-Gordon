// Load the node file system module
import fs from "fs";
// Path/file name to the product data
const PDATA_FILE = "..//OutSource/db/product.json";

// console.log(fs.readFile(PDATA_FILE, function));
//Product productRepo object
const productRepo = {};
// Retrieve an array of product objects
productRepo.get = function (resolve, reject) {
	// Read from file
	fs.readFile(PDATA_FILE, function (err, data) {
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
productRepo.getById = function (id, resolve, reject) {
	fs.readFile(PDATA_FILE, function (err, data) {
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
productRepo.search = function (search, resolve, reject) {
	if (search) {
		fs.readFile(PDATA_FILE, function (err, data) {
			if (err) {
				reject(err);
			} else {
				let products = JSON.parse(data);
				products = products.filter(
					(row) =>
					(search.name ?
						row.name.toLowerCase().indexOf(search.name.toLowerCase()) >= 0 :
						true) &&
					(search.listPrice ?
						parseFloat(row.listPrice) > parseFloat(search.listPrice) :
						true)
				);
				resolve(products);
			}
		});
	}
};

//Insert a new product object
productRepo.insert = function (newData, resolve, reject) {
	fs.readFile(PDATA_FILE, function (err, data) {
		if (err) {
			reject(err);
		} else {
			let products = JSON.parse(data);
			products.push(newData);
			//stringify and save array to file
			fs.writeFile(PDATA_FILE, JSON.stringify(products), function (err) {
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
productRepo.update = function (changeData, id, resolve, reject) {
	fs.readFile(PDATA_FILE, function (err, data) {
		if (err) {
			reject(err);
		} else {
			let products = JSON.parse(data);
			let product = products.find((row) => row.productID == id);
			if (product) {
				//move changed data to corresponding object
				Object.assign(product, changeData);
				//stringify product array save to file
				fs.writeFile(PDATA_FILE, JSON.stringify(products), function (err) {
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
productRepo.delete = function (id, resolve, reject) {
	fs.readFile(PDATA_FILE, function (err, data) {
		if (err) {
			reject(err);
		} else {
			let products = JSON.parse(data);
			//Find product to delete
			let index = products.findIndex((row) => row.productID == id);
			if (index != -1) {
				// Remove row from array
				products.splice(index, 1);
				fs.writeFile(PDATA_FILE, JSON.stringify(products), function (err) {
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

export default productRepo;