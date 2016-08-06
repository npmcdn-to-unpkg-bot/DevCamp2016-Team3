import { Component, Input, OnInit } from '@angular/core';
import { Checkpoint } from './models/checkpoint';
import { CheckpointListItemComponent } from './checkpoint-list-item.component';

@Component({
  selector: 'checkpoint-list',
  templateUrl: 'app/checkpoint-list.component.html',
  directives: [CheckpointListItemComponent]
})
export class CheckpointListComponent implements OnInit {
  @Input() checkpoints: Array<Checkpoint>;

  constructor() { }

  ngOnInit() { }
}
