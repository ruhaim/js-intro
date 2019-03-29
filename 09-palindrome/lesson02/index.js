
/*
    This code does not check for non-alphabetical chars
    value.length >> 1 can be repleced with value.length % 2 
*/
function isPalindrome(value) {
    var i = 0, j = value.length - 1, l = value.length >> 1;
    for (i; i < l; i++ , j--) if(value.charAt(i) !== value.charAt(j)) return false;
    return true;
}

function getIsPalandrome(value){
    document.getElementById('message').innerText = isPalindrome(value.toLowerCase());
}