let quantity = 0;
let sort = 0
console.log(sort)

const url = 'http://localhost:3000/printing'

fetch(url)
    .then((response) => response.json())
    .then((print) => {
        render(print);
    });


sortBTN = document.createElement('button');
sortBTN.addEventListener('click', (e) => {
    print.sort((a, b) => a.price - b.price);


});

const divHeader = document.getElementById('header');
const header = document.createElement('i');


let i = document.createElement("i");
i.classList.add("fa", "fa-shopping-cart")
countText = document.createElement('h3');

header.appendChild(countText)
header.appendChild(i)
divHeader.appendChild(header)
divHeader.appendChild(sortBTN)



function render(print) {
    //   print.sort((a, b) => a.price - b.price);

    print.forEach(myFunction);
    function myFunction(print) {


        const cardsContainer = document.getElementById('display');
        const myDetails = document.createElement('details');
        const description = document.createElement('summary');
        const details = document.createElement('p');
        const div = document.createElement('div');
        const name = document.createElement('h2');
        const type = document.createElement('p');
        const price = document.createElement('p');
        const turnaround = document.createElement('p');
        cartBTN = document.createElement('button');

        const cartText = document.createElement('h3');

        div.setAttribute("class", "card");
        div.setAttribute("id", "myDetails");

        description.textContent = 'Product Description'
        details.textContent = `${print.description}`
        name.textContent = `${print.name}`
        type.textContent = `Category: ${print.type}`
        price.textContent = `Price: ${print.price}`
        turnaround.textContent = `Turn around time: ${print.turnaround}`

        cartText.textContent = 'Add to Cart';
        const image = document.createElement('img');

        image.classList = 'card-img'
        // like.classList = 'empty'
        image.src = print.image
        image.classList.add('image');
        name.classList.add('name');


        const text = document.createElement('h3');
        text.classList.add('text');
        text.textContent = 'Hover to see discount!';

        div.appendChild(text)


        div.appendChild(image)
        div.appendChild(name)
        myDetails.appendChild(description)
        myDetails.appendChild(details)
        div.appendChild(myDetails)
        div.appendChild(type)
        div.appendChild(price)
        div.appendChild(turnaround)
        div.appendChild(cartBTN)
        cartBTN.appendChild(cartText)
        cardsContainer.appendChild(div)
    }
}



