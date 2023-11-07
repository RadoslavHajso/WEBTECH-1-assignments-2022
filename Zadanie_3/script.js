    let legendColor = ["#F66D44", "#FEAE65", "#E6F69D", "#AADEA7", "#64C2A6", "#2D87BB", "#a077b8"];
    let mero;
    let pieOne = document.getElementById("kolac1");
    let pieTwo = document.getElementById("kolac2");
    let pieThree = document.getElementById("kolac3");
    let pieFour = document.getElementById("kolac4");
    let pieFive = document.getElementById("kolac5");
    let pieSix = document.getElementById("kolac6");

fetch("z03.json")
    .then((response) => response.json())
    .then((json) => grafs(json));

function grafs(json) {
    mero = new Chart(charBar,config1);
        renderG(json, mero);
       
    let pieCharts = [pieOne, pieTwo, pieThree, pieFour, pieFive, pieSix];
    let grade =["A", "B", "C", "D", "E", "FX", "FN"];
    for (let numberSl = 0; numberSl < json.webte1.zaznam.length; numberSl++) {
        new Chart(pieCharts[numberSl], {
            type: "pie",
            data: {
                labels: grade,
                datasets: [
                    {
                        label: json.webte1.zaznam[numberSl].rok,
                        backgroundColor: legendColor,
                        data: [
                            json.webte1.zaznam[numberSl].hodnotenie.A,
                            json.webte1.zaznam[numberSl].hodnotenie.B,
                            json.webte1.zaznam[numberSl].hodnotenie.C,
                            json.webte1.zaznam[numberSl].hodnotenie.D,
                            json.webte1.zaznam[numberSl].hodnotenie.E,
                            json.webte1.zaznam[numberSl].hodnotenie.FX,
                            json.webte1.zaznam[numberSl].hodnotenie.FN
                        ],
                        borderWidth: 0,  
                    }
                ]
            },
            options: {
                responsive: true, 
                    legend: {
                        position: "top",
                      
                        display: true,
                        labels: {    
                            boxHeight: 15,
                            boxWidth: 15
                        },
                    }  
                 },
             })
        }   
}

let charBar = document.getElementById("graf1");

let charLabelBar = {
    labels: [],
    datasets: [{
        label: "A",
        backgroundColor: legendColor[0],
        data: []
    }, {
        label: "B",
        backgroundColor: legendColor[1],
        data: []
    }, {
        label: "C",
        backgroundColor: legendColor[2],
        data: [],
    }, {
        label: "D",
        backgroundColor: legendColor[3],
        data: [],
    }, {
        label: "E",
        backgroundColor: legendColor[4],
        data: [],
    }, {
        label: "FX",
        backgroundColor: legendColor[5],
        data: [],
    }, {
        label: "FN",
        backgroundColor: legendColor[6],
        data: [],
    }]
}

const config1 = {
    type: "bar",
    options: {
        indexAxis: "x",
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
    data: charLabelBar,
}

const config2 = {
    type: 'bar',
    data: charLabelBar,
    options: {
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true
        }
      }
    }
  };

function renderG(json, mero) {
  
    let zaznam = json.webte1.zaznam;
    for (let index = 0; index < zaznam.length; index++) {
        let znamky = zaznam[index].hodnotenie;
        let i = 0;
        mero.data.labels[index] = zaznam[index].rok;
        for (const key in znamky) {
            console.log(mero.data.datasets[i].data);
            mero.data.datasets[i].data.push(znamky[key]);
            i++;
        }
    }
    mero.update();
}
function shiftBarColumns(){
    const indexAxis = mero.config.options.indexAxis;
    console.log(indexAxis);
    if(indexAxis == 'x' && window.innerWidth < 700){
        mero.destroy();
        mero = new Chart(charBar, config2);
        console.log('pod')
    }
    if(indexAxis == 'y' && window.innerWidth >= 700){
        mero.destroy();
        mero = new Chart(charBar, config1);
        console.log('nad')
    }

}

let lineChart = document.getElementById("graf3");
let  chartLine;

fetch("z03.json")
    .then((response) => response.json())
    .then((json) => dude(json));

function dude(json) {
     const gradon = ["A","B","C","D","E","FX","FN",];
    

    chartLine = new Chart(lineChart, {
        type: "line",
        data: {
            labels: gradon,
            datasets: [{
                borderWidth: 0,
              label: "Známky",
              data: [],
              borderColor: "rgb(255,222,59)",
            
              borderWidth: 4  
            }
        ]       
        },     
    });
    renderLg(json,chartLine);
}

function renderLg(json, chartLine) {

    chartLine.data.datasets[0].data.push(json.webte1.zaznam[0].hodnotenie.A + json.webte1.zaznam[1].hodnotenie.A + json.webte1.zaznam[2].hodnotenie.A + json.webte1.zaznam[3].hodnotenie.A
    + json.webte1.zaznam[4].hodnotenie.A   + json.webte1.zaznam[5].hodnotenie.A) + chartLine.data.datasets[0].data.push(json.webte1.zaznam[0].hodnotenie.B + json.webte1.zaznam[1].hodnotenie.B + json.webte1.zaznam[2].hodnotenie.B + json.webte1.zaznam[3].hodnotenie.B
    + json.webte1.zaznam[4].hodnotenie.B   + json.webte1.zaznam[5].hodnotenie.B) + chartLine.data.datasets[0].data.push(json.webte1.zaznam[0].hodnotenie.C + json.webte1.zaznam[1].hodnotenie.C + json.webte1.zaznam[2].hodnotenie.C + json.webte1.zaznam[3].hodnotenie.C
    + json.webte1.zaznam[4].hodnotenie.C   + json.webte1.zaznam[5].hodnotenie.C) + chartLine.data.datasets[0].data.push(json.webte1.zaznam[0].hodnotenie.D + json.webte1.zaznam[1].hodnotenie.D + json.webte1.zaznam[2].hodnotenie.D + json.webte1.zaznam[3].hodnotenie.D
    + json.webte1.zaznam[4].hodnotenie.D   + json.webte1.zaznam[5].hodnotenie.D) + chartLine.data.datasets[0].data.push(json.webte1.zaznam[0].hodnotenie.E + json.webte1.zaznam[1].hodnotenie.E + json.webte1.zaznam[2].hodnotenie.E + json.webte1.zaznam[3].hodnotenie.E
    + json.webte1.zaznam[4].hodnotenie.E   + json.webte1.zaznam[5].hodnotenie.E) + chartLine.data.datasets[0].data.push(json.webte1.zaznam[0].hodnotenie.FX + json.webte1.zaznam[1].hodnotenie.FX + json.webte1.zaznam[2].hodnotenie.FX + json.webte1.zaznam[3].hodnotenie.FX
    + json.webte1.zaznam[4].hodnotenie.E   + json.webte1.zaznam[5].hodnotenie.E) + chartLine.data.datasets[0].data.push(json.webte1.zaznam[0].hodnotenie.FN + json.webte1.zaznam[1].hodnotenie.FN + json.webte1.zaznam[2].hodnotenie.FN + json.webte1.zaznam[3].hodnotenie.FN
    + json.webte1.zaznam[4].hodnotenie.FN  + json.webte1.zaznam[5].hodnotenie.FN) ;
            
    chartLine.update();
}


var lineSiCo = document.getElementById('grafko').getContext('2d');
let ende = true;
let amplitude = 1;

if(typeof(EventSource) !== "undefined") {
    let source = new EventSource("https://old.iolab.sk/evaluation/sse/sse.php");
    source.addEventListener("message", function(e) {
        let data = JSON.parse(e.data);

        if (amplitude === '') {
            amplitude = 1;
        }

        sincos.data.labels.push(data.x);
        sincos.data.datasets[0].data.push(data.y1 * amplitude);
        sincos.data.datasets[1].data.push(data.y2 * amplitude);

        if (ende === true) {
            sincos.update();
        }

    }, false);

}
const sendeschluss = () => {
    if (ende === true) {
        ende = false;
    } 
}

const data = {
    labels: [],
  datasets: [{
    label: 'Sínus',
    data: [],
    fill: false,
    borderColor: "rgb(255,222,59)",
    backgroundColor: "rgb(255,222,59)",
    tension: "0.4",
    hidden: false,
  },
  {
    label: 'Kosínus',
    data: [],
    fill: false,
    borderColor: "rgb(246, 109, 68)",
    backgroundColor: "rgb(246, 109, 68)",
    tension: "0.4",
    hidden: false,
  }
]
};

  const config3 = {
    type: "line",
    data: data,
    options: {
        responsive:true,
        scales:{
            y: {
                beginAtZero: true
            }
        },
        plugins:{
            zoom:{
                zoom:{
                    wheel: {
                        enabled: true,
                    }
                }
            }
        }
    }
};
var sincos = new Chart(lineSiCo, config3);

const charcos = (checkbox) => {
    if (checkbox.classList.contains('gfc')) {
        sincos.data.datasets[1].hidden = !sincos.data.datasets[1].hidden;

    } else if (checkbox.classList.contains('gfs')) {
        sincos.data.datasets[0].hidden = !sincos.data.datasets[0].hidden;
    }
    sincos.update();
}

    class Myinput extends HTMLElement{
        constructor(){
          super();
  
          this.innerHTML = `  
            <div class="sliderko">
                <input type="range" min="1" max="7" value="1" class="slider" id="slid"/>
            </div>

            <div class="numberko"> 
                <input id="number" type="number" min="1" max="7" value="1" class="numbs"/>
            </div>
            `
            var ampRange = document.getElementById("slid");
            var ampNumber = document.getElementById("number");
    
            ampRange.addEventListener('input', function(s){
                ampRange.value = s.target.value;
                ampNumber.value = s.target.value;
                amplitude = s.target.value;
            });
    
            ampNumber.addEventListener('input', function(s){
                ampNumber.value = s.target.value;
                ampRange.value = s.target.value;
                amplitude = s.target.value;
            })
    
        }
      }
  
      window.customElements.define("my-input",Myinput)


      function dispalyComp(){
        if(document.getElementById("slidbtn").checked){
            document.getElementById("slid").style.display = "block";
        } else {
            document.getElementById("slid").style.display = "none";
        }
    
        if(document.getElementById("inptbtn").checked){
            document.getElementById("number").style.display = "block";
        } else document.getElementById("number").style.display = "none";
    }
    