const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post("/result", (req, res) => {
    res.json({
        message: `${req.body.checker}`
    });
});

app.listen(process.env.PORT || 80, err => {
    if(err) throw err;
    console.log("server running");
})


