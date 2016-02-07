import {Component, View} from 'angular2/core';

export class Activity {
    constructor(private type: string, public name?: string, public distance?: number, public completed?: boolean) {
        this.name = name;
        this.distance = distance;  
        this.completed = completed;  
    }
}