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

    get content() {
        return `
        From ${this.from} to ${this.to}
        ${this.message}`;
    }
}

class MailList {
    constructor(private mailList: Email[]) {

    }
    get all(): Email[] { return [...this.mailList]; }

    addEmail(newMail: Email): void { this.mailList.push(newMail); }

    removeEmail(mailToRemove: Email): void {
        this.mailList = this.mailList.filter((mail) =>
        (mail.from !== mailToRemove.from) &&
        (mail.to !== mailToRemove.to) &&
        (mail.subject !== mailToRemove.subject) &&
        (mail.message !== mailToRemove.message));
    }

    getByEmailFrom(mailAddress: string): Email[] {
        return this.mailList.filter((mail) => mail.from === mailAddress);
    }
 
    getByEmailTo(mailAddress: string): Email[] {
        return this.mailList.filter((mail) => mail.to === mailAddress);
}

getBySubject(searchString: string): Email[] {
    return this.mailList.filter((mail) => mail.subject.indexOf(searchString) !== -1);
};
}

const email1 = new Email(
    //FROM
    'me@person.com',
    //TO
    'guil@persom.com',
    //SUJECT
    'Food',
    //MESSAGE
    'Hi, did you know food today ?'
)

const email2 = new Email(
    //FROM
    'CACA@person.com',
    //TO
    'MAMA@persom.com',
    //SUJECT
    'Dog',
    //MESSAGE
    'Hi, did you know dog today ?'
)

const email3 = new Email(
    //FROM
    'random@person.com',
    //TO
    'débora@persom.com',
    //SUJECT
    'cat',
    //MESSAGE
    'Hi, did you know cat today ?'
)

const personalMailList = new MailList([email1, email2]);
const professionalMailList = new MailList([email3]);

console.log('------ personalMailList.getByEmailFrom(\'me@person.com\'):');
professionalMailList.getByEmailFrom('me@person.com').forEach((mail) => console.log(mail.content));
