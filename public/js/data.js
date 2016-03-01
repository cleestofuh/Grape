$(".edit").click(function(e) {
  e.preventDefault();
  
  console.log("hello");
  var container = $(this).closest('.modal');
  var projectID = $(this).closest('.modal').attr('id');
  console.log(projectID);
  var index = projectID.substr('ykModal'.length);
  console.log("index: "+ index);
  index = "." + index;
  //$(index).hide();

  
  //var getJson = $.get("../kinders.json", editData);
  var description = container.find('.act-desc').text();
  var rating = container.find('.act-rating').text();
  var title = container.find('.act-title').text();

  console.log(description + ' ' + rating);

  var body = {
    'description': description,
    'rating': rating,
    'id': projectID,
    'title': title
  };

  $.post("/data", body, editData);
  //console.log("json: " + json);

  // $(".act-title").innerHTML = title;
  $('.btnRecent[data-target="#'+projectID+'"]').text(title);

 });

$(".remove").click(function(e){
  e.preventDefault();
  var projectID = $(this).closest('.modal').attr('id');
  console.log('projectID: ' + projectID+ '');
  var body2 = {
    'id': projectID
  };
  var index = projectID.substr('ykModal'.length);
  console.log("index: "+ index);
  index = "." + index;
  $(index).hide();

  $.post("/dataDelete", body2, editData);


});


function editData(data){
  console.log("editData: " + data["act"] + "yo ");
  data["act"] = "GIVE MONEY TO EUNICE";
  //delete result["act"];
  console.log("editData: " + data["act"] + "yo ");
}

/*
function returnData(result) {
  console.log("removeProject:" + result["datamodal"] + " ");

}
*/
/*var i = 5;
var j = 5;
$(document).ready(function(){
    $('#yourself-form').on('submit', function(e){
        e.preventDefault();
        $.getJSON("data.json", function(data) {
          var newKinderYou = {
                "datamodal": "ykModal" + i,
                "act": req.query.whatyoudo,
                "description": req.query.howyoufeel,
                "rating": req.query.rating
            };

          var newKinderOther = {
                "datamodal": "okModal5" + j,
                "act": req.query.whatyoudoO,
                "description": req.query.howyoufeelO,
                "rating": req.query.ratingO
            };

          data["yourkinders"].push(newKinderYou);
          data["otherkinders"].push(newKinderOther);
          i++;
          j++;
        });

    });
});*/

$(function () {
    $('#week').highcharts({
        chart: {
              polar: true,
              type: 'line',
              backgroundColor: 'rgba(255, 255, 255, 0.3)'
        },
        plotOptions: {
          series: {
            animation: {
              duration: 1000
            }
          }
        },
        title: {
            style: {
              color: 'white'
            },
            text: 'DAILY',
            x: -20 //center
        },
        xAxis: {
          labels: {
            style: {
              color: 'white'
            }
          },
            categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        },
        yAxis: {
            title: {
              style: {
                color: 'white'
              },
                text: '# KINDERS'
            },
            labels: {
              style: {
                color: 'white',
              }
            },

        },
        tooltip: {
            valueSuffix: ' KINDERS'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'YOURSELF',
            data: [0, 1, 1, 3, 2, 0, 0]
        }, {
            name: 'OTHERS',
            data: [0, 3, 4, 2, 1, 0, 0]
        }]
    });
    $('#month').highcharts({
        chart: {
              polar: true,
              type: 'line',
              backgroundColor: 'rgba(255, 255, 255, 0.3)'
        },
        plotOptions: {
          series: {
            animation: {
              duration: 1500
            }
          }
        },
        title: {
            style: {
              color: 'white'
            },
            text: 'WEEKLY',
            x: -20 //center
        },
        xAxis: {
          labels: {
            style: {
              color: 'white'
            }
          },
            categories: ['1/1 - 1/7', '1/8 - 1/14', '1/15 - 1/21', '1/22 - 1/28', '1/29 - 2/4']
        },
        yAxis: {
            title: {
              style: {
                color: 'white'
              },
                text: '# KINDERS'
            },
            labels: {
              style: {
                color: 'white',
              }
            },

        },
        tooltip: {
            valueSuffix: 'KINDERS'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'YOURSELF',
            data: [0, 1, 1, 3, 2]
        }, {
            name: 'OTHERS',
            data: [0, 3, 4, 2, 1]
        }]
    });
    $('#year').highcharts({
        chart: {
              polar: true,
              type: 'line',
              backgroundColor: 'rgba(255, 255, 255, 0.3)'
        },
        plotOptions: {
          series: {
            animation: {
              duration: 2200
            }
          }
        },
        title: {
            style: {
              color: 'white'
            },
            text: 'MONTHLY',
            x: -20 //center
        },
        xAxis: {
          labels: {
            style: {
              color: 'white'
            }
          },
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
              style: {
                color: 'white'
              },
                text: '# KINDERS'
            },
            labels: {
              style: {
                color: 'white',
              }
            },

        },
        tooltip: {
            valueSuffix: 'KINDERS'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'YOURSELF',
            data: [10, 20, 16, 17, 8, 6, 5, 11, 12, 13, 0, 0]
        }, {
            name: 'OTHERS',
            data: [11, 14, 26, 10, 10, 14, 16, 20, 18, 21, 0, 0]
        }]
    });
});
