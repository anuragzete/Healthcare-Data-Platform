

function checkInput() {
  const userInput = document.getElementById("search").value.toLowerCase();
  if (userInput === "watery stools,nausea" ) {
    setTimeout(() => {
      window.location.href = "diarrhea.html";
    }, 2000);
  } else if (userInput === "headache") {
    setTimeout(() => {
      window.location.href = "headache.html";
    }, 2000);
  } else if (userInput === "cancer") {
    setTimeout(() => {
      window.location.href = "cancer.html";
    }, 2000);
  } else if (userInput === "cold,fever") {
    setTimeout(() => {
      window.location.href = "pneumonia.html";
    }, 2000);
  } else if (userInput === "abdominal pain") {
    setTimeout(() => {
      window.location.href = "body-pain.html";
    }, 2000);
  } else {
    alert(
      "We are unable to find any conditions that match the symptoms you entered."
    );
  }
}
