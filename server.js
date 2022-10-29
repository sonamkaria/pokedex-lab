const express = require('express');
const pokemon = require('./models/pokemon.js');
const app = express();
const Pokemon = require('./models/pokemon.js');


// INDEX
app.get('/pokemon', (req, res) => {
res.render('index.ejs', { data: Pokemon });
});

// NEW
app.get("/pokemon/new", (req, res) => {
    res.render("new.ejs")
  })
  
  // DELETE

  app.delete("/pokemon/:id", (req, res) => {
    pokemon.findByIdAndRemove(req.params.id, (err, deletedProduct) => {
        res.redirect("/pokemon")
    })
  })
  

  



// SHOW
app.get('/pokemon/:id', (req, res) => {
res.render('show.ejs', { data: Pokemon[req.params.id] });
});


//LISTEN
app.listen(3000, ()=>{
    console.log("Youre conected to 3000")
})


