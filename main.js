var list;
function addLi()
{
    var userInput=document.getElementById("textbox").value;
    document.getElementById("textbox").value="";
    if(userInput == "" || userInput == " "){
      alert("You didn't enter any Activity!");
    }
    else
    {
        list = document.createElement("li");
        var enterText = document.createTextNode(userInput);
        list.appendChild(enterText);
        document.getElementById("activityList").appendChild(list);

        var imageNode=document.createElement("img");
        imageNode.setAttribute("src","imagess.png");
        imageNode.setAttribute("height","20");
        imageNode.setAttribute("width","20");
        imageNode.setAttribute("align","right");
        imageNode.className= "listItem";
        list.appendChild(imageNode);
        document.getElementById("textbox").focus();

    var spanelements = document.getElementsByClassName("listItem");
    for(var i = 0; i< spanelements.length; i++){
      spanelements[i].onclick = function(){
        this.parentElement.style.display = "none";
      }
    }

        }
}

function remove()
{
    var newCode="<div id='content'><ul id='activityList'></ul></div>";
    document.getElementById("content").innerHTML=newCode;
}