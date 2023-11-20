const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    if (id) {
        //remove active buttons
        btns.forEach(function (btn) {
            btn.classList.remove('active');
        })
        //display button
        e.target.classList.add("active");

        articles.forEach(function(article){
            article.classList.remove('active');
        })
        const article = document.getElementById(id);
        article.classList.add("active")
    }
});