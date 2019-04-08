<template>
    <div>
        <div class="left">
            <img :src="g.profile_image"
        </div>
        <div class="right">
            <div class="s2 display italic">
                {{g.first_name}} {{g.last_name}}
            </div>
            <div class="s4 display">
                Bio
            </div>
            <div>
                {{g.bio_long}}
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props: ['g'],


    }
</script>

<style lang="scss">
    @import '~/assets/sass/components/bio.scss';
</style>