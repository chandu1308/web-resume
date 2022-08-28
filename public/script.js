(function() {
    const showDate = document.querySelector('.date');
    // var today = new Date().toLocaleString();
    // showDate.innerHTML = today;
    
    setInterval(myTimer, 1000);
    function myTimer() {
        const date = new Date();
        showDate.innerHTML = date.toLocaleString();
    }

    document.querySelector(".download-btn").addEventListener("click", function() {
        const anchorTag = document.createElement("a");
        anchorTag.href = "./assets/Chandrasekhar_Tirumalasetty_Resume.pdf";
        anchorTag.download = "Chandrasekhar-Tirumalasetty.pdf";
        anchorTag.click();
    });
})();