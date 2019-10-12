"use  strict";

let index = 0;
let shedule = [];

function calculate() {
    let beginning = new Date(document.getElementById("beginning").value);
    index = (Date.now() - beginning) / (3600 * 24 * 1000);
    index = 20 + Math.floor(index);
    document.body.innerHTML = 
`<table>
    <tr>
        <td>Press-ups</td>
        <td>${index}</td>
    </tr>
    <tr>
        <td colspan="2">Rest ${index} sec</td>
    </tr>
    <tr>
        <td>ABS crunches</td>
        <td>${index}</td>
    </tr>
    <tr>
        <td colspan="2">Rest ${index} sec</td>
    </tr>
    <tr>
        <td>Squats</td>
        <td>${index}</td>
    </tr>
    <tr>
        <td colspan="2">Rest ${index * 2} sec</td>
    </tr>
</table>`
}