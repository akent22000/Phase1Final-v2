document.addEventListener("DOMContentLoaded", function () {
    first(fetchPrint)
});

function first(title) {
    document.getElementById("title").textContent = 'Print Shop'
    title();
}


//set shopping cart count varialbe
let quantity = 0;
//set sort click event varialbe
clicked = 0

//fetch json db
function fetchPrint() {
    fetch('http://localhost:3000/cards')
        .then((response) => response.json())
        .then((card) => {

            //if/else condition to sort if sort button is clicked, default no click is sort by name
            if (clicked === 1) {
                //reset html display
                document.getElementById("display").innerHTML = ''
                //sort array by price
                card.sort((a, b) => a.price - b.price);
            } else if (clicked === 0) {
                //sort array by name
                card.sort((a, b) => {
                    const nameA = a.name.toUpperCase();
                    const nameB = b.name.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
            }
            //render to page 
            card.forEach(card => {
                renderPrint(card)
            })
        })
}



//top of page element creations
sortBTN = document.createElement('button');
sortBtnText = document.createElement('h3');
const divHeader = document.getElementById('header');
const header = document.createElement('i');
let i = document.createElement("i");

i.classList.add("fa", "fa-shopping-cart")
sortBTN.setAttribute("class", "btn btn-secondary");
divHeader.setAttribute("class", "col-md-auto");
sortBtnText.setAttribute("class", "cartText");

i.textContent = quantity
sortBtnText.textContent = "Sort by price"

header.appendChild(i)
divHeader.appendChild(header)
sortBTN.appendChild(sortBtnText)
divHeader.appendChild(sortBTN)


//sort by price button/event
sortBTN.addEventListener('click', (e) => {
    clicked = 1
    //re-render data to display updated sort order
    fetchPrint()
});

//render data elements to page via forEach in fetch function
function renderPrint(card) {
    //define/create page elements
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
    const cartBtnText = document.createElement('h3');

    //assign css elements
    div.setAttribute("class", "col-md-auto");
    div.setAttribute("id", "myDetails");
    cardsContainer.setAttribute("class", "row");
    cartBTN.setAttribute("class", "btn btn-secondary");
    cartBtnText.setAttribute("class", "cartText");


    description.textContent = 'Product Description'
    details.textContent = `${card.description}`
    name.textContent = `${card.name}`
    type.textContent = `Category: ${card.type}`
    price.textContent = `Price: ${card.price}`
    turnaround.textContent = `Turn around time: ${card.turnaround}`

    cartBtnText.textContent = 'Add to Cart';
    const image = document.createElement('img');

    image.classList = 'card-img'
    image.src = card.image
    image.classList.add('image');
    name.classList.add('name');


    const text = document.createElement('h3');
    text.classList.add('text');
    text.textContent = 'Hover to see discount!';

    //organize page elements
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
    cartBTN.appendChild(cartBtnText)
    cardsContainer.appendChild(div)

    //cart button click event
    cartBTN.addEventListener('click', (e) => {
        //increments "Add to Cart" clicks
        quantity++;
        //updates cart text to show current click amount
        i.textContent = quantity;

    });

    //image hover over event
    image.addEventListener('mouseover', () => {
        //if/else condition based on price
        if (card.price <= 50) {
            //updates discount text to show 10% discount if price is $50 or less
            text.textContent = '10% off';
        } else if (card.price >= 51) {
            //updates discount text to show 30% discount if price is over $50
            text.textContent = '30% off';

        }
    });

    //image hover out event
    image.addEventListener('mouseout', () => {
        //updates discount text to show hint/default text
        text.textContent = 'Hover to see discount!';

    });

    //toggle event, opens to show product detail text
    document.getElementById("myDetails").addEventListener("toggle", (e) => {

    });
}


