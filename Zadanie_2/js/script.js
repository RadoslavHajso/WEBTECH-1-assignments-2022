function maxDate() {
    let today = new Date();
    let thisMonth = today.getMonth() + 1;
    let thisDay = today.getDate();
    let thisYear = today.getFullYear();
    let dateInput = document.getElementById('datebirth');

    if(thisMonth < 10)
        thisMonth = '0' + thisMonth.toString();
    if(thisDay < 10)
        thisDay = '0' + thisDay.toString();

    let maxDate = thisYear + '-' + thisMonth + '-' + thisDay;
    dateInput.setAttribute('max', maxDate);
    // console.log(maxDate);
}


function calculateDate() {
    let birthday = document.querySelector('#datebirth').value;
    let dateErr = document.querySelector('.hintdate');
    let birthdayDate = new Date(birthday);

    let months = Date.now() - birthdayDate.getTime();
    let conMonths = new Date(months);

    let year = conMonths.getUTCFullYear();
    let age = document.querySelector('#age');
    let ageCalc = Math.abs(year - 1970); 
   

    if (ageCalc < 0) {
            
    } else {
        dateErr.innerHTML = 'Zadajte celý dátum';
            var seldate = datebirth.closest("fieldset");
            var incorect = seldate.querySelector(".hint");
        
            if(datebirth.value ===''){
                var selveka = age.closest("fieldset");
                var incorect = selveka.querySelector(".hint");
                datebirth.style.borderColor = "red";
                incorect.innerHTML = 'Zadajte dátum';
                age.style.borderColor = "red";
                incorect.innerHTML = 'Zadajte dátum';
                
            }else{
                incorect.innerHTML = '';
                datebirth.style.borderColor = "green";


                var selveka = age.closest("fieldset");
                var incorect = selveka.querySelector(".hint");

                age.style.borderColor = "green";
                incorect.innerHTML = '';    
            } 
    }

    age.value = ageCalc;
    age.innerHTML = ageCalc + ' rokov';
}



function showName(){
    var show = document.getElementById("hidenbuton");
    if
    (show.style.display === "hidden")
    {
        show.style.display = "block";

    }else{
        show.style.display = "block";
    }
}


    var choiceYes = document.getElementById('ano');
    var choiceNo = document.getElementById('nie');
                              
    choiceYes.onchange = function(){ 

    document.getElementById("dotexta").style.display = 'block';
        };
    choiceNo.onchange = function() {  
    document.getElementById("dotexta").style.display = 'none';
  };

  var pickbox = document.getElementById('1mesiac');
  var pickmuay = document.getElementById('3mesiace');
  var pickmma = document.getElementById('6mesiacov');
  
    
    pickbox.onchange = function(){
             
        document.getElementById("boxas").style.color = '#ffde3b';
        document.getElementById("muayas").style.color = 'white';
        document.getElementById("mmaas").style.color = 'white';     
    };

    pickmuay.onchange = function(){
             
        document.getElementById("boxas").style.color = 'white';
        document.getElementById("muayas").style.color = '#ffde3b';
        document.getElementById("mmaas").style.color = 'white';      
    };
    pickmma.onchange = function(){
             
        document.getElementById("boxas").style.color = 'white';
        document.getElementById("muayas").style.color = 'white';
        document.getElementById("mmaas").style.color = '#ffde3b';      
    };

    function nameValidation(fname){
        var selName = fname.closest("fieldset");
        var incorect =selName.querySelector(".hint");

        if(fname.value ===''){
            fname.style.borderColor = "red";
            incorect.innerHTML = 'Povinné';
            
        }else{
            incorect.innerHTML = '';
            fname.style.borderColor = "green";
        }

    }
    function phoneValidation(telc){
        var selPhone = telc.closest("fieldset");
        var incorect = selPhone.querySelector(".hint");
        var ppattern = /[0-9]{3}[0-9]{3}[0-9]{3,3}$/;

        if (telc.value.match(ppattern)) {
            incorect.innerHTML = '';
            telc.style.borderColor = "green";
        } else {
            
            incorect.style.display = 'block';
            telc.style.borderColor = "red";
            incorect.innerHTML = 'Zadajte tel.č v platnom tvare';
        }
        if(telc.value === ''){
            telc.style.borderColor = "red";
            incorect.innerHTML = 'Povinné';
                }
            }

        function predValidation(country){
            var selPhone = country.closest("fieldset");
             
            if(country.value === ''){
                country.style.borderColor = "red";
                
            }
            
        else {
            
            country.style.borderColor = "green";      
        }
    }

    function nameValidation(lname){
        var selName2 = lname.closest("fieldset");
        var incorect = selName2.querySelector(".hint");

        if(lname.value ===''){
            lname.style.borderColor = "red";
            incorect.innerHTML = 'Povinné';
            
        }else{
            incorect.innerHTML = '';
            lname.style.borderColor = "green";
        }

    }
    function genderValidation(){
        var selGender = man.closest("div.genderval");
        var selGender = woman.closest("div.genderval");
        var selGender = other.closest("div.genderval");
        var incorect = selGender.querySelector(".hintgender");
          
        incorect.innerHTML = '';
        console.log(true)   
                 
    }
  
    function emailValidation(email){
        var pattern = /^[a-zA-Z0-9.+-]{3,}@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*.[a-zA-Z]{2,4}$/;
        var selEmail = email.closest("fieldset");
        var incorect = selEmail.querySelector(".hint");
    
        if (email.value.match(pattern)) {
            incorect.innerHTML = '';
            email.style.borderColor = "green";
        } else {
            
            incorect.style.display = 'block';
            email.style.borderColor = "red";
            incorect.innerHTML = 'Zadajte email v platnom tvare';
        }
        if(email.value === ''){
            email.style.borderColor = "red";
            incorect.innerHTML = 'Povinné';
        }
    }
    var choiceOther = document.getElementById('chc5');
   
    function showTexter() {
        var box = document.getElementById("chc4");
        var text = document.getElementById("intext");
    
    if (box.checked == true){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function genreSport(sportValue) {
    let tren1 = document.querySelector('.trener1');
    let tren2 = document.querySelector('.trener2');
    let cas1 = document.querySelector('.dencas1');
    let cas2 = document.querySelector('.dencas2');

    switch (sportValue) {
        case 'BOX':
            tren1.value = 'J.Fránek';
            tren1.innerHTML = 'J.Fránek';

            tren2.value = 'J.Torma';
            tren2.innerHTML = 'J.Torma';

            cas1.value = 'Po-St-13:00';
            cas1.innerHTML = 'Po-St-13:00';

            cas2.value = 'Po-Pi-15:00';
            cas2.innerHTML = 'Po-Pi-15:00';
            break;

        case 'MUAY THAI':
            tren1.value = 'S.Fapšo';
            tren1.innerHTML = 'S.Fapšo';

            tren2.value = 'L.Body';
            tren2.innerHTML = 'L.Body';

            cas1.value = 'Ut-St-14:00';
            cas1.innerHTML = 'St-Pi-15:00';

            cas2.value = 'Ut-Št-12:00';
            cas2.innerHTML = 'Št-Pi-17:00';
            break;

        case 'MMA':
            tren1.value = 'R.Hajšo';
            tren1.innerHTML = 'R.Hajšo';

            tren2.value = 'A.Végh';
            tren2.innerHTML = 'A.Végh';

            cas1.value = 'Po-St-10:00';
            cas1.innerHTML = 'Št-So-13:00';

            cas2.value = 'Po-St-18:00';
            cas2.innerHTML = 'Št-Ne-17:00';
            break;
    }

    let selectTren = document.querySelector('#trn');
    let selectCas = document.querySelector('#dnc');

    selectTren.selectedIndex = 0;
    selectCas.selectedIndex = 0;
}

function casCha(dncValue) {
    let cas1 = document.querySelector('.dencas1');
    let cas2 = document.querySelector('.dencas2');

    //console.log(showValue);

    switch (dncValue) {
        case 'J.Fránek':
            cas1.value = 'Po-Št-12:00';
            cas1.innerHTML = 'Po-Št-12:00';

            cas2.value = 'Po-Pi-15:00';
            cas2.innerHTML = 'Po-Pi-15:00';
            break;

        case 'J.Torma':
            cas1.value = 'Ut-Št-17:00';
            cas1.innerHTML = 'Ut-Št-17:00';

            cas2.value = 'St-Ne-17:00';
            cas2.innerHTML = 'St-Ne-17:00';
            break;

        case 'S.Fapšo':
            cas1.value = 'St-So-12:00';
            cas1.innerHTML = 'St-So-12:00';

            cas2.value = 'Št-Ne-17:00';
            cas2.innerHTML = 'Št-Ne-17:00';
            break;

        case 'L.Body':
            cas1.value = 'Po-Pi-11:30';
            cas1.innerHTML = 'Po-Pi-11:30';

            cas2.value = 'Ut-St-10:00';
            cas2.innerHTML = 'Ut-St-10:00';
            break;

        case 'R.Hajšo':
            cas1.value = 'Ut-Št-15:30';
            cas1.innerHTML = 'Ut-Št-15:30';

            cas2.value = 'St-So-17:00';
            cas2.innerHTML = 'St-So-17:00';
            break;
    
        case 'A.Végh':
            cas1.value = 'Po-Pi-10:00';
            cas1.innerHTML = 'Po-Pi-10:00';

            cas2.value = 'St-Ne-18:30';
            cas2.innerHTML = 'St-Ne-18:30';
            break;
    }

    let selectCas = document.querySelector('#dnc');
    selectCas.selectedIndex = 0;
}