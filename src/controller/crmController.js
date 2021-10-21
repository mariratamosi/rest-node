import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

//Will create a collection with the first param as name, if not availbale
const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};
