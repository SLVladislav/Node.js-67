const fs = require('fs').promises;
const path = require('path');
const contactPath = path.join(__dirname,'db','contacts.json');
// console.log(contactPath);


const listContacts = async () => {
  try {
    const response = await fs.readFile(contactPath);
    console.log(response);
    return JSON.parse(response) || null
  } catch (error) {
    console.log(error)
  }
    // ...твій код
  };

function getContactById(contactId) {
    // ...твій код
  };
 
function removeContact(contactId) {
    // ...твій код
  }; 

function addContact(name, email, phone) {
    // ...твій код
  };

 module.exports = { listContacts };