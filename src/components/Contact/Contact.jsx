import css from './Contact.module.css'

export default function Contact({ id, name, number, onDelete }) {
    return (
    <li className={css.contact}>
        {name}: {number}
       <button onClick={() => onDelete(id)}>Delete</button> 
    </li>
  );
}
