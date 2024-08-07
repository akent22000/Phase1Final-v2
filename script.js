let quantity = 0;

const divHeader = document.getElementById('header');
const header = document.createElement('i');


let i = document.createElement("i");
i.classList.add("fa", "fa-shopping-cart")
// i.textContent = "fa", "fa-trash-o"
header.appendChild(i)
divHeader.appendChild(header)


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

    const increaseBtn = document.createElement('button');
    const decreaseBtn = document.createElement('button');
    const countText = document.createElement('h3');

    const cartBTN = document.createElement('button');
    const cartText = document.createElement('h3');

    const myDetails = document.createElement('details');
    const description = document.createElement('summary');
    const details = document.createElement('p');
    const div = document.createElement('div');
    const name = document.createElement('h2');
    const type = document.createElement('p');
    const price = document.createElement('p');
    const turnaround = document.createElement('p');

    div.setAttribute("class", "card");
    div.setAttribute("id", "myDetails");

    increaseBtn.textContent = '+';
    decreaseBtn.textContent = '-';

    description.textContent = 'Product Description'
    details.textContent = `${print.description}`
    name.textContent = `Product: ${print.name}`
    type.textContent = `Category: ${print.type}`
    price.textContent = `Price: ${print.price}`
    turnaround.textContent = `Turn around time: ${print.turnaround}`
    countText.textContent = quantity;
    cartText.textContent = 'Add to Cart';
    const image = document.createElement('img');

    image.classList = 'card-img'
    // like.classList = 'empty'
    image.src = print.image
    image.classList.add('image');

    div.appendChild(image)

    div.appendChild(name)
    myDetails.appendChild(description)
    myDetails.appendChild(details)
    div.appendChild(myDetails)
    div.appendChild(type)
    div.appendChild(price)
    div.appendChild(turnaround)
    div.appendChild(increaseBtn)
    div.appendChild(decreaseBtn)
    div.appendChild(countText)
    div.appendChild(cartBTN)
    cartBTN.appendChild(cartText)
    cardsContainer.appendChild(div)


    increaseBtn.addEventListener('click', (e) => {
        quantity++;
        countText.textContent = quantity;
    });

    decreaseBtn.addEventListener('click', (e) => {
        if (quantity <= 0) {
            quantity = 0;

        } else {
            quantity--;
        }
        countText.textContent = quantity;

    });



    document.getElementById("myDetails").addEventListener("toggle", (e) => {

    });

}


// const divTest = document.getElementById('test');
// const test = document.createElement('h3');

// divTest.appendChild(test)
// console.log(tests)
