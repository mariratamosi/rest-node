const routes = (app) => {
  app
    .route("/contact")
    .get(
      (req, res, next) => {
        //middleware //might be thirdparty
        console.log(`Request from ${req.originalUrl}`);
        console.log(`Request type ${req.method}`);
        next();
      },
      (req, res, next) => {
        res.send("Get the contacts");
      }
    )
    .post((req, res) => {
      res.send("Post the contacts");
    });

  app
    .route("/contact/:contactID")
    .put((req, res) => {
      res.send("put certain contacts");
    })
    .delete((req, res) => {
      res.send("delete certain contacts");
    });
};

export default routes;
