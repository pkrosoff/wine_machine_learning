/*!
    * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
//     (function ($) {
//     "use strict"; // Start of use strict

//     // Smooth scrolling using jQuery easing
//     $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
//         if (
//             location.pathname.replace(/^\//, "") ==
//                 this.pathname.replace(/^\//, "") &&
//             location.hostname == this.hostname
//         ) {
//             var target = $(this.hash);
//             target = target.length
//                 ? target
//                 : $("[name=" + this.hash.slice(1) + "]");
//             if (target.length) {
//                 $("html, body").animate(
//                     {
//                         scrollTop: target.offset().top - 72,
//                     },
//                     1000,
//                     "easeInOutExpo"
//                 );
//                 return false;
//             }
//         }
//     });

//     // Closes responsive menu when a scroll trigger link is clicked
//     $(".js-scroll-trigger").click(function () {
//         $(".navbar-collapse").collapse("hide");
//     });

//     // Activate scrollspy to add active class to navbar items on scroll
//     $("body").scrollspy({
//         target: "#mainNav",
//         offset: 74,
//     });

//     // Collapse Navbar
//     var navbarCollapse = function () {
//         if ($("#mainNav").offset().top > 100) {
//             $("#mainNav").addClass("navbar-shrink");
//         } else {
//             $("#mainNav").removeClass("navbar-shrink");
//         }
//     };
//     // Collapse now if page is not at top
//     navbarCollapse();
//     // Collapse the navbar when page is scrolled
//     $(window).scroll(navbarCollapse);
// })(jQuery); // End of use strict

// // ---------Global scores and prices chart------------------------------------------------
// Highcharts.chart('wine_price', {

//     title: {
//         text: 'Avergae Global Wine Scores vs. Prices 2017'
//     },

//     subtitle: {
//         text: 'Source: Wine Enthusiast'
//     },

//     data: {
//         csv: document.getElementById('csv').innerHTML
//     },

//     plotOptions: {
//         series: {
//             marker: {
//                 enabled: false
//             }
//         }
//     },

//     series: [{
//         lineWidth: 1
//     }, {
//         type: 'areaspline',
//         color: '#c4392d',
//         negativeColor: '#5679c4',
//         fillOpacity: 0.5
//     }]
// });

// Column Chart
const chart = Highcharts.chart('bar', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'White vs. Red Wines'
        },

    xAxis: {
        categories: ['White','Red']
    },

    yAxis: {
        max: 5000,
        title: {
            text: 'Number of Wines '
        }
        },
    plotOptions: {
        series: {
            allowPointSelect: true
        }
    },
    series: 
    [{
        data: [4898,1598]
    }],

    title: {
        text: 'Number of Wines'
    }
});



// Confusion Matrix

var default_values = {
    tn: 364,
    fn: 135,
    fp: 94,
    tp: 1356
  };
  
  var build_table = function(var_dic) {
    var_dic['nn'] = var_dic['tn'] + var_dic['fp'];
    var_dic['np'] = var_dic['fn'] + var_dic['tp'];
    var_dic['npv'] = 'npv = '+ (Math.round(var_dic['tn']/(var_dic['tn'] + 
      var_dic['fn'])*1000)/10);
    var_dic['ppv'] = 'ppv = '+ (Math.round(var_dic['tp']/(var_dic['tp'] + 
      var_dic['fp'])*1000)/10);
    var_dic['tnr'] = var_dic['tn']/var_dic['nn'];
    var_dic['tnr_out'] = 'specifity (tnr) = ' + 
      Math.round(var_dic['tnr']*1000)/10;
    var_dic['tpr'] = var_dic['tp']/var_dic['np'];
    var_dic['tpr_out'] = 'sensitivity (tpr) = '+ 
      (Math.round(var_dic['tpr']*1000)/10);
    var_dic['plr'] = var_dic['tpr']/(1-var_dic['tnr']);
    var_dic['nlr'] = (1-var_dic['tpr'])/(var_dic['tnr']);
      for (var key in var_dic) {
        $('#' + key).text(var_dic[key]);
    };
  };
  
  var create_random = function(lik, obs) {
      var out = {'tp': 0, 'tn': 0, 'fp':0, 'fn':0};
    var lh = Number(lik);
    for (i=0; i < obs['in']; i++) {
        var rnd = Math.random();
      if (rnd < lh) {
        out['tp']++;
      } else {
        out['fn']++;
      }
    };
    for (i=0; i < obs['out']; i++) {
        var rnd = Math.random();
      if (rnd < lh) {
        out['fp']++;
      } else {
        out['tn']++;
      }
    }
    return out;
  };
  
  var main = function() {
    build_table(default_values);
    $('#defaults').on('click', function() {
        build_table(default_values);
    });
    $('#random').on('click', function() {
        var likelihood = $('#likelihood').val();
      var values = create_random(likelihood, observed);
      build_table(values);
    });
  };
  
  main();
  

