<template>
    <section class="section-email-preview">
        <div :class="['preview-screen pc', { 'pc': sizeUpdated === 'pc', 'mobile': sizeUpdated === 'mobile' }]">
            <PromotionalEmailTemplateComponent 
                v-show="template_selected === 'promotional'"
                :media="screen_size"
                :theme = "theme_selected"
            />
            <NewsletterEmailTemplateComponent
                v-show="template_selected === 'newsletter'"
                :media="screen_size"
                :theme = "theme_selected"
            />
        </div>
    </section>

</template>
<script>
    import PromotionalEmailTemplateComponent from './PromotionalEmailTemplateComponent.vue';
    import NewsletterEmailTemplateComponent from './NewsletterEmailTemplateComponent.vue';
    export default {
        name: 'EmailPreviewComponent',
        components: {
            PromotionalEmailTemplateComponent,
            NewsletterEmailTemplateComponent
        },
        props: {
            size: {
                type: String,
                required: false
            },
            template: {
                type: String,
                required: true
            },
            theme: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                screen_size: null,
                template_selected: null,
                theme_selected: null
            }
        },
        computed: {
            sizeUpdated(){
                return this.size;
            },
            templateUpdated(){
                return this.template;
            },
            themeUpdated(){
                return this.theme;
            }
        },
        watch: {
            sizeUpdated: {
                handler(newVal){
                    this.screen_size = newVal;
                },
                immediate: true
            },
            templateUpdated: {
                handler(newVal){
                    this.template_selected = newVal;
                },
                immediate: true
            },
            themeUpdated: {
                handler(newVal) {
                    this.theme_selected = newVal;
                },
                immediate: true
            }
        }
    }
</script>
<style scoped>
    .section-email-preview {
        grid-column: 2/3;
        grid-row: 1/2;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
    .preview-screen {
        border: 2px solid var(--primary);
        height: 100%;
        box-sizing: border-box;
        border-radius: .5rem;
        transition: all 300ms;
        overflow-y: scroll;
    }

    .pc {
        width: 100%
    }

    .mobile {
        width: 376px;
    }

</style>