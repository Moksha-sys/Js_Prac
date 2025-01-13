let Score = "33"
let scoreString = "33abc"
let sUndefined = undefined
let sNull = null
let sBool = true
console.log(typeof Score)
let scoreInNumber  = Number(Score)
let scoreStringInNumber  = Number(scoreString)
let sUndefinedInNumber  = Number(sUndefined)
let sNullInNumber  = Number(sNull)
let sboolInNumber  = Number(sBool)

console.table([["scoreInNumber", scoreInNumber],
    ["scoreStringInNumber", scoreStringInNumber],
    ["sNullInNumber", sNullInNumber],
    ["sUndefinedInNumber", sUndefinedInNumber],
    ["sboolInNumber",  sboolInNumber]]
)

//Sameway we can convert in String and boolean datatype using String() and Boolean() functions.




