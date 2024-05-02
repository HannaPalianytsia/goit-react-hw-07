import ContactForm from "./components/contactForm/ContactForm";
import SearchBox from "./components/searchBox/SearchBox";
import ContactList from "./components/contactList/ContactList";
import styles from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectContacts, selectError, selectLoading } from "./redux/selectors";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.layout}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <div>
        {error && <p>Something went wrong!</p>}
        {loading && <p>Loading...</p>}
        {!contacts.length && !loading ? (
          <p>Create your first contact</p>
        ) : (
          <ContactList />
        )}
      </div>
    </div>
  );
}

export default App;
