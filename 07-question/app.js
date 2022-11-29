
//traversing the dom
// const btns = document.querySelectorAll('.question-btn')
// const questions = document.querySelectorAll('.question')

// btns.forEach(btn => {
//     btn.onclick = function (e) {
//         const question = e.currentTarget.parentElement.parentElement
//         question.classList.toggle('show-text')
//     }
// })

//using selectors inside the element

const questions = document.querySelectorAll('.question')

questions.forEach(question => {
    const btn = question.querySelector('.question-btn')
    btn.onclick = function() {
        question.classList.toggle('show-text')
    }
})