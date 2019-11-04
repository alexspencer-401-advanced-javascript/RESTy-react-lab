import React from 'react';
import PropTypes from 'prop-types';
import styles from './Results.css';

const Results = ({ results }) => {
  return (
    <pre className={styles.Results}>
      Results: {JSON.stringify(results, null, 2)}
    </pre>
  );
};

Results.propTypes = {
  results: PropTypes.array
};

export default Results;
