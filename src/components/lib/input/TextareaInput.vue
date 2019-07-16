<template>
    <div class="input-block">
        <textarea :value="value" 
                  :placeholder="placeholder"
                  @input="$emit('input', $event.target.value)"></textarea>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TextareaInput extends Vue {
    @Prop() private placeholder!: string;
    @Prop() private text!: string;
    @Prop() private value!: string;
}
</script>