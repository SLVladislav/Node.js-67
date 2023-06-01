const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const contacts = require("./contacts");

const  invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
      case "list":
       const allContact = await contacts.listContacts();
       return console.log(allContact);
      
      case "get":
       const contact = await contacts.getContactById(id);
       return console.log(contact);
      
      case "add":
        const newContact = await contacts.
        // ... name email phone
        break;
  
      case "remove":
        break;

        default:
          console.warn("\x1B[31m Unknown action type!");
      }
    }
    


    const arr = yargs(hideBin(process.argv)).argv;
    const {argv} = yargs(arr);
    console.log(argv);
    invokeAction(argv);
    // invokeAction({action:'list'});
    // invokeAction({action:'get', id:'rsKkOQUi80UsgVPCcLZZW'});



