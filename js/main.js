const loadBar = document.getElementById("load-bar");
const index = document.getElementById("index-link");
const birthday = document.getElementById("birthday-link");
const girlfriend = document.getElementById("girlfriend-link");

index.addEventListener("click", () => {
  if (document.getElementById("index").classList.contains("none")) {
    loadBar.animate([{ width: "0%" }, { width: "100%" }], {
      duration: 1500,
      iterations: 1,
    });
    setTimeout(() => {
      document.getElementById("index").classList.toggle("none");
    }, 1500);
    if (!document.getElementById("birthday").classList.contains("none")) {
      setTimeout(() => {
        document.getElementById("birthday").classList.add("none");
      }, 1400);
    }
    if (!document.getElementById("girlfriend").classList.contains("none")) {
      setTimeout(() => {
        document.getElementById("girlfriend").classList.add("none");
      }, 1400);
    }
  }
});

birthday.addEventListener("click", () => {
  if (document.getElementById("birthday").classList.contains("none")) {
    loadBar.animate([{ width: "0%" }, { width: "100%" }], {
      duration: 1500,
      iterations: 1,
    });
    setTimeout(() => {
      document.getElementById("birthday").classList.toggle("none");
    }, 1500);
    if (!document.getElementById("index").classList.contains("none")) {
      setTimeout(() => {
        document.getElementById("index").classList.add("none");
      }, 1400);
    }
    if (!document.getElementById("girlfriend").classList.contains("none")) {
      setTimeout(() => {
        document.getElementById("girlfriend").classList.add("none");
      }, 1400);
    }
  }
});

girlfriend.addEventListener("click", () => {
  if (document.getElementById("girlfriend").classList.contains("none")) {
    loadBar.animate([{ width: "0%" }, { width: "100%" }], {
      duration: 1500,
      iterations: 1,
    });
    setTimeout(() => {
      document.getElementById("girlfriend").classList.toggle("none");
    }, 1500);
    if (!document.getElementById("index").classList.contains("none")) {
      setTimeout(() => {
        document.getElementById("index").classList.add("none");
      }, 1400);
    }
    if (!document.getElementById("birthday").classList.contains("none")) {
      setTimeout(() => {
        document.getElementById("birthday").classList.add("none");
      }, 1400);
    }
  }
});
