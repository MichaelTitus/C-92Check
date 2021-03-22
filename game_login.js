function adduser(){
    var player1name=document.getElementById("playername1input").value;
    var player2name=document.getElementById("playername2input").value;
    localStorage.setItem("playername1", player1name);
    localStorage.setItem("playername2", player2name);
    window.location="game_page.html";
}