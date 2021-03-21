"use strict";

var messagesWrapper = document.querySelector('#messagesWrapper');
var rapidKey = "2dae7de7a8msh9ca6fa97f167561p1494d2jsn956ba9663ea0";

var makeRequest = function makeRequest(url, method, headers) {
  var response;
  return regeneratorRuntime.async(function makeRequest$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(url, {
            method: method,
            headers: headers
          }));

        case 2:
          response = _context.sent;

          if (response.ok) {
            _context.next = 5;
            break;
          }

          throw new Error("An error has occurred: ".concat(response.status));

        case 5:
          return _context.abrupt("return", response.json());

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

function SendMessageToApiAI(massage) {
  var url, method, headers, body, robotResponseMsg;
  return regeneratorRuntime.async(function SendMessageToApiAI$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          url = " https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=154389&key=MqKbUKOqNKyU0Dmg&uid=moshe&msg=".concat(massage);
          method = 'GET';
          headers = {
            'x-rapidapi-key': "".concat(rapidKey),
            'x-rapidapi-host': 'acobot-brainshop-ai-v1.p.rapidapi.com'
          };
          _context2.next = 5;
          return regeneratorRuntime.awrap(makeRequest(url, method, headers));

        case 5:
          robotResponseMsg = _context2.sent;
          return _context2.abrupt("return", robotResponseMsg);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function translate(fromLng, toLng, massage) {
  var textToTranslate, url, method, headers, body, translatedMessage;
  return regeneratorRuntime.async(function translate$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          textToTranslate = encodeURI(massage);
          url = " https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=".concat(fromLng, "%7C").concat(toLng, "&q=").concat(textToTranslate, "&mt=1&onlyprivate=1&de=a%40b.c");
          method = 'GET';
          headers = {
            'x-rapidapi-key': "".concat(rapidKey),
            'x-rapidapi-host': 'translated-mymemory---translation-memory.p.rapidapi.com'
          };
          _context3.next = 6;
          return regeneratorRuntime.awrap(makeRequest(url, method, headers));

        case 6:
          translatedMessage = _context3.sent;
          return _context3.abrupt("return", translatedMessage);

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function handleSubmitMessage(e) {
  var message, t, EngTransaction, R, RobotMassage, H, hebTransaction;
  return regeneratorRuntime.async(function handleSubmitMessage$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          e.preventDefault();
          message = e.target.elements.message.value;

          if (!(message.length >= 2)) {
            _context4.next = 18;
            break;
          }

          document.querySelector('#messagesWrapper').innerHTML += htmlMessage(message);
          _context4.next = 6;
          return regeneratorRuntime.awrap(translate('iw', 'en', message));

        case 6:
          t = _context4.sent;
          // translate massage to english
          EngTransaction = t.responseData.translatedText;
          _context4.next = 10;
          return regeneratorRuntime.awrap(SendMessageToApiAI(EngTransaction));

        case 10:
          R = _context4.sent;
          // send massage to the robot 
          RobotMassage = R.cnt;
          _context4.next = 14;
          return regeneratorRuntime.awrap(translate('en', 'iw', RobotMassage));

        case 14:
          H = _context4.sent;
          //translate massage to hebrew
          hebTransaction = H.responseData.translatedText;
          process(hebTransaction);
          document.querySelector('#messagesWrapper').innerHTML += htmlIncomeMessage(hebTransaction);

        case 18:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function htmlMessage(message) {
  return "<div class='message'>".concat(message, " <div class=\"tail\"></div> </div>");
}

function htmlIncomeMessage(message) {
  return "<div class='message InMessage'> ".concat(message, " <div class=\"tail\"></div> </div>");
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
  console.table(voices);
  msg.voice = voices[10];
  msg.volume = 1; // From 0 to 1

  msg.rate = 1; // From 0.1 to 10

  msg.pitch = 2; // From 0 to 2

  msg.text = message;
  msg.lang = 'en';
  speechSynthesis.speak(msg);
} //let mydata;


function Speech(str) {
  if (myData.hasOwnProperty(str)) return myData[str];else return "";
}

function process(text) {
  var TheInput = text; //document.getElementById("input").value;

  TheInput = TheInput.replaceAll(".", "");
  TheInput = TheInput.replaceAll("?", "");
  TheInput = TheInput.replaceAll(",", "");
  var InputSplit = TheInput.split(' ');
  console.log(InputSplit);
  var Output = '';

  for (str in InputSplit) {
    console.log(str);
    console.log(Speech(InputSplit[str]));
    Output += "".concat(Speech(InputSplit[str]), " ");
  } // meSpeak.speak(Output);


  console.log(Output);
  Speech1(Output);
}