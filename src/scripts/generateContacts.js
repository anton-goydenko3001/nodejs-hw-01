import { readContacts } from "../utils/readContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";
// import { PATH_DB } from "../constants/contacts.js";
// import { error, log } from "node:console";

const generateContacts = async (number) => {
  const contactList = await readContacts();
  const newContact = Array(number).fill(0).map(createFakeContact);
  const newList = [...contactList, ...newContact];
  await writeContacts(newList);
};

generateContacts(5);
