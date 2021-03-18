// const messages = []
const messagesWrapper = document.querySelector('#messagesWrapper');

function handleSubmitMessage(e) {
  e.preventDefault();
  // console.log(e)
  const message = e.target.elements.message.value;
  // console.log(message)

  // messages.push(message);
  if (message.length > 2) {
    document.querySelector('#messagesWrapper').innerHTML += htmlMessage(
      message
    ); /* htmlIncomeMessage(message); */
    e.target.reset();
    messagesWrapper.scrollTo(0, messagesWrapper.scrollHeight);
    console.log('start fetch');

    fetch('/SendMessage', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    }).then(r => r.json())
    .then(data => {
        console.log(data.hebTransaction)
        document.querySelector('#messagesWrapper').innerHTML += htmlIncomeMessage(
            data.hebTransaction
          );
    })

  }
}



function htmlMessage(message) {
  return `<div class='message'>${message} <div class="tail"></div> </div>`;
}
function htmlIncomeMessage(message) {
  return `<div class='message InMessage'> ${message} <div class="tail"></div> </div>`;
}

function handleTextArea(e) {
  if (e.key === 'Enter' && e.shiftKey == true) {
    //submit
    document.getElementById('submitButton').click();
  }
}


function Speech1(message) {
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[10];
  msg.volume = 1; // From 0 to 1
  msg.rate = 1; // From 0.1 to 10
  msg.pitch = 1; // From 0 to 2
  msg.text = message;
  msg.lang = 'en';
  speechSynthesis.speak(msg);}


  
 /*  function Speech1(message) {
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    console.table(voices)
    msg.voice = voices[10];
    msg.volume = 1; // From 0 to 1
    msg.rate = 1; // From 0.1 to 10
    msg.pitch = 2; // From 0 to 2
    msg.text = message;
    msg.lang = 'en';
    speechSynthesis.speak(msg);
}
 */
//let mydata;
function Speech(str) { if (myData.hasOwnProperty(str)) return myData[str]; else return ""; }

function process(text) {
    let TheInput = text;//document.getElementById("input").value;
        TheInput = TheInput.replaceAll(".","");
        TheInput = TheInput.replaceAll("?","");
        TheInput = TheInput.replaceAll(",","");
    let InputSplit = TheInput.split(' ');
    console.log(InputSplit);
    let Output = '';
   

    for (str in InputSplit) { 
        console.log(str);
        console.log(Speech(InputSplit[str]));
        Output += `${Speech(InputSplit[str])} `; 
    }

   // meSpeak.speak(Output);
  console.log(Output);
  Speech1(Output);
}