class ButtonCreator {
    constructor(content) {
        this.content=content
    }

     createButton() {
        var btn = document.createElement("button");
        var clickCount = 0;
        btn.innerHTML = this.content;
        btn.addEventListener("click", () => {
            btn.innerHTML = "button was clicked " + ++clickCount + " times";
        });

        document.body.appendChild(btn);
    }
}

var buttonCreator= new ButtonCreator("Button 1")

buttonCreator.createButton()
buttonCreator.createButton()
