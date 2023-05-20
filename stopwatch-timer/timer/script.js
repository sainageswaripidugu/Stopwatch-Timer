const hour=document.getElementById('hour');
const min=document.getElementById('min');
const sec=document.getElementById('sec');
const start=document.getElementById('start');
const reset=document.getElementById('reset');
const disp=document.getElementById('disp');
var interval =null;
var total=0;
totalVal=()=>{
	total=Number(hour.value)*3600+Number(min.value)*60+Number(sec.value);

}
Timer=()=>{
  totalVal();
  total--;
  if(total>=0){
     var hr=Math.floor(total/3600);
     var m=Math.floor((total/60)-(hr*60));
     var s=total-((hr*3600)+(m*60));
     hour.value=hr;
     min.value=m;
     sec.value=s;

  }
  else{
  	disp.innerText="Time Over!!!"
  }
}
start.addEventListener('click',()=>{
	clearInterval(interval);
	setInterval(Timer,1000);
	disp.innerText="Timer Started";
});
reset.addEventListener('click',()=>{
 clearInterval(interval);
  hour.value=0;
  min.value=0;
  sec.value=0;
})