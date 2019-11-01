const apiCall = (apiUrl) => {
  return fetch(apiUrl)
    .then(res => res.json())
    .then(result => result);
};

export default apiCall;
