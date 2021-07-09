// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles


(() => {
    // your code here
    document.querySelector("#run").addEventListener("click", () => {
        window.lib.getPosts(function(error, articles){
            console.log(articles);
        });
    });
})();
