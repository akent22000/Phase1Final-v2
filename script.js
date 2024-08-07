let quantity = 0;

//tie price to cart



let fetchPrints = fetch('http://localhost:3000/printing')
    .then(res => res.json())
    .then(prints => {
        prints.forEach(print => {
            renderPrint(print)
        })
    })

function renderPrint(print) {

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

    cartBTN.addEventListener('click', (e) => {
        quantity++;
        countText.textContent = quantity;

    });


    image.addEventListener('mouseover', () => {
        text.textContent = '10% off';


    });

    image.addEventListener('mouseout', () => {
        text.textContent = 'Hover to see discount!';

    });

    document.getElementById("myDetails").addEventListener("toggle", (e) => {

    });

}

const divHeader = document.getElementById('header');
const header = document.createElement('i');


let i = document.createElement("i");
i.classList.add("fa", "fa-shopping-cart")
// i.textContent = "fa", "fa-trash-o"
countText = document.createElement('h3');


header.appendChild(countText)
header.appendChild(i)
divHeader.appendChild(header)

// cartText.textContent = 'Add to Cart';

// const divTest = document.getElementById('test');
// const test = document.createElement('h3');

// divTest.appendChild(test)
// console.log(tests)
