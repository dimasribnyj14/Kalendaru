function profileOption() {
    $('.profile-content').css("display", 'flex'); // Это включается
    // То что ниже, отключаются
    $('.terms-content').css("display", 'none');
    $('.policy-content').css("display", 'none');
    $('.messages-content').css("display", 'none');
}
function notificationOption() {
    $('.messages-content').css("display", 'flex'); // Это включается
    // То что ниже, отключаются
    $('.terms-content').css("display", 'none');
    $('.policy-content').css("display", 'none');
    $('.profile-content').css("display", 'none');
}
function policyOption() {
    $('.policy-content').css("display", 'flex'); // Это включается
    // То что ниже, отключаются
    $('.terms-content').css("display", 'none');
    $('.profile-content').css("display", 'none');
    $('.messages-content').css("display", 'none');
}
function termsOption() {
    $('.terms-content').css("display", 'flex'); // Это включается
    // То что ниже, отключаются
    $('.profile-content').css("display", 'none');
    $('.messages-content').css("display", 'none');
    $('.policy-content').css("display", 'none');
}