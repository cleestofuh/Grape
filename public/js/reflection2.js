  $('ul.nav-pills li a').click(function (e) {
    $('ul.nav-pills li.active').removeClass('active');
    $(this).parent('li').addClass('active');
    choice = this.innerHTML;

    document.getElementById('selectedCat').innerHTML = choice + ":";

    if(choice == "Time") {
      document.getElementById('selectedCatDesc').innerHTML = "These acts of kindness made you feel very happy!";
    }
    else if(choice == 'Health') {
      document.getElementById('selectedCatDesc').innerHTML = "These acts of kindness made you feel pretty happy!";
    }
    else if(choice == 'Energy') {
      document.getElementById('selectedCatDesc').innerHTML = "These acts of kindness made you feel fairly happy!";
    }
    else if(choice == 'Other') {
      document.getElementById('selectedCatDesc').innerHTML = "These acts of kindness made you feel somewhat happy.";
    }
    else if(choice == 'Love') {
      document.getElementById('selectedCatDesc').innerHTML = "These acts of kindness made you feel the happiest! Keep at it!";
    }
    else if(choice == 'Charity') {
      document.getElementById('selectedCatDesc').innerHTML = "These acts of kindness made you feel the least happy. What can you do to change this?";
    }

    $.get("/data/json", displayData);

    ga("send", "event", "select", "click");
  });

google.charts.load("44", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['GRAPES', 'YOUR HAPPINESS'],
    ['Love', 9],
    ['Time', 6.5],
    ['Energy', 5],
    ['Charity', 2],
    ['Health', 6],
    ['Other', 4]
  ]);

  var options = {
    title: 'Your Happiness',
    pieHole: 0.2,
    backgroundColor: '#E0D2E7',
    'chartArea': {'width': '80%', 'height': '80%'},
    'fontName': 'Open Sans Condensed',
    'fontSize': '16'
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}

function displayData(result) {

  //console.log(result['yourkinders'][0]['category']);
  //console.log(result['yourkinders'].length);
  //var description = container.find('.act-desc').text();
  var choice = $('#selectedCat').text();
  var projectID;
  choice = choice.substr(0,choice.length-1);
  console.log("choice: "+ choice);
  for(var i=0; i < result['yourkinders'].length; i++){
      console.log(i);
      //console.log("result: " +result['yourkinders'][i][+'');
      projectID = result['yourkinders'][i]['datamodal'];
      if(result['yourkinders'][i]['category'] != choice) {
        var text = $('.btnRecent[data-target="#'+projectID+'"]').text();
        console.log("hide: " + text);
        $('.btnRecent[data-target="#'+projectID+'"]').hide();
      }
      else {
        $('.btnRecent[data-target="#'+projectID+'"]').show();
      }

  }
  for(var i=0; i < result['otherkinders'].length; i++){
      console.log(i);
      //console.log("result: " +result['yourkinders'][i][+'');
      projectID = result['otherkinders'][i]['datamodal'];
      if(result['otherkinders'][i]['category'] != choice) {
        var text = $('.btnRecent[data-target="#'+projectID+'"]').text();
        console.log("hide: " + text);
        $('.btnRecent[data-target="#'+projectID+'"]').hide();
      }
      else {
        $('.btnRecent[data-target="#'+projectID+'"]').show();
      }

  }


}
