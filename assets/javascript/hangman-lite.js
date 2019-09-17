(function(){

   // document.write("hello from hangman-lite.js");
   let word="babysitter"
   let letter="b"

   let letterCount= word.split(letter).length -1

   console.log(word)
   console.log(word.split(letter))
   console.log(letterCount)

   if(word.indexOf(letter)>=0){
      document.write (" yeah,the letter " + letter + " exists " +letterCount+ " times in my word ") 
   }
   else{
      document.write(" Nope , that letter does not exist in my word")
   }
})();