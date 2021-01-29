var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function () { 
    var data = JSON.parse(this.response);
    var overallPopulation = data.reduce((account,country) =>{
        return account+country.population;
    },0);
    console.log(overallPopulation);
    }
     
    


