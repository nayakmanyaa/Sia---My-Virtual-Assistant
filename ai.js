let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let text_spoken = new SpeechSynthesisUtterance(text)
    text_spoken.rate = 1
    text_spoken.pitch = 1
    text_spoken.volume = 1
    text_spoken.lang = "en-GB"
    window.speechSynthesis.speak(text_spoken)
}

function wishMe(){
    let day = new Date()
    let hours = day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Maam!")
    } 
    else if(hours>=12 && hours<16){
        speak("Good Afternoon Maam!")
    } 
    else{
        speak("Good Evening Maam!")
    }
}

window.addEventListener('load', ()=>{
    wishMe()
})

let speechRecog = window.SpeechRecognition || window.webkitSpeechRecognition
let recog = new speechRecog()
recog.onresult = (event)=>{
    let currInd = event.resultIndex
    let transcript = event.results[currInd][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click", ()=>{
    recog.start()
    btn.style.display = "none"
    voice.style.display = "block"
}) 

function takeCommand(message){
    btn.style.display = "flex"
    voice.style.display = "none"
    if(message.includes("hello") || message.includes("hey")){
        speak("hello maam, how can i help you?")
    }
    else if(message.includes("who are you?")){
        speak("I am virtual assistant, created by Manya")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/", "_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/", "_blank")
    }
    else if(message.includes("open leetcode") || message.includes("open lead code")){
        speak("opening leetcode...")
        window.open("https://leetcode.com/", "_blank")
    }
    else if(message.includes("open linkedin")){
        speak("opening linkedin...")
        window.open("https://linkedin.com/", "_blank")
    }
    else if(message.includes("open nykaa")){
        speak("opening nykaa...")
        window.open("https://nykaa.com/", "_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/", "_blank")
    }
    else if(message.includes("open github") ){
        speak("opening github...")
        window.open("https://github.com/", "_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/", "_blank")
    }
    else if(message.includes("open zomato")){
        speak("opening zomato...")
        window.open("https://zomato.com/", "_blank")
    }
    else if(message.includes("open swiggy")){
        speak("opening swiggy...")
        window.open("https://swiggy.com/", "_blank")
    }
    else if(message.includes("open amazon")){
        speak("opening amazon...")
        window.open("https://amazon.com/", "_blank")
    }
    else if(message.includes("open flipkart")){
        speak("opening flipkart...")
        window.open("https://flipkart.com/", "_blank")
    }
    else if(message.includes("open myntra")){
        speak("opening myntra...")
        window.open("https://myntra.com/", "_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator...")
        window.open("calculator://")
    }
    else if(message.includes("open spotify")){
        speak("opening spotify...")
        window.open("spotify://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp...")
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric", minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric", month:"short"})
        speak(date)
    }
    else{
        let finalText = "this is what i found on internet regarding" + message.replace("siya", "")
        speak(finalText)
        window.open(`https://www.bing.com/search?pglt=43&q=${message.replace("siya","")}`,"_blank")
    }
}