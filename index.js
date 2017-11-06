var fs = require('fs');
var colors = require('colors');


fs.readdir('./', 'utf-8', function(err, data) {
    console.log('Zawartość bieżącego katalogu'.blue);
    console.log(data);
    fs.writeFile('./tekst.txt', data, function(err) {
        if (err) throw err;
        console.log('Zapisano zawartość katalogu w nowym pliku'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Odczytanie zawartosci nowego pliku'.blue);
            console.log(data);
        });
    });
});