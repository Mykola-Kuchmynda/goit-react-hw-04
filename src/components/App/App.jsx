import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid';
import css from './App.module.css'
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';

export default function App() {
  const initialContacts =[
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem('contacts');
    return saved ? JSON.parse(saved) : initialContacts;
  });
  const [filter, setFilter] = useState('');
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
const addContact = (newContact) => {
    const contact = {
      ...newContact,
      id: nanoid(),
    };
    setContacts((prev) => [...prev, contact]);
  };
  const handleFilterChange = (value) => {
    setFilter(value);
  };
const deleteContact = (contactId) => {
    setContacts((prev) => prev.filter(contact => contact.id !== contactId));
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
    return (
        <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onAdd = {addContact} />
            <SearchBox filterValue={filter} onFilterChange={handleFilterChange}/>
            <ContactList contacts={filteredContacts} onDelete={deleteContact} />
        </div>
    );
}

