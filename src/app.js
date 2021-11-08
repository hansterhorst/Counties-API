const axios = require('axios')

// 2. make a axios request
async function getAllCountries() {

   // de api endpoint waar de informatie van gedownload wordt
   const allCountriesUrl = "https://restcountries.com/v2/all"
   // pak de gecreëerde div element in de index.html file
   const countriesDiv = document.getElementById("countries");
   // unordered list element
   let uList = document.createElement('ul')

   try {
      // pak de request informatie die terugkomt van de api endpoint
      const response = await axios.get(allCountriesUrl)
      const data = response.data
      console.log(data)

      // map door de data array en zet de item in de juiste element
      data.map(item => {
         // creëer de benodige element
         const flagImage = document.createElement("img")
         const lItem = document.createElement("li")
         const countryParagraph = document.createElement('p')
         const div = document.createElement('div')
         const populationParagraph = document.createElement('p')
         // image flag
         flagImage.src = item.flag
         // zet landen naam
         countryParagraph.innerHTML = item.name
         // zet de continent kleur per land
         countryParagraph.style.color = setColor(item.region)
         // koppel de element aan de div element
         div.append(flagImage, countryParagraph)
         // zet de populatie aantal
         populationParagraph.innerText = `Has a population of ${item.population} people`
         // geeft het een letter groter
         populationParagraph.style.fontSize = '14px'
         // voeg de element aan de list item element
         lItem.append(div, populationParagraph)
         // voed de list items aan de unordered list.
         uList.append(lItem)

      })
      // voeg de unordered list toe aan de gecreëerde div in de index.html file
      countriesDiv.append(uList)

   } catch (error) {
      // als de fetch niet goed gaat, toon de error message.
      console.log(error)
   }
}

console.log(getAllCountries())


// zet de kleur per continent voor de landen naam.
function setColor(region) {

   switch (region) {
      case "Asia":
         return "red"
      case "Americas":
         return "green"
      case "Africa":
         return "blue"
      case "Europe":
         return "orange"
      case"Oceania":
         return 'purple'
      default:
         return "black"
   }

}