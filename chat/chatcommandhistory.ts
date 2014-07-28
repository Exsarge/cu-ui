/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */


class ChatCommandHistory {
    private historyEntries: Array<string>;
    private position: number;
    private lastEntry: string;

    constructor() {
        this.position = -1;
        this.historyEntries = [];
        this.lastEntry = "";
    }

    public add(value: string) {
        if (value) {
            this.historyEntries.unshift(value);
            this.position = -1;
            return true;
        }
        return false;
    }

    public hasNext(): boolean {
        return this.historyEntries.length && this.position >= 0;
    }

    public hasPrev(): boolean {
        return this.historyEntries.length && this.position < this.historyEntries.length - 1;
    }

    public next(): string {
        return --this.position == -1 ? this.lastEntry : this.historyEntries[this.position];
    }

    public prev(): string {
        return this.historyEntries[++this.position];
    }

    public setLastEntry(value: string): void {
        this.lastEntry = value;
    }

    public getLastEntry(): string {
        return this.lastEntry;
    }


}

