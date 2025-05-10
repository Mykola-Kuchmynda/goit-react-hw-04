import { Formik, Form, Field } from 'formik';
import css from './SearchBox.module.css'
export default function SearchBox({ filterValue, onFilterChange }) {
  return (
    <Formik
      initialValues={{ search: filterValue }}
      enableReinitialize
      onSubmit={() => {}}
    >
      {({ values }) => (
        <Form>
          <label className={css.text}>
            Find contacts by name:{' '}
            <Field
              type="text"
              name="search"
              value={values.search}
              onChange={(e) => onFilterChange(e.target.value)}
            />
          </label>
        </Form>
      )}
    </Formik>
  );
}
