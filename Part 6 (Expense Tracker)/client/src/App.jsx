import '../src/App.css';
import Balance from "./components/Banlance";
import Form from "./components/Form";
import Layout from "./components/Layout";
import Transactions from "./components/Transections/Transactions";


function App() {
  return (
    <Layout>
      <Balance />
      <Form />
      <Transactions />
    </Layout>
  );
}

export default App;