<template>
    <div class="input-block">
        <input :type="text" 
               :placeholder="placeholder"
               :value="value">
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class InputText extends Vue {
    @Prop() private placeholder!: string;
    @Prop() private text!: string;
    @Prop() private value!: string;
    // @Prop(String) readonly placeholder: string | undefined;
}
</script>