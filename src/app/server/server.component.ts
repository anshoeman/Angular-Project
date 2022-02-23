import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',//sets up the url of html we using
    template:'<app-server></app-server>',//sets up the app-server component
    styleUrls:['./server.component.css']
})
export class ServerComponent{

}

//we add @component to just say its not normally a class but something special
//@component will store the metadata that will tell the angular what will be done in background