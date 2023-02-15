import { ButtonDel, Li } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/operations';

export const ContactItem = ({id, name, number }) => {

    const dispatch = useDispatch();

    return (
        <Li>
            <div>
                 <b>{name}</b>: {number}
            </div>
            <ButtonDel 
                type="button"
                onClick={() => {dispatch(deleteContact(id))}}>
                    Delete Contact
            </ButtonDel>
        </Li>
    )
}
