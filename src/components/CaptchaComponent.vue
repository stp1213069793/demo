<template>
    <div>
        <img :src="captchaSrc" alt="" @click="getCaptcha">
    </div>
</template>
<script>
import { getCapchaApi } from '@/api/api';
export default {
    data(){
        return{
            captchaSrc:''
        }
    },
    created(){
        this.getCaptcha();
    },
    methods:{
        getCaptcha(){
            this.captchaSrc=getCapchaApi();
        }
    }
}
</script>