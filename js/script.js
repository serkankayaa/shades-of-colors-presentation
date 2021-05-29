document.getElementById("tr-button").addEventListener("click", function () {
    document.getElementById("tr").style.display = "";
    document.getElementById("eng").style.display = "none";
});

document.getElementById("eng-button").addEventListener("click", function () {
    document.getElementById("eng").style.display = "";
    document.getElementById("tr").style.display = "none";
});
