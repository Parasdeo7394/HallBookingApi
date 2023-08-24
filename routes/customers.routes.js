const express = require("express");


const 
{helloWorld,
  getAllCustomers,
  addCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomerById,
  deleteAllCustomers
} = require("../controllers/customers.controllers")

const router = express.Router();

router.get("/", helloWorld);

router.get("/customers", getAllCustomers);

router.post("/customers", addCustomer);

router.get("/customers/:customerId", getCustomerById);

router.put("/customers/:customerId", updateCustomer);

router.delete("/customers/:customerId", deleteCustomerById);

router.delete("/customers", deleteAllCustomers);

module.exports = router;