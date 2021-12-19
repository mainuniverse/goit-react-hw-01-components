import PropTypes from 'prop-types';
import TransactionListItem from './TransactionListItem';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={s.transactionHistory}>
            <thead>
                <tr className={s.transactionTitle}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <TransactionListItem
                            type={item.type}
                            amount={item.amount}
                            currency={item.currency}
                        />
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};

export default TransactionHistory;