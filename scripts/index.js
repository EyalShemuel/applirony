const messagesWrapper = document.querySelector('#messagesWrapper');
const rapidKey = `2dae7de7a8msh9ca6fa97f167561p1494d2jsn956ba9663ea0`

const makeRequest = async (url, method, headers) => {
    let response = await fetch(url, { method, headers });
    if (!response.ok) throw new Error(`An error has occurred: ${response.status}`);
    return response.json();
}


async function SendMessageToApiAI(massage) {
    let url, method, headers, body;
    url = ` https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=154389&key=MqKbUKOqNKyU0Dmg&uid=moshe&msg=${massage}`;
    method = 'GET';
    headers = {
        'x-rapidapi-key': `${rapidKey}`,
        'x-rapidapi-host': 'acobot-brainshop-ai-v1.p.rapidapi.com',
    };


    let robotResponseMsg = await makeRequest(url, method, headers);

    return robotResponseMsg;
}




async function translate(fromLng, toLng, massage) {

    let textToTranslate = encodeURI(massage);
    let url, method, headers, body;
    url = ` https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=${fromLng}%7C${toLng}&q=${textToTranslate}&mt=1&onlyprivate=1&de=a%40b.c`;
    method = 'GET';
    headers = {
        'x-rapidapi-key': `${rapidKey}`,
        'x-rapidapi-host': 'translated-mymemory---translation-memory.p.rapidapi.com',
    };


    let translatedMessage = await makeRequest(url, method, headers);

    return translatedMessage;
}



async function handleSubmitMessage(e) {

    e.preventDefault();
    const message = e.target.elements.message.value;
    if (message.length >= 2) {
        document.querySelector('#messagesWrapper').innerHTML += htmlMessage(message);
        const t = await translate('iw', 'en', message)// translate massage to english
        const EngTransaction = t.responseData.translatedText;
        const R = await SendMessageToApiAI(EngTransaction)// send massage to the robot 
        const RobotMassage = R.cnt;
        const H = await translate('en', 'iw', RobotMassage)//translate massage to hebrew
        const hebTransaction = H.responseData.translatedText;

        process(hebTransaction);
        document.querySelector('#messagesWrapper').innerHTML += htmlIncomeMessage(hebTransaction);

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
    console.table(voices)
    msg.voice = voices[10];
    msg.volume = 1; // From 0 to 1
    msg.rate = 1; // From 0.1 to 10
    msg.pitch = 2; // From 0 to 2
    msg.text = message;
    msg.lang = 'en';
    speechSynthesis.speak(msg);
}

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


