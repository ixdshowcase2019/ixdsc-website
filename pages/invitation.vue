<template>
    <div class="body">
        <div class="main">
            <a href="https://www.eventbrite.ca/e/sheridan-college-ixd-showcase-2019-tickets-59598414462">
                <img src="piece-of-shit.png">
            </a>
            <p>
                To mix and mingle with Sheridan's latest cohort of interaction designers.
            </p>
            <p>
                Whether you're looking to make new connections, build your team, or find fresh takes on trends, our 60+ newly-minted creative professionals will be ready to show you <nuxt-link to="/">their work</nuxt-link>.
            </p>
            <p>
                Stop by and strike up some conversations! <a href="https://www.eventbrite.ca/e/sheridan-college-ixd-showcase-2019-tickets-59598414462">RSVP today</a>.
            </p>
            <a href="https://www.eventbrite.ca/e/sheridan-college-ixd-showcase-2019-tickets-59598414462">
                <img src="Capture.PNG">
            </a>
        </div>
        <div class="footer">
            IXD Showcase 2019 is sponsored by
            <div class="logos">
                <a href="https://www.freshbooks.com/" target=_blank>
                    <img src="freshbooks.svg" width="100px">
                </a>
                <a href="http://www.ariagency.ca/" target=_blank>
                    <img src="ariagency.svg" width="100px">
                </a>
                <a href="https://tigroup.ca/" target=_blank>
                    <img src="t-igroup.svg" width="100px">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        head:{
            title: "You're Invited to the Sheridan College IXD Showcase 2019"
        }
    }
</script>

<style>
    html,body{
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: Georgia, Times, "Times New Roman", serif;
    }
    a{
        color: #3FA9F6;
        font-style: italic;
    }
    .main{
        margin: auto;
        max-width: 600px;
        width: 100%;
    }
    .footer{
        background: #003767;
        color: white;
        text-align: center;
        padding: 50px 0;
    }
    .logos{
        padding-top: 25px;
        width: 400px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .main img {
      width: 100%;
    }
</style>
