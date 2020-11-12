//JS for the sign of the product of the numbers button//
function signOfProduct(){
    var a = parseInt(prompt("Place a number"));
    var b = parseInt(prompt("Place a number"));
    var c = parseInt(prompt("Place a number"));
    var totalProduct = a * b * c;
    if (totalProduct < 0 ){
      alert("The sign of the product is -")  
    }
    if (totalProduct > 0 ){
        alert("The sign of the product is +")  
      }
    
   

    
}

//JS for the while loop sum threes button//
function whileSumThrees(){
    let sum = 0;
    let i = 0;
     while (i < 1000) {
                                 //sums the multiples of 3 under 1000
         sum += i;
         i = i + 3;
     }
     console.log(sum) //log the result to the console
 }
   


//JS for the larger number button//
function largeNumber() {
 var a = parseInt(prompt ("Place a number"));
 var b = parseInt(prompt ("Place a number"));
  
 if (a < b) {
    document.getElementById("demo").innerHTML =
    "The larger number is " + b;
  }
  if (a > b){
      document.getElementById("demo").innerHTML =
      "The larger number is " + a;
  }
  if (a == b){
    document.getElementById("demo").innerHTML =
      "They both equal the same";  
  }
}

//JS for the list of numbers greatest to least button//
function threeNumberSort() {
    var a = parseInt(prompt("Place a number"));
    var b = parseInt(prompt("Place a number"));
    var c = parseInt(prompt("Place a number"));
let array = [a, b, c];
array.sort(function(a, b, c){return b - a});
alert ("the order from greatest to least is " + array);
    
}

//JS for the forSumThrees button//
function forSumThrees() {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      
        ! (i % 3) && (sum += i)
          
    }
    console.log(sum);
    
}

//JS for the thirdAngle button//
function thirdAngle() {
    alert ("Welcome to the folloing activity! You must put in 2 angles of a triangle and the function will return the 3rd angle missing. Please remember to type in two angles that add up to less than 180 or else the function wont work. Enjoy!" );
    var a = parseInt(prompt("Enter an angle of a triangle"));
    var b = parseInt(prompt("Enter another angle of a triangle "));
    var totalSum = 0;

    if ((a + b) < 180){
    totalSum = 180 - (a + b); 
    alert ("The angle that is missing is " + totalSum );
    }

    else if ((a + b) > 180){
    alert ("Invalid. Enter two angles of a triangle.");    
    }

}

//JS for the encrypt button//
function encrypt() {
    let plaintext = prompt ("Enter your plain message:"); // Recieves the plain message
    let ciphertext = ""; //Creates the ciphertext variable
    plaintext = plaintext.split(" "); //This splits each word in the string 
    for(let i = 0; i < plaintext.length; i = i + 1) {  //For loop to make changes to plain message
        firstletter = ((plaintext[i][0]).replace("", "97")).toUpperCase(); //This takes the first letter of each word in the string and makes it uppercase and adds a 97 behind it
        lastletter = (((plaintext[i]).slice(-1)).toUpperCase()).replace("", "j"); //This takes the last letter of each word in the string and makes it uppercase and adds a j behind it.
        ciphertext += "xz" + (plaintext[i]).slice(1, -1) + firstletter + lastletter + "xz " ; //This adds an xz to the front and end of each word. This also removes the first and last letter in each word and then adds the modified first letter followed by the modified last letter.
    }
    document.getElementById("encrypted").innerHTML = ciphertext;  //This displays the encrypted text on the button
    alert("Copy this encrypted message and paste on decrypt button! " + ciphertext) //Alert to copy the encrypted message
}

//JS for the decrypt button//
function decrypt() { 
    let ciphertext = prompt ("Enter your encrypted message:"); //Recieves the encrypted message
    let plaintext = ""; //Creates the plain text variable
    ciphertext = ciphertext.split(" "); //This splits each word in the string 
    for(let i = 0; i < ciphertext.length; i = i + 1) { //Loop to make changes to encypted message
        firstletter = ((ciphertext[i]).slice(-5, -4)).toLowerCase(); //This takes the first letter of each plain message by extracting it with slice method and making it lowercase
        lastletter = ((ciphertext[i]).slice(-3, -2)).toLowerCase(); //This takes the last letter of each plain message by extracting it with slice method and making it lowercase
        plaintext += firstletter + (ciphertext[i]).slice(2,-7) + lastletter + " "; //This makes the plain message by adding the modified firstletter var. Then this takes the encrypted text and slices out the plain parts of the plain message. Lastly it adds the modified lastletter var to decrypt the message.
    }
    document.getElementById("decrypted").innerHTML = plaintext; // This displays the decryped message (plain message) on the button
    
    
}


   

        

        
        







    
