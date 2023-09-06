import { Component, OnInit } from '@angular/core';

interface Students {
    id: Number,
    firstName: String,
    lastName: String,
    marks: Number
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    students!: Students[];
    showImage: boolean = true;

    constructor() { }

    ngOnInit(): void {
        this.students = this.getStudents();
    }

    getStudents(): Students[] {
        return [
            {
                id: 1,
                firstName: 'Deep',
                lastName: 'Patel',
                marks: 100
            },
            {
                id: 2,
                firstName: 'Chintan',
                lastName: 'Patel',
                marks: 90
            },
            {
                id: 3,
                firstName: 'Vraj',
                lastName: 'Joshi',
                marks: 100
            }
        ];
    }

}
