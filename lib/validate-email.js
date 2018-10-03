function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isEmail = re.test(String(email).toLowerCase());

    return isEmail;
}

$(document).ready(function() {
    $('input').keyup(function() {
        let inputValue = $(this).val();
        let response = 'Email is not valid';
        if (validateEmail(inputValue)) {
            $('input').css('border', '2px solid green');
            $('.info').text(response).css('visibility', 'hidden');
        } else {
            $('input').css('border', '2px solid red');
            $('.info').css('color', 'red');
            $('.info').text(response).css('visibility', 'visible');
        }
    });
});