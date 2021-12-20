import PropTypes from 'prop-types';

const TransactionListItem = ({ type, amount, currency }) => {
    return (
        <>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </>
    );
};

TransactionListItem.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
};

export default TransactionListItem;