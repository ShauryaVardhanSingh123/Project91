function addUser(){
    player1name=document.getElementById("Player1").value;
    player2name=document.getElementById("Player2").value;
    localStorage.setItem("Player1Name",player1name);
    localStorage.setItem("Player2Name",player2name);
    window.location.replace("game.html");
}