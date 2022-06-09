export {fetchCountries};



function fetchCountries(name) {
 const url = `https://restcountries.com/v3/name/{${name}}?fields=name;capital;population;flags;languages`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.log(error));
}
