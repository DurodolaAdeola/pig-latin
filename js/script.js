function piglatin(userInput)
 if (vowels.indexOf(userInput[0])> -1) {
    newStr = userInput +"acedu";
    console.log(newStr)
}else{
    console.log(remove + "ayac")
}







$(document).ready(function(){
    $(".form").submit(function(event){
        event.preventDefault()
       
        let userInput =$("#input1").val();
        let firstLetter = userInput.substring(0,1);
        let remove = userInput.slice(1)+firstLetter;
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        let newStr= "";
       

    })
})