const mailValidator = new RegExp(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)
const passValidator = new RegExp(/[A-Za-z\d\!\@\#\$\%\^\&\*]{8,}/)

export function validateLoginData(email, password){
    if(mailValidator.test(email)){
        if (passValidator.test(password)) alert("Welcome to the jungle")                  
        else alert("Tolong masukkan password sesuai ketentuan")
    }else alert("Tolong masukkan email yang valid")
}