const btns = document.querySelectorAll(".question-btn");
console.log(btns)
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const question = e.currentTarget.parentElement.parentElement.parentElement.parentElement;
        console.log(question)
        question.classList.toggle("show-text")
    })
})