const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/types');
const resolvers = require('./graphql/resolvers/')
// const { MONGODB } = require('./config.js'); /*use this for localhost serving*/
const PORT = process.env.PORT || 5000;
const URI = process.env.MONGODB_URI; /*MONGODB*/


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
})

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
}).then(() => {
    console.log("MongoDB Connected")
    return server.listen({ port: PORT });
}).then((res) => {
    console.log(`Server running at ${res.url}`);
}).catch(err => console.log(err.message));