








$(document).ready(function(){
    $(".form").submit(function(event){
        event.preventDefault()
        let userInput =$("#input1").val();
        userInput =userInput.toLowerCase()
        //getting the first character and concatinating it to the back of my input
        let firstLetter = userInput.substring(0,1);
        let remove = userInput.slice(1)+firstLetter;


        //getting the first two letters and concatinating it to the back of my input
        let twoLetter = userInput.substring(0,2)
        let remove2 = userInput.slice(2)+twoLetter


        let vowels = ['a', 'e', 'i', 'o', 'u'];
        let newStr= "";
        if (vowels.indexOf(userInput[0])> -1) {
            newStr = userInput +"acedu";
            $("#output").text(newStr)
        }
        
        else if(twoLetter==="qu"){
                $("#output").text(remove2 + "ayac")
        }
        
        else{
            $("#output").text(remove + "ayac")
        }

    })
})