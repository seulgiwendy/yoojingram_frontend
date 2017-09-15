var idCheck = true;
var pwdCheck = false;

function setJoinButtonActive() {
    if (idCheck && pwdCheck == true){

        $('#join-submit').attr('disabled', false);
        console.log('submit button freed!');
    }
    else {
        $('#join-submit').attr('disabled', true);
        console.log('not yet!');

    }

}

function checkId(){

    var input = $('#id').val();
    console.log(input);
    setJoinButtonActive();

}

function checkPwd() {

    var input = $('#pwd').val();


    if (input.length > 5){
        pwdCheck = true;
        $('#pwd-warning').hide();
    }

    else if (input.length == 0){
        pwdCheck = false;
        $('#pwd-warning').hide();
    }

    else{
        pwdCheck = false;
        $('#pwd-warning').show();
    }

    setJoinButtonActive();

}





