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

  var description = container.find('.act-desc').text();
  var rating = container.find('.act-rating').text();
  var title = container.find('.act-title').text();

  var body = {
      'description': description,
      'rating': rating,
      'id': projectID,
      'title': title
  };


  $.post("/data", body, editData);
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


  google.charts.load('44', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var dailyData = google.visualization.arrayToDataTable([
      ['Day', 'Yourself', 'Others'],
      ['Sun',  0,      0],
      ['Mon',  1,      3],
      ['Tu',  1,      4],
      ['Wed',  3,       2],
      ['Thu',  2,      1],
      ['Fri',  0,      0],
      ['Sat',  0,      0]
    ]);
    var weeklyData = google.visualization.arrayToDataTable([
      ['Week', 'Yourself', 'Others'],
      ['1/1 - 1/7',  0,      0],
      ['1/8 - 1/14',  1,      3],
      ['1/15 - 1/21',  1,       4],
      ['1/22 - 1/28',  3,      2],
      ['1/29 - 2/4',  2,      1]
    ]);
    var monthlyData = google.visualization.arrayToDataTable([
      ['Month', 'Yourself', 'Others'],
      ['Jan',  10,      1],
      ['Feb',  20,      14],
      ['Mar',  16,       26],
      ['Apr',  17,      10],
      ['May',  8,      10],
      ['Jun',  6,      14],
      ['Jul',  5,      16],
      ['Aug',  11,      20],
      ['Sep',  12,      18],
      ['Oct',  13,      21],
      ['Nov',  0,      0],
      ['Dec',  0,      0]
    ]);

    var dailyOptions = {
      title: 'Daily Grapes',
      legend: { position: 'bottom' },
      backgroundColor: '#E0D2E7',
      'chartArea': {'width': '90%', 'height': '50%'},
      'fontName': 'Open Sans Condensed',
      'fontSize': '16'
    };
    var weeklyOptions = {
      title: 'Weekly Grapes',
      legend: { position: 'bottom' },
      backgroundColor: '#E0D2E7',
      'chartArea': {'width': '90%', 'height': '50%'},
      'fontName': 'Open Sans Condensed',
      'fontSize': '16'
    };
    var monthlyOptions = {
      title: 'Monthly Grapes',
      legend: { position: 'bottom' },
      backgroundColor: '#E0D2E7',
      'chartArea': {'width': '80%', 'height': '50%'},
      'fontName': 'Open Sans Condensed',
      'fontSize': '16'
    };


    var dailychart = new google.visualization.LineChart(document.getElementById('dailyChart'));
    var weeklychart = new google.visualization.LineChart(document.getElementById('weeklyChart'));
    var monthlychart = new google.visualization.LineChart(document.getElementById('monthlyChart'));
    dailychart.draw(dailyData, dailyOptions);

    $('button[class="btn btn-lg btnTab"]').on('shown.bs.tab', function (e) {
      if($(e.target).attr('id') == 'day1')
      {
        dailychart.draw(dailyData, dailyOptions);
      }
      if($(e.target).attr('id') == 'week1')
      {
        weeklychart.draw(weeklyData, weeklyOptions);
      }
      if($(e.target).attr('id') == 'month1')
      {
        monthlychart.draw(monthlyData, monthlyOptions);
      }
    });
  }
