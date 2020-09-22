// Event Lisener
document.getElementById('convert').addEventListener('click', area);

// Event Function
function Calculator() {
    // Input
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c =  Number(document.getElementById('c').value);

    // Process
    ///// let s = (a + b + c) / 2;
    ///// let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    // Output
    document.getElementById('area').innerHTML = area;
}
   


//////////////////////////////////////////////////////////////////////


function s(a, b, c) {
    let s = ((a + b + c) / 2) {
        
    }
    
}


//////////////////////////


let s = (a + b + c) / 2;

function area (a, b, c) {
    return Math.sqrt((s - a) * (s - b) * (s - c));
}