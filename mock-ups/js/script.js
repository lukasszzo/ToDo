document.addEventListener("DOMContentLoaded",	function	()	{

var checkboxDays=document.querySelectorAll('.checkboxDay');
/*console.log(checkboxDays);*/
var allDays=document.querySelector('.allDays');
var noteText=document.querySelector('.note-text')
var form=document.querySelector('form');
var btn=document.querySelector('.button');
var monday=document.querySelector('.monday')
var dayBox=document.querySelectorAll('.dayBox ul');
console.log(dayBox);
allDays.addEventListener("change",function(a){
	for(var i=0;i<checkboxDays.length;i++){
		checkboxDays[i].checked=allDays.checked;

	}
});
for (var i=0;i<checkboxDays.length;i++){
	checkboxDays[i].addEventListener('change',function(a){
		if(this.checked==false){
			allDays.checked=false;
		}
		if(document.querySelectorAll('.checkbox:checked').length == checkboxDays.length){
            allDays.checked = true;
        }
    });

}
btn.addEventListener('click',function () {
			var dataItem=noteText.value;
			var li=document.createElement('li');
			li.innerText=dataItem;
			for(var i=0;i<checkboxDays.length;i++){
				if(checkboxDays[i].checked){
					dayBox[i].appendChild(li);

				}else{
					console.log('no');
				}
			}


	});

function checkDays(){
	for(var i=0;i<checkboxDays.length;i++){
		if(checkboxDays[i]=false){
			alert('Please check day/s');
			return false;
		}else{
			return true;
		}
	}
}
function checkNote(){
	if(noteText.length<3){
		alert('Please refill note');
		return false;
	}else{
		return true;
	}
}

form.addEventListener("submit", function(e) {
	if( !checkDays  || !checkNote ) {
		e.preventDefault();
		alert('error');
	}})
});
