const fs = require('fs/promises');
const path = require('path');


const contactPath = path.join(__dirname,'db','contacts.json');
// console.log(contactPath);


const listContacts = async () => {
  try {
    const response = await fs.readFile(contactPath);    
    return JSON.parse(response);
  } catch (error) {
    console.log(error);
  }
    
  };

const getContactById = async(contactId) => {
   try {
    const contact = String(contactId);
   const contacts = await listContacts();
   const response = contacts.find(item => item.id === contact);
   return response || null;
   } catch (error) {
    console.log(error);
   }
  };
 
function removeContact(contactId) {
  const contact = String(contactId); 
  }; 

const addContact = async (name, email, phone) => {
 try {
  const newContact = 
  const contacts = await listContacts();
 } catch (error) {
  console.log(error);
 }
    // ...твій код
  };

 module.exports = { listContacts, getContactById };