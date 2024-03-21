import DatabaseService from "./database-service.js";

const db = new DatabaseService();

const contact = {
  id: 2,
  name: "Ivanov Ivan",
  phone: "+79870003210",
};

// Create Contanct
// db.create(contact);

// Get All Contacts
// console.log(db.getAll());

//Updata Contact
// db.update(2, {
//   id: 2,
//   name: "Ivanov Ivan",
//   phone: "+79875553210",
// });

// Get All Contacts
// console.log(db.getAll());

// Delete Contsnct
// db.delete(2);

// Get All Contacts
// console.log(db.getAll());

// Get By ID
// console.log(db.getOne(2));
