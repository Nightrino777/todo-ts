<template>
    <div id="chatLayout">
        <left-navbar />
        <chat />
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LeftNavbar from '@/components/navbar/LeftNavbar.vue';
import Chat from '@/components/chat/Chat.vue';

@Component({
    components: {
        LeftNavbar,
        Chat
    }
})
export default class ChatLayout extends Vue {
    msg = "hello!!!";
    text = "new text";
}
</script>