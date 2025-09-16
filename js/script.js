window.onload = function () {
    var btns = document.querySelectorAll(".btn1");
    btns.forEach(function (btn) {
        var copy = btn.querySelector(".copy");
        copy.classList.add("d-none");
        btn.onclick = function (e) {
            e.stopPropagation();
            copy.classList.remove("d-none");
        }
    });
    document.addEventListener("click", function () {
        btns.forEach(function (btn) {
            var copy = btn.querySelector(".copy");
            if (copy) copy.classList.add("d-none");
        });
    });
};
console.log(screen.width)