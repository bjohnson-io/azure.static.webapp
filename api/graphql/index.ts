// DB Config
import * as mongoose from 'mongoose';
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'quotes' };
mongoose.connect(process.env.COSMOSDB_CONNECTION, dbOptions)
  .then(() => console.log('mongoose connected!'))
  .catch(err => console.error(err));

// GraphQL Config
import { ApolloServer } from 'apollo-server-azure-functions';
import typeDefs from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({ typeDefs, resolvers });
export default server.createHandler();