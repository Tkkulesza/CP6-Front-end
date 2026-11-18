document.addEventListener('DOMContentLoaded', function () {
    const booksEndpoint = 'https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json';
    const bookList = document.getElementById('book-list');

    fetch(booksEndpoint)
      .then(response => response.json())
      .then(books => {
        books.forEach((book, index) => {
          const bookElement = document.createElement('div');
          bookElement.classList.add('book', `book-${book.id}`, 'group', 'flex', 'flex-col', 'rounded-xl', 'bg-white', 'p-5', 'shadow', 'transition', 'duration-300', 'hover:-translate-y-2', 'hover:shadow-xl', 'animate-aparecer');
          bookElement.style.animationDelay = `${index * 0.1}s`;
          bookElement.innerHTML = `
            <div class="overflow-hidden rounded-lg bg-slate-100 p-4">
              <img src="${book.imagem}" alt="${book.titulo}" class="mx-auto h-64 object-contain transition duration-500 group-hover:scale-110 group-hover:rotate-2">
            </div>
            <h3 class="mt-4 text-lg font-semibold group-hover:text-orange-500">${book.titulo}</h3>
            <p class="mt-2 line-clamp-4 text-sm text-slate-600">${book.resumo}</p>
          `;
          bookList.appendChild(bookElement);
        });
      })
      .catch(error => {
        console.error('Erro ao carregar os livros:', error);
        bookList.innerHTML = '<p class="col-span-full text-center text-red-500">Não foi possível carregar os livros.</p>';
      });
  });
