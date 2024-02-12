const changeThemes = document.querySelector(".btn");


changeThemes.addEventListener("click", () => {
    if(document.body.classList.toggle("light-theme") === "light-theme") {
        document.body.classList.toggle("dark-themes");
    } else if(document.body.classList.toggle("dark-themes") === 'dark-theme') {
        document.body.classList.toggle("light-themes");
    }
});
