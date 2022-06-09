import './css/styles.css';
import { fetchCountries } from './fetchCountries';
var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const refs = {
    inpurt: document.querySelector('#search-box'),
    list: document.querySelector('.country-list'),
    info: document.querySelector('.country-info'),
};
console.log(refs);

refs.inpurt.addEventListener('input', debounce(handleInput, DEBOUNCE_DELAY));

function handleInput(e) {
    const inputValue = e.target.value;
    const countries = fetchCountries(inputValue);
    renderList(countries);
}

function renderList(countries) {
    const markup = countries
        .map((({ name, capital, population, languages, flags }) => {
            return `
            <li>
                <span>${name}</span>
                <span>${capital}</span>
                <span>${population}</span>
                <span>${languages[0].name}</span>
                <img src="${flags}" alt="${name}">
                </li>
                `;
        }
        ))
        .join('');
    refs.list.innerHTML = markup;
}


    



