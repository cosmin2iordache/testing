// let name = "Box"

// function sayName() {
//      name = "cosmin"
// }

// sayName()
// console.log("name is " + name)




// let cosmin = {
//      firstName: "cosmin",
//      lastName: "cox",
//      breathe2() {
//           console.log(this.firstName + " " + this.lastName)
//           function one(){console.log(this)}
//           one()
//      }
// }

// function breathe() {
//      console.log(this.firstName + " " + this.lastName)
// }

// breathe.call(cosmin)
// cosmin.breathe2()




// class Person {
//       constructor(x) {
//             this.name = x
//       }

//       printNameFromArrow() {
//             setTimeout(() => console.log("Hi " + this.name), 1000)
//       }

//       printNameFromFunction() {
//             setTimeout(function() {console.log("Hi " + this.name)}, 1000)
//       }
// }

// let cosmin = new Person("Cosmin")
// cosmin.printNameFromArrow()
// cosmin.printNameFromFunction()







// map and filer with arrow
// let animals = [
//       {name: "MAX", age: 4, color: "red"},
//       {name: "PAX", age: 5, color: "red"},
//       {name: "FOX", age: 6, color: "blue"},
//       {name: "DOX", age: 7, color: "yellow"}
// ]

// console.log(animals.push({name: "ZIX", age: 4, color: "yellow"}))

// function onlyNames(x) {
//       return x.name
// }

// function onlyBig(x) {
//       return x.age >4
// }

// function onlyRed(x) {
//       return x.color == "red"
// }


// let finalFunction = animals.filter(onlyBig).filter(onlyRed).map(onlyNames)
// let finalFunction2 = animals.filter(x => x.age>4).filter(onlyRed).map(onlyNames)


// console.log(finalFunction)
// console.log(finalFunction2)















// map and filer
// let animals = [
//       {name: "MAX", age: 4, color: "red"},
//       {name: "PAX", age: 5, color: "red"},
//       {name: "FOX", age: 6, color: "blue"},
//       {name: "DOX", age: 7, color: "yellow"}
// ]

// console.log(animals.push({name: "ZIX", age: 4, color: "yellow"}))
// console.log(animals)

// let names = animals.map(onlyNames)
// function onlyNames(x) {
//       return x.name
// }

// let age = animals.filter(onlyBig)
// function onlyBig(x) {
//       return x.age >4
// }

// let color = animals.filter(onlyRed)
// function onlyRed(x) {
//       return x.color == "red"
// }


// let finalFunction = animals.filter(onlyBig).filter(onlyRed).map(onlyNames)


// console.log(finalFunction)





//DAY 6 Higher Order Function

// function repeatName(name) {
//       return function (x) {
//       let repeat = 0      
//       while (repeat < x) {
//             document.write(name + "<br>")
//             repeat++
//       }}}

// let max = repeatName("Max")
// max(3)

// console.log(max(5))


// function createMultiplier(multiplier) {
//       return function (x) {
//             return x * multiplier
//       }
// }

// let doubleMe = createMultiplier(2) 
// let tripleMe = createMultiplier(3)


// document.write(doubleMe(15))
// document.write(tripleMe(7))

// let myColors = ["red","green","orange"]

// myColors.forEach(say);

// function say(color) {
//       document.write("the color " + color + " is nice. <br>")
// }

// myColors.forEach(function(x) {
//       console.log("dasdasdas" + x)
// })











// DAY 5
// document.writeln("hello Cosmin")


// let testNumber = 100;
// let number = 0
// if (testNumber)
//       console.log("true")

// if (number)
//       console.log("true")
//       else console.log("false")

// while (testNumber < 105) {
//       document.write(testNumber + "<br>")
//       console.log(testNumber)
//       testNumber++
// }




// DAY 4
// let myNumbers = [1,2,3,4,5,6]
// let myWords = ["one", "two", "five"]

// let a = 2
// let b = "2"

// console.log(a+b)
// //-----------------------------------------------------------------
// myWords.push("a") 
// console.log(myWords)

// myWords.pop()
// myWords.pop()
// console.log(myWords.pop())

// console.log(myWords.splice(1, 1))




// let cosmin = "coSMin"
// console.log(cosmin.toUpperCase())
// // console.log(myNumbers.length)
// console.log(`------------------------------------------- \n ${myWords}`)
// console.log(myWords)
// console.log(JSON.parse((JSON.stringify(myWords))))



