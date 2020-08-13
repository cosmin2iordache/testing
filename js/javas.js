//DAY 6 Higher Order Function

// let name = "cosmin"

function repeatName(name) {
      return function (x) {
      let repeat = 0      
      while (repeat < x) {
            document.write(name + "<br>")
            repeat++
            }
      }
}

let max = repeatName("Max")
document.write(max(3))

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


