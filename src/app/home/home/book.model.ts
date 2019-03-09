export class BookModel {
    subjectLocal: string;

    constructor(config: any) {
        Object.assign(this, config);
    }
    set subject(value: Array<string>) {
        this.subjectLocal = [].concat(value).join(', ');
    }

    get subject() {
        return this.subjectLocal as any;
    }
}
