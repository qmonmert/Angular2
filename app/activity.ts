import {Component, View} from 'angular2/core';

export class Activity {
    constructor(private type?: string, public name?: string, public distance?: number) {
        if (type !== undefined) {
            this.type = type;
        } else {
            this.type = 'Run';
        }
        this.name = name;
        this.distance = distance;
    }
}