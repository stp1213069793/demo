<template>
    <div>
        <h1 class="">
            <span class="icon" :class="icon"></span>
            <slot></slot>
        </h1>
    </div>
</template>
<script>
export default {
    props:["icon"]
}
</script>
<style scoped lang="scss">

</style>