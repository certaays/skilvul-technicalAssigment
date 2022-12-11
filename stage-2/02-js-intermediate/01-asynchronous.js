// 1. Apa itu synchronous?
    /* kode yang synchronous adalah kode yang apabila di eksekusi maka dia akan di eksekusi dari atas ke bawah secara berurutan*/

// 2. Apa itu asynchronous?
    /* asynchronous berarti dapat menjalankan kode secara bersamaan tanpa harus menunggu kode yang berada di atasnya selesai terlebih dahulu*/

// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
    /*Ya, kita dapat menerapkan konsep asynchronous pada browser  */


// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
    /* first log:  1
        first log:  2
        first log:  3
        first log:  4
        first log:  5
        second log:  6
        second log:  6
        second log:  6
        second log:  6
        second log:  6 */

// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
    /* Karena var = > adalah variabel yang memiliki scope global sehingga saat console log pertama dijalankan akan berjalan seperti biasa
    == untuk console log kedua, karena kode tersebut akan dijalankan setelah 100ms(dimana keadaan variabel sudah berubah valuenya)
    sehingga outputnya akan menampilkan 6 sebanyak 5 kali.*/

// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (let i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 1); // 02 - Kedua
}