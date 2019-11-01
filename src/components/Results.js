import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ results }) => {
  return (
    <div>
      {results}
    </div>
  );
};

Results.propTypes = {
  results: PropTypes.object
};

export default Results;
