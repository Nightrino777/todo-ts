<template>
    <div class="wrapper-chat">
        <ul class="my-message">
            <li v-for="(message, i) in userStore.users.messages" 
                :key="i"
                class="message"
                @click="onMessage(i)">
                <div class="avatar">
                    <img :src="userStore.users.avatar">
                </div>
                <div class="message-body">
                    <p class="name">{{`${userStore.users.firstName} ${userStore.users.lastName}`}}</p>
                    <p>
                        {{message.text}}
                    </p>
                </div>
                <dropdown v-if="dropdown === i" 
                          :dropdownList="dropdownList" 
                          @onChange="onChange" />
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Inject, Vue } from 'vue-property-decorator';
import { userStore } from '@/models/UserStore';

import Dropdown from '@/components/lib/dropdown/Dropdown.vue';

@Component({
    components: {
        Dropdown
    }
})
export default class ChatBlock extends Vue {
    @Inject('userStore') 
    private userStore: userStore;

    private dropdown:number = -1;
    private dropdownList:string[] = ['Edit', 'Delete'];
    
    mounted() {
        console.log('userStore', this.userStore.users);
    }

    onMessage(i:number):void {
        this.dropdown === i ? this.dropdown = -1 : this.dropdown = i;
    }
    onChange(item:string):void {
        item === 'Edit' ? this.$emit('onMessage', this.dropdown) : this.userStore.deleteMessage(this.dropdown);
    }

}
</script>