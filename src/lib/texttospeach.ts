export const textToSpeach  = (text:string)=>{
    const voice = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(voice)
}

export const pauseSpeach = () =>{
    window.speechSynthesis.pause()
}
