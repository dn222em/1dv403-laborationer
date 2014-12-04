{"filter":false,"title":"mess.js","tooltip":"/2-labbymezzage/mess.js","undoManager":{"mark":2,"position":2,"stack":[[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":12,"column":0},"action":"remove","lines":["var MessageBoard  = {","    ","    messages : []","    ","   ","         ","         ","    ","};","",""]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":264,"column":0},"action":"insert","lines":["\"use strict\";","","/* I denna fil körs vår applikation."," * Vi använder window.onload för att starta applikationen när"," * fönstret laddat klart. * "," */","","var MessageBoard = {","    ","    init : function (){","     ","     ","    var now = new Date();//.toLocaleString();","    var publish = document.getElementById(\"publish-button\");","    ","    var message = new Message();","\tvar messages = [];","\t","","","\tvar ul = document.getElementById(\"comment-holder\");","\tvar li = null;//document.createElement(\"li\");","    var idCounter=0;","\tvar div1 = null;","\tvar div2 = null;","\tvar div3 = null;","\tvar div4 = null;","\tvar div5 = null;","\tvar div6 = null;","\tvar div7 = null;","\tvar div8 = null;","\tvar p = null;","    var paragr = document.getElementById(\"count-comments\");","    var messageBirth;","    var subText = null;","    var emptyLine = null;","","    publish.onclick = createMessage;","    ","    var shiftEnterKey = document.getElementById(\"comment-box\");","    shiftEnterKey.onkeypress = function ( e) {","        ","        if(e.keyCode == 13 && !e.shiftKey) {","            createMessage();","            return false;","","        }","        else if (e.keyCode == 13 && e.shiftKey) {","                //shiftEnterKey.value+='<br  />';//","            }","        };","    ","    /*var enterKey = document.getElementById(\"comment-box\");","    enterKey.onkeypress = function (e) {","        if(e.keyCode === 13){","            createMessage();","        }","    };*/","    ","    function createMessage(){","\t\t","\t\tmessage.setText(document.getElementById(\"comment-box\").value);","\t\t","\t\tif(message.message === \"\" || document.getElementById(\"comment-box\").value.trim() ===\"\"){","            document.getElementById(\"comment-box\").style.backgroundColor =\" #e1e1e1\";","            document.getElementById(\"comment-box\").style.border=\"1px solid red\";","            document.getElementById(\"comment-box\").value = \"Du måste skriva något för att kommentera\";","            ","            var delay=1000;","    \t   ","            setTimeout(function(){","                document.getElementById(\"comment-box\").style.backgroundColor =\"white\";","                document.getElementById(\"comment-box\").style.border = \"1px solid #cce889\";","\t\t        document.getElementById(\"comment-box\").value = \"\";","            },delay); ","\t\treturn;","\t\t}","        ","\t\tmessage.setNewDate(now);","\t\tif(shiftEnterKey){","            subText = message.toString();","            emptyLine = subText.replace(/[\\n\\r]/g, \"<br/>\");","            message.setText(emptyLine);","\t\t}","\t\tidCounter++;","\t\t//message.id = idCounter+\" \"+\"message\";","\t\t//message.setId(idCounter+\" \"+\"message\");","\t    messages.push(message);","\t\tcreateElements(message);","\t\temptyBox();","        return message;","        ","    }","    ","        ","    function emptyBox(){","        document.getElementById(\"comment-box\").value=\"\";","    \tvar boxNew =document.getElementById(\"comment-box\").value;","        boxNew.trim();","","    }","    ","","    function createElements(message){","","        div6 = document.getElementsByClassName(\"count-length\");","\t    while(div6[0]) {","         div6[0].parentNode.removeChild(div6[0]);","        }","\t    ","\t    li = document.createElement(\"li\");","    \tdocument.getElementsByClassName(\"comment-holder\")[0];//.appendChild(li);","    \t//li.innerHTML = message.message;//toString();//message.message;","        li.className =\"comment-holder-li\";","\t    li.id = idCounter+\"li\";","","\t    ul.appendChild(li);","    \t","    \tul.insertBefore(li, ul.childNodes[0]);","","        p=document.createElement(\"p\");","        document.getElementById(li.id).appendChild(p);","        p.className =\"comment-paragraf\";","        li.appendChild(p);","        p.innerHTML = message.message;","","\t    div1 = document.createElement(\"div\");","        document.getElementById(li.id).appendChild(div1);","        //document.getElementsByClassName(\"comment-holder-li\")[0];","        div1.className = \"comment-upp-buttons\";","        div1.id = idCounter+\"comment-upp-buttons\";","        div1.innerHTML;","        li.appendChild(div1);","        ","        div2 = document.createElement(\"ul\");","        document.getElementById(div1.id).appendChild(div2);","        //document.getElementsByClassName(\"comment-upp-buttons\")[0];","        div2.id = idCounter+\"ul2\";","        div2.innerHTML;","        div1.appendChild(div2);","        ","        div3 = document.createElement(\"li\");","        document.getElementById(div2.id).appendChild(div3);","        div3.id = idCounter+\"li2\";","        div3.innerHTML;","        div2.appendChild(div3);","        ","        div4 = document.createElement(\"img\");","        document.getElementById(div3.id).appendChild(div4);","        div4.id = idCounter+\"date-button\";","        div4.className = \"date-button\";","        div4.innerHTML;","        div3.appendChild(div4);","        div4.setAttribute(\"src\", \"pics/TIMER.png\");","        div4.setAttribute(\"onClick\", \"\");","        //div4.onclick = showDate;","        div4.addEventListener(\"click\", showDate);","        ","        div5 = document.createElement(\"img\");","        document.getElementById(div4.id).appendChild(div5);","        div5.className =\"delete-button\";","        div5.id =idCounter+ \"delete-button\";","        div3.appendChild(div5);","        div5.innerHTML;","        div5.setAttribute(\"src\", \"pics/DELETE.png\");","        div5.setAttribute(\"onClick\", \"\");","        //div5.onclick = deleteMessage;","        div5.addEventListener(\"click\", deleteMessage);","","        ","        div8 = document.createElement(\"div\");","        document.getElementsByClassName(li.id)[1];//.appendChild(div8);","        div5.appendChild(div8);","        div8.id = idCounter+\"comment-date\";","        div8.className =\"comment-date\";","        li.appendChild(div8);","","        div7 = document.createElement(\"code\");","        document.getElementById(div8.id).appendChild(div7);","        div7.className = \"writen-date\";","        div7.id = idCounter+\"writen-date\";","        div8.appendChild(div7);","        div7.innerHTML= showTime(message.date);","","","        div6 = document.createElement(\"code\");","        document.getElementById(\"count-comments\").appendChild(div6);","        div6.id = idCounter+\"count-length\";","        div6.className = \"count-length\";","        paragr.appendChild(div6);","","        div6.innerHTML= messages.length;","    }","        ","    function showTime(str){","        ","        ","        str  = message.date;","\t\t","\t\t//Create a new date-object to find the exact day. ","\t    messageBirth = new Date((-(-str - now))-now ); ","        ","        var hours = messageBirth.getHours();","        var minutes = messageBirth.getMinutes();","        var seconds = messageBirth.getSeconds();","","        //messageBirth.getHours()+\":\"+messageBirth.getMinutes()+\":\"+messageBirth.getSeconds()","        if(hours < 10){","            hours =\"0\"+hours;","        }","        if (minutes < 10){","            minutes=\"0\"+minutes;","        }","        if(seconds < 10){","            seconds =\"0\"+seconds;","        }","        var time = hours+\":\"+minutes+\":\"+seconds;","        return time; ","","    }","    ","    function showDate(str){","        ","         str  = message.date;","         var timeNew = showTime(str); ","","        //Create two Arrays with Swedish names for days and months!","\t\tvar dayName=[\"Söndag\", \"Måndag\", \"Tisdag\", \"Onsdag\", \"Torsdag\", \"Fridag\", \"Lördag\"];","\t\tvar monthName=[\"Jenuari\", \"Februari\", \"Mars\",\"April\", \"Maj\", \"Juni\", \"Juli\", \"Augusti\", \"September\", \"Oktober\", \"November\", \"December\"];","\t\t","\t\t","\t\t//Create a new date-object to find the exact day. ","\t    messageBirth= new Date((-(-str - now))-now );","\t    ","\t    var dateCreation = dayName[messageBirth.getDay()] +\" \"+messageBirth.getDate()+ \" \"+monthName[messageBirth.getMonth()]+\" \"+messageBirth.getFullYear() +\"   \";","\t\t//Precentate date and time ","        var str1 = \"Meddelandet skapades \" +dateCreation+timeNew;","        alert(str1);","    }","    ","   function deleteMessage(str){","       ","        var a = str.target.nodeName;","        var a = str.target.id;","        var b =a.replace('delete-button','');","        var c = b +\"li\";","        var d = confirm(\"Vill du verkligen radera meddelandet?\");","         ","        if (d){","            var x = document.getElementById(c);","            x.remove(x.selectedIndex);","            return div6.innerHTML= --messages.length;","        }","        return;","   }","  console.log(messages);","}","};","\t","// Här ser vi till att starta applikationen när fönstret laddat klart.","window.onload = MessageBoard.init;","   ",""]}]}],[{"group":"doc","deltas":[{"start":{"row":244,"column":8},"end":{"row":244,"column":9},"action":"insert","lines":["/"]},{"start":{"row":244,"column":9},"end":{"row":244,"column":10},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":248,"column":8},"end":{"row":252,"column":38},"action":"remove","lines":["var d = confirm(\"Vill du verkligen radera meddelandet?\");","         ","        if (d){","            var x = document.getElementById(c);","            x.remove(x.selectedIndex);"]},{"start":{"row":248,"column":8},"end":{"row":263,"column":50},"action":"insert","lines":["var e = \"message No\"+b;","        var index;","        var d = confirm(\"Vill du verkligen radera meddelandet?\");","        if (d){","            for(var i = 0; i < MessageBoard.messages.length; i++) {","            ","                if(MessageBoard.messages[i].id === e){","                    console.log(i);","                    index =i;","                    break;","                }","            }","            ","            var x = document.getElementById(c);","            x.remove(x.selectedIndex);","            MessageBoard.messages.splice(index,1);"]}]}],[{"group":"doc","deltas":[{"start":{"row":254,"column":19},"end":{"row":254,"column":31},"action":"remove","lines":["MessageBoard"]},{"start":{"row":254,"column":19},"end":{"row":254,"column":20},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":252,"column":31},"end":{"row":252,"column":43},"action":"remove","lines":["MessageBoard"]}]}],[{"group":"doc","deltas":[{"start":{"row":252,"column":31},"end":{"row":252,"column":32},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":263,"column":12},"end":{"row":263,"column":24},"action":"remove","lines":["MessageBoard"]},{"start":{"row":263,"column":12},"end":{"row":263,"column":13},"action":"remove","lines":["."]}]}]]},"ace":{"folds":[],"scrolltop":2838.1336059570312,"scrollleft":0,"selection":{"start":{"row":244,"column":8},"end":{"row":244,"column":10},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":2,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1417726751948,"hash":"bf9c3d0ba99d9ac05f4f917e1f4564782f5886e4"}