const inputText = document.getElementById('text');
const inputDelay = document.getElementById('delay');
const button = document.getElementById('btn');
const outputDiv = document.getElementById('output');

// Define an async function that waits for a specified time before resolving with a message
async function displayMessageAfterDelay(message, delay) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return message;
}

// Add an event listener to the button
button.addEventListener('click', async () => {
  // Get the values from the input fields
  const message = inputText.value;
  const delay = inputDelay.value;

  // Call the async function to display the message after the delay
  const result = await displayMessageAfterDelay(message, delay);

  // Display the result in the output div
  outputDiv.innerText = result;
});