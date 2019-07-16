<template>
    <div class="action-buttons">
        <button type="button" @click="toAttach()" >
            <paperclip-icon class="custom-class"></paperclip-icon>
        </button>
        <input type="file" ref="file" @change="getFileUpload()" style="display:none">
        <button type="button" @click="goRecording()">
            <mic-icon class="custom-class"></mic-icon>
        </button>
        <!-- <audio-recorder
            upload-url="YOUR_API_URL"
            :attempts="3"
            :time="2"
            :headers="headers"
            :before-recording="callback"
            :pause-recording="callback"
            :after-recording="callback"
            :select-record="callback"
            :before-upload="callback"
            :successful-upload="callback"
            :failed-upload="callback"
            class="audio-block" /> -->
    </div>
</template>
<script lang="ts">
// import ButtonIcon from '../lib/buttons/ButtonIcon.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { PaperclipIcon, MicIcon } from 'vue-feather-icons';
// import {AudioRecorder} from 'vue-audio-recorder';

@Component({
    components: {
        // ButtonIcon,
        PaperclipIcon,
        MicIcon,
        // AudioRecorder
    }
})
export default class ActionButtons extends Vue {
    toAttach() {
        this.$refs.file.value = "";
        this.$refs.file.click();
    }
    getFileUpload() {
        let file = this.$refs.file.files[0];
        console.log('FILE',file);
    }
    goRecording() {
        console.log('goRecording');
    }
    // callback (data:any) {
    //     console.debug(data);
    // }
}
</script>