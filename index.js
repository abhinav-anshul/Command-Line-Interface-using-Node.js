const mongoose = require('mongoose');
//map global promise - get rid of warning
mongoose.Promise = global.Promise;
//connect to DB
const client = mongoose.connect('mongodb://localhost:27017/customercli', { useNewUrlParser: true });
//const client = MongoClient.connect("mongodb://localhost:27017/customercli", { useNewUrlParser: true })




// Import model
const Customer = require('./models/customer');

// Add Customer
const addCustomer = (customer) => {
  Customer.create(customer).then(customer => {
    console.info('New Customer Added');
    mongoose.connection.close();
  });
}

// Find Customer
const findCustomer = (name) => {
  // Make case insensitive
  const search = new RegExp(name, 'i');
  Customer.find({$or: [{firstname: search}, {lastname: search}]})
    .then(customer => {
      console.info(customer);
      console.info(`${customer.length} matches`);
      mongoose.connection.close();
    });
}

// Update Customer
const updateCustomer = (_id, customer) => {
  Customer.update({ _id }, customer)
    .then(customer => {
      console.info('Customer Updated');
      mongoose.connection.close();
    });
}

// Remove Customer
const removeCustomer = (_id) => {
  Customer.remove({ _id })
    .then(customer => {
      console.info('Customer Removed');
      mongoose.connection.close();
    });
}

// List Customers
const listCustomers = () => {
  Customer.find()
    .then(customers => {
      console.info(customers);
      console.info(`${customers.length} customers`);
      mongoose.connection.close();
    });
}

// Export All Methods
module.exports = {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers
}