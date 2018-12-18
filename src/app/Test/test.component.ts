
import {Component} from  '@angular/core'

@Component({
    selector:'app-test',
    template:`<h1>Helo From Test Component</h1>
               <p>Learning Component Without CLI</p> 
    `,
    styles:[
        `
        p{ 
           color:green;     
        }`
    ]

})

export class TestComponent{}