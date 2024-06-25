const generatePasswordButton = document.querySelector("button")
const inputBox = document.querySelector("input")
const myPasswords = document.querySelector(".passwords")


let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_="
let password = ""

generatePasswordButton.addEventListener("click", function () {
    password = ""

    let length = inputBox.value

    for (let i = 0; i < length; i++) {
        password = password + charset[Math.floor(Math.random() * charset.length)];
    }

    const myH2 = document.createElement("h2")
    myH2.innerHTML = `${password} <i class="fa-solid fa-copy" id="copy"></i> <i class="fa-solid fa-volume-high" id="volume"></i>`
    myPasswords.append(myH2)

    inputBox.value = ""

    const copyButton = myH2.querySelector("#copy")

    copyButton.addEventListener("click", function () {
        navigator.clipboard.writeText(password)

    })

    const volumeButton = myH2.querySelector("#volume")

    volumeButton.addEventListener("click", function () {
        const speakInfo = new SpeechSynthesisUtterance(password)
        speechSynthesis.speak(speakInfo)
    })


})

const mode = document.querySelector("#moon")
const websiteBody = document.body
const myButton = document.querySelector("button")

mode.addEventListener("click", function () {
    websiteBody.classList.toggle("theme")
    myButton.classList.toggle("theme")
})