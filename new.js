let but = document.querySelector("#button");

let number = Math.floor(Math.random() * 200);

but.addEventListener("click", () => {
  let input = Number(document.querySelector("#input").value);
  let output = document.querySelector("#footer > h4");

  if (input < number) {
    output.innerHTML = "It's too small";
  } else if (input > number) {
    output.innerHTML = "It's too big";
  } else if (input == number) {
    output.innerHTML = "Exactly";
    output.style.color = "green";
    document.querySelector("#input").disabled = "true";
  } else {
    output.innerHTML = "Import invalid number";
  }
  console.log(number);
});
