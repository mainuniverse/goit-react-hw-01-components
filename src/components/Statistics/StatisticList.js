import PropTypes from 'prop-types';
import Statistics from './Statistics';
import s from './Statistics.module.css';
import generateColor from './generateColor';

const StatisticList = ({ stats, title}) => {
    return (
            <div className={s.wrapper}>
                {title && <h2 className={s.title}>{title}</h2>}
            <ul className={s.statList}>
                {stats.map(stat => (
                    <li
                        className={s.item}
                        key={stat.id}
                        style={{ backgroundColor: generateColor() }}
                    >
                        <Statistics
                            label={stat.label}
                            percentage={stat.percentage}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

StatisticList.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};

export default StatisticList;