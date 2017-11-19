import './hello.component.scss'

export default class Hello {
    constructor(string) {
        this.string = string
    }

    console() {
        console.log(this.string)
    }
}