class BaseLogic extends HTMLElement {
    constructor() {
        super()
    }
    static get observedAttributes() {
        return ["croco"]
    }
    //attributeChangedCallback(attrName, oldVal, newVal) {
    //   this.querySelector("img").src = newVal
    //}
    connectedCallback() {
        Promise.all([
            fetch("https://shturmeman.github.io/web-component-practice/Chanks/chank1.html"),
            fetch("https://shturmeman.github.io/web-component-practice/style/chank1.css")
        ])
            .then(response => Promise.all(response.map(item => item.text())))
            .then(response => {
                this.innerHTML = response[0]
                this.appendChild(document.createElement("style")).textContent = response[1]
            })
    }
}

customElements.define("base-logic", BaseLogic)