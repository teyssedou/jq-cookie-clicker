$(document).ready(function(){
	
var clique = 0;
$(".cake-is-a-lie").click(function() {
	clique += 1;
	console.log(clique);
$(".counter").html(clique);

var text = ["Sors de là!!",
"Bouge de là!",
"Mais tu vas sortir OUI!!",
"Tu sais dehors, il y a de belles choses aussi!",
"Ferme le Pc et profite de la vie!"];

if (clique%20 == 0) {
alert (text [Math.floor(Math.random() *5)]);
}
});
});