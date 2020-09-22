// Event Lisener
document.getElementById('convert').addEventListener('click', CalcArea);

// Event Function
function CalcArea() {
    // Input
    let sideA = Number(document.getElementById('a').value);
    let sideB = Number(document.getElementById('b').value);
    let sideC =  Number(document.getElementById('c').value);

    
    let area = HeronFormula(sideA, sideB, sideC);

    // Output
    document.getElementById('area').innerHTML = area;
}
   
function HeronFormula(a, b, c) {
    let s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}