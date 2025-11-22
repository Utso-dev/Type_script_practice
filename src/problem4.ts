type booksType ={
    title:string,
    rating:number
}

const books = [
  { title: 'Book A', rating: 4.0 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

const filterByRating =(books :booksType[]) =>{
     const filterResult = books.filter((book:booksType)=> book.rating >= 4 )
        return filterResult;
}

console.log(filterByRating(books));