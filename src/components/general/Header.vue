<template>
    <div id="header">
        <div class="wrapper">
            <span>Flipchat</span>
            <!-- <message-circle-icon class="custom-class"></message-circle-icon> -->
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import { MessageCircleIcon } from 'vue-feather-icons';

@Component({
  components: {
    // MessageCircleIcon
  }
})
export default class Header extends Vue {
  @Prop() private msg!: string;
}
</script>