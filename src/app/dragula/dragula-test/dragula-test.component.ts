import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-dragula-test',
  templateUrl: './dragula-test.component.html',
  styleUrls: ['./dragula-test.component.css', './dragula.min.css']
})
export class DragulaTestComponent implements OnInit {
  constructor(private dragulaService: DragulaService) {
    dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      this.onOut(value.slice(1));
    });

    dragulaService.setOptions('third-bag', {
      removeOnSpill: true
    });

    dragulaService.setOptions('fourth-bag', {
      revertOnSpill: true
    });

    dragulaService.setOptions('fifth-bag', {
      copy: true
    });

    dragulaService.setOptions('sixth-bag', {
      moves: function (el, container, handle) {
        return handle.className === 'handle';
      }
    });

    dragulaService.setOptions('another-bag', {
      copy: true
    });
    dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value.slice(1));
    });
    dragulaService.removeModel.subscribe((value) => {
      this.onRemoveModel(value.slice(1));
    });
  }
  ngOnInit() {
  }
  private hasClass(el: any, name: string) {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string) {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string) {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }

  private onDrag(args) {
    console.log('onDrag')
    let [e, el] = args;
    this.removeClass(e, 'ex-moved');
  }

  private onDrop(args) {
    console.log('onDrop')
    let [e, el] = args;
    this.addClass(e, 'ex-moved');
  }

  private onOver(args) {
    console.log('onOver')
    let [e, el, container] = args;
    this.addClass(el, 'ex-over');
  }

  private onOut(args) {
    console.log('onOut')
    let [e, el, container] = args;
    this.removeClass(el, 'ex-over');
  }

  public clicked: any = {
    'one': false,
    'two': false,
    'three': false,
    'four': false,
    'five': false,
    'six': false,
    'seven': false
  };

  public onclick(key): void {
    this.clicked[key] = true;
    setTimeout(() => {
      this.clicked[key] = false;
    }, 2000);
  }


  public many: Array<string> = ['The', 'possibilities', 'are', 'endless!'];
  public many2: Array<string> = ['Explore', 'them'];
  private onDropModel(args) {
    console.log('onDropModel',args)
    let [el, target, source] = args;
    // do something else
  }

  private onRemoveModel(args) {
    console.log('onRemoveModel',args)
    let [el, source] = args;
    // do something else
  }

}
