class Form{
constructor(){

}

display(){
  var title=createElement('h2')
   title.html("dosaisdelicious")
   title.position(130,0)


   var input=createInput("Enter your Name")
   input.position(130,160)
   var button = createButton("dontclickonthis")
   button.position(250,200)
    

    
   button.mousePressed(function(){
    input.hide();
    button.hide();

    var name=input.value();
    playerCount+=1;
    player.update(name)
    player.updateCount(playerCount)
   

    var greeting=createElement("h3")
    greeting.html("hello you are now stuck in this game forever, please give your life as you enter the game  " + name)
    greeting.position(130,160)

   })
}

}