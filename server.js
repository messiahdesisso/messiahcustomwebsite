 const express = require('express')
 const mongoose = require('mongoose')
 const bodyParser =require('body-parser')

const items = require('./routes/api/items');




 const app = express()
 app.use(bodyParser.json());

 const db = require('./config/keys').mongoURI;

 mongoose
  .connect(db)
  .then(() =>console.log("MongoDB Connected !!"))
  .catch(err => console.log(err));

  app.use('/api/items', items)
const port = process.env.PORT || 5000;
app.listen(port, () =>console.log(`Server started on port ${port}`));
//  const port = 5000


//  app.get('/', (req, res) => res.send('Hello World!'))

//  app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

// const MongoClient = require('mongodb').MongoClient;
// const db = mongoose.connection;
// const uri = "mongodb+srv://Messiah123:Messiah123@messiahscluster.9mx4f.mongodb.net/formInformation?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true,  });

// mongoose.connect(uri, {useNewUrlParser: true,  useUnifiedTopology : true});

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   //we're connected
//   const formSchema = new mongoose.Schema({
//     f_name: String,
//     l_name: String,
//   });
  
//   const formEntry = mongoose.model('formEntry', formSchema);
  
//   const john = new formEntry({f_name: "John", l_name:"Doe"});
//   console.log(f_name + " " + l_name);
// });

