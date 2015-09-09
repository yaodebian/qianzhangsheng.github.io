document.getElementById("max_length_input").onfocus = document.getElementById("max_length_input").onkeydown = document.getElementById("max_length_input").onkeyup = function () {
    document.getElementById("none_no").innerHTML = this.value.length;
}