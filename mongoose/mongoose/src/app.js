const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/miniproject", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connection successful......."))
  .catch((err) => console.log(err));


//   const vegetableSchema = new mongoose.Schema({
//     name: {
//       type: String,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     quantityAvailable: {
//       type: Number,
//       required: true,
//     },
//     // Add more fields as needed for your vegetable distributor website
//   });
//   const Vegetable = mongoose.model("Vegetable", vegetableSchema);

// // Export the model to use it in other parts of your application
// module.exports = Vegetable;


// const Vegetable = require("./models/vegetable"); // Adjust the path based on your project structure

// const newVegetable = new Vegetable({
//   name: "Carrot",
//   description: "Fresh and crunchy carrots",
//   price: 1.5,
//   quantityAvailable: 100,
// });

// newVegetable.save()
//   .then(() => console.log("Vegetable added successfully"))
//   .catch((err) => console.log(err));
  
// db.createCollection("customers");

// db.customers.insert({
//   "name": String,
//   "address": String,
//   "phone": Number,
//   "orders": [
//     {
//       "date": ISODate("2023-12-08"),
//       "items": [
//         {
//           "product_id": ObjectId("product_id"),
//           "quantity": Number
//         },
//         // ... other item details
//       ]
//     },
//     // ... other orders
//   ]
// });

// db.createCollection("products");

// db.products.insert({
//   "name": "Product Name",
//   "description": "Product Description",
//   "price": 5.99,
//   "stock": 100
// });

// db.createCollection("suppliers");

// db.suppliers.insert({
//   "name": "Supplier Name",
//   "address": "Supplier Address",
//   "phone": "Supplier Phone",
//   "products": [
//     ObjectId("product_id"),
//     // ... other product ids supplied by this supplier
//   ]
// });

// db.createCollection("orders");

// db.orders.insert({
//   "customer_id": ObjectId("customer_id"),
//   "date": ISODate("2023-12-08"),
//   "items": [
//     {
//       "product_id": ObjectId("product_id"),
//       "quantity": 10
//     },
//     // ... other item details
//   ]
// });
const coustomerSchema = new mongoose.Schema({
    "id":Number,
    "name": String,
      "address": String,
      "phone": Number,
      "orders": [
        {
          "date":Date,
          "items": [
            {
              "product_id": Number,
              "quantity": Number
            },
           
          ]
        },
        
      ]
    });

    const coustomerveg = new mongoose.model("coustomer",coustomerSchema);

    const productsSchema = new mongoose.Schema({
        "id":Number,
        "name": String,
          "description": String,
          "price": Number,
          "stock" : Number
    });
    const productveg = new mongoose.model("product",productsSchema);

    const supplierSchema = new mongoose.Schema({
        "id":Number,
        "name": String,
        "address":String,
        "phone" : Number,
        "product_id":Number
            
        
    });
    const supplierveg = new mongoose.model("supplier",supplierSchema);

    const ordersSchema = new mongoose.Schema({
        "id":Number,
        "coustomer_id" : Number,
        "date" : Date,
        "items":[
            {
                "product_id":Number,
                "quantity":Number

            },
            
        ]
    });
    const ordersveg = new mongoose.model("order",ordersSchema);
 
    


         


    



    
