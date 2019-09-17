(function (){

    let startingPopulation =200;
    let birthRate= 0.1;
    let numberOfWeeks =5;

    let resultPopulation =startingPopulation
    resultPopulation = resultPopulation + startingPopulation*birthRate*numberOfWeeks
    document.write ("There will be " + resultPopulation+ " hares in " + numberOfWeeks +" weeks.")
    

    console.log(resultPopulation)

})();