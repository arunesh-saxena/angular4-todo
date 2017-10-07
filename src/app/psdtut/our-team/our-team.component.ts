import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {
  team: Array<any> = [];
  constructor() { }

  ngOnInit() {

    this.initUser();
  }
  initUser = () => {
    for (let i = 0; i < 4; i++) {
      const info = {
        imageUrl: `/assets/imgs/psd/team${(i + 1)}.png`,
        name: `${'team employe' + i}`,
        description: `Lorem ipsum dolor sit amet , consectetur adipiscing elit. 
        Donec porttitor, justo quis scelerisque venenatis, ipsum dui ullamcorper arcu, ut fringilla ex velit eget tellus. Vestibulum`,
        link: 'javascript:void(0)'
      };
      this.team.push(info);
    }
  }

}
