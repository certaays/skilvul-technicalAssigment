// -- Nomor 1 --
// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
    /* untuk obj fun 1 => fun1 { fun1: [Function: fun1], fun2: [Function: fun2] }
    dan untuk obj fun 2 akan menghasilkan objek kosong ()
    */

// 2. Apakah hasil dari fun1 dan fun2 itu sama?
    /// berbeda

// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
    /* pada fun 2 arrow function tidak mempunyai "this", atau tidak support sehingga tidak ada yang diambil(kosong)
    pada fun1 atau function tradisional ini this dapat digunakan dan akan mengambil objek/parentnya
    */

const obj = {
    fun1: function() {
      console.log("fun1", this);
    },
    fun2: () => {
      console.log("fun2", this);
    }
  };
  
  obj.fun1();
  obj.fun2();

// -- Nomor 2 --
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
    /* Encapsulation adalah suatu cara yang digunakan untuk membatasi suatu akses
    sehingga properti atau method didalam objek tidak bisa diakses secara langsung
        Kegunaannya : untuk memproteksi data-data yang penting.
    */

// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
    /* abstraction adalah teknik yang digunakan untuk menyembuntikan detail dari sebuah objek
    atau method. Abstraction hanya akan menampilkan fungsionalitas/fitur yang penting dari objek. 
        kegunaan : untuk memproteksi data-data yang penting/fitur yang penting
    */

// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
    /* Inheritance adalah proses dimana sebuah kelas dapat mewariskan properti ataupun 
    methodnya kepada kelas lain atau childnya.
        Kegunaannya : untuk menghemat penulisan kode apabila menggunakan hal/sifat yang sama
    */

// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
    /* Polymorpism mempunyai konsep yang mirip dengan inheritance yaitu dapat mewariskan properti dan methodnya kepada chilnya
    untuk polymorpism, perbedaannya adalah method yang diwariskan kepada childnya ini dapat diubah menyesuaikan dengan child yang baru. 
        Kegunaan : untuk membuat beragam bentuk dari objek
    */

// // -- Nomor 3 --
class Phone {
    constructor(brand, storage, ram){
        this.brand = brand
        this.storage = storage
        this.ram = ram
    }
    getBrandName(){
        return this.brand
    }
    setBrandName(brandName){
        this.brand = brandName
    }
    printSpecification(){
         console.log(`Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`);
    }
    setSpecification(storageSet, ramSet){
        this.storage = storageSet
        this.ram = ramSet
    }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();


// -- Nomor 4 --
class Student {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
      this.courseOfferings = [];
    }

    getIndex(course){
        let i = -1
        for (let a = 0; a < this.courseOfferings.length; a++) {
            if(this.courseOfferings[a].course.getSubject()===course.getSubject()){
            i = a
            break
        }
    }
    return i
}

    takeNewCourse(course){
        this.courseOfferings.push(new CourseOffering(course))
        course.decreaseQuota()
    }

    takeATest(course){
        const i = this.getIndex(course)
        if(this.courseOfferings[i].attendance >= course.getAttendance()){
            this.courseOfferings[i].grade = Math.floor(Math.random() * 100)
        }else console.log("please fill your absent")
    }

    courseAttendance(course){
        const i = this.getIndex(course)
        this.courseOfferings[i].attendance++
    }
  }
  
  class CourseOffering {
      constructor(course){
          this.course = course
          this.attendance = 0
          this.grade = 0
      }
  }
  
  class Course {
    constructor(subject, quota, attendance){
        this.subject = subject
        this.attendance = attendance
        this.quota = quota
    }
    getSubject(){
        return this.subject
    }
    getAttendance(){
        return this.attendance
    }
    decreaseQuota(){
        this.quota--
    }
  }
  
  
  const biology = new Course("biology", 10, 3);
  const physics = new Course("physics", 10, 2);
  
  const johnWatson = new Student("john watson", "male");
  
  johnWatson.takeNewCourse(biology);
  johnWatson.takeNewCourse(physics);
  
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(biology);
  johnWatson.courseAttendance(physics);
  
  console.log(biology.quota);
  console.log(physics.quota);
  
  johnWatson.takeATest(biology);
  johnWatson.takeATest(physics);
  
  console.log(johnWatson.courseOfferings);
  