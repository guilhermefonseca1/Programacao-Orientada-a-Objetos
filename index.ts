class Email {
    private _from: string;
    private _to: string;
    private _subject: string;
    private _message: string;

    constructor(
    from: string,
    to: string,
    subject: string,
    message: string,
    ) {
        this._from = from;
        this._to = to;
        this._subject = subject;
        this._message = message;
    }

    get from() { return this._from;}
    get to() { return this._to;}
    get subject() { return this._subject;}
    get message() { return this._message;}
}