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
