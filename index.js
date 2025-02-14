let consoleForm = document.getElementById("consoleForm");
let requestUrl = document.getElementById("requestUrl");
let responseStatus = document.getElementById("responseStatus");
let requestUrlErrMsg = document.getElementById("requestUrlErrMsg");
let requestMethod = document.getElementById("requestMethod");
let requestBody = document.getElementById("requestBody");
let responseBody = document.getElementById("responseBody");

requestUrl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        requestUrlErrMsg.textContent = "Required*";
    } else {
        requestUrlErrMsg.textContent = "";
    }
})

function displayresult(event) {
    console.log(requestUrl.value);
    console.log(requestMethod.value);

    event.preventDefault()

    let options = {
        method: requestMethod.value,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 413ca11216356a43b70543d4d85a08998e13d141e3c61b52ee65448378a1e914"
        },
        body: requestBody.value
    }

    fetch(requestUrl.value, options)
        .then(function(responce) {
            return responce.json();
        })
        .then(function(jsonFile) {
            responseStatus.value = jsonFile.code;
            responseBody.value = JSON.stringify(jsonFile);

        })
}

consoleForm.addEventListener("submit", displayresult);