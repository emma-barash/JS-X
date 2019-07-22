function stepsToConvert(string) {
	const upper = [...string].filter(char => char === char.toUpperCase())
	const lower = [...string].filter(char => char === char.toLowerCase())
	return Math.min(upper.length,lower.length)
}

console.log(stepsToConvert("abdCH"))