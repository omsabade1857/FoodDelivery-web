import { Schema } from "mongoose";




const customerSchema = new Schema({
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
    export const Admin=customerSchema;