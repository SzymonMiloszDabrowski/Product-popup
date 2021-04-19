const useFetch = (URL) => {
  fetch(URL)
    .then((res) => {
      if (!res.ok) throw Error('Could not fetch the data from that resource.');
      return res.json();
    })
    .then((data) => {
      localStorage.clear();
      localStorage.setItem('data', JSON.stringify(data));
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export default useFetch;
