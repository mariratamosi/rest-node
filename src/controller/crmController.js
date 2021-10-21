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

export const getContact = (req, res) => {
  Contact.find({}, (err, contacts) => {
    if (err) {
      res.send(err);
    }
    res.json(contacts);
  });
};

export const getContactById = (req, res) => {
  let id = req.params.contactID;

  Contact.findById(id, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const updateContactById = (req, res) => {
  let id = req.params.contactID;

  //new true:: will send back the update
  Contact.findOneAndUpdate(
    { _id: id },
    req.body,
    { new: true, useFindAndModify: false },
    (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    }
  );
};
