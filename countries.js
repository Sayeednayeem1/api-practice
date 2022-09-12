
// fetch data

const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
} 

const displayCountries = countries =>{
    
    const countriesContainer = document.getElementById('countries-container');

    countries.forEach(country =>{
        const countryDiv =document.createElement('div');
        countryDiv.classList.add('country');
        // console.log(country);
        countryDiv.innerHTML = `
        
        <h4>Name: ${country.name.common} </h4>
        <p>Capital: ${country.capital ? country.capital[0] : "No capital found"}</p>
        <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    })

}

const loadCountryDetail = (code) =>{
    
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]));
}

const displayCountryDetails = country =>{

    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
    <img src="${country.flags.png}" alt="">
    <h4>Name: ${country.name.common} </h4>
    <p>Capital: ${country.capital ? country.capital[0] : "No capital found"}</p>
    
    `;

}

loadCountries();