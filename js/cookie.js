var counter;


var total = 0;
var obj_boost ={
    multiplicateur_by_click : 1,
    multiplicateur_auto_clicker : 0,
};

var booster_value = obj_boost.multiplicateur_by_click;
var is_booster_active = false;


var prix_boost_1 = 10;

let counter_id = document.getElementById("counter")

function add_total(click_value){
    total += click_value;
}

function display_total(final){
    counter_id.innerHTML = "Cookies : " + final;
}

let interval_auto_click = setInterval(() => {
    total = total + obj_boost.multiplicateur_auto_clicker ;
    counter_id.innerHTML ="Cookies : " + total;
}, 10000);

setInterval(() => {
    if(total < prix_boost_1)
    document.getElementById("boost-1").disabled = true;
    else
    document.getElementById("boost-1").disabled = false;
    
    if(total < prix_auto_clicker)
    document.getElementById("auto-click").disabled = true;
    else
    document.getElementById("auto-click").disabled = false;
    
    if(total < prix_boost_click || is_booster_active == true)
    document.getElementById("click-boost").disabled = true;
    else
    document.getElementById("click-boost").disabled = false;
}, 300);

//cookie +1
document.getElementById("clicker").addEventListener("click",() =>{
    add_total(booster_value);
    display_total(total);
})

//booster 1
document.getElementById("boost-1").addEventListener("click", () =>{
    
    if (total >= prix_boost_1){
        total -= prix_boost_1;
        
        prix_boost_1 *= 2 ;
        
        booster_value =  ++obj_boost.multiplicateur_by_click;
        display_total(total);
        
        //affichage
        document.getElementById("prix-1").innerText ="prix : " + prix_boost_1;
        document.getElementById("multiplicateur").innerHTML = "Boost : " + obj_boost.multiplicateur_by_click;
        
    }
})

//booster autoclick
var prix_auto_clicker = 50;

document.getElementById("auto-click").addEventListener("click", () =>{
    if(total >= prix_auto_clicker){
        total -= prix_auto_clicker;
        display_total(total);

        prix_auto_clicker *= 2;
        document.getElementById("prix_auto_click").innerHTML = "Prix : " + prix_auto_clicker;

        booster_value = ++obj_boost.multiplicateur_auto_clicker;
        console.log(booster_value)
        let interval_time = 1000 / booster_value;

        //fonction pour boucler auto click
        clearInterval(interval_auto_click);

        interval_auto_click = setInterval(() => {
            total++;
            display_total(total);
        }, interval_time);


    }
})

//booster click 
var prix_boost_click = 200;

document.getElementById("click-boost").addEventListener("click", () =>{
    if(total >= prix_boost_click){
        let time = 30;
        is_booster_active = true;

        function timer(){
            document.getElementById("click-boost").setAttribute("value", "Temps restant : " + time);
            time--;
            booster_value = obj_boost.multiplicateur_by_click * 2;
            document.getElementById("click-boost").disabled = true;

            if(time >= 0)
                setTimeout(timer, 1000);
            else{
                is_booster_active = false;
                booster_value = obj_boost.multiplicateur_by_click;
                document.getElementById("click-boost").setAttribute("value", "Click Boost")
            }
        }
        timer();

        
    }
})
