
export class MessageStore {
    messages = []

    ddMessage(message:string):void {
        this.messages.add({id: this.users.messages.length,text: message});
    }
    editMessage(message:string, indexMessage:number):void {
        this.messages[indexMessage].text = message;
    }
    deleteMessage(indexMessage:number):void {
        this.messages.splice(indexMessage, 1);
    }
}