<template>
    <div class="body">
        <div class="main">
            <div class="header">
                <img src="sheridan-fad-logo.png" class="fadLogo"/>
                <a href="https://www.instagram.com/ixdshowcase2019/" target=_blank>
                    <img src="insta-orange.png" class="social"/>
                </a>
                <a href="https://ixdshowcase.com/" target=_blank>
                    <img src="invite-link.png" class="social"/>
                </a>
            </div>
            <a href="https://www.eventbrite.ca/e/sheridan-college-ixd-showcase-2019-tickets-59598414462">
                <img src="invite-header.png" class="inviteHeader">
            </a>
            <a href="https://www.eventbrite.ca/e/sheridan-college-ixd-showcase-2019-tickets-59598414462">
                <img src="youreinvited.png" class="youreinvited">
                <img src="youreinvited-mobile.png" class="youreinvited-mobile">
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
            <div class="details">
              <a href="https://www.eventbrite.ca/e/sheridan-college-ixd-showcase-2019-tickets-59598414462" target=_blank>
                  <img src="event-when.png"/>
              </a>
              <a href="https://goo.gl/maps/Ja5sFQgRGbS2" target=_blank>
                  <img src="event-where.png"/>
              </a>
            </div>
            <a href="https://www.eventbrite.ca/e/sheridan-college-ixd-showcase-2019-tickets-59598414462" target=_blank>
                <img src="rsvpnow.png" width="100%" class="rsvpnow"/>
                <img src="rsvpnow-mobile.png" width="100%" class="rsvpnow-mobile"/>
            </a>
        </div>
        <div class="footer">
            <p>IXD Showcase 2019 is sponsored by</p>
            <div class="logos">
                <a href="https://www.freshbooks.com/" target=_blank>
                    <img src="freshbooks-white.png">
                </a>
                <a href="http://www.ariagency.ca/" target=_blank>
                    <img src="ariagency-white.png">
                </a>
                <a href="https://tigroup.ca/" target=_blank>
                    <img src="tigroup-white.png">
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
  * {
    box-sizing: border-box;
    overflow-x: hidden;
  }
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
        padding: 0px 15px 50px 15px;
    }
    .header{
      position:relative;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 25px 0px 40px 0px;
      border-top: 5px solid #003767;
    }
    .footer{
        background: #003767;
        color: white;
        text-align: center;
        padding: 25px 0 30px 0;
    }
    .logos{
        padding-top: 10px;
        width: 360px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logos img{
      width: 120px;
    }
    .fadLogo{
      width: 90%;
      max-width:285px;
      margin-right: auto;
    }
    .social{
      width: 21px;
      margin: 0 4px;
    }
    .inviteHeader{
      margin-bottom: 55px;
      width:calc(100%-30px);
    }
    .youreinvited{
      margin-bottom: 25px;
      display:none;
      width:calc(100%-30px);
    }
    .youreinvited-mobile{
      width:calc(100%-30px);
    }
    .rsvpnow{
      display:none;
      width:calc(100%-30px);
    }
    .rsvpnow-mobile{
      width:calc(100%-30px);
    }
    .main p{
      line-height: 24px;
      margin-bottom: 20px;
    }
    .details img{
      width:100%;
    }
    .footer p{
      font-style: italic;
      font-weight: 700;
      font-size: 12px;
    }
    @media(max-width:600px){
      .logos{
        flex-direction: column;
      }
      .social{
        display:none;
      }
      .fadLogo{
        width:100%;
      }
    }
    @media(min-width:601px){
      .youreinvited-mobile{
        display:none;
      }
      .rsvpnow-mobile{
        display:none;
      }
      .youreinvited{
        display:block;
      }
      .rsvpnow{
        display:block;
      }
      .details img{
        width: 50%;
      }
    }
</style>
