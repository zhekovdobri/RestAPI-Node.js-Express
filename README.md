# RestAPI-Node.js-Express
Rest API created with Node.js and Express
<img align="justify" alt="chart" width="950px" src="https://github.com/zhekovdobri/RestAPI-Node.js-Express/blob/main/RestAPI-Node-Express.png?raw=true">
###
<img align="justify" alt="chart" width="950px" src="https://github.com/zhekovdobri/RestAPI-Node.js-Express/blob/main/Get_request.png?raw=true">
###
<img align="justify" alt="chart" width="950px" src="https://github.com/zhekovdobri/RestAPI-Node.js-Express/blob/main/POST_request.png?raw=true">

#### By: Dobri Zhekov

## Technologies Used

* _Node.js_
* _Express_
* _Insomnia_
* _JavaScript_
* _HTML_
* _CSS_
* _Bootstrap_

<br />

## Code

```
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

```

## Description
A simple Rest API, created with Node.js and Express.

## Setup/Installation Requirements

### Clone a repository using the command line 

1. From the repository, click "Code" and copy the address (either the SSH format or the HTTPS). 
2. From a terminal window (cmd or Bash), change to the local directory where you want to clone your repository.
3. Paste the address you copied from GitHub, with one of the next comand:

* **Clone over HTTPS**<br>
  $ git clone (https://..)
  
* **Clone over SSH**<br>
  $ git clone (ssh://..)

## Known Bugs

* No bugs

## License

<sub><sup>Copiright © 2016-2023 Dobri Zhekov All Rights Reserved</sup></sub>

