const express = require('express');
const app = express();
const PORT = 3000;
const fs = require('fs');
const users = require('./routes/users');
const standards = require('./routes/standards');
const lessons = require('./routes/lessons');
const methodOverride = require('method-override');
const axios = require("axios");

app.use(express.static("./styles"));
app.use(methodOverride('_method'));

app.use(express.urlencoded({
    extended: true
    }));

const logRequest = function (req, res, next) {
    const time = new Date();

    console.log(` ${time.toLocaleTimeString()}: Request Received: ${req.method} to ${req.url}`);
    if (Object.keys(req.params).length !== 0) {console.log(req.params)} else {console.log('     there are no request parameters')};
    if (Object.keys(req.body).length !== 0) {console.log(req.body)} else {console.log('     there is no request body')};
    next();
  };

  app.use(logRequest);

    // define the template engine
app.engine("sba318", (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
      if (err) return callback(err);
  
      // Here, we take the content of the template file,
      // convert it to a string, and replace sections of
      // it with the values being passed to the engine.
      const rendered = content
        .toString()
        .replaceAll("#title#", `${options.title}`)
        .replace("#content#", `${options.content}`)
        .replace('#fname#', `${options.fname}`)
        .replace('#lname#', `${options.lname}`)
        .replace('#uname#', `${options.uname}`)
        .replace('#role#', `${options.role}`)
        .replace('#id#', `${options.id}`)
        .replace('#id2#', `${options.id}`)
        .replace('#standardsList#', `${options.standardsList}`);
      return callback(null, rendered);
    });
  })

  app.set("views", "./views"); 
  app.set("view engine", "sba318"); 

  // =============== ROUTES ===============
// Use our Routes
app.use("/api/users", users);
app.use("/api/lessons", lessons);
app.use("/api/standards", standards);


  app.get("/", (req, res) => {
    const options = {
        title: "Beginning Backend for HSE Class",
        content: 
        "This is the home page, but you can see:",
    };
     res.render("index", options);
  });

  app.get("/users", (req, res) => {
    const options = {
        title: "User List for HSE Class Site",
        content: 
        "This is the user list page, where you can see and add new users.",
    };
     res.render("users", options);  
  });

  app.get("/users/:id/:fname/:lname/:uname/:role", (req, res) => {
    const options = {
        title: "User Update for HSE Class Site",
        content: 
        "This is the user update page, where you can modify an existing user.",
        id: req.params.id,
        fname: req.params.fname,
        lname: req.params.lname,
        uname: req.params.uname,
        role: req.params.role,
        id: req.params.id,
    }
    res.render("userUpdate", options);
  })

  app.get("/lessons", (req, res) => {
    const options = {
        title: "Lesson List for HSE Class Site",
        content: 
        "This is the lesson list page, where you can see and add new lessons.",
    };
     res.render("lessons", options); 
  });


    // this should go in a utility function
  async function getStandards() {
    // this won't work because this is the backend and not the webinterface
    // const response = await fetch('/api/standards');
    try {
        const response = await axios.get('http://localhost:3000/api/standards');
        return response.data;
    } catch (err) {
        console.error(err);
    }
}

  app.get("/standards", async (req, res) => {
    const standards = await getStandards();
    // if (standards) console.log(standards);

    let standardList = ""
    standards.forEach(standard => {
        let standardString = `<li>subject: ${standard.subject} ${standard.subtopic}
        <br> type: ${standard.themeOrPractice} <br>
        standard: ${standard.standardNumber}: ${standard.text}</li>`;
        standardList += standardString;
    })

    const options = {
        title: "Standards List for HSE Class Site",
        content: 
        "This is the standards list page, where you can see the standards.  The standards are static\
        and provided by the body governing the content.  There is no ability to update these through this interface.",
        standardsList: standardList,
    };
     res.render("standards", options); 
  });

  app.get("/standards/:subject", async (req, res) => {
    const standards = await getStandards();
    // if (standards) console.log(standards);

    let standardList = ""
    standards
        .filter(std => std.subject == req.params.subject)
        .forEach(standard => {
        let standardString = `<li>subject: ${standard.subject} ${standard.subtopic}
        <br> type: ${standard.themeOrPractice} <br>
        standard: ${standard.standardNumber}: ${standard.text}</li>`;
        standardList += standardString;
    })

    const options = {
        title: "Standards List for HSE Class Site",
        content: 
        "This is the standards list page, where you can see the standards.  The standards are static\
        and provided by the body governing the content.  There is no ability to update these through this interface.",
        standardsList: standardList,
    };
     res.render("standards", options); 
  });

//   app.post("/user", (req, res) => {
//     console.log('user post request');
//     console.log(req.body);
//   })

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})