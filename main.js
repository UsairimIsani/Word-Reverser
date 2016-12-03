function reverser() {
    var inp = document.getElementById("reverser").value;
    var temp = "";
    for (var i = inp.length - 1; i >= 0; i--) {
        temp += inp[i];
    }
    inp = temp;
    document.write(inp);
}
