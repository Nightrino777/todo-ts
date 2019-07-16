<template>
    <button type="button" 
            v-on="listeners"><slot></slot></button>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ButtonIcon extends Vue {
    mounted () {
        console.log(this.$listeners);
    }

    get listeners() {
      return {
        ...this.$listeners
      };
    }
}
</script>
