var fs = require("fs");

fs.readFile('input.txt', function (b, data) {
   if (b){
      console.log(b.stack);
      return;
   }
   console.log(data.toString());
});
console.log("程序执行完毕");
