


//set shopping cart count varialbe
let quantity = 0;
//set sort click event varialbe
clicked = 0

//fetch json
function fetchPrint() {
    fetch('http://localhost:3000/printing')
        .then((response) => response.json())
        .then((print) => {

            if (clicked === 1) {
                document.getElementById("display").innerHTML = ''
                print.sort((a, b) => a.price - b.price);
            } else if (clicked === 0) {
                print.sort((a, b) => {
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
            print.forEach(print => {
                renderPrint(print)
            })
        })
}
fetchPrint()


sortBTN = document.createElement('button');
sortBtnText = document.createElement('h3');
const divHeader = document.getElementById('header');
const header = document.createElement('i');
countText = document.createElement('h3');
let i = document.createElement("i");

i.classList.add("fa", "fa-shopping-cart")
sortBTN.setAttribute("class", "btn btn-secondary");
divHeader.setAttribute("class", "col-md-auto");
sortBtnText.setAttribute("class", "cartText");

countText.textContent = quantity;
sortBtnText.textContent = "Sort by price"

header.appendChild(countText)
header.appendChild(i)
divHeader.appendChild(header)
divHeader.appendChild(sortBTN)
sortBTN.appendChild(sortBtnText)


sortBTN.addEventListener('click', (e) => {
    clicked = 1
    fetchPrint()
});

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
    const cartBtnText = document.createElement('h3');

    div.setAttribute("class", "col-md-auto");
    div.setAttribute("id", "myDetails");
    cardsContainer.setAttribute("class", "row");
    cartBTN.setAttribute("class", "btn btn-secondary");
    cartBtnText.setAttribute("class", "cartText");


    description.textContent = 'Product Description'
    details.textContent = `${print.description}`
    name.textContent = `${print.name}`
    type.textContent = `Category: ${print.type}`
    price.textContent = `Price: ${print.price}`
    turnaround.textContent = `Turn around time: ${print.turnaround}`

    cartBtnText.textContent = 'Add to Cart';
    const image = document.createElement('img');

    image.classList = 'card-img'
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
    cartBTN.appendChild(cartBtnText)
    cardsContainer.appendChild(div)

    cartBTN.addEventListener('click', (e) => {
        quantity++;
        countText.textContent = quantity;

    });

    image.addEventListener('mouseover', () => {
        if (print.price <= 50) {
            text.textContent = '10% off';
        } else if (print.price >= 51) {
            text.textContent = '30% off';

        }
    });

    image.addEventListener('mouseout', () => {
        text.textContent = 'Hover to see discount!';

    });

    document.getElementById("myDetails").addEventListener("toggle", (e) => {

    });
}


