<template>
    <div class="dropdown-message">
        <ul>
            <li v-for="(item, i) in dropdownList" 
                :key="i"
                @click="$emit('onChange', item)">
                {{item}}
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

@Component
export default class Dropdown extends Vue {
    @Prop() 
    private dropdownList!:[];

    // @Emit('onChange')
    // onChange(item:string){
    //     return item
    // }
}
</script>