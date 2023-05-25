// Obtener todos los elementos de la lista de categorías
const categoryLinks = document.querySelectorAll('.category-link');

// Obtener todos los elementos de la lista de artículos
const articles = document.querySelectorAll('.card');

// Obtener los elementos relevantes
const articlesList = document.querySelector('.articles-list');
const noArticlesMessage = document.querySelector('.no-articles-message');
const gridBtn = document.getElementById('grid-btn');
const listBtn = document.getElementById('list-btn');

// Obtener el elemento del año actual
const currentYearElement = document.getElementById('current-year');

// Obtener el año actual
const currentYear = new Date().getFullYear();

// Obtener todos los elementos de clase "card-title"
const cardTitles = document.querySelectorAll('.card-title');

// Filtrar por categoría
// Función para filtrar los artículos por categoría
function filterArticles(category) {
  // Ocultar el mensaje "Aún no hay artículos de este tema" inicialmente
  noArticlesMessage.style.display = 'none';

  // Recorrer todos los artículos y mostrar/ocultar según la categoría
  let articlesFound = false;

  articles.forEach((article) => {
    const articleCategories = Array.from(article.querySelectorAll('.card-category'));
    const shouldDisplay = articleCategories.some((articleCategory) => articleCategory.textContent === category);

    article.style.display = shouldDisplay ? 'block' : 'none';

    if (shouldDisplay) {
      articlesFound = true;
    }
  });

  // Mostrar el mensaje "Aún no hay artículos de este tema" si no se encontraron artículos
  if (!articlesFound) {
    noArticlesMessage.style.display = 'block';
  }
}

// Agregar un controlador de eventos a cada enlace de categoría
categoryLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();  // Evitar el comportamiento predeterminado del enlace
    const category = event.target.textContent;
    filterArticles(category);
  });
});

// Cambiar a vista de grid
gridBtn.addEventListener('click', () => {
  articlesList.classList.remove('list-view');
  articlesList.classList.add('grid-view');
});

// Cambiar a vista de list
listBtn.addEventListener('click', () => {
  articlesList.classList.remove('articles-list');
  articlesList.classList.add('list-view');
});

// Actualizar el contenido del elemento con el año actual
currentYearElement.textContent = currentYear;

// Agregar un controlador de eventos de clic a cada título de artículo
cardTitles.forEach(title => {
  title.addEventListener('click', redirectToArticle);
});

// Función para redireccionar al artículo completo
function redirectToArticle(event) {
  // Obtener el título del artículo que se hizo clic
  const clickedTitle = event.target;

  // Obtener el elemento <li> padre que contiene el artículo completo
  const articleCard = clickedTitle.closest('.card');

  // Obtener la URL del artículo completo (puedes almacenarla en un atributo personalizado en el elemento <li>)
  const articleUrl = articleCard.dataset.articleUrl;

  // Redireccionar a la URL del artículo completo
  window.location.href = articleUrl;
}