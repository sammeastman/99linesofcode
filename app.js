let friends = ["Connor", "Tristen", "Zack", "BJ", "Skylar"];
//loop beginning
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
  {
    for (let j = 99; j > 0; j--) {
      if (j > 2) {
        console.log(
          j +
            " lines of code in the file," +
            j +
            " lines of code; " +
            friends[i] +
            " strikes one out, clears it all out, " +
            (j - 1) +
            " lines of code in the file"
        );
      } else if (j == 2) {
        console.log(
          j +
            " lines of code in the file," +
            j +
            " lines of code; " +
            friends[i] +
            " strikes one out, clears it all out, " +
            (j - 1) +
            " lines of code in the file"
        );
      }
      //singular form of line
      else {
        console.log(
          j +
            " line of code in the file," +
            j +
            " line of code; " +
            friends[i] +
            " strikes one out, clears it all out, " +
            (j - 1) +
            " lines of code in the file"
        );
      }
    }
  }
}
// i was referencing my pre-assignment submission and using it as a reference at first, i tried to make it loop over and over again correctly
// and eventually just started over, which is what is above
/*it friends = ['Connor', 'Tristen', 'Zack', 'BJ', 'Skylar']
let totalfriends
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
*/
