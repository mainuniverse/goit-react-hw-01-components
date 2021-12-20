import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ label, percentage }) => {
    return (
        <>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
        </>
    );
};

Statistics.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,
};

export default Statistics;