//catch the id of input text && submit button
const input = document.getElementById('input-id'); 
const submit = document.getElementById('search-id'); 

//main function is start here 

const bookinput =() =>{
 const searchText = input.value
 input.value =''

 //error handling for empty string
 if(searchText===''){
     document.getElementById('error').style.display ='block'
 }
else{
    document.getElementById('error').style.display ='none'
}

//book url api dynamic by name
const bookurl =`https://openlibrary.org/search.json?q=${searchText}`
 
//for books fetch,response,data

 fetch(bookurl)
 .then(res=>res.json())
 .then(data =>BooksData(data.docs))

}


//arrow function 2 works on to show single data value from data objects

const BooksData =(books)=>{

 //show the number of search result from the online books store
    const numberR =document.getElementById('res-number');
    numberR.textContent=''
    numberR.innerHTML=`
                <h3 class="text-muted search-number" style="">The Searching result is ${books.length}</h3>
    `
  
   //catch the main div element id
    const booklist =document.getElementById('books-list')
   

    //clear the previous results 

       booklist.textContent =''

    /* show singley data books from book  using for each loop */
   
    books.forEach(book =>{

     const div = document.createElement('div')
        div.classList.add('col-md-3')
        div.innerHTML =`
                <div class="card mb-2">
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="..." height="350">
                    <div class="card-body">
                            <h5 class="card-title">Book Name : ${book.title}</h5>
                            <p class="card-text">
                                <span class="h5">Author Name:</span> ${book.author_name}<br/>
                                <span class="h5">Publisher Name:</span> ${book.publisher}<br/>
                                <span class="h6">First Published: </span> ${book.first_publish_year}
                               
                            </p>
                        <button class="btn btn-info text-white" onclick="bookmore('${book.text}')">More information</button>
                    </div>
                  
                </div>
                
            
        `
        booklist.appendChild(div)

    })
}

/***********************
     Click more button to show to text code

    ***************/

const bookmore =(moredetails)=>{
   
    const moreinfo = document.getElementById('more')
    moreinfo.textContent =''
    const p =document.createElement('p')
    //add more than one class 
    p.classList.add('border')
    p.classList.add('p-4')
    p.classList.add('text-muted')
    p.innerText =moredetails

    //append child
    moreinfo.appendChild(p) 

}