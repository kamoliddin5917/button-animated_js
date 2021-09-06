const buttons = document.querySelectorAll("button");
const turbulance = document.querySelector("feTurbulence");
const steps = 30;
const interval = 10;
let verticalFrecuency = 0.00001;

turbulance.setAttribute("baseFrequency", verticalFrecuency + "0.00001");

buttons.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    verticalFrecuency = 0.00001;

    for (let i = 0; i < steps; i++) {
      setTimeout(function () {
        verticalFrecuency += 0.009;
        turbulance.setAttribute("baseFrequency", verticalFrecuency + "0.00001");
      }, i * interval);
    }
    setTimeout(function () {
      verticalFrecuency = 0.00001;
      turbulance.setAttribute("baseFrequency", verticalFrecuency + "0.00001");
    }, steps * interval);
  });
});
