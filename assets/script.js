const eleContentCards = document.querySelector('#contentCards')
const booksApiUrl = 'https://striveschool-api.herokuapp.com/books'
let htmlRowContent = ''

fetch(booksApiUrl)
   .then(response => response.json())
   .then((books) => {

    books.forEach(book => {
        htmlRowContent += `<div class="col-6 col-md-4 col-lg-3 col-xl-2 delete">
           <div class="card">
           <img src="${book.img}" class="card-img-top w-100" alt="book cover">
           <div class="card-body">  
               <h5 class="card-title">${book.title}</h5>
               <p class="card-text">${book.price} €</p>
               <a href="#" class="btn btn-outline-danger btnScarta">Scarta</a>
            </div>
            </div>
            </div>`        
    });
    eleContentCards.innerHTML = htmlRowContent
    const cards = document.querySelectorAll('.delete')
    const btnsScarta = document.querySelectorAll('.btnScarta')
    for (let i=0; i<cards.length; i++){
        btnsScarta[i].addEventListener('click',(e)=>{
            cards[i].remove()
        })
    }
    })




