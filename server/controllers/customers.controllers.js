const Customers = require("../models/customer.model");
const mongoose = require("mongoose");

exports.helloWorld = (req, res) => {
  console.log("USERNAME: ", process.env.USERNAME);
  console.log("PASSWORD: ", process.env.PASSWORD);
  res.send({
    message: "hello world",
  });
};

exports.getAllCustomers = (req, res) => {
  try {
    Customers .find()
      .then((data) => {
        res.status(200).send({
          message: "customers have been retrieved successfully",
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while retrieving Users data.",
          error: error,
        });
      });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.getCustomerById = (req, res) => {
  try {
    const customerId = req.params.customerId;
    Customers.findOne({ _id: new mongoose.Types.ObjectId(customerId) })
      .then((data) => {
        if (!data) {
          return res.status(200).send({
            message: "No customer found with the given Id",
          });
        }
        res.status(200).send({
          message: "customer has been retrieved successfully",
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while retrieving User data.",
          error: error,
        });
      });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).send({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.addCustomer = (req, res) => {
  try {
    const payload = req.body;

    const newUser = new Customers(payload);

    newUser
      .save()
      .then((data) => {
        res.status(200).send({
          message: "customer has been added successfully",
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while adding a new user.",
          error: error,
        });
      });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.updateCustomer = (req, res) => {
  try {
    const customerId = req.params.customerId;

    const payload = req.body;

    Customers.findByIdAndUpdate(
      { _id: new mongoose.Types.ObjectId(customerId) },
      { $set: { ...payload } }
    )
      .then((data) => {
        res.status(200).send({
          message: "customer has been updated successfully",
          customerId: data._id,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while updating an user.",
          error: error,
        });
      });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).send({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.deleteCustomerById = (req, res) => {
  try {
    const customerId = req.params.customerId;

    Customers .deleteOne({ _id: new mongoose.Types.ObjectId(customerId) })
      .then((data) => {
        res.status(200).send({
          message: "customer has been deleted successfully",
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while deleting an user.",
          error: error,
        });
      });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error,
    });
  }
};

exports.deleteAllCustomers = (req, res) => {
  try {
    Customers .deleteMany()
      .then((data) => {
        res.status(200).send({
          message: "customers have been deleted successfully",
          data: data,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "Error while deleting users.",
          error: error,
        });
      });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error,
    });
  }
};