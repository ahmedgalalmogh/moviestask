import "./App.css";
import CategoryList from "./components/CategoryList/CategoryList";
import Form from "./components/Form/Form";
import { useAppSelector } from "./store/store";
import { FormType } from "./types/FormType";
function App() {
  const selector = useAppSelector((state) => state);
  console.log(selector);
  return (
    <>
      <Form
        headrText="Add Category"
        btnText="Create Category"
        formType={FormType.ADD_CATEGORY}
        name=""
        description=""
      />
      <CategoryList />
    </>
  );
}

export default App;
