import { Component, HostListener, OnInit, Input, Output, } from '@angular/core';

@Component({
    selector: 'app-chat-window',
    templateUrl: './chatwindow.component.html',
    styleUrls : ['./chatwindow.component.css']
})
export class ChatWindowComponent implements OnInit {

    x: number;
    y: number;
    px: number;
    py: number;
    width: number;
    height: number;
    minArea: number;
    draggingCorner: boolean;
    draggingWindow: boolean;
    resizer: Function;
    
    @Input() onChatCallback: Function;
    @Input() preChat;
    @Input() opts:Object;
    placeHolder =  '';

    initialize(opts){
        this.placeHolder = opts.placeHolder || 'Type some thing';
    }
    onChatBox(chatBox){
        console.log(' chat onchat');
        if(chatBox.value.length === 0){
            return
        }
        this.onChatCallback(chatBox.value)
        chatBox.value = '';
    }


    constructor() {
        this.x = 300;
        this.y = 100;
        this.px = 0;
        this.py = 0;
        this.width = 600;
        this.height = 300;
        this.draggingCorner = false;
        this.draggingWindow = false;
        this.minArea = 20000
    }

    ngOnInit() {
        console.log('app-chat-window')
        console.log(this.opts);
        this.initialize(this.opts)
    }

    area() {
        return this.width * this.height;
    }
    onchatBoxClick(event: MouseEvent){
        event.stopPropagation();
    }

    onWindowPress(event: MouseEvent) {
        this.draggingWindow = true;
        this.px = event.clientX;
        this.py = event.clientY;
    }

    onWindowDrag(event: MouseEvent) {
        if (!this.draggingWindow) {
            return;
        }
        let offsetX = event.clientX - this.px;
        let offsetY = event.clientY - this.py;

        this.x += offsetX;
        this.y += offsetY;
        this.px = event.clientX;
        this.py = event.clientY;
    }

    topLeftResize(offsetX: number, offsetY: number) {
        this.x += offsetX;
        this.y += offsetY;
        this.width -= offsetX;
        this.height -= offsetY;
    }

    topRightResize(offsetX: number, offsetY: number) {
        this.y += offsetY;
        this.width += offsetX;
        this.height -= offsetY;
    }

    bottomLeftResize(offsetX: number, offsetY: number) {
        this.x += offsetX;
        this.width -= offsetX;
        this.height += offsetY;
    }

    bottomRightResize(offsetX: number, offsetY: number) {
        this.width += offsetX;
        this.height += offsetY;
    }

    onCornerClick(event: MouseEvent, resizer?: Function) {
        this.draggingCorner = true;
        this.px = event.clientX;
        this.py = event.clientY;
        this.resizer = resizer;
        event.preventDefault();
        event.stopPropagation();
    }

    @HostListener('document:mousemove', ['$event'])
    onCornerMove(event: MouseEvent) {
        if (!this.draggingCorner) {
            return;
        }
        let offsetX = event.clientX - this.px;
        let offsetY = event.clientY - this.py;

        let lastX = this.x;
        let lastY = this.y;
        let pWidth = this.width;
        let pHeight = this.height;

        this.resizer(offsetX, offsetY);
        if (this.area() < this.minArea) {
            this.x = lastX;
            this.y = lastY;
            this.width = pWidth;
            this.height = pHeight;
        }
        this.px = event.clientX;
        this.py = event.clientY;
    }

    @HostListener('document:mouseup', ['$event'])
    onCornerRelease(event: MouseEvent) {
    console.log(11111111111111)
        this.draggingWindow = false;
        this.draggingCorner = false;
    }
}