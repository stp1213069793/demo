<template>
    <div class="title">
         <span class="icon" :class="icon"></span>
        <slot></slot>
        <span class="fs-14">

        <slot name="desc"></slot>
        </span>
    </div>
</template>
<script>
export default {
    props:['icon']
}
</script>
<style scoped>
    .title{
        padding: 12px 15px;
    }
</style>