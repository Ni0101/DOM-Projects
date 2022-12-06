const btn = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

about.onclick = function(e) {
    const id = e.target.dataset.id
    if(id) {
        // remove active from other buttons
        btn.forEach((btn) => {
            btn.classList.remove('active')
            e.target.classList.add('active')
        })
        // hide other article
        articles.forEach(article => {
            article.classList.remove('active')
        })
        const element = document.getElementById(id)
        element.classList.add('active')
        console.log(id)
    }
}