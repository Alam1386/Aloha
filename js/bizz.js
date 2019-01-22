//ll------------------- Exercise 2 -----
/* --
for(i=0; i < 100 ; i++) {
  if ( i % 3 === 0 && i % 5 === 0 ){
    
    console.log('FizzBuzz');
  }
   else if ( i % 3 === 0){
    console.log('Bizz');
  } 
  else if ( i % 5 === 0){
    console.log('Buzz');
  }
  else {
    console.log(i);
  }
}

//ll------------------- Exercise 3 -----

const hotel = {
  hotelName: 'The Quay',
  totalRooms: '40',
  roomsBooked: '50',
  roomTypes: ['Twin','Double','Suite'],
  availability : function()
  {
    return this.totalRooms - this.roomsBooked;
   }
};
for ( i=0; i < hotel.roomTypes.length; i++){
  console.log(hotel.roomTypes[i]);
}

console.log(hotel.availability());
 if ( hotel.availability() > 0 ){
      console.log('We have rooms available.');
    } else{
      console.log('Sorry no rooms left.');
    }


// jQuery Exercise 3 

<article>
  <p class="opening-line">The first line.</p>
  <p>The second line.</p>
</article>
<p>A line outside the article.</p>


//jQuery comes after 
$(function() {
    
    //solotion 1
  $("article").children(":nth-child(2)").css("color", "red");
     
    //solotion 2

   $("article p:nth-child(2)")
    .addClass("second")
  $(".second").css("color","red");
      
    //solotion 3

  $( "article" ).select()
  $( "article p:nth-child(2)" ).css( "color" , "red" );
      
    //solotion 4
  $(".opening-line").siblings().css("color","red");
});



/// Exercise 4 of jQuery

<div class="list-editor">
   <ul class="my-list">
      <li>
         <span>My to-do</span> <a href="#" class="delete">[done]</a>
      </li>
   </ul>
   <input class="new-item" type="text" name="new-item" />
   <button>Add an item</button>
</div>

$(document).ready(function(){
	$('button').click(
    function() {
      $('.my-list').append('<li><span>' + $(".new-item").val()) ;
    });
  $('.delete').click(function() {
    $(this).parent().remove();
    });
});

//// Animation with jQuery
<div>
  <h3>"check" out this checkbox</h3>
  <input type="checkbox" id"box1">
</div>

/////

$('input').on("click", function(){
  if ($('input:checkbox'). is(':checked')){
    console.log('The checkbox is checked.');
  } else{
    console.log('The checkbox is not checked.');
  }
});

/// Animation on click

<form id="my-form">
  <input type="text" id="my-text-input"/>
  <input type="submit" />
</form>

$('#my-form').on('submit', function(event) {
  event.preventDefault();
  if($('#my-text-input').val() == '') {
    console.log('You missed the field. ');
  } else {
    console.log('Thanks for filling the field');
  }
});
/// jQuery exercise 

<ul class="faq-list">
  <li>
    <a href="#" rel="acc-1">First question?</a>
    <p id="acc-1">This is the first answer.</p>
  </li>
  <li>
    <a href="#" rel="acc-2">Second question?</a>
    <p id="acc-2">This is the second answer.</p>
  </li>
  <li>
    <a href="#" rel="acc-3">Third question?</a>
    <p id="acc-3">This is the third answer.</p>
  </li>
</ul>


$(function(){

  $('.faq-list p').css('display', 'none'); 

  $('a').on('click', function (event) {

    let answer = $(event.currentTarget).siblings();
    let hideOtherAnswers = $(event.currentTarget).parents().siblings().children('p');

    $(answer).toggle();

    $(hideOtherAnswers).css('display', 'none');

  })

});



// Udemy course starts from here onwards.

console.log('Hello World');

var whatDoYouDo = function(job, firstName){
  switch(job){
    case 'teacher':
         return firstName + ' teachs mathamatic';
    case 'designer':
        return firstName + ' desings beautiful websites.';
    case 'developer':
      return firstName + ' develops website.';
    default:
      return firstName + ' does nothing at all';
         }
}

console.log(whatDoYouDo('teacher','Alam'));
console.log(whatDoYouDo('developer','Talash'));
console.log(whatDoYouDo('designer','Ahmad'));
console.log(whatDoYouDo('','Shams'));

var fname = function(a){
    console.log(a);
}
console.log( fname('Alam jn'));



/// coding challange2 Udemy

let tipsCalculator =function(bill){
  let percentage;
  if( bill < 50 ){
    percentage = .2;

  } else if( bill >= 50 &&  bill < 200 ){
    percentage =  .15;
  } else{
    percentage = .1;
  } 
        return percentage * bill;
}
let bills = [124, 48, 268];
let tips =[tipsCalculator(bills[0]), tipsCalculator(bills[1]), tipsCalculator(bills[2])];
let finalValues = [ bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log (tips, finalValues);


/// Ojects in JavaScript and Properties. 

var alam = {
  firstName: 'Alam',
  lastName: 'Talash',
  birthYear: 1987,
  family: ['Zainab', 'Mahsa Jan'],
  isMarried: true
};
console.log(alam);
console.log(alam.family[0]);

var alamjan = new Object();
alamjan.job = 'developer';

console.log(alamjan);




/// Object and Methods

var alam = {
  fName: 'Alam',
  lName: 'Talash',
  birthYear: 1987,
  family: ['Zianab', 'Mahsa Jan'],
  calcAge: function(){
    this.age = 2019 - this.birthYear;
  },
  job: 'Web developer'
};

alam.calcAge();
console.log(alam);

-------*/

/// Coding challenge 4 of JavaScript

var mark = {
  fName: 'Mark',
  lName: 'Smooth',
  mass: 200,
  hight: 180,
  
}





