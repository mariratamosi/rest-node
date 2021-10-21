import {
  addNewContact,
  deleteContactById,
  getContact,
  getContactById,
  updateContactById,
} from "../controller/crmController";

const routes = (app) => {
  app
    .route("/contact")
    .get(getContact)

    .post(addNewContact);

  app
    .route("/contact/:contactID")

    .get(getContactById) //http://localhost:4000/contact/6171a0f67d230aa807090926

    .put(updateContactById)
    .delete(deleteContactById);
};

export default routes;
