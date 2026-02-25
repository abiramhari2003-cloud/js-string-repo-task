/* User Authentication & Registration*/
// 1. Email Normalization

let str1 = "   Sigma@Gmail.com   ";
str1 = str1.toLowerCase().trim();
console.log(str1);
//  Answer: "sigma@gmail.com"

// 2. Username Generator
let str2 = "John Wick";
str2 = str2.toLowerCase().replace(" ", "_");
console.log(str2);
// Answer: "john_wick"

//3. Admin Email Checker
let str4 = "@company.com";
str4 = str4.includes("com");
console.log(str4);
// Answer: "true"

//4. Password Strength Checker
let pswd = "2Sad@1234"
console.log(pswd.length >= 8 && pswd.includes('@') && /[0-9]/.test(pswd))
// Answer: "true"

//5. Credit Card Masking
let card_number = "1234567812345678"
let last_digits = 6
hide_num = "*".repeat(card_number.length - last_digits)
console.log(hide_num + card_number.slice(-last_digits))
// Answer: "************5678"

// 6. Extract First Name
let str3 = "John Micheal Doe";
str3 = str3.slice(0, 5);
console.log(str3);
// Answer: "John "

//7. Generate User Initials
username = "john doe"
username_split = username.split(" ")
final = (username_split[0][0] + username_split[1][0]).toUpperCase()
console.log(final)
// Answer: "JD"

//8.Captialize First Letter
let generate = "javaScript"
let result = generate[0].toUpperCase() + generate.slice(1)
console.log(result)
// Answer: "JavaScript"  

//9. Count Words 
let word = "I love building full stack applications"
console.log(word.split(" ").length)
// Answer: "6"

//10.clean  extra spaces
let worduh = " hi  Hello World Welcome"
worduh = worduh.replace(" ", "")
console.log(worduh)
// Answer: "hiHelloWorldWelcome"


                  /* Backend api and data formating */

// 1. slug generation
let title = "Learn MERN Stack "
let slug = title.toLowerCase().replace(" ", "-")
console.log(slug)
// Answer: "learn-mern-stack"

//2.email domain extraction
let email = "user123@gmail.com"
let domain = email.split("@")[1]
console.log(domain)
// Answer: "gmail.com"

//3.extract file extension
let filename = "profile.picture.png"
let file_ext = filename.split(".")[2]
console.log(file_ext)
// Answer: "png"

//4.format phone number
let number = "9876543210"
console.log(number.slice(0, 3) + "-" + number.slice(3, 6) + "-" + number.slice(6))
// Answer: "987-654-3210"

//5.turncate description
let description = "This is a very long product description"
console.log(description.slice(0, 7) + "...")
// Answer: "This is..."


                 /*  data processing (backend simulation)  */

//1. convert csv string to array
let fruits = "apple,banana,mango,graps"
let fruits_arr = fruits.split(",")
console.log(fruits_arr)
// Answer: ["apple", "banana", "mango", "graps"]

//2.remove country code
let phone = "+919876543210"
let phone_no = phone.slice(3, 14)
console.log(phone_no)
// Answer: "9876543210"

//3.palindrome checker
let palindrome = "madam"
console.log(palindrome.split("").reverse().join("") == palindrome)
// Answer: "true"

//4.count character occurrence
let str6 = "hi hello welcome "
console.log(str6.split("l").length - 1)
// Answer: "3"

//5.reverse a string
let rev_word = "backend"
console.log(rev_word.split("").reverse().join(""))
// Answer: "dnekcab"