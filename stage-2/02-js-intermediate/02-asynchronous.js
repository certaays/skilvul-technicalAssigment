const isR18Plus = (age) => {
    return new Promise((resolve, reject) => {
        if(age>18) resolve("Anda sudah dewasa")
        else reject("Anda masih dibawah umur")
    })
}
const printR18Plus = async () => {
  const underAge = await isR18Plus(10).then(result => result).catch(error => error);
  const properAge = await isR18Plus(19).then(result => result).catch(error => error);

  console.log(underAge);
  console.log(properAge);
}

printR18Plus();