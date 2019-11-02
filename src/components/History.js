import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const History = ({ history }) => {
  const historyElements = history.map(thing => {
    <li key={`${thing.url}`}>
      <HistoryItem {...thing} />
    </li>;
  });
  return (
    <>
      <h1>History</h1>
      <ul>
        {historyElements}
      </ul>
    </>
  );
};

History.propTypes = {
  history: PropTypes.array
};

export default History;

