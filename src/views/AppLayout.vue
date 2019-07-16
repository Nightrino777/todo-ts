<template>
    <div id="appLayout">
        <Header :msg='msg'/>
        <chat-layout />
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Header from "@/components/general/Header.vue";
import ChatLayout from "./ChatLayout.vue"

@Component({
  components: {
    Header,
    ChatLayout
  }
})
export default class AppLayout extends Vue {
  msg = "hello!!!";
}
</script>