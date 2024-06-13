let mod
let padding
let scalemod
let fontsize
let stats

let latestyear = 0
let yearindex = -1
load()

let ja_month = new Array()
ja_month[0] = new Array(12).fill(0);
ja_month[1] = new Array(12).fill(0);

// reading the logs
var lines = stats.split("\n");
console.log(lines)
var numLines = lines.length;

for (i = 0; i < numLines - 1; i++){
	let entry = lines[i].split(";");
	date=new Date(entry[0]*1)
	month=date.getMonth()
	year=date.getYear()
	console.log(year)
	console.log(date)
	value=parseInt(entry[1])

	// dynamic year switching
	if (latestyear < year){
		yearindex++
		latestyear = year
	}
	console.log(ja_month)
	ja_month[yearindex][month]+= value
}

console.log(ja_month)

const ctx = document.getElementById('graph');

const labels = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
const graphdata = {
	  labels: labels,
	  datasets: [{
		      label: 'Abschlüsse pro Monat 2022',
		      data: ja_month[0], 
		      fill: false,
		      borderColor: 'rgb(75, 192, 192)',
		      tension: 0.1,
		      pointRadius: 10,
		      pointHoverRadius: 18
		    },
		    { 
		      label: 'Abschlüsse pro Monat 2023',
		      data: ja_month[1], 
		      fill: false,
		      borderColor: 'rgb(255, 99, 132)',
		      tension: 0.1,
		      pointRadius: 10,
		      pointHoverRadius: 18
		    }]
};

new Chart(ctx, {
	type: 'line',
	data: graphdata,
	options: {
		   scales: {
			 y: {
			 	beginAtZero: true
			}
		}
	}
});

function load(){

	$.ajax({
		dataType:"text",
		traditional: true,
		type: 'POST',
		async: false,
		url: '/public/loadlogs',
		success: function (templogs) {
			//code never reaches this point
			stats = templogs
		}
	});

	console.log(stats)


}
