/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/// ada 2 scope pada javascript
/// 1. variabel global (variabel ini dideklarasikan di luar dari sebuah blocks. Variabel ini bisa diakses dimanapun)
/// 2. variabel local (variabel ini dideklarasikan di dalam sebuah blocks seperti function, conditional, looping. Variabel ini hanya bisa diakses di dalam blocks)

///IMPLEMENTASI GLOBAL & LOCAL SCOPE
let global = "global" ///variabel global

function local() {
    let kata = "local" ///variabel local
    return kata + " dan " + global
}
/// console.log(kata) -> akan error karena belum dideklarasikan diluar scope
console.log(global) // bisa muncul karena variabel global
console.log(local()) // memanggil fungsi yang mengembalikan variabel local dan global


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/* yang tampil pada console.log adalah Mariah
 -> hal ini dikarenakan variabel di dalam function printFirstName bukanlah variabel yang dideklarasikan pada kode
    (const name = "John Watson";). 
 -> variabel name pada parameter function printFirstName milik dari fungsi printFirstName 
    (hanya berlaku/dapat digunakan pada fungsi tersebut) */

const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));