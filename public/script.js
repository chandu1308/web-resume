(function() {
    const showDate = document.querySelector('.date');

    var today = new Date().toLocaleString();
    showDate.innerHTML = today;
    
    document.querySelector(".download-btn").addEventListener("click", function() {
        const anchorTag = document.createElement("a");
        anchorTag.href = "./assets/Chandrasekhar Tirumalasetty_Resume.pdf";
        anchorTag.download = "Chandrasekhar-Tirumalasetty.pdf";
        anchorTag.click();
    });
})();