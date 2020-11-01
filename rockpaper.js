var Player1 = {
    name: "Enin",
    score: 0
 };

 var Player2 = {
    name: "Contrincant",
    score: 0
 };

 function load()
 {
     var title = document.getElementsByTagName("h1")[0];	
     var titlename = "pedra-paper-tisores game: ";
     title.innerHTML = titlename;
     
 }

 function Play()
 {
     var nom = document.getElementById("Name").value;
     var msg = "<strong>Player1 is "+ nom +"!</strong> ";
     var put = document.getElementById("player1");
     put.innerHTML = nom;
     
 }
 function score2()
 {
     var min = document.getElementById("Minute").value;
     var com = document.getElementById("Comment").value;
     cell1.innerHTML = min;
     var msg = "<strong>GOOOLLL del "+Team2.name+"!!!</strong> "+com;
     var msg = "<strong>GOOOLLL del "+Team2.name+"!!!</strong> "+com;
     addTableRow(min, msg);
    ++ Team2.score ;
     document.getElementById("pScore2").innerHTML = Team2.score;
 }
 function addComment()
 {
     var min = document.getElementById("Minute").value;
     var com = document.getElementById("Comment").value;
     addTableRow(min, com);
 }

 function matchEnd()
 {
     var com = document.getElementById("Comment").value;
     var msg = "<strong>FINAL!</strong> ";
     if(Team1.score > Team2.score){
         msg += "Victòria del " + Team1.name;
     }else if(Team1.score < Team2.score){
         msg += "Victòria del " + Team2.name;
     }else{
         msg += "Empat entre " + Team1.name + " i " + Team2.name;
     }
     msg +=" a "+Team1.stadium+". "+com;
     addTableRow("", msg);

     document.getElementById("Goal1").disabled = true;
     document.getElementById("AddComment").disabled = true;
     document.getElementById("Goal2").disabled = true;
     document.getElementById("End").disabled = true;
 }
 
 function addTableRow(player1, player2)
 {
     var table = document.getElementById("scoreresult");
     var row = table.insertRow(1);
     var cell1 = row.insertCell(0);
     cell1.innerHTML = min;
 }

/* When the user clicks on the button, 
toggle between hiding and shoguanyag the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  

  function putpedra(){
    var imatge = document.getElementById("imatgejoc");
    imatge.src = "rock.png";
    console.log("hipedra");
  }

  function putpaper(){
    var imatge = document.getElementById("imatgejoc");
    imatge.src = "paper.png";
    console.log("hipaper");
  }

  function puttisores(){
    var imatge = document.getElementById("imatgejoc");
    imatge.src = "scissors.png";
    console.log("hitisores");
  }

  function go(){
    // definim opció de la maquina 100/3
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
      computerChoice = "pedra";
      var imatge = document.getElementById("imatgejoc2");
      imatge.src = "rock.png";
    } else if(computerChoice <= 0.67) {
      computerChoice = "paper";
      // imatge contrincant paper
      var imatge = document.getElementById("imatgejoc2");
      imatge.src = "paper.png";
    } else {
      computerChoice = "tisores";
      // imatge contrincant tisores
      var imatge = document.getElementById("imatgejoc2");
      imatge.src = "scissors.png";
  }
  // definim operacions:
  if (document.getElementById("dropdown").value == "pedra") {
      var opciojugador = "pedra";
  }
  else if (document.getElementById("dropdown").value == "paper"){
      var opciojugador = "paper";
  } else {
      var opciojugador = "tisores";
  }
  console.log("Jugador:" ,opciojugador);
  console.log("maquina:",computerChoice);
  var compare=function(choice1,choice2){
    if(choice1===choice2){
        return "Empat!";
        
    }
    else if(choice1==="pedra"){
        if(choice2==="tisores"){
            ++Player1.score;
            document.getElementById("pScore1").innerHTML = Player1.score;  
            return "pedra guanya"
            }
        else if(choice2==="paper"){
            ++Player2.score;
            document.getElementById("pScore2").innerHTML = Player2.score;  
            return "paper guanya";
            }
    }
    else if(choice1==="paper"){
        if(choice2==="tisores"){
            ++Player1.score;
            document.getElementById("pScore2").innerHTML = Player2.score;
            return "tisores guanya"
            }
        else if(choice2==="pedra"){
          ++Player2.score;
          document.getElementById("pScore1").innerHTML = Player1.score;  
          return "paper guanya";
        }
    }
    else if(choice1==="tisores"){
        if(choice2==="paper"){
          ++Player1.score;
          document.getElementById("pScore1").innerHTML = Player1.score; 
            return "tisores guanya"
        }
        else if(choice2==="pedra"){
          ++Player2.score;
            document.getElementById("pScore2").innerHTML = Player2.score;
            return "pedra guanya";
            
        }
    }
  }
  console.log(compare(opciojugador,computerChoice));
  //compare(opciojugador,computerChoice);
}