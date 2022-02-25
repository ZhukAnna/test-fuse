import './scss/style.scss';

'use strict';

const filterField = document.querySelector('#filter');
const cards = document.querySelector('.cards');

const requestURL = 'https://603e38c548171b0017b2ecf7.mockapi.io/homes';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);
xhr.onload = () => {
    if (xhr.status !== 200) {
    return;
    }

    const data = JSON.parse(xhr.response);

    filterField.addEventListener('input', () => {
        let filter = filterField.value.toLowerCase();
        cards.innerHTML = '';

        if (filter.length < 3) {
            return data.map(item => createCard(item));
        }

        let filteredCards = data.filter((card) =>  card.title.toLowerCase().indexOf(filter) > -1);
        
        if (filteredCards.length > 0) {     
            return filteredCards.map(item => createCard(item));
        } else {
            cards.innerHTML = 'No results found';
        }

    });

    data.map(item => createCard(item));

    function createCard({ id, title, address, type, price } = data) {

        price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        const tagContent = type.replace(/([a-z])([A-Z])/g, "$1 $2");
        const tagStyle = (type === 'IndependentLiving')?'card_tag__blue':'card_tag__orange';

        const newCard = document.createElement('div');
        newCard.classList.add('card');

        newCard.innerHTML = `
        <a href="/details/${id}" target="_blank" rel="noopener noreferrer">
            <div class="card_img-container">
                <img class="card_img" src="https://picsum.photos/seed/${id}/400/240" alt="">
                <div class="card_tag ${tagStyle}">
                ${tagContent}
                </div>
            </div>
            <div class="card_description">
                <h2 class="card_title">${title}</h2>
                <p class="card_subtitle">${address}</p>
                <p class="card_price">New Properties for Sale from 
                    <span class="card_price-num">£${price}</span>
                </p>
                <p class="card_option">Shared Ownership Available</p>
            </div>
            </a>
        `;

        cards.append(newCard);
    }

}
xhr.send();
