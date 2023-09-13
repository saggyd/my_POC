const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

const port = 4000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
