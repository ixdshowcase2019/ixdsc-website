<template>
    <div>
        <section>
            Server: NA - North America
            <form>
                <input placeholder="Search for a player...">
            </form>
        </section>
        <section>
            <h1>
                hyperTT.cloud
            </h1>
            <p>
                A site for tracking all your hyperTT stats.
            </p>
            <p>
                Here you can find:
            </p>
            <ul>
                <li>
                    All your stats
                </li>
                <li>
                    Your rank within your geographical location*
                </li>
                <li>
                    Your progress so you can see how you're doing
                </li>
                <li>
                    Friends leaderboard (if friends list is public)
                </li>
            </ul>
        </section>
        <section>
            <h2>Recent News</h2>
            <h3>Beta 1</h3>
            <p>
                1 March 2019 - posted by cevian
            </p>
            <p>
                Welcome to hyperTT, beta testers! Thanks for being here to test out the hyperTT systems. There's a very limited selection of routes right now, but you're encouraged to run it as much as possible, because we need the data to keep improving the game, and more importantly, because the quest for the top of the leaderboards has already begun!
            </p>
        </section>
        <leaderboard></leaderboard>    
    </div>
</template>

<script>
    
    import { helper } from '~/plugins/helper.js';
    
    import leaderboard from '~/components/leaderboard.vue';
    
    export default {
//        async fetch ({store, params}) {
//            await store.dispatch('cpCollection', 'events')
//        },
        components: {
            leaderboard
        },
        head () {
            console.log(this.$route.path);
            return {
                title: "hyperTT",
                meta: [
                    { hid: 'og:title', property: 'og:title', content: "hyperTT" },
                    { hid: 'og:type', property: 'og:type', content: 'website' },
//                    { hid: 'og:url', property: 'og:url', content: this.$store.state.siteUrl + "" + this.$route.path},
                    { hid: 'og:description', property: 'og:description', content: 'ARG Parkour Racing' },
                    { hid: 'description', name: 'description', content: 'ARG Parkour Racing' }
                ],
            }
        },
        computed: {
            
        }
    }
</script>

<style lang="scss">

</style>
