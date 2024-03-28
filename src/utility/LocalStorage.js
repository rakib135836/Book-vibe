const getStoredBooks=()=>{
    const storedBooks=localStorage.getItem('books');
    if(storedBooks){
        return JSON.parse(storedBooks)
    }
    else{
   return []
    }

}



const addedBooks =id =>{
const storedBook=getStoredBooks();
const exists=storedBook.find(bookID=> bookID===id);
if(!exists){
 storedBook.push(id)
localStorage.setItem('books', JSON.stringify(storedBook))
}

}

export{addedBooks,getStoredBooks}