import { Component, OnInit, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-spinner-component',
  templateUrl: './spinner-component.component.html',
  styleUrls: ['./spinner-component.component.scss'],
})
export class SpinnerComponentComponent implements OnInit {

  @Input() visibility = true;

  color: ThemePalette = 'accent';

  constructor() { }

  ngOnInit(): void {
  }

}
