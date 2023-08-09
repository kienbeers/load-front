export const post = (entity) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(entity);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8081/insert", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export function getAllData() {
  var dataSource = [];
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("http://localhost:8081/view-data", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      dataSource = JSON.parse(result).data;
    })
    .catch((error) => {
      console.log("error", error);
    });
}
