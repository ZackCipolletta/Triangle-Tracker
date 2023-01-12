
function submitFunc(event) {
    event.preventDefault();
        triangleType();
        displayResults();
}

    function triangleType() {
        let side1 = parseInt(document.getElementById("side1").value);
        let side2 = parseInt(document.getElementById("side2").value);
        let side3 = parseInt(document.getElementById("side3").value);
        
        let result = parseInt(side1 + side2 + side3);
        if (side1 === side2 && side2 === side3){
            result = "Equilateral"
        } else if (side1 === side2 || side2 == side3 || side1 === side3){
            result = "Isoceles"
        } else if (side1 + side2 > side3 || side1 + side3 > side2 || side2 + side3 > side1){
            result = "Scalene"
        }else (result = "Not A Triangle")
        
        return result;
    }

    function displayResults() {
        const results = document.getElementById("para");
        results.innerHTML=(triangleType());
        return results;
    }


window.addEventListener("load", function() {
    document.getElementById('triangleForm').addEventListener("submit", submitFunc);

});