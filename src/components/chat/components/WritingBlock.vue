<template>
    <div class="writing-block">
        <textarea-input :value="message.text"
                        :placeholder="'Write a message...'"
                        @input="input" />
        <action-buttons />
        <div class="btnSend" v-if="edit === -1">
            <button type="button" 
                @click="send()">Send</button>
        </div>
        <div class="btnSend" v-else>
            <button type="button" 
                @click="save()">Save</button>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Inject, Watch, Vue } from 'vue-property-decorator';
import TextareaInput from '@/components/lib/input/TextareaInput.vue';
import ActionButtons from './ActionButtons.vue';

import {userStore} from '@/models/UserStore';


type Message = {
    text: string
}

@Component({
    components:{
        TextareaInput,
        ActionButtons
    }
})
export default class WritingBlock extends Vue {
    @Prop()
    private indexMessage!:number;

    @Inject('userStore') 
    userStore: UserStore;

    message:Message = {
        text: ''
    };
    edit:number = -1;

    @Watch('indexMessage')
    onMessageChanged(value:number){
        if(value >= 0) {
            this.message.text = this.userStore.users.messages[value].text;
            this.edit = value;
        }
    }

    input(value:string) {
        this.message.text = value;
    }
    send() {
        this.userStore.addMessage(this.message.text);
        this.message.text = '';
    }

    save() {
        if(this.message.text === '') {
            this.edit = -1;
        } else {
            this.userStore.editMessage(this.message.text, this.indexMessage);
            this.message.text = '';
            this.edit = -1;
            this.$emit('save');
        }
    }
}
</script>
