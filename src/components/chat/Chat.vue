<template>
    <div id="chat">
        <chat-block @onMessage="onMessage" />
        <writing-block :indexMessage="indexMessage" @save="resetMessage" />
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ChatBlock from '@/components/chat/components/ChatBlock.vue';
import WritingBlock from '@/components/chat/components/WritingBlock.vue';

@Component({
    components:{
        ChatBlock,
        WritingBlock
    }
})
export default class Chat extends Vue {
    private indexMessage:number = -1;

    onMessage(indexMessage:number) {
        console.log('onMessage', indexMessage);
        this.indexMessage = indexMessage;
    }
    resetMessage() {
        this.indexMessage = -1;
    }
}
</script>