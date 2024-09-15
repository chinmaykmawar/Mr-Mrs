var end = new Date('02/19/2028 10:10 AM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;
timer = setInterval(showRemaining, 1000);

function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {

        clearInterval(timer);
        $('#countdown-date').text('Countdown');
        $('#countdown-time').text('Expired!');
        $('#countdown-text').text('');

        return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    $("#countdown-date").text(days + 'days ');
    $('#countdown-time').text(hours + 'hrs ' + minutes + 'mins ' + seconds + 'secs');
        
    }

    

$(".outstationQuestion>input").on('input',updateStatus);

function updateStatus(){
    if(this.checked === true){
        $('.outstationToggle').addClass("outstationToggleDisabled")
        $('.outstationQuestion>.form-check-label').text("Yes")
        return;
    }
    $('.outstationToggle').removeClass("outstationToggleDisabled")
    $('.outstationQuestion>.form-check-label').text("No")
}

$('.pickupQuestion>input').on('input', changePickupResponse);

function changePickupResponse(){
    if(this.checked===true){
        $('.pickupQuestion>.form-check-label').text("Yes");
        return;
    }
    $('.pickupQuestion>.form-check-label').text("No");

    console.log('Pickup response Changed');
}

$('.btn-primary').click(submitResponse);

function submitResponse(){
    alert('clicked!');
    var name=$('#inputName').val();
    var num=$('#inputNumber').val();
    var trans=$('#inputTransport').val();
    var det=$('#inputDetails').val();

    

    alert('Name :'+ name+ '\nNumber :'+num+'\nTransport :'+trans+'\nDetails'+det);
}