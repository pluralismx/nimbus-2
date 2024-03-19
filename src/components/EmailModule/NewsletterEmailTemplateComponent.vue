<template>
    <body style="margin:0px;background-color:#f7f9fc;font-family:Arial, Helvetica, sans-serif;">
        <center class="wrapper">
        <div class="webkit" style="width:600px;padding-bottom:60px;">
            <!-- Header -->
            <table role="header" style="border-spacing:0;font-size:18px;width: 100%;" align="center" cellspacing="0">
            <tr>
                <td :style="{ backgroundColor: hex, borderSpacing: 0, textAlign: 'center', padding: '16px' }">
                <img :src="logoSrc" alt="Logo" width="180px">
                </td>
            </tr>
            </table>
            <!-- Banner -->
            <table role="banner" :style="{borderSpacing:0, fontSize:'18px', width:'100%', align:'center',  cellSpacing:0}">
            <tr>
                <td :style="{borderSpacing:0, padding:'0px'}">
                <img :src="bannerSrc" alt="Banner" width="100%"/>
                </td>
            </tr>
            </table>
            <!-- Introduction -->
            <table :style="{fontSize:'18px'}">
            <tr>
                <td>
                <h1 style="padding: 16px; padding-bottom: 0px; text-align: center;">${this.title}</h1>
                <p style="padding: 16px; padding-top: 0px; line-height: 1.5;">${this.content}</p>
                </td>
            </tr>
            </table>
            <!-- Explanation 1-->
            <table role="offers" style="border-spacing:0;font-size:18px;width: 100%; background-color: #FFFFFF;" cellspacing="0">
            <tr>
                <td class="stacked" align="center" style="border-spacing:0;padding-top: 32px; padding-bottom: 16px; padding-left: 8px; padding-right: 8px;" width="50%" valign="top">
                <img :src="illustrationSrc" alt="illustration" width="100%"/>
                </td>
                <td class="stacked" align="center" style="border-spacing:0;padding-top: 32px; padding-bottom: 16px;" valign="top">
                <p style="padding: 16px; padding-top: 0px; line-height: 1.5;">${this.sidetext_a}</p>
                </td>
            </tr>
            </table>
            <!-- Explanation 2-->
            <table role="offers" style="border-spacing:0;font-size:18px;width: 100%; background-color: #FFFFFF;" cellspacing="0">
            <tr>
                <td class="stacked" align="center" style="border-spacing:0;padding-top: 32px; padding-bottom: 16px; padding-left: 8px; padding-right: 8px;" width="50%" valign="top">
                <img :src="illustrationSrc" alt="illustration" width="100%"/>
                </td>
                <td class="stacked" align="center" style="border-spacing:0;padding-top: 32px; padding-bottom: 16px;" valign="top">
                <p style="padding: 16px; padding-top: 0px; line-height: 1.5;">${this.sidetext_b}</p>
                </td>
            </tr>
            </table>
            <!-- Social -->
            <table width="100%" :style="{borderSpacing:0, fontSize:'18px', backgroundColor: hex, cellSpacing:0}">
            <tr>
                <td align="center" style="border-spacing:0;padding: 16px;">
                <p style="color: #ffffff;">Connect with us</p>
                <a href="${this.facebook_link}"><img :src="facebookSrc" alt="facebook" width="30" style="margin-left: 4px; margin-right: 4px;"></a>
                <a href="${this.instagram_link}"><img :src="instagramSrc" alt="instagram" width="30" style="margin-left: 4px; margin-right: 4px;"></a>
                <a href="${this.youtube_link}"><img :src="youtubeSrc" alt="youtube" width="30" style="margin-left: 4px; margin-right: 4px;"></a>
                </td>
            </tr>
            </table>
            <!-- Footer -->
            <table width="100%" style="border-spacing:0;font-size:18px;background-color: #efefef;" cellspacing="0">
            <tr>
                <td align="center" style="border-spacing:0;padding: 16px;">
                <img :src="logoSrc" alt="Logo" width="140px">
                <p>${this.slogan}</p>
                <p>${this.address}</p>
                <p><a href="mailto:${this.email}">${this.email}</a></p>
                <p><a href="tel:${this.phone}">Call: ${this.phone}</a></p>
                </td>
            </tr>
            </table>
            <!-- Tab -->
            <table width="100%" cellspacing="0" style="border-spacing:0;font-size:18px;">
            <tr>
                <td :style="{borderSpacing:0, height:'24px', backgroundColor:hex}">
                </td>
            </tr>
            </table>
        </div>
        </center>
    </body>
</template>
<script>
    export default {
        name: 'NewsletterEmailTemplateComponent',
        props: {
            theme: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                hex: '#037e99',
                logo: 'logo-template.png',
                banner: 'banner-template.png',
                illustration: 'illustration-template.png',
                facebook: 'white-facebook.png',
                instagram: 'white-instagram.png',
                youtube: 'white-youtube.png',
            }
        },
        computed: {
            themeUpdated(){
                return this.theme
            },
            logoSrc(){
                return `http://localhost:8080/uploads/user/${this.logo}`;
            },
            bannerSrc(){
                return `http://localhost:8080/uploads/user/${this.banner}`;
            },
            illustrationSrc(){
                return `http://localhost:8080/uploads/user/${this.illustration}`;
            },
            facebookSrc(){
                return `http://localhost:8080/uploads/user/${this.facebook}`;
            },
            instagramSrc(){
                return `http://localhost:8080/uploads/user/${this.instagram}`;
            },
            youtubeSrc(){
                return `http://localhost:8080/uploads/user/${this.youtube}`;
            },
        },
        watch: {
            themeUpdated: {
                handler(newVal){
                    this.hex = newVal;
                },
                immediate: true
            }
        }
    }
</script>
<style>

</style>