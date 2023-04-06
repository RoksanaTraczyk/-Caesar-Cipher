import caesar13 from "./caesar";


document.getElementById("button").addEventListener("click", () => {
    const sentenceToHash = document.getElementById("input").value;
    try {
        const result = caesar13(sentenceToHash);
        document.getElementById("result").value = result;
    } catch (err) {
        alert(err.message);
    }
})

