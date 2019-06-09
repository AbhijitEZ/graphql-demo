const express = require('express')
const graphqlHTTP = require('express-graphql');
const cors = require('cors')
const Schema = require('./schema');
const app = express();

app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: Schema,
  graphiql: true
}));

const PORT = process.env.PORT || 5000

app.listen(PORT, () => { console.log(`listening to port ${PORT}`)});