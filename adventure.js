let userName = prompt("enter your name").toLowerCase()
alert("Hello! " + userName)

let firstChoice = "hike";
let secondChoice = "swim";
let thirdChoice = "morning";
let fourthChoice = "afternoon";
let fifthChoice = "Sea";
let sixthChoice = "pool";
let seventhChoice = "alone";
let eighthChoice = "with family or friends";
let ningthChoice = "during day";
let tenthChoice = "late afternoon";
let message = prompt("Would you like to " + firstChoice + " or " + secondChoice).toLowerCase()
if(firstChoice) {
    let message= prompt("would you prefer " + thirdChoice + " or " + fourthChoice ).toLowerCase()
    if(thirdChoice) {
        let message = prompt("would you prefer " + seventhChoice + " or " + eighthChoice).toLowerCase()
        if(seventhChoice) {
            let message = prompt(" Good! have fun " + userName)
        } else if(eighthChoice) {
            let message = prompt(" Good! have fun " + userName)
        }
    } else if(fourthChoice) {
        let message = prompt("would you prefer " + seventhChoice + " or " + eighthChoice).toLowerCase() 
        if(seventhChoice) {
            let message = prompt(" Good! have fun " + userName)
        } else if(eighthChoice) {
            let message = prompt(" Good! have fun " + userName)
        }
    }

 } 
else if(secondChoice) {
    let message = prompt("would you prefer " + fifthChoice + " or " + sixthChoice).toLowerCase()
    if(fifthChoice) {
        let message = prompt("Do you want " + ningthChoice + " or " + tenthChoice)
        if(ningthChoice) {
            let message = prompt(" Good! have fun " + userName)
        } else if(tenthChoice) {
            let message = prompt(" Good! have fun " + userName)
        }  
    } else if(sixthChoice) {
        let message = prompt("Do you want " + ningthChoice + " or " + tenthChoice) 
        if(ningthChoice) {
            let message = prompt(" Good! have fun " + userName)
        } else if(tenthChoice) {
            let message = prompt(" Good! have fun " + userName)
        }
    }
}
       

    
    