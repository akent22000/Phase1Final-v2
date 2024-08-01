
// let counterUpdate = {
//     // name: this.value,
//     // price: "price",
//     // type: "type",
//     // description: "description",
//     // turnaround: "turnaround",
//     quantity: 0
// };


let quantity = 0;

fetch(`http://localhost:3000/printing/${name}`)
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

    const div = document.createElement('div');
    const name = document.createElement('h2');
    const description = document.createElement('p');
    const type = document.createElement('p');
    const price = document.createElement('p');
    const turnaround = document.createElement('p');

    div.setAttribute("class", "card");

    increaseBtn.textContent = '+';
    decreaseBtn.textContent = '-';

    name.textContent = `Product: ${print.name}`
    description.textContent = `Description: ${print.description}`
    type.textContent = `Category: ${print.type}`
    price.textContent = `Price: ${print.price}`
    turnaround.textContent = `Turn around time: ${print.turnaround}`
    countText.textContent = quantity;

    div.appendChild(name)
    div.appendChild(description)
    div.appendChild(type)
    div.appendChild(price)
    div.appendChild(turnaround)
    div.appendChild(increaseBtn)
    div.appendChild(decreaseBtn)
    div.appendChild(countText)
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
    console.log(print)
}







function updateQuantity() {
    fetch(`http://localhost:3000/printing/${name}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()

    })
        .then(res => res.json())
        .then((print) => console.log(print))
    // .catch((error) => console.error(error));
}
updateQuantity()
// const quantityIncrease = document.getElementById('increase');
// const quantityDecrease = document.getElementById('decrease');

// document.getElementById("counting").textContent = quantity;

// quantityIncrease.addEventListener('click', (e) => {

//     quantity++;
//     document.getElementById("counting").textContent = quantity;

// });

// quantityDecrease.addEventListener('click', (e) => {

//     if (quantity <= 0) {
//         quantity = 0;
//     } else {
//         quantity--;
//     }
//     document.getElementById("counting").textContent = quantity;

// });
