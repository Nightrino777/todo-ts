<template>
    <div id="leftNavbar">
        <ul>
            <li>
                <div class="avatar">
                    <img src="../../../public/author_profile.png">
                </div>
                <div class="friend-info">
                    <p class="nickname">Nickname</p>
                    <p class="last-message">Last message text tex text text text text text</p>
                </div>
            </li>
            <li class="active">
                <div class="avatar">
                    <img src="../../../public/photo1092799174169175984.jpg">
                </div>
                <div class="friend-info">
                    <p class="nickname">Nickname2</p>
                    <p class="last-message">Last message</p>
                </div>
            </li>
            <li>
                <div class="avatar">
                    <img src="../../../public/IMG_0026.jpg">
                </div>
                <div class="friend-info">
                    <p class="nickname">Nickname3</p>
                    <p class="last-message">Last message</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Inject, Vue } from 'vue-property-decorator';

@Component
export default class LeftNavbar extends Vue{
    
}
</script>