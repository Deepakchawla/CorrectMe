$('#auto_correct').keyup(function(e) {
if (e.keyCode == 32) {
$.ajax({
                url: '/auto_correction',
                type: "post",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify({
                    "input_text": $("#auto_correct").html().replace(/\&nbsp;/g, ''),
                }),
            }).done(function (jsondata, textStatus, jqXHR) {
            if (jsondata['underline']){
$('#auto_correct').each(function() {
    var text = $(this).text();
    $(this).text(text.replace(jsondata['word'], jsondata['result'][0]));

});
            }
            });

}
});
$(document).ready(function(){

var autocomplete = document.querySelectorAll("#autocomplete");
var mainInput = document.querySelectorAll("#msg_input");
var foundName = '';
var predicted = '';
var apibusy= false;
var mlresponsebusy = false;

$('#msg_input').keyup(function(e) {
//check if null value send
    if (mainInput[0].value == '') {
        autocomplete[0].textContent = '';
        return;
}
//check if space key press
    if (e.keyCode == 32) {
        CallMLDataSetAPI(e);
        scrolltobototm();
        return;
}
//check if Backspace key press
    if (e.key == 'Backspace'){
        autocomplete[0].textContent = '';
        predicted = '';
        apibusy = true;
        return;
}
//check if ArrowRight or Tab key press
    if(e.key != 'ArrowRight'){
        if (autocomplete[0].textContent != '' && predicted){
            var first_character = predicted.charAt(0);
            if(e.key == first_character){
                var s1 = predicted;
                var s2 = s1.substr(1);
                predicted = s2;
                apibusy = true;
            }else{
                autocomplete[0].textContent = '';
                apibusy= false;
            }
        }else{
            autocomplete[0].textContent = '';
            apibusy= false;
        }
        return;
        }else{
            if(predicted){
                if (apibusy == true){
                    apibusy= false;
                }
                if (apibusy== false){
                    mainInput[0].value = foundName;
                    autocomplete[0].textContent = '';
                }
            }else{
            return;
        }
    }

    function CallMLDataSetAPI(event) {
        var data = []
    $('#msg_input').on('keyup', function (e) {
        if (e.key == ' ') {

            $.ajax({
                url: '/get_end_predictions',
                type: "post",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify({
                    "input_text": $('#msg_input').val(),
                    "top_k": '1',
                }),
                beforeSend: function () {
                    $('.overlay').show()
                },
                complete: function () {
                    $('.overlay').hide()
                }
            }).done(function (jsondata, textStatus, jqXHR) {
                            console.log(jsondata)
                             var response = {
        "predicted": jsondata['bart']
        };

        if(response.predicted != ''){
            predicted = response.predicted;
            var new_text = event.target.value + response.predicted;
            autocomplete[0].textContent = new_text;
            foundName = new_text
        }else{
            predicted = '';
            var new_text1 = event.target.value + predicted;
            autocomplete[0].textContent = new_text1;
            foundName = new_text1
        }



            }).fail(function (jsondata, textStatus, jqXHR) {
                console.log(jsondata)
            });
        }
    })

    };
});
    function scrolltobototm() {
        var target = document.getElementById('autocomplete');
        var target1 = document.getElementById('msg_input');
        setInterval(function(){
            target.scrollTop = target1.scrollHeight;
        }, 1000);
    };
    $( "#msg_input" ).keydown(function(e) {
        if (e.keyCode === 9) {
            e.preventDefault();
            presstabkey();
        }
    });
    function presstabkey() {
        if(predicted){
            if (apibusy == true){
                apibusy= false;
            }
            if (apibusy== false){
                mainInput[0].value = foundName;
                autocomplete[0].textContent = '';
            }
        }else{
        return;
        }
    };
});