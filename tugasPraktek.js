var input = require('readline-sync');
var jam = input.question("masukan jam = ");
var menit = input.question('masukan menit = ');
console.log('tampilkan detik');
var detik = (jam*3600) + (menit*60);
console.log(detik);
