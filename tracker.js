var FormAbandonmentTracker = (function () {
  "use strict";

  var fieldsAccessed = []; // An array to hold the fields that the user focused on
  var didSubmit = false; // only want to send data to Google if the form wasn't submitted

  var createFormEventListeners = function (formSelector) {
    var elForm = document.querySelector(formSelector);

    // if the form selector is invalid, exit from the function
    // TODO: might move this into #init()
    if (!elForm) {
      return;
    }

    var elInputs = elForm.querySelectorAll("input[type='text']");
    var i;

    // TODO: Need to modify this section into something more efficient
    for (i = 0; i < elInputs.length - 1; i = i + 1) {
      // attach event listeners to valid form fields
      // TODO: Remove anon func and replace with defined func outside of loop
      elInputs[i].addEventListener("focus", function (e) {
        // record which fields have been focused and store them in array
        fieldsAccessed.push(this.name);
      });
    }

    // attach event handler to form submit
    elForm.addEventListener("submit", function () {
      didSubmit = true;
    });
  };

  var createWindowEventListener = function () {
    // if the form is not submitted before the page is left
    window.onbeforeunload = function () {
      if (!didSubmit) {
        // send the event to Google
        pushDataToGoogle();
      }
    }
  };

  var pushDataToGoogle = function () {
    // data is outside for debug purposes
    var data = {
      'event':  'formAbandonment',
      'eventCategory': 'Form Abandonment',
      'eventAction': fieldsAccessed.join(' > ')
    };
    window.dataLayer.push(data);
  };

  return {
    init: function (formSelector) {
      createFormEventListeners(formSelector);
      createWindowEventListener();
    }
  };
}());

FormAbandonmentTracker.init(".formClass");
