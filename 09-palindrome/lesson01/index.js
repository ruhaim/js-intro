function isPalindrome(value){
    var i = 0,
        j = value.length - 1,
        l = value.length / 2,
        is = true;

        value = value.toLowerCase();

    l = Math.floor(l);

    for(i; i < l; i++,j--){
        if(value.charAt(i) !== value.charAt(j)){
            is = false;
            break;
        }
    }

    return is;
}

function getIsPalandrome(value){
    document.getElementById('message').innerText = isPalindrome(value.toLowerCase());
}