const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.querySelector(".container").classList.toggle("dark");
  document.querySelector(".board").classList.toggle("dark");
  document.querySelectorAll(".draggedImage").forEach((vSeparator) => {
    vSeparator.classList.toggle("dark");
  });
  document.querySelectorAll(".hSeparator").forEach((hSeparator) => {
    hSeparator.classList.toggle("dark");
  });
  document.querySelectorAll(".vSeparator").forEach((vSeparator) => {
    vSeparator.classList.toggle("dark");
  });
});


document.addEventListener("DOMContentLoaded", function() {
    // Obtener el estado del modo oscuro del almacenamiento local
    const storedDarkMode = localStorage.getItem("darkMode");
  
    if (storedDarkMode === "true") {
        document.body.classList.toggle("dark");
        document.querySelector(".container").classList.toggle("dark");
        document.querySelector(".board").classList.toggle("dark");
        document.querySelectorAll(".draggedImage").forEach((vSeparator) => {
          vSeparator.classList.toggle("dark");
        });
        document.querySelectorAll(".hSeparator").forEach((hSeparator) => {
          hSeparator.classList.toggle("dark");
        });
        document.querySelectorAll(".vSeparator").forEach((vSeparator) => {
          vSeparator.classList.toggle("dark");
        });
    }
  });
  
  
  
  
  