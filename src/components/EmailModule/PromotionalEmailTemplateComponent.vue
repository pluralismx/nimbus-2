<template>
<body style="margin:0px;background-color:#f7f9fc;font-family:Arial, Helvetica, sans-serif;">
    <center class="wrapper">
    <div :class="['webkit', {'wk-sm': sizeUpdated === 'mobile'}]" style="width:600px;padding-bottom:60px;">
        <!-- Header -->
        <table :class="{'wk-sm': sizeUpdated === 'mobile'}" role="header" style="border-spacing:0;font-size:18px;width: 100%;" align="center" cellspacing="0">
        <tr>
            <td style="border-spacing:0;background-color:blue;text-align:center;padding:16px;">
            <img src="https://crm.pluralis.com.mx/uploads/images/${this.logo}" alt="Logo" width="180px">
            </td>
        </tr>
        </table>
        <!-- Banner -->
        <table :class="{'wk-sm': sizeUpdated === 'mobile'}" role="banner" style="border-spacing:0;font-size:18px;width: 100%;">
        <tr>
            <td style="border-spacing:0;padding:0px">
            <img src="https://crm.pluralis.com.mx/uploads/images/${this.banner}" alt="Banner" width="100%"/>
            </td>
        </tr>
        </table>
        <!-- Offers -->
        <table :class="{'wk-sm': sizeUpdated === 'mobile'}" role="offers" style="border-spacing:0;font-size:18px;width: 100%; background-color: #FFFFFF;" cellspacing="0">
        <tr>
            <td align="center" style="border-spacing:0;padding-top: 32px; padding-bottom: 16px; width: 50%;">
            <img src="https://crm.pluralis.com.mx/uploads/images/${this.features}" alt="illustration" width="70%"/>
            <h3>Caracteristicas</h3>
            <ul style="list-style: none; padding: 0; line-height: 1.5;">
                <li>${this.feature_a}</li>
                <li>${this.feature_b}</li>
                <li>${this.feature_c}</li>
            </ul>
            </td>
            <td align="center" style="border-spacing:0;padding-top: 32px; padding-bottom: 16px; width: 50%;">
            <img src="https://crm.pluralis.com.mx/uploads/images/${this.benefits}" alt="illustration" width="70%"/>
            <h3>Beneficios</h3>
            <ul style="list-style: none; padding: 0; line-height: 1.5;">
                <li>${this.benefit_a}</li>
                <li>${this.benefit_b}</li>
                <li>${this.benefit_c}</li>
            </ul>
            </td>
        </tr>
        </table>
        <!-- Social -->
        <table :class="{'wk-sm': sizeUpdated === 'mobile'}" width="100%" style="border-spacing:0;font-size:18px;background-color: blue;" cellspacing="0">
        <tr>
            <td align="center" style="border-spacing:0;padding: 16px;">
            <p style="color: #ffffff;">Conectese con nosotros</p>
            <a href="${this.facebook_link}"><img src="https://crm.pluralis.com.mx/assets/images/white-facebook.png" alt="facebook" width="30" style="margin-left: 4px; margin-right: 4px;"></a>
            <a href="${this.instagram_link}"><img src="https://crm.pluralis.com.mx/assets/images/white-instagram.png" alt="instagram" width="30" style="margin-left: 4px; margin-right: 4px;"></a>
            <a href="${this.youtube_link}"><img src="https://crm.pluralis.com.mx/assets/images/white-youtube.png" alt="youtube" width="30" style="margin-left: 4px; margin-right: 4px;"></a>
            </td>
        </tr>
        </table>
        <!-- Footer -->
        <table :class="{'wk-sm': sizeUpdated === 'mobile'}" width="100%" style="border-spacing:0;font-size:18px;background-color: #efefef;" cellspacing="0">
        <tr>
            <td align="center" style="border-spacing:0;padding: 16px;">
            <img src="https://crm.pluralis.com.mx/uploads/images/${this.footer}" alt="Logo" width="140px">
            <p>${this.slogan}</p>
            <p>${this.address}</p>
            <p><a href="mailto:${this.email}">${this.email}</a></p>
            <p><a href="tel:${this.phone}">Call: ${this.phone}</a></p>
            </td>
        </tr>
        </table>
        <!-- Tab -->
        <table :class="{'wk-sm': sizeUpdated === 'mobile'}" width="100%" cellspacing="0" style="border-spacing:0;font-size:18px;">
        <tr>
            <td style="border-spacing:0;height: 24px; background-color: blue">
            </td>
        </tr>
        </table>
    </div>
    </center>
</body>
</template>
<script>
    export default {
        name: 'PromotionalEmailTemplateComponent',
        props: {
            content: {
                type: Object,
                required: false
            },
            media: {
                type: String,
                required: true
            }
        },
        computed: {
            sizeUpdated() {
                return this.media;
            }
        }
    }
</script>
<style scoped>

        .wk-sm {
            width: 100% !important;
            max-width: 600px !important;
            font-size: 12px !important;
        }

</style>