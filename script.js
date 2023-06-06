const showMessage = async () => {
  const text = document.getElementById("text").value;
  const delay = document.getElementById("delay").value;
  await new Promise(resolve => setTimeout(resolve, delay * 1000));
  document.getElementById("output").textContent = text;
};

document.getElementById("btn").addEventListener("click", showMessage);