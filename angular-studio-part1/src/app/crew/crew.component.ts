import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: string[] = ["Jessica Watkins", "Raja Chari", "Jasmin Moghbeli"];

  scramble() {
    return Math.floor(Math.random() * 3)
  }

  constructor() { }

  ngOnInit(): void {
  }

}


