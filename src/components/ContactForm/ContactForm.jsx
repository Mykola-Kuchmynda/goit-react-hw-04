import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css'

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
});

export default function ContactForm({ onAdd }) {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <Form className={css.contactForm}>
        <div>
          <label>
            Name
            <Field name="name" className={css.name} />
            <ErrorMessage name="name" component="span" className={css.errorMessage} />
          </label>
        </div>
        <div>
          <label>
            Number
            <Field name="number" className={css.name}  />
            <ErrorMessage name="number" component="span" className={css.errorMessage}/>
          </label>
        </div>
        <button type="submit" >Add contact</button>
      </Form>
    </Formik>
  );
}