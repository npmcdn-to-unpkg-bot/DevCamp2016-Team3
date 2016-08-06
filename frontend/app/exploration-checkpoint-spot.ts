import { Component, Input, OnInit } from '@angular/core';
import { Exploration } from './models/exploration';

@Component({
    selector: 'exploration-checkpoint-spot',
    templateUrl: 'app/exploration-checkpoint-spot.component.html'
})
export class ExplorationCheckpointSpotComponent implements OnInit {
    
    @Input() exploration: Exploration;
    @Input() checkpointSlug: string;
    private isCompleted: boolean;

    constructor() { }

    ngOnInit() { 
        this.isCompleted = this.exploration.completed.includes(this.checkpointSlug);
    }

}