$('select').on(
  { "focus": function() {
      //console.log('clicked!', this, this.value);
      this.selectedIndex = -1;
    }
  , "change": function() {
      choice = $(this).val();
      document.getElementById('selectedCat').innerHTML = choice.toUpperCase() + ":";

      if(choice == "Love") {
        document.getElementById('selectedCatDesc').innerHTML = "These acts of kindness made you feel very happy!";
      }
      else if(choice == 'Compassion') {
        document.getElementById('selectedCatDesc').innerHTML = "These acts of kindness made you feel pretty happy!";
      }
      else if(choice == 'Time') {
        document.getElementById('selectedCatDesc').innerHTML = "These acts of kindness made you feel fairly happy!";
      }
      else if(choice == 'Energy') {
        document.getElementById('selectedCatDesc').innerHTML = "These acts of kindness made you feel somewhat happy.";
      }
      else if(choice == 'Charity') {
        document.getElementById('selectedCatDesc').innerHTML = "These acts of kindness made you feel the happiest! Keep at it!";
      }
      else if(choice == 'Health') {
        document.getElementById('selectedCatDesc').innerHTML = "These acts of kindness made you feel the least happy. What can you do to change this?";
      }

    }
  });
      console.log(document.getElementById('selectedCat').innerHTML);

$(function () {
    $('#reflectionChart').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'YOUR HAPPINESS'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Charity',
                y: 56.33
            }, {
                name: 'Love',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Compassion',
                y: 10.38
            }, {
                name: 'Time',
                y: 4.77
            }, {
                name: 'Energy',
                y: 0.91
            }, {
                name: 'Health',
                y: 0.2
            }]
        }]
    });
});
