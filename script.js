document.addEventListener("DOMContentLoaded", function() {
    var btnLinks = document.querySelectorAll(".btn-Link");
    var btnConvenios = document.querySelectorAll(".btn_Convenios")
    btnLinks.forEach(function(btnLink) {
        btnLink.addEventListener("click", function() {
            var url = this.getAttribute("data-url");
            window.open(url, "_blank");
        });
    });

    btnConvenios.forEach(function(btnConvenios) {
        btnConvenios.addEventListener("click", function() {
            var url = this.getAttribute("data-url");
            window.open(url, "_blank");
        });
    });
});