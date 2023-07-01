const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

//calling the function when the page loads so the text is not empty before clicking the button
generateJoke();

async function generateJoke() {
  //defining the headers for the API call
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const res = await fetch('https://icanhazdadjoke.com/', config);
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}
