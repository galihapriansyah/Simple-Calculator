const display = document.getElementById("display");

const pushBtn = (btn) => {
  const obj = btn.innerText;
  if (obj == "=") {
    display.value = eval(display.value);
  } else if (obj == "AC") {
    display.value = "";
  } else if (obj == "Del") {
    display.value = display.value.toString().slice(0, -1);
  } else {
    display.value += obj;
  }
};
