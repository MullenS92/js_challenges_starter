(function(){
 
    let amount= 17
   let bills=[]

 //   let numberOfTwenties= Math.floor(amount/20)

 //   amount = amount - numberOfTwenties*20

 //   let numberOfTens = Math.floor(amount/10)

  //  amount =amount - numberOfTens*10

  //  let nunmberOfFives = Math.floor(amount/5)
 //    amount = amount - nunmberOfFives  *5

  //   let numberOfOnes =Math.floor(amount/1)
  //   amount =amount - numberOfOnes *1

  //   bills=[numberOfTwenties,numberOfTens,nunmberOfFives,numberOfOnes]


     if(amount>20){
         let numberOfTwenties= Math.floor(amount/20)
         amount=amount % 20
         bills[0] = numberOfTwenties
     }

         else {
             bills[0]=0
    
         }
    
    
         if( amount>10){ 
             let numberOfTems =Math.floor (amount/10)
             amount= amount % 10
             bills [1] =numberOfTems
            
         }
         else {
             bills[1]=0
         }
         if(amount>5){
             let numberOfFive = Math.floor (amount/5)
             amount=amount % 5
             bills[2]=numberOfFive

         }
         else {
             bills[2]=0
         }
         if(amount>1){
             let numberOfOnes = Math.floor (amount/1)
             amount=amount % 1
             bills[3]=numberOfOnes

         }
         else {
             bills[3]=0
         }
    
    
    console.log(bills)

})();