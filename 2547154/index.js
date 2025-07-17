let coffeelist=[]

const fetchcoffee=document.querySelector('#fetchcoffee')
let mainContainer=document.querySelector('#coffee-container')
let searchingInput=document.querySelector('#search')
let sortingItem=document.querySelector('#sorting')


fetchcoffee.addEventListener('click',async()=>{
await fetch('https://api.sampleapis.com/coffee/hot')
.then((response)=>response.json())
// .then((data)=>coffeelist=data.results.books)
.then((data)=>coffeelist=data)
.catch((error)=>console.error(error))
displayCoffee()
})



function displayCoffee(){
    mainContainer.innerHTML=""
    // let filteredCoffees=coffeelist;
    // console.log(filteredCoffees);
    
    let filteredCoffees=coffeelist.filter(coffee=>coffee.title.toLowerCase().includes(searchingInput.value.toLowerCase()))

    if(sortingItem.value=='asc'){
        filteredCoffees.sort((a, b)=>a.title.localeCompare(b.title))
    }
    else{
        filteredCoffees.sort((a, b) => b.title.localeCompare(a.title));
    }

    searchingInput.addEventListener('input',()=>{
        displayCoffee()
    })

    sortingItem.addEventListener('change',()=>{
        displayCoffee()
    })





// let paginatedBooks=filteredBooks.slice((currentPage-1)*itemsPerPage,(currentPage*itemsPerPage))

    for(let i=0;i<8;i++){
        let bookimg=document.createElement('img')
        bookimg.src=filteredCoffees[i].image
        bookimg.height=100
        bookimg.width=100

        let title=document.createElement('div')
        title.textContent=filteredCoffees[i].title

        let description=document.createElement('div')
        description.textContent=filteredCoffees[i].description

        let ingredients=document.createElement('div')
        ingredients.textContent=filteredCoffees[i].ingredients

        let container=document.createElement('div')
        container.appendChild(bookimg)
        container.appendChild(title)
        container.appendChild(description)
        container.appendChild(ingredients)
        mainContainer.appendChild(container)
    }

}



