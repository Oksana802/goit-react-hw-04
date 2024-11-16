import { Field, Form, Formik } from "formik";
import s from "./SearchBar.module.css";
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchBar = ({ onChangQuery }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values) => {
    onChangQuery(values.query);
  };
  return (
    <header className={s.box}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <button type="submit">
            <HiMagnifyingGlass />
          </button>
          <Field
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          />
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
