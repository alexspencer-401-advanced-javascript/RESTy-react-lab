const apiCall = (url, method) => {
  console.log('API CALL: ', url);
  return fetch(url, method)
    .then(res => res.json())
    .then(result => result);
};

export default apiCall;
