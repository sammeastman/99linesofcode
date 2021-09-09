let friends = ['Connor', 'Tristen', 'Zack', 'BJ', 'Skylar']
let total = 5;
const lineLines = (count) => count === 1 ? "line" : "lines";
let count = 99;

for (let i = 0; i < friends.length; i ++) {
while (count > 0) {
    console.log(count + " " + lineLines(count) + " of code on the file");
    console.log(count + " " + lineLines(count) + " of code,");
    console.log(friends[0] + " strikes one out, clears it all out,");
    count = count - 1;
    if (count > 0) {
        console.log(count + " " + lineLines(count) + " of code on the file.");
    } else {
        console.log("No more " + lineLines(count) + " of code on the file.");
        
    }

      
    }
}

