$(document).ready(function() {
  var etaIndex; //value of eta member in array of eta.json
  var cohort; //save json data into
  var cohortLength;

//handlebars
  var compiledHtml = $('#highlight').html();
  var template = Handlebars.compile(compiledHtml);



//function grabs /data/eta.json and calculates a random number to find inital eta array index
  function getEta() {
    $.ajax({
      url: '/data/eta.json'
    }).done(function(json) {
      cohort = json;
      cohortLength = cohort.eta.length - 1;
      etaIndex = Math.floor(Math.random() * cohortLength + 1);
      if(cohort.eta.firstName === "Wallace"){
        alert("Fixed 'favourite' to 'favorite' for you");
      }


      makeEta(etaIndex);
    }); //done
  }; //getEta function


//adding json data to DOM
  function makeEta(etaIndex) {
    var templateMake = template(cohort.eta[etaIndex]);
    $('.highlight').html(templateMake);
  };

  getEta();

  //button handlers for forward/previous.  Not working.
    $('.buttfwd').on('click', function() {
      etaIndex ++;
      if (etaIndex > cohortLength) {
        etaIndex = 0;
      }
      makeEta(etaIndex);
    });

    $('.buttback').on('click', function() {
      etaIndex --;
      if (etaIndex < 0) {
        etaIndex = cohortLength;
      }

      makeEta(etaIndex);
    }); //end of .buttback
}); //document ready
