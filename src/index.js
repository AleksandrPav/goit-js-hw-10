import './css/styles.css'
import debounce from 'lodash.debounce'
import Notiflix from 'notiflix'
import { fetchCountries } from './fetchCountries'

const DEBOUNCE_DELAY = 300


const refs = {
    input: document.querySelector('#search-box'),
    list: document.querySelector('.country-list'),
    info: document.querySelector('.country-info'),
}


function anotherName() {
  Notiflix.Notify.failure('Oops, there is no country with that name')
}

function manyMatches() {
  Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
}


refs.input.addEventListener('input', debounce(toGetCountries, DEBOUNCE_DELAY))

function toGetCountries() {
  const name = refs.input.value.trim()
  if (name === '') {
    return (refs.list.innerHTML = ''), (refs.info.innerHTML = '')
  }

  fetchCountries(name)
    .then(countries => {
      refs.list.innerHTML = ''
      refs.info.innerHTML = ''
      if (countries.length === 1) {
        refs.list.insertAdjacentHTML('beforeend', renderCountryList(countries))
        refs.info.insertAdjacentHTML('beforeend', renderCountryInfo(countries))
      } else if (countries.length >= 10) {
        manyMatches()
      } else {
        refs.list.insertAdjacentHTML('beforeend', renderCountryList(countries))
      }
    })
    .catch(anotherName)
}

function renderCountryInfo(countries) {
  const markup = countries
    .map(({ capital, population, languages }) => {
      return `
        <ul class="country-info__list">
            <li class="country-info__item">
            <h2><b>Capital: </b>${capital}</h2></li>
            <li class="country-info__item"><p><b>Population: </b>${population}</p></li>
            <li class="country-info__item"><p><b>Languages: </b>${Object.values(languages).join(', ')}</p></li>
        </ul>
        `
    })
    .join('')
  return markup
}


function renderCountryList(countries) {
  const markup = countries
    .map(({ name, flags }) => {
      return `
          <li class="country-list__item">
              <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}" width = 30px height = 30px>
              <h2 class="country-list__name">${name.official}</h2>
          </li>
          `
    })
    .join('')
  return markup
}


