function GlobalCovidStat(){
    fetch("https://api.covid19api.com/summary")
    .then(response => response.json())
     .then( data =>{
        let globalDistribution = "";
        let status = data.Global;
            globalDistribution  += ` 
            <div class="col-md-12">
            <table class="table table-hover"> 
              <thead class="text-secondary thead-light">
                     <th scope="col">Global Statistics</th>
                     <th scope="col"></th>
                   </tr>
                 </thead>
                 <tbody>
                 <tr class="text-white">
                     <th scope="row">New Confrimed Cases:</th>
                     <td> ${ status.NewConfirmed}</td>
                   </tr>
                   <tr class="text-white">
                     <th scope="row">Total Confirmed Cases:</th>
                     <td> ${status.TotalConfirmed}</td>
                   </tr>
                   <tr class="text-danger">
                     <th scope="row">New Deaths:</th>
                     <td>${status.NewDeaths} </td>
                   </tr>
                   <tr class="text-danger">
                     <th scope="row">Total Deaths</th>
                     <td>${status.TotalDeaths}</td>
                   </tr>
                   <tr class="text-white">
                     <th scope="row">New Recovered</th>
                     <td> ${status.NewRecovered}</td>
                   </tr>
                   <tr class="text-success">
                   <th scope="row">Total Recovered</th>
                   <td> ${status.TotalRecovered}</td>
                 </tr>
                 </tbody>
               </table>
            `;
        document.getElementById('status1').innerHTML = globalDistribution;
    })
}
function CountryDistribution () {
    console.log('global statics gotten');
    fetch("https://api.covid19api.com/summary")
    .then(response => response.json())
     .then( data =>{  
        let CountriesDistribution = "";
        console.log(data);
        data.Countries.forEach(distribution =>{
            CountriesDistribution  += `
            <div class="col-md-3">
                 <table class="table table-hover">
                   <thead class="text-white">
                       <th scope="col"> ${distribution.Country}</th>
                     <th></th>
                   </thead>
                   <tbody>
                     <tr class="text-danger">
                       <th scope="row">Total Deaths</th>
                       <td>${distribution.TotalDeaths}</td>
                     </tr>
                     
                   </tbody>
                 </table>
                 </div>
            `;
        });
        document.getElementById('status3').innerHTML = CountriesDistribution;
    })
};
function NigeriaCovidStat() {
    fetch("https://api.covid19api.com/live/country/nigeria")
    .then(response => response.json())
     .then( data =>{  
        let NigeriaDistr = "";
        let Status = data[0];
        NigeriaDistr += 
     ` <div class = "inner mb-5"><p class= ""><h1><span class="">Total Deaths</span></h1>
     </p><h1><span class="">${Status.Deaths}</span></h1></div>`

        NigeriaDistr +=        `
        <table class="table table-hover">
          <thead class="text-danger thead-red">
        <th scope="col">Country</th>
        <th scope="col">${Status.Country}</th>
                     </tr>
                   </thead>
                   <tbody>
                   <tr class="text-white">
                       <th scope="row">Confirmed Cases</th>
                       <td>${Status.Confirmed}</td>
                     </tr>
                     <tr class="text-white">
                       <th scope="row">Active Cases</th>
                       <td>${Status.Active}</td>
                     </tr>
                     <tr class="text-white">
                       <th scope="row">Recovered</th>
                       <td>${Status.Recovered} </td>
                     </tr>
          
                     <tr class="text-white">
                       <th scope="row">Date</th>
                       <td>${Status.Date}</td>
                     </tr>
                   </tbody>
                 </table>
            `;
        document.getElementById('status2').innerHTML = NigeriaDistr;
    })
}

function CovidPieChart()  {

var chart = new CanvasJS.Chart("chartContainer", {
  animationEnabled: true,
  title: {
    text: "Desktop Search Engine Market Share - 2016"
  },
  data: [{
    type: "pie",
    startAngle: 240,
    yValueFormatString: "##0.00\"%\"",
    indexLabel: "{label} {y}",
    dataPoints: [
      {y: 79.45, label: "Google"},
      {y: 7.31, label: "Bing"},
      {y: 7.06, label: "Baidu"},
      {y: 4.91, label: "Yahoo"},
      {y: 1.26, label: "Others"}
    ]
  }]
});
chart.render();

}


$(document).ready(function() {
    GlobalCovidStat();
    CountryDistribution();
    NigeriaCovidStat();
    CovidPieChart() ;

});
