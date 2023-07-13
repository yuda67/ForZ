var password = "password2112";
var response;
var entryCount = 0;
var entryLimit = 10000;
var error = false;

while(response != password && !error) {
    if(entryCount<entryLimit){
        response = window.prompt("enter Password");
        entryCount++;
    }
    else {
        error = true;
    }

}
if(error){
    alert("too many entries")
}
else {
    alert("you got it!")
}
