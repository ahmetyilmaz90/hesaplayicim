export function initCalculator() {
   const calculator = document.querySelector(".calculator-container");
   if (!calculator) return;

    /* Performans için Cachelemek*/
    const resetBtn = calculator.querySelector("#reset-btn");
    const resultOutput = calculator.querySelector("#result");
    const copyBtn = calculator.querySelector(".btn--copy");
    const inputs = calculator.querySelectorAll("input");
    const dataTextArea = calculator.querySelector("textarea");
    const resultBtn = calculator.querySelector("#result-btn");
    const form = calculator.querySelector("form");

    /*Temizleme butonu işlevi*/
    resetBtn.addEventListener("click", function() {
        if (inputs.length > 0) {
            inputs.forEach(inp => inp.value = "");
        }

        if (dataTextArea) {
            dataTextArea.value = "";
        }

        resultOutput.textContent = "";
        console.log("Veriler Temizlendi!");
    });    
    
    /*Enter tuşuna basınca hesaplama fonksiyonu*/
    calculator.addEventListener("keydown", (e)=>{
        if (e.key === "Enter" && !resultBtn.disabled) {
            resultBtn.click()
        }
    });   
    
    /*Veri formlarının sayfayı yenileme olayını iptal etmeyi sağlayan ve hesaplandı bildirimi yapan kod:*/
    form?.addEventListener("submit", function(e) {
        e.preventDefault();
        console.log("Hesaplandı!")
    });    

    /*Kopyalama işlevi */
    copyBtn.addEventListener("click", () => {
        const oldText = resultOutput.innerText;
        let reelText;

        if (oldText !== "Kopyalandı!" && oldText) {

            /*Butonları bir süre devre dışı bırakmak*/
            resetBtn.disabled = true;
            resultBtn.disabled = true;
            copyBtn.disabled = true;


        navigator.clipboard.writeText(oldText)
        
            .then( () => {
                reelText = resultOutput.innerText;
                resultOutput.innerText = "Kopyalandı!";
                    
                setTimeout(() => {
                    resultOutput.innerText = reelText;
                    resultOutput

                    resetBtn.disabled = false;
                    resultBtn.disabled = false;
                    copyBtn.disabled = false;

                }, 1200);
                console.log("Kopyalandı!");
            } )    
        }
    });
}