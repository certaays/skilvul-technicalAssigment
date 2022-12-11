// -- Nomor 1 -- 
const person = {
    name: "person A",
    age: 100,
    favDrinks: [
      "coffee",
      "jamu temulawak",
      "tea"
    ],
    greeting: function(nama) {
      return `Hello, ${nama}`
    }
  }
  
  /// EDIT HERE
  person.name = "Certa Yustitia"
  person.favDrinks.splice(person.favDrinks.indexOf('jamu temulawak'), 1, 'tap water')
  
  /// STOP
  
  console.log(person.name);
  console.log(person.age);
  console.log(person.favDrinks);
  console.log(person.greeting("John Watson"));

// -- Nomor 2 --
  function getObjectValue(obj, path) 
  {
    let temp = path.split('.')
    let result = obj[temp[0]][temp[1]][temp[2]]

    if(result===undefined) return null
    else return result
  }

  const milkBasedCoffee = {
    name: "latte",
    ingredients: {
      espresso: {
        origin: "lampung",
        roastProfile: "medium to dark",
        ratio: 1
      },
      milk: {
        brand: "susu murni",
        isVegan: false,
        ratio: 5
      }
    },
  }
  
  const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
  const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
  const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");
  
  console.log(espresso);
  console.log(coffeeBrand);
  console.log(isMilkVegan)

  // -- Nomor 3 --
  // dibawah ini merupakan history transasksi yang telah kalian lakukan
const items = [
    {
      btc: { buy: 10, sell: 9 },
      eth: { buy: 8, sell: 7.5 },
      doge: { buy: 7, sell: 6.5 },
      day: 1,
    },
    {
      btc: { buy: 9, sell: 5 },
      eth: { buy: 7, sell: 4 },
      doge: { buy: 6, sell: 3 },
      day: 2,
    },
    {
      btc: { buy: 5, sell: 10 },
      eth: { buy: 4, sell: 6 },
      doge: { buy: 3, sell: 4 },
      day: 3,
    },
  ];
  
  const calculateIncome = (items) => {
    /// EDIT DOWN HERE
    let sumBTC = []
    let sumETH = []
    let sumDOGE = []
    
    for (let a = 0; a < items.length; a++) {
        sumBTC[a] = items[a].btc.sell - items[a].btc.buy
        sumETH[a] = items[a].eth.sell - items[a].eth.buy
        sumDOGE[a] = items[a].doge.sell - items[a].doge.buy
    }

    let obj = {
        btc : sumBTC.reduce((total, value) => total + value), 
        eth : sumETH.reduce((total, value) => total + value), 
        doge : sumDOGE.reduce((total, value) => total + value)
    }
    return obj
  }

  console.log(calculateIncome(items))