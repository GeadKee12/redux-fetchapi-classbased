export const FetchUser = () => {
  return fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    body: JSON.stringify({
      //
    }),
  })
    .then((res) => res.json)
    .then((data) => data);
};
