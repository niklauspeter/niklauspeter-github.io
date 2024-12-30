// document.addEventListener("click", function (event) {
//     // Checking if the button was clicked
//     if (!event.target.matches("#button")) return;
  
//     fetch("https://official-joke-api.appspot.com/random_joke")
//       .then((response) => response.json())
//       .then((data) => renderJoke(data));
//   });

//   postToServerWithAjax('/invite_preview', null, function (response) {
//     var wind = window.open("", "popupWindow", "width=600,height=600,scrollbars=yes");
//     wind.document.write(response);
//  });

document.addEventListener("click", function (event) {
    // Checking if the button was clicked
    if (!event.target.matches("#button")) return;
  
    // let data = {"type":"general","setup":"What do you call a pile of cats?","punchline":" A Meowtain.","id":217};
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => renderJoke(data))
      .catch(() => renderError());
    // Log the static data
    // alert(JSON.stringify(data, null, 2));
  });
  
  
  function renderJoke(data) {
    const setup = document.getElementById("setup");
    const punchline = document.getElementById("punchline");
    setup.innerHTML = data.setup;
    punchline.innerHTML = data.punchline;
  }

  function renderError() {
    const error = document.getElementById("error");
    error.innerHTML = "";
    error.innerHTML = "Whoops, something went wrong. Please try again later!";
  }