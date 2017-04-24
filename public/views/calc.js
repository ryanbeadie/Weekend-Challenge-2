$( document ).ready( function(){
console.log('ready');

var object = {
      };

  $( '#add' ).on( 'click', function(){addition(object);});
  $( '#subtract' ).on( 'click', function(){subtraction(object);});
  $( '#multiply' ).on( 'click', function(){times(object);});
  $( '#divide' ).on( 'click', function(){division(object);});
  $( '#clearButton' ).on( 'click', function(){clear(object);});


  function addition(){

    $('#subtract').hide();
    $('#multiply').hide();
    $('#divide').hide();
    object.firstNumber = $( '#inputOne' ).val();
    object.secondNumber = $( '#inputTwo' ).val();
    object.operation  = 'addition';
    var result = parseInt(object.firstNumber) + parseInt(object.secondNumber);
    object.equals = result;

    ajaxPost();

    $.ajax({
      url: '/items',
      type: 'GET',
      success: function( response ){
      console.log( 'back from server with:', response.inventory );
      $( '#outputDiv' ).append( '<p> ' + object.firstNumber + ' + ' +
        object.secondNumber + ' = ' + result + '</p>' );
      } // end success
    });// end ajax
  }//end addition()


function subtraction(){

    $('#add').hide();
    $('#multiply').hide();
    $('#divide').hide();
    object.firstNumber = $( '#inputOne' ).val();
    object.secondNumber = $( '#inputTwo' ).val();
    object.operation  = 'Subtraction';
    var result = parseInt(object.firstNumber) - parseInt(object.secondNumber);
    object.equals = result;

    ajaxPost();

    $.ajax({
      url: '/items',
      type: 'GET',
      success: function( response ){
      console.log( 'back from server with:', response.inventory );
      $( '#outputDiv' ).append( '<p> ' + object.firstNumber + ' - ' +
        object.secondNumber + ' = ' + result + '</p>' );
        } // end success
      });// end ajax
  }//end subtraction()


function times (){

    $('#subtract').hide();
    $('#add').hide();
    $('#divide').hide();
    object.firstNumber = $( '#inputOne' ).val();
    object.secondNumber = $( '#inputTwo' ).val();
    object.operation  = 'Multiply';
    var result = parseInt(object.firstNumber) * parseInt(object.secondNumber);
    object.equals = result;

    ajaxPost(); //call ajaxPost

    $.ajax({
      url: '/items',
      type: 'GET',
      success: function( response ){
      console.log( 'back from server with:', response.inventory );
      $( '#outputDiv' ).append( '<p> ' + object.firstNumber + ' * ' +
        object.secondNumber + ' = ' + result + '</p>' );
      } // end success
    });// end ajax
  }//end times


function division(){

    $('#subtract').hide();
    $('#multiply').hide();
    $('#add').hide();
    object.firstNumber = $( '#inputOne' ).val();
    object.secondNumber = $( '#inputTwo' ).val();
    object.operation  = 'Division';
    var result = parseInt(object.firstNumber) / parseInt(object.secondNumber);
    object.equals = result;

    ajaxPost();

    $.ajax({
      url: '/items',
      type: 'GET',
      success: function( response ){
      console.log( 'back from server with:', response.inventory );
      $( '#outputDiv' ).append( '<p> ' + object.firstNumber + ' / ' +
        object.secondNumber + ' = ' + result + '</p>' );
      } // end success
    });// end ajax
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

}); //end ready
