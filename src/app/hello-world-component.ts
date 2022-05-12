import { Component } from '@angular/core'

@Component({
    selector: 'hello-world-component',
    template: '<h1>HOLA! / {{title}}<h1>',
    styles: [`
    h1{
        color: red;
    }
    `]
})

export class HelloWorldComponent {
    title: string = 'Hello World 🙃'
}