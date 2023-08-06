var start = document.getElementById('start');
var reset = document.getElementById('reset');
var pause = document.getElementById('pause');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

//store references to timer var

var startTimer;

start.addEventListener('click', function(){
  if(startTimer === undefined){
    startTimer = setInterval(timer, 1000)
  } else{
    alert(`It's already running`)
  }
})

pause.addEventListener('click',function(){
  stopInterval()
  startTimer === undefined
})

reset.addEventListener('click', function(){
  wm.innerText = '25';
  ws.innerText = '00';

  bm.innerText = '05';
  bs.innerText = '00';
  document.getElementById('counter').innerText=0;
  stopInterval()
  startTimer === undefined
})

//Start timer function
function timer(){
  // owrk timer countdown
  if(ws.innerText != 0){
    ws.innerText--;
  }else if(wm.innerText !=0 && ws.innerText == 0){
    ws.innerText = 59;
    wm.innerText--;
  }
// now we start the break because work minutes and work seconds are 0
  if(wm.innerText == 0 && ws.innerText == 0){
    if(bs.innerText !=0){
      bs.innerText--;
    } else if(bm.innerText !=0 && bs.innerText == 0){
      bs.innerText = 59;
      bm.innerText--;
  }
  // increment the counter when we finish the work and the break
  if (wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
    // we reset everything and add 1 to the cycle
    wm.innerText = '25';
    ws.innerText = '00';
''
    bm.innerText = '05';
    bs.innerText = '00';
// and add 1 to the cycle
    document.getElementById('counter').innerText++;
  }
}}

//Stop timer function

function stopInterval(){
clearInterval(startTimer);
}


