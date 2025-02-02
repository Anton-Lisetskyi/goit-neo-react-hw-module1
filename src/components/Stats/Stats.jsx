import styles from "./Stats.module.css";
import PropTypes from "prop-types";

const Stats = ({ stats }) => {
  return (
    <div className={styles.statsBlock}>
      <StatItem label="Followers" value={stats.followers} />
      <StatItem label="Views" value={stats.views} />
      <StatItem label="Likes" value={stats.likes} />
    </div>
  );
};

const StatItem = ({ label, value }) => {
  return (
    <div className={styles.statsItem}>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
};

Stats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Stats;
