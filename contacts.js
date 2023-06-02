const fs = require("fs").promises;
const { nanoid } = require('nanoid');
const path = require('path');



const contactPath = path.join(__dirname,'db','contacts.json');
// console.log(contactPath);


const listContacts = async () => {
  try {
    const data = await fs.readFile(contactPath);    
    return JSON.parse(data.toString());
  } catch (error) {
    console.log(error);
  }
    
  };

const getContactById = async(contactId) => {
   try {
    // const contact = String(contactId);
   const contacts = await listContacts();
   return contacts.find(item => item.id === contactId) || null;
   } catch (error) {
    console.log(error);
   }
  };
 
const removeContact = async(contactId) => {
  try {
    // const contactsId = String(contactId);
    const contacts = await listContacts();
    const index = contacts.findIndex(item => item.id === contactId);
    if(index === -1){
      return null;
    }
    const [result] = contacts.splice(index, 1);
    await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));
    return result;
  } catch (error) {
    console.log(error);
  }
  };

const addContact = async (name, email, phone) => {
 try {
  const contacts = await listContacts();
  const newContact = { id:nanoid(), name, email, phone };

  contacts.push(newContact);
  await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));
  return newContact; 
 } catch (error) {
  console.log(error);
 }
   
  };

 module.exports = { listContacts, getContactById, addContact, removeContact };