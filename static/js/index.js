$(document).ready(function () {
  
  // Hamburger Menu for Smaller Screens
  $('.animated-button').on('click', function () {
    $('.animated-icon1').toggleClass('open');
  });

  $('#submit-form').on('click', function (e) {
    e.preventDefault();
    // Check name field is not blank and is above 3 characters
      var nameValidated = checkNameField();
    // Check email is not blank, and is an email 
      var emailValidated = checkEmailField();
      if (nameValidated && emailValidated) {
        e.submit();
      }
  });

  // Form Validation 

  function checkNameField (){
    var field = $('#input-name');
    var errorField = $('#input-name-error');
    var errorMessage = "";
    if (! field.val()) {errorMessage = 'Name is empty'}
    if (field.val().length > 0 && field.val().length < 3) {errorMessage = 'Name is too short'}

    if (! errorMessage) {
      field.removeClass('is-invalid');
      errorField.text('');
      errorField.attr('hidden', true);
      return true;
    } else {
      field.addClass('is-invalid');
      errorField.text(errorMessage);
      errorField.attr('hidden', false);
      return false;
    }
  }
  function checkEmailField(){
    var field = $('#InputEmail');
    var errorField = $('#input-email-error');
    var errorMessage = "";
    if (! validateEmail(field.val())) {errorMessage = "Email is invalid"}

    if (! errorMessage) {
      field.removeClass('is-invalid');
      errorField.text('');
      errorField.attr('hidden', true);
      return true;
    } else {
      field.addClass('is-invalid');
      errorField.text(errorMessage);
      errorField.attr('hidden', false);
      return false;
    }
  }
  function validateEmail(email) 
{
  var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

  return re.test(email);
}
  
// Attempts at making the Tablet View carousel move to next and previous
  
  // $('a[data-slide="prev"]').click(function() {
  //   console.log('Clicked previous');
  //   $('#carouselContent').carousel('prev');
  // });
  
  // $('a[data-slide="next"]').click(function() {
  //   console.log('Clicked next');
  //   $('#carouselContent').carousel('next');
  // });

  // $('a[data-slide="prev"]').click(function(e) {
  //   e.stopPropagation();
  //   $('#carouselContent').carousel('prev');
  //   return false;
  // });
  
  // $('a[data-slide="next"]').click(function(e) {
  //   e.stopPropagation();
  //   $('#carouselContent').carousel('next');
  //   return false;
  // });

});
