import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ url, method }) => {
  console.log(url, method);
  return (
    <>
      <p>{url}</p>
      <p>{method}</p>
    </>
  );
};

HistoryItem.propTypes = {
  url: PropTypes.string,
  method: PropTypes.string
};

export default HistoryItem;

