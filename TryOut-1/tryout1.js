
if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}

var countwords
var wordAndWord
var objectWords
var regex = /\d+/g;
var numbers = 0
var uniqeWords
var uniqeWordsWithoutNumber

var fs = require('fs')
  , filename = process.argv[2];
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data)

  var words = data.toLowerCase()

        function countWords(words) {
        // your code here


             words.split(' ').reduce(function(acc, word) {
              acc[word]? ++acc[word] : acc[word] = 1;
              return acc;
            },


             objectWords = Object.create(null));

        }


        function countAllWords(words) {
          // your code here
          var string = words

           countwords = words.split(" ").length
        return  console.log("Jumlah semua kata : "+ countwords);

      }

        function alllWords(words) {
          // your code here

          wordAndWord = words.split(" ")

          uniqeWords = Object.keys(objectWords)

          uniqeWordsWithoutNumber = words.match(regex)


          console.log("Jumlah kata yang unik: "+ (uniqeWords.length + uniqeWordsWithoutNumber.length));
          console.log("Jumlah kata yang unik dan jumlahnya masing-masing:");


                for (var stack=0; stack < uniqeWords.length ; stack++){

                  	console.log(uniqeWords[stack] + " : " + objectWords[wordAndWord[stack]])

                }

                for (var i = 0; i < uniqeWordsWithoutNumber.length; i++) {

                  numbers = numbers + uniqeWordsWithoutNumber[i]


                }

                console.log(numbers);
      }

      countWords(words)
      countAllWords(words)
      alllWords(words)

});
