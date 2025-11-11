fetch("https://newsapi.org/v2/everything?q=brasil&from=2025-10-27&sortBy=publishedAt&apiKey=366a4893cc3440b486f45b01e7fe90a5").then(response=> response .json()).then (data =>{
    const noticiaUrl='https://exemplo.com/noticia2';
    const artigo = data.articles.find((article) =>article.url === noticiaUrl);
    console.log(artigo);

    const container = document.createElement('div');
    data.articles.forEach(article =>
        { const noticia = document.createElement('div');
    noticia.innerHTML =`
    <a href="./noticia.html?id=${article.url}" target="_blank"> 
    <h1>${article.title}</h1>
    <p>${article.author}</p>
    <img src="${article.urlToImage}">
    </a>
    `;
    container.appendChild(noticia);
}

    )

    const noticias = document.querySelector('#noticias');
    noticias.appendChild(container)




}
)