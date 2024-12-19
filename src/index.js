function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "0d877aa762b4511ceo3e2a4a1bta01f6";
  let context =
    "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem and separate each line with a <br/>. Sign `SheCodes` at the end of the poem inside a <strong>element. Make sure to follow the user's instructions";
  let prompt = `User instructions:Generate a Spanish poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey} `;
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳Generating a Spanish poem about ${instructionsInput.value}</div> `;
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
