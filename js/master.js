function _add() {
    let temp = document.getElementById('intext').value;
    console.log(temp);
    if (temp.length > 2) {
        x = document.createElement('li');
        x.innerHTML = ('<strong>' + temp +
            '</strong><div><span onclick="_edit(this)"><i class="material-icons">edit</i></span><span onclick="_del(this)"><i class="material-icons">delete</i></span></div>'
            );
        document.querySelector('.tdList>ul').append(x);
        x.style.animation='anime1 1s'
        document.getElementById('intext').value = null;
        document.getElementsByClassName('lil')[0].remove()
    }else{
        alert('plz enter your text')
    }
    document.getElementById('intext').focus()
}
function _del(e){
    e.parentElement.parentElement.remove();
}
function _edit(e){
    flag = e
    let test = e.parentElement.previousElementSibling.innerHTML;
    document.getElementById('intext').value=test
    document.getElementById('cng').style.display='flex'
}
function _cng(){
    flag.parentElement.previousElementSibling.innerHTML=document.getElementById('intext').value
    document.getElementById('cng').style.display='none'
    document.getElementById('intext').value = null;


}