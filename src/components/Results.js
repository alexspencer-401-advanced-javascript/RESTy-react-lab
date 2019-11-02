import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ results }) => {
  return (
    <pre>
      {JSON.stringify(results, null, 2)}
    </pre>
  );
};

Results.propTypes = {
  results: PropTypes.object
};

export default Results;
