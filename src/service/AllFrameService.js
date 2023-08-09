export const post = (f1, f2) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    frame1Request: f1,
    frame2Request: f2,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8081/send-message", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      console.log(JSON.parse(f1));
    })
    .catch((error) => console.log("error", error));
};
