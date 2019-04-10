<template>
    <div class="modal">
        <div class="bio">
            <img class="close" src="closeGrey.svg">
            <div class="left">
                <img class="profileimage" v-if="g.profile_image" :src="apiurl + g.profile_image.path" width="200px">
                <img class="profileimage" v-else src="https://dummyimage.com/200x200/000/fff">
                <div class="">
                    <a :href="helper.linkify(g.portfolio)" target="_blank">{{helper.unlinkify(g.portfolio)}}</a>
                    <!-- <a :href="helper.linkify(g.portfolio)">{{g.portfolio}}</a> -->
                </div>
                <div class="">
                    <a :href="'mailto:'+g.email">{{g.email}}</a>
                </div>
                <div class="social">
                    <a v-if="g.twitter" :href="'http://twitter.com/'+g.twitter" target="_blank">
                        <img src="twitter.png">
                    </a>
                    <a v-if="g.linkedin" :href="helper.linkify(g.linkedin)" target="_blank">
                        <img src="linkedin.png">
                    </a>
                    <a v-if="g.instagram" :href="'http://instagram.com/'+g.instagram" target="_blank">
                        <img src="instagram.png">
                    </a>
                    <a v-if="g.behance" :href="helper.linkify(g.behance)" target="_blank">
                        <img src="behance.png">
                    </a>
                    <a v-if="g.dribbble" :href="helper.linkify(g.dribbble)" target="_blank">
                        <img src="dribbble.png">
                    </a>
                    <a v-if="g.github" :href="helper.linkify(g.github)" target="_blank">
                        <img src="github.png">
                    </a>
                    <a v-if="g.medium" :href="helper.linkify(g.medium)" target="_blank">
                        <img src="medium.png">
                    </a>
                    <a v-if="g.other_social" :href="helper.linkify(g.other_social)" target="_blank">
                        <img src="other_social.png">
                    </a>
                </div>
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
    </div>
</template>

<script>

    import { helper } from '~/plugins/helper.js';

    export default{
        props: ['g'],
        data(){
            return{
                helper: helper,
            }
        },
        computed: {
            apiurl(){
                return this.$store.getters.apiurl;
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '~/assets/sass/global.scss';
    @import '~/assets/sass/color.scss';
    @import '~/assets/sass/breakpoints.scss';
    @import '~/assets/sass/typography.scss';
    @import '~/assets/sass/components/bio.scss';
</style>
