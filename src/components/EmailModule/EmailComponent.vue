<template>
    <section class="email-section">
        <div class="title-bar">
            <h1>Email Campaing</h1>
        </div>
        <hr/>
        <div class="email-container">
            <!-- Tool bar -->
            <div class="email-toolbar">
                <EmailToolBarComponent 
                    @toggle-settings="handleToggleSettings"
                    @change-size="handleChangeSize"
                />
            </div>

            <div class="email-body">
                <!-- Aside -->
                <aside>
                    <EmailRecipientsSettingsComponent 
                        v-show="recipients_settings"
                    />
                    <EmailTemplateSettingsComponent 
                        v-show="template_settings"
                        @template-changed="handleTemplateChanged"
                        @theme-changed="handleThemeChanged"
                    />
                </aside>
                
                <!-- Main -->
                <section>
                    <EmailPreviewComponent
                        :size="size"
                        :template="template"
                        :theme="theme"
                    />
                </section>

            </div>
        </div>
    </section>
</template>
<script>
    import EmailToolBarComponent from './EmailToolBarComponent.vue';
    import EmailRecipientsSettingsComponent from './EmailRecipientsSettingsComponent.vue';
    import EmailTemplateSettingsComponent from './EmailTemplateSettingsComponent.vue';
    import EmailPreviewComponent from './EmailPreviewComponent.vue';

    export default {
        name: 'EmailComponent',
        components: {
            EmailToolBarComponent,
            EmailRecipientsSettingsComponent,
            EmailTemplateSettingsComponent,
            EmailPreviewComponent
        },
        data() {
            return {
                recipients_settings: true,
                template_settings: false,
                size: null,
                template: null,
                theme: null
            }
        },
        methods: {
            handleToggleSettings(option) {
                switch(option) {
                    case 'recipients':
                        if(this.recipients_settings == false){
                            this.recipients_settings = true;
                            this.template_settings = false;
                        }else{
                            this.recipients_settings = true;
                        }
                    break;

                    case 'template' :
                    if(this.template_settings == false){
                            this.template_settings = true;
                            this.recipients_settings = false;
                        }else{
                            this.template_settings = true;
                        }
                    break;
                }
            },
            handleChangeSize(size){
                this.size = size;
            },
            handleTemplateChanged(template){
                this.template = template;
            },
            handleThemeChanged(theme){
                this.theme = theme;
            }
        }
    }
</script>
<style scoped>

    .email-section {
        background-color: var(--basic);
        padding: 2rem;
        box-sizing: border-box;
        height: 100%;
        overflow-y: scroll;
    }

    .title-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title-bar h1 {
        margin: 0px;
    }

    .email-container {
        box-shadow: 2px 2px 4px var(--shadows);
        height: 92%;
    }

    .email-body {
        height: inherit;
        display: grid;
        grid-template-columns: 30% 70%;
        grid-template-rows: 100%;
    }
</style>