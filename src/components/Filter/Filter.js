// import PropTypes from 'prop-types';
import { Card } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/Contacts/selectors';
import { setFilter } from 'redux/Contacts/filterSlice';
import { Input, Label } from 'components/ContactForm/ContactForm.styled';


export const Filter = () => {

    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    return (
        <Card>
            <Label htmlFor="filter">Find contacts by name</Label>
            <Input
                type="text"
                value={filter}
                onChange={(e) => {
                    dispatch(setFilter(e.currentTarget.value))}}/>
        </Card>
    )
}


// Filter.propTypes = {
//     filterContacts: PropTypes.func,
// }