
type Message = {
    id: number,
    text: string
}

type Users = {
    id:number,
    firstName:string,
    lastName:string,
    avatar:string,
    messages:Message[]
}

export class UserStore {
    users:Users = {
        id: 1,
        firstName: 'Igor',
        lastName: 'Kozyriev',
        avatar: 'photo5454370709871634986.jpg',
        messages: []
    }

    addMessage(message:string):void {
        this.users.messages.add({id: this.users.messages.length,text: message});
    }
    editMessage(message:string, indexMessage:number):void {
        this.users.messages[indexMessage].text = message;
    }
    deleteMessage(indexMessage:number):void {
        this.users.messages.splice(indexMessage, 1);
    }
}