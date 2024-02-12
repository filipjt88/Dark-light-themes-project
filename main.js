const changeThemes = document.querySelector(".btn");



changeThemes.addEventListener("click", () => {
    let dark = document.body.classList.toggle("dark-themes");
    let light = document.body.classList.toggle("light-themes");
    if(dark === "dark-themes") {
        light = document.body.classList.toggle("light-themes");
    } else if(light === 'light-themes') {
        dark = document.body.classList.toggle("dark-themes");
    } else {
        light = document.body.classList.toggle("light-themes");
    }
});
