 var basicwash_prices= new Array();
 basicwash_prices["Basic"]=0;
 basicwash_prices["Express12"]=12;
 basicwash_prices["Express15"]=15;
 basicwash_prices["Express25"]=25;
 

//This function finds the filling price based on the 
//drop down selection
function getBasicWashPrice()
{
    var basicWashPrice=0;
    //Get a reference to the form id="carenaform"
    var theForm = document.forms["carenaform"];
    //Get a reference to the select id="basic_wash"
     var selectedBasicWash = theForm.elements["basic_wash"];
     
    //set basicWashPrice Price equal to value user chose
    basicWashPrice = basicwash_prices[selectedBasicWash.value];

    //finally we return basicWashPrice
    return basicWashPrice;
}


 var cartype_prices= new Array();
 cartype_prices["Car"]=0;
 cartype_prices["Regular"]=10;
 cartype_prices["Van"]=15;
 cartype_prices["Truck"]=20;
 

//This function finds the filling price based on the 
//drop down selection
function getCarTypePrice()
{
    var carTypePrice=0;
    //Get a reference to the form id="carenaform"
    var theForm = document.forms["carenaform"];
    //Get a reference to the select id="car_type"
     var selectedcarType = theForm.elements["car_type"];
     
    //set carTypePrice Price equal to value user chose
    carTypePrice = cartype_prices[selectedcarType.value];

    //finally we return carTypePrice
    return carTypePrice;
}




 var protection_prices= new Array();
 protection_prices["protection"]=0;
 protection_prices["Clear_coat"]=15;
 protection_prices["Temporary"]=5;
 

//This function finds the filling price based on the 
//drop down selection
function getProtectionPrice()
{
    var protectionPrice=0;
    //Get a reference to the form id="carenaform"
    var theForm = document.forms["carenaform"];
    //Get a reference to the select id="protection"
     var selectedProtection = theForm.elements["protection"];
     
    //set protectionPrice Price equal to value user chose
    protectionPrice = protection_prices[selectedProtection.value];

    //finally we return protectionPrice
    return protectionPrice;
}



 var polish_prices= new Array();
 polish_prices["Polish"]=0;
 polish_prices["Regular_polish"]=15;
 polish_prices["Full"]=5;
 

//This function finds the Polish price based on the 
//drop down selection
function getPolishPrice()
{
    var PolishPrice=0;
    //Get a reference to the form id="carenaform"
    var theForm = document.forms["carenaform"];
    //Get a reference to the select id="Polish_type"
     var selectedPolish = theForm.elements["Polish_type"];
     
    //set PolishPrice Price equal to value user chose
    PolishPrice = polish_prices[selectedPolish.value];

    //finally we return PolishPrice
    return PolishPrice;
}


//underbodyPrice() finds the underbody wash price based on a check box selection
function underbodyPrice()
{
    var underbodyPrice=0;
    //Get a reference to the form id="carenaform"
    var theForm = document.forms["carenaform"];
    //Get a reference to the checkbox id="underbody_wash"
    var underbody_wash = theForm.elements["underbody_wash"];

    //If they checked the box set underbodyPrice to 5
    if(underbody_wash.checked==true)
    {
        underbodyPrice=10;
    }
    //finally we return the underbodyPrice
    return underbodyPrice;
}

//tire_gloss_Price() finds the Tire Gloss price based on a check box selection
function tire_gloss_Price()
{
    var tire_gloss_Price=0;
    //Get a reference to the form id="carenaform"
    var theForm = document.forms["carenaform"];
    //Get a reference to the checkbox id="tire_gloss"
    var tire_gloss = theForm.elements["tire_gloss"];

    //If they checked the box set tire_gloss_Price to 5
    if(tire_gloss.checked==true)
    {
        tire_gloss_Price=4.25;
    }
    //finally we return the tire_gloss_Price
    return tire_gloss_Price;
}
        
function calculateTotal()
{
    //Here we get the total price by calling our function
    var carwashPrice =  getBasicWashPrice() + getCarTypePrice() + getProtectionPrice() + getPolishPrice() + underbodyPrice() + tire_gloss_Price();
    
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.style.padding='20px 50px';
    divobj.innerHTML = "Total: $"+carwashPrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}





filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    carenaRemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) carenaAddClass(x[i], "show");
  }
}

function carenaAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function carenaRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}







/*Rent*/
var forma = $(".b-booking-main");
forma.validate({
    errorPlacement: function errorPlacement(error, element) { element.before(error); }
});

forma.children(".vobla").steps({
    headerTag: "h2",
    bodyTag: ".b-booking-main__section",
    transitionEffect: "slideLeft",
    onStepChanging: function (event, currentIndex, newIndex)
    {
        forma.validate().settings.ignore = ":disabled,:hidden";
        return forma.valid();
    },
    onFinishing: function (event, currentIndex)
    {
        forma.validate().settings.ignore = ":disabled";
        return forma.valid();
    },
    onFinished: function (event, currentIndex)
    {   
       forma.validate();
        return forma.valid();
        alert("Submitted!");
    }
});

  var money = 0
  $('.b-booking-main__cat-item').click(function() {
     money = $(this).find('[name="options"]').attr('data-price');
     money = parseInt(money);
     calculateAll();
         totalCount = calculateAll() + parseInt(money);
   $('.b-booking-total__title').text('$ ' + totalCount);
      
  });

    
  $(".b-booking-main input[type='checkbox']").change(function() {
      totalCount = calculateAll() + parseInt(money);
   $('.b-booking-total__title').text('$ ' + totalCount);
  });
    
  function calculateAll(){
    count = 0;
    $(".b-booking-main input[type='checkbox']").each(function(index, checkbox){
        var probb = $(this).attr('data-price');
        console.log(probb);
      if(checkbox.checked)
        count += parseInt(probb);
        
    })
    return count;  
  };




    forma.submit(function () {
    forma.validate();
        return forma.valid();
        alert('Спасибо');
    });

/*Rent*/