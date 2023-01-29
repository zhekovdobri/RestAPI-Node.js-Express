const express = require("express");
const app = express();
const PORT = 8080;

// express.json midleware
app.use(express.json());

app.listen(PORT, () => console.log(`it's running on http://localhost:${PORT}`));

app.get("/paycheck", (req, res) => {
  res.status(200).send({

    "soknadnumber": 1234,
    "lanetakere": [
      {
        "fodselsnummer": "01056000069",
        "navn": "Kari Nordmann",
        "fodselsdato": "1960-05-01"
      },
      {
        "fodselsnummer": "01056000301",
        "navn": "Ola Nordmann",
        "fodselsdato": "1960-05-01"
      }
    ],
    "lanebelop": 2450000,
    "behov": "Vi skal låne penger til........",
    "lopetid": 300,
    "avdragsfriPeriode": 12,
    "type": "annuitet"
    });

});

 

  app.post("/paycheck/1234", (req, res) => {
    const { soknadnumber } = req.body;
  
    if (!soknadnumber) {
      res.status(418).send({ message: "Unknown!" });
    } else {
      res.status(200).send({ message: "Received!" });
    }
    
    res.send({
      message: "Received",
    });
  });
  

// app.post("/tshirt/:id", (req, res) => {
//   const { id } = req.params;
//   const { logo } = req.body;

//   if (!logo) {
//     res.status(418).send({ message: "We need a logo!" });
//   }
//   res.send({
//     tshirt: `👕 with your ${logo} and ID of ${id}`,
//   });
// });



  // app.post("/paycheck/1234", (req, res) => {
  //   // const { id } = req.params;
  //   const { søknadsnummer } = req.body;
  //   res.send({
  //     message: 'Received',
  //   });
  
  //   if (!søknadsnummer) {
  //     res.status(418).send({ message: "Unknown" });
  //   } else {
  //     res.status(200).send({ message: "Received" });
  //   }
    
  // });
  


 
  // if (!doknum) {
  //   res.status(418).send({ message: "Unknown!" })
  // } else {
  //   res.status(200).send({ message: "Received" })
  // }
  // // res.send({
  // //   tshirt: `👕 with your ${logo} and ID of ${id}`,
  // // }),

  // // const { id } = req.params;
 
  
  


// app.post("/tshirt/:id", (req, res) => {
//   const { id } = req.params;
//   const { logo } = req.body;

//   if (!logo) {
//     res.status(418).send({ message: "We need a logo!" });
//   }
//   res.send({
//     tshirt: `👕 with your ${logo} and ID of ${id}`,
//   });
// });
