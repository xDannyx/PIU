var table = document.querySelector('table')
var tableArr = [];
var tableLab = [];
//loop all rows and form data array
for ( var i = 1; i < table.rows.length; i++ ) {
    tableArr.push([
     table.rows[i].cells[2].innerHTML,
     table.rows[i].cells[3].innerHTML,
     table.rows[i].cells[4].innerHTML,
     table.rows[i].cells[5].innerHTML,
	 table.rows[i].cells[6].innerHTML
    ]);
tableLab.push(table.rows[i].cells[0].innerHTML + " - " + table.rows[i].cells[1].innerHTML)
//tableLab.push(table.rows[i].cells[0].innerHTML)
var canvas = document.createElement("canvas");
canvas.setAttribute("id", "myChart"+i);
table.rows[i].cells[7].appendChild(canvas);
}
console.log(tableArr);

//loop array of data and create chart for each row
tableArr.forEach(function(e,i){
  var chartID = "myChart"+ (i+1)
  var ctx = document.getElementById(chartID).getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Pojemność", "Cena", "Wysychanie", "Wydajność", "Ilość"],
        datasets: [{
            label: tableLab[i],
            data: e,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
				'rgba(175, 92, 252, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
				'rgba(175, 92, 252, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
})