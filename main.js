
	function generateLabels() {
        var labels = [];
        var now = new Date();
        for (var i = 0; i < 12; i++) {
            var formattedTime = now.toLocaleTimeString('vi-VN', { second: '2-digit' });
            var Time = now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
            labels.push(formattedTime);
            now.setSeconds(now.getSeconds() + 5);  // Increment by 5 seconds
        }
		document.getElementById("time1").textContent = Time;
		document.getElementById("time2").textContent = Time;
		document.getElementById("time3").textContent = Time;
		document.getElementById("time4").textContent = Time;
        return labels;
    }

	
    // Function to fetch and update data
    function fetchData() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/received_data", true);
        
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                document.getElementById("do_am").textContent = "Do Am: " + data.do_am;
                document.getElementById("nhiet_do").textContent = "Nhiet Do: " + data.nhiet_do;
                document.getElementById("do_am_dat").textContent = "Do Am Dat: " + data.do_am_dat;
                document.getElementById("cuong_do_anh_sang").textContent = "Cuong Do Anh Sang: " + data.cuong_do_anh_sang;
                
                updateChartCuongDoAnhSang(data.cuong_do_anh_sang);
                updateChartNhietDo(data.nhiet_do);
                updateChartDoAm(data.do_am);
                updateChartDoAmDat(data.do_am_dat);
            }
        };
		updateChartCuongDoAnhSang(0);
		updateChartNhietDo(0);
		updateChartDoAm(0);
		updateChartDoAmDat(0);
        // xhr.send();
    }

    // Fetch and update data every 5 seconds (adjust the interval as needed)
    setInterval(fetchData, 5000);



    var optionsPerformanceCDAS = {
        showPoint: false,
        lineSmooth: true,
        height: "200px",
        axisX: {
            showGrid: false,
            showLabel: true
        },
        axisY: {
            offset: 40,
        },
        low: 0,
        high: 1000,
        height: "250px"
    };


    // Function to generate labels for the chart
    

    var dataPerformanceCDAS = {
        labels: generateLabels(),
        series: [generateSeriesCDAS()]
    };

    var chartCuongDoAnhSang = new Chartist.Line('#chart-cuong-do-anh-sang', dataPerformanceCDAS, optionsPerformanceCDAS);

    // Function to generate random series data
    function generateSeriesCDAS() {
        var series = [];
        for (var i = 0; i < 12; i++) {
            series.push(0);
        }
        return series;
    }

    // Function to update the chart with new series data
    function updateChartCuongDoAnhSang(cuong_do_anh_sang) {
        dataPerformanceCDAS.labels.shift(); // Remove the first label
        dataPerformanceCDAS.labels.push(generateLabels()[11]); // Add a new label with seconds only
        dataPerformanceCDAS.series[0].shift(); // Remove the first value
        dataPerformanceCDAS.series[0].push(cuong_do_anh_sang); // Generate and add a new random value
        chartCuongDoAnhSang.update(dataPerformanceCDAS);
    }


    var optionsPerformanceND = {
        showPoint: false,
        lineSmooth: true,
        height: "200px",
        axisX: {
            showGrid: false,
            showLabel: true
        },
        axisY: {
            offset: 40,
        },
        low: 0,
        high: 100,
        height: "250px"
    };


    // Function to generate labels for the chart
    

    var dataPerformanceND = {
        labels: generateLabels(),
        series: [generateSeriesND()]
    };

    var chartNhietDo = new Chartist.Line('#chart-nhiet-do', dataPerformanceND, optionsPerformanceND);

    // Function to generate random series data
    function generateSeriesND() {
        var series = [];
        for (var i = 0; i < 12; i++) {
            series.push(0);
        }
        return series;
    }

    // Function to update the chart with new series data
    function updateChartNhietDo(nhiet_do) {
        dataPerformanceND.labels.shift(); // Remove the first label
        dataPerformanceND.labels.push(generateLabels()[11]); // Add a new label with seconds only
        dataPerformanceND.series[0].shift(); // Remove the first value
        dataPerformanceND.series[0].push(nhiet_do); // Generate and add a new random value
        chartNhietDo.update(dataPerformanceND);
    }

    var optionsPerformanceDA = {
        showPoint: false,
        lineSmooth: true,
        height: "200px",
        axisX: {
            showGrid: false,
            showLabel: true
        },
        axisY: {
            offset: 40,
        },
        low: 0,
        high: 100,
        height: "250px"
    };


    // Function to generate labels for the chart
    

    var dataPerformanceDA = {
        labels: generateLabels(),
        series: [generateSeriesDA()]
    };

    var chartDoAm = new Chartist.Line('#chart-do-am', dataPerformanceDA, optionsPerformanceDA);

    // Function to generate random series data
    function generateSeriesDA() {
        var series = [];
        for (var i = 0; i < 12; i++) {
            series.push(0);
        }
        return series;
    }

    // Function to update the chart with new series data
    function updateChartDoAm(do_am) {
        dataPerformanceDA.labels.shift(); // Remove the first label
        dataPerformanceDA.labels.push(generateLabels()[11]); // Add a new label with seconds only
        dataPerformanceDA.series[0].shift(); // Remove the first value
        dataPerformanceDA.series[0].push(do_am); // Generate and add a new random value
        chartDoAm.update(dataPerformanceDA);
    }


    var optionsPerformanceDAD = {
        showPoint: false,
        lineSmooth: true,
        height: "200px",
        axisX: {
            showGrid: false,
            showLabel: true
        },
        axisY: {
            offset: 40,
        },
        low: 0,
        high: 100,
        height: "250px"
    };


    // Function to generate labels for the chart
    

    var dataPerformanceDAD = {
        labels: generateLabels(),
        series: [generateSeriesDAD()]
    };

    var chartDoAmDat = new Chartist.Line('#chart-do-am-dat', dataPerformanceDAD, optionsPerformanceDAD);

    // Function to generate random series data
    function generateSeriesDAD() {
        var series = [];
        for (var i = 0; i < 12; i++) {
            series.push(0);
        }
        return series;
    }

    // Function to update the chart with new series data
    function updateChartDoAmDat(do_am_dat) {
        dataPerformanceDAD.labels.shift(); // Remove the first label
        dataPerformanceDAD.labels.push(generateLabels()[11]); // Add a new label with seconds only
        dataPerformanceDAD.series[0].shift(); // Remove the first value
        dataPerformanceDAD.series[0].push(do_am_dat); // Generate and add a new random value
        chartDoAmDat.update(dataPerformanceDAD);
    }

	function submitForm(action) {
	  var form = document.createElement("form");
	  form.setAttribute("method", "get");
	  form.setAttribute("action", "/process");

	  var hiddenField = document.createElement("input");
	  hiddenField.setAttribute("type", "hidden");
	  hiddenField.setAttribute("name", "do");
	  hiddenField.setAttribute("value", action);
	  form.appendChild(hiddenField);

	  document.body.appendChild(form);
	  form.submit();
	}
