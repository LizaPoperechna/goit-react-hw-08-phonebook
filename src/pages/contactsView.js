import { H1, H2 } from "./contactView.styled";
import { getIsLoading, getError } from "redux/Contacts/selectors";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { fetchContacts } from "redux/Contacts/operations";
import { Helmet } from 'react-helmet';


export default function ContactsView() {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

 useEffect(() => {dispatch(fetchContacts())}, [dispatch]);

 return (
        <>
            <Helmet>
                <title>Your phonebook</title>
            </Helmet>
            <div>
                <H1>Phonebook</H1>
                <ContactForm />
                <div>{isLoading && !error && 'Reguest in progress...'}</div>
                <H2>Contacts</H2>
                <Filter />
                <ContactList />
                
            </div>
        </>
 ) 
}