// import PropTypes from 'prop-types';
import { Card } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/Contacts/selectors';
import { setFilter } from 'redux/Contacts/filterSlice';


export const Filter = () => {

    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    return (
        <Card>
            <label htmlFor="filter">Find contacts by name</label>
            <input
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