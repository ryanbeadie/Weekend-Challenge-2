$( document ).ready( function(){
console.log('ready');

var object = {
      };

var operator = {};

  $( '#add' ).on( 'click', function(){addition(object);});
  $( '#subtract' ).on( 'click', function(){subtraction(object);});
  $( '#multiply' ).on( 'click', function(){times(object);});
  $( '#divide' ).on( 'click', function(){division(object);});
  $( '#clearButton' ).on( 'click', function(){clear(object);});


  function addition(){

    $('#subtract').hide();
    $('#multiply').hide();
    $('#divide').hide();
    operator.math = (' + ');
    object.firstNumber = $( '#inputOne' ).val();
    object.secondNumber = $( '#inputTwo' ).val();
    object.operation  = 'addition';
    object.equals = parseInt(object.firstNumber) + parseInt(object.secondNumber);

    ajaxPost();
    ajaxGet();
    // $.ajax({
    //   url: '/items',
    //   type: 'GET',
    //   success: function( response ){
    //   console.log( 'back from server with:', response.inventory );
    //   $( '#outputDiv' ).append( '<p> ' + object.firstNumber + operator.math +
    //     object.secondNumber + ' = ' + object.equals + '</p>' );
    //   } // end success
    // });// end ajax
  }//end addition()


function subtraction(){

    $('#add').hide();
    $('#multiply').hide();
    $('#divide').hide();
    operator.math = (' - ');
    object.firstNumber = $( '#inputOne' ).val();
    object.secondNumber = $( '#inputTwo' ).val();
    object.operation  = 'Subtraction';
    object.equals = parseInt(object.firstNumber) - parseInt(object.secondNumber);

    ajaxPost();
    ajaxGet();

  }//end subtraction()


function times (){

    $('#subtract').hide();
    $('#add').hide();
    $('#divide').hide();
    operator.math = (' * ');
    object.firstNumber = $( '#inputOne' ).val();
    object.secondNumber = $( '#inputTwo' ).val();
    object.operation  = 'Multiply';
    object.equals = parseInt(object.firstNumber) * parseInt(object.secondNumber);

    ajaxPost(); //call ajaxPost
    ajaxGet();

  }//end times


function division(){

    $('#subtract').hide();
    $('#multiply').hide();
    $('#add').hide();
    operator.math = (' / ');
    object.firstNumber = $( '#inputOne' ).val();
    object.secondNumber = $( '#inputTwo' ).val();
    object.operation  = 'Division';
    object.equals = parseInt(object.firstNumber) / parseInt(object.secondNumber);

    ajaxPost();
    ajaxGet();

  }//end division

function clear() {

      $('#add').show();
      $('#subtract').show();
      $('#multiply').show();
      $('#divide').show();
      $('#outputDiv').empty();
      $( '#inputOne' ).val('');
      $( '#inputTwo' ).val('');

  }//end clear

function ajaxPost(){
      $.ajax({
      url: '/addItem',
      type: 'POST',
      data: object,
      success: function( response ){
      console.log( 'back from server with:', response );
        }//end success
      });//end ajax
  }//end ajaxPost

function ajaxGet(){
  $.ajax({
    url: '/items',
    type: 'GET',
    success: function( response ){
    console.log( 'back from server with:', response.inventory );
    $( '#outputDiv' ).append( '<p> ' + object.firstNumber + operator.math +
      object.secondNumber + ' = ' + object.equals + '</p>' );
    } // end success
  });// end ajax
}//end ajaxGet



}); //end ready
