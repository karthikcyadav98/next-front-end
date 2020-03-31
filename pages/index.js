import About from "./about";
import Link from "next/link";
import Header from "../header/header.js";
import { ApolloProvider } from "react-apollo";
import Homepage from "../common/homepage";
const App = () => {
  const client = new ApolloClient({
    uri: "http://localhost:9000/graphql"
  });
  return (
    <h1>
      <ApolloProvider client={client}>
        <Header />
        <Link href="/Homepage">
          <a>Home</a>
        </Link>
        <Homepage />
      </ApolloProvider>
    </h1>
  );
};
export default App;
