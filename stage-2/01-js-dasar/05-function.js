/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
let pajak
function taxCalc(salary) { 
    if(salary<5000000){
        pajak = 0
    }else if(salary>=5000000 && salary<10000000){
        pajak=5/100*salary
    }else if(salary>=10000000 && salary<20000000){
        pajak=10/100*salary
    }else if(salary>=20000000){
        pajak=20/100*salary
    }
    return pajak
}
console.log('taxCalc SHOULD BE ' + taxCalc(4500000))

/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000

/// EDIT HERE
function checkBMI(weight, height) { 
    let BMI=((weight)/(height**2))*10000
    if(BMI<18.5){
        return "under weight"
    }else if(BMI>18.5 && BMI<24.9){
        return "normal"
    }else if(BMI>25 && BMI<29.9){
        return "over weight"
    }else if(BMI>30 && BMI<34.9){
        return "obese"
    }else if(BMI>35){
        return "extremely obese"
    }
 }
 console.log('checkBMI SHOULD BE "' + checkBMI(80,170)+'"')


/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function convToUpperCase(sentence) { 
    let kalimat = sentence.split(" ")
    for(let i=0; i<kalimat.length; i++){
    kalimat[i] = kalimat[i].charAt(0).toUpperCase() + kalimat[i].substring(1)
    }
    return kalimat.join(" ")
}
console.log('convToUpperCase SHOULD BE "' + convToUpperCase("hello bandung")+'"')

/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

/// EDIT HERE
function firstNonRepeatedChar(string) {
    if(string.indexOf(' ') >= 0){
        return "Kata tidak boleh dipisah"
    }else{
    for (var i = 0; i < string.length; i++) {
        var c = string.charAt(i);
        if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
          return c;
        }
      }
      return '""';
    }
 }
console.log('firstNonRepeatedChar SHOULD BE "' + firstNonRepeatedChar("alloha")+'"')