const XO = str => {
   const newStr = [ ...str ].filter(letter => letter === 'x' || 'o' ? false : true)
   return newStr
 }

console.log(XO('ABDf'))