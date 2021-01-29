var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function () { 
    var data = JSON.parse(this.response);
    var region = data.filter((reg) => {
         return reg.population<200000;
    }).map((ele) => {
            return ele.name})
        console.log(region);
     
    
}
