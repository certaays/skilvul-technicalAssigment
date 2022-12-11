/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error 
/// - Reference Error
/// - Range Error
/// - Syntax Error


/// WRITE YOUR ANALYSIS HERE
/* - Type Error 
 merupakan error yang akan muncul apabila menggunakan tipe yang tidak diharapkan.
 - Reference 
 merupakan error yang akan timbul apabila terdapat variabel yang belum di definisikan
 - Range Error
 merupakan error yang akan muncul saat apabila kita menggunakan range nilai diluar dari yang telah ditentukan
 - Syntax Error
 merupakan error yang akan timbul saat ada syntax atau penulisan yang salah atau tidak sesuai */

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/* akan muncul eror salaryWithConst is not defined 
 -> termasuk dalam reference error
 -> hal ini dikarenakan constant isinya tidak dapat diubah sehingga haruslah didefinisikan sebelum dipakai/dipanggil. 
    Jika tidak maka akan menimbulkan eror berupa (salaryWithConst is not defined)
 -> untuk var, tidak akan eror saat dipanggil, karena apabila belum didefinisikan, var akan diisi dengan 'undefined', 
    dan akan berubah apabila variabelnya didefinisikan(diisi)*/

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;