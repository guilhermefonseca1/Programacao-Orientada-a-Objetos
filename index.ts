class Email {
    private _from: string;
    private _to: string;
    private _subject: string | undefined;
    private _message: string;

    constructor(
    from: string,
    to: string,
    subject: string,
    message: string,
    ) {
        this._from = from;
        this._to = to;
        this.subject = subject;
        this._message = message;
    }

    set subject(newValue: string) {
        if (newValue.length <= 20)
        this._subject = newValue;
    }

    get from() { return this._from;}
    get to() { return this._to;}
    get subject() { return this._subject || ''; }
    get message() { return this._message;}
}