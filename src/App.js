import "./App.css";
import CategoryList from "./components/CategoryList/CategoryList";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
      <Form headrText="Add Category" btnText="Create Category" />
      <CategoryList />
    </>
  );
}

export default App;
