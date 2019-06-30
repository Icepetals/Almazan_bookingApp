function togglemenu(){
    document.getElementById('sideBar').classList.toggle('active');
}

function checkInput(){
    if(document.getElementById('username') && document.getElementById('password')===""){
        alert("please enter a valid input");
    }
    return;
}