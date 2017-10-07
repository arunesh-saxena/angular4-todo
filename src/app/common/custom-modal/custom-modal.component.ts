import {
    Component, Input, Output, EventEmitter, OnInit, OnDestroy, ViewChild, ElementRef,
    AfterViewInit, AfterContentInit, AfterViewChecked,
    AfterContentChecked, OnChanges, DoCheck
} from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LoaderService } from '../loader/loader.service';
import { Subscription } from 'rxjs/Subscription';

// import * as $ from 'jquery';
@Component({
    selector: 'app-custom-modal',
    templateUrl: './custom-modal.html'
})
export class CustomModelComponent implements OnInit,
    OnDestroy, AfterViewInit, AfterContentInit {
    @Output() customClick: EventEmitter<any> = new EventEmitter<any>();
    @Input() isHide: Boolean;
    @ViewChild('contentInfo') contentInfo: ElementRef;
    closeResult: string;
    private modalSubs: Subscription;
    netWorkInfo = {};

    hero = 'Magneta';
    constructor(private modalService: NgbModal,
        private loaderService: LoaderService) { }

    ngOnInit() {
        if (this.isHide) {
            this.modalSubs = this.loaderService.modalState
                .subscribe(data => {
                    this.netWorkInfo = data;
                    this.open(this.contentInfo);
                });
        }

    }
    ngOnDestroy() {
        if (this.isHide) {
            this.modalSubs.unsubscribe();
        }
    }
    ngAfterViewInit() {
    }

    ngAfterContentInit = () => {

    }
    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
            this.netWorkInfo = {};
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            this.netWorkInfo = {};
        });
    }
    onCustomClick() {
        debugger;
        this.customClick.emit({ msg: 'from model custom click' });
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `withdd: ${reason}`;
        }
    }
}