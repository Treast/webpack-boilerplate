import App from '@/app/app.component'
import Hello from '@/hello/hello.component'

const app = new App()
app.isReady()
.then(() => {
    let hello = new Hello('Hello World!')
    hello.console()
})