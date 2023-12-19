function test() {
    let button = document.querySelector("button");
    button.addEventListener("click", (e) => {
        e.preventDefault();
        let h1 = document.querySelector("h1");

        if (h1.textContent === "Hallo") {
            h1.textContent = "Test";
        } else {
            h1.textContent = "Hallo";
        }
    });
}
