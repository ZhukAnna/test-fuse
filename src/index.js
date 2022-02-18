import './scss/style.scss';

'use strict';

let data = {};

function getData() {
    const requestURL = 'https://603e38c548171b0017b2ecf7.mockapi.io/homes';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestURL);
    xhr.onload = () => {
        if (xhr.status !== 200) {
        return;
        }

        data = JSON.parse(xhr.response);

        console.log(data);

        data.map(item => createCard(item));

        function createCard({ id, title, address, type, price } = data) {

            const newCard = document.createElement('div');
            newCard.classList.add('card');

            newCard.innerHTML = `
                <div class="card_img">
                    <img src="https://picsum.photos/seed/${id}/400/240" alt="">
                    <div class="card_tag" style=${(type === 'IndependentLiving')?'background:#006F79':'background:#EC6608'}>
                    ${type = type.replace(/([a-z])([A-Z])/g, "$1 $2")}
                    </div>
                </div>
                <div class="card_description">
                    <h2 class="card_title">${title}</h2>
                    <p class="card_subtitle">${address}</p>
                    <p class="card_price">New Properties for Sale from 
                        <span>£${price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    </p>
                    <p class="card_option">Shared Ownership Available</p>
                </div>
            `;

            document.querySelector('.cards').append(newCard);
        }

    }
    xhr.send();
  }

  getData();