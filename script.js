function sendMessage() {

    let input = document.getElementById("userInput").value.toLowerCase();

    let response = "";

    let knowledgeBase = {
        "hello": "Hi! Nice to meet you.",
        "python": "Python is a programming language.",
        "html": "HTML is used to create webpages.",
        "css": "CSS is used for styling webpages.",
        "javascript": "JavaScript adds functionality to websites.",
        "bye": "Goodbye!"
    };

    for(let key in knowledgeBase){
        if(input.includes(key)){
            response = knowledgeBase[key];
            break;
        }
    }

    if(response === ""){
        response = "Sorry, I don't know that.";
    }

    let chatBox = document.getElementById("chat-box");

    chatBox.innerHTML += `<p><b>You:</b> ${input}</p>`;
    chatBox.innerHTML += `<p><b>Bot:</b> ${response}</p>`;

    document.getElementById("userInput").value = "";
}