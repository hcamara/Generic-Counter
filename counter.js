/*
 ======= HOW TO USE ! =======

 <span id="counter" data-start="2553000" data-interval="4000" data-unit="minutes" data-separator="."></span>
 
 * data-init : initial date
 * data-start : counter initial value
 * data-interval : counter increment interval (4000 ==> 4s)
 * data-unit : counter unit, it's the unit that following counter ('minutes' => 2553000 minutes)
 * data-separator : counter number separator ('.' => 2.553.000)

*/

// Declarations
var counter = document.getElementById('counter');
var startCounter = counter.dataset.start;
var interval = counter.dataset.interval;
var initDate = (new Date(counter.dataset.init));
var startTime = 0
var variationPerMin = parseInt(60/(parseInt(interval)/1000));

// Counter increment function
var counterInc = () => {
    counter.innerHTML = addUnit(parseInt(getCurrentCounter()) + 1);
} 

// Add the unit to the counter
var addUnit = (count) => {
    return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, 
            counter.dataset.separator) + ' ' + counter.dataset.unit
    }

// Get current counter without separator and unit
var getCurrentCounter = () => { 
    var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    var separator = counter.dataset.separator;
    if(separator.match(format)) separator = '\\' + separator;
    var reg = new RegExp(separator,'g');
    return (counter.innerHTML).replace(reg, '')
}

// Get Minutes beatween Two Dates
var getMinutesBetweenTwoDates = (dateOne, dateTwo) => {
  return Math.abs(Math.round(((dateOne.getTime() - dateTwo.getTime()) / 1000)/60));
}

// Set initial value to counter
startTime = parseInt(startCounter) + 
                parseInt(parseInt(getMinutesBetweenTwoDates(initDate, (new Date()))) * variationPerMin);
counter.innerHTML = addUnit(startTime);

// launch counter routine
setInterval(counterInc, interval);