<template>
    <section class="section-email-preview">
        <div :class="['preview-screen', { 'pc': sizeUpdated === 'pc', 'mobile': sizeUpdated === 'mobile' }]">

        </div>
    </section>

</template>
<script>
    export default {
        name: 'EmailPreviewComponent',
        props: {
            size: {
                type: String,
                required: false
            }
        },
        data() {
            return {
                screen_size: null
            }
        },
        computed: {
            sizeUpdated(){
                return this.size;
            }
        },
        watch: {
            sizeUpdated: {
                handler(newVal){
                    this.screen_size = newVal;
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
    }

    .pc {
        width: 100%
    }

    .mobile {
        width: 376px;
    }

</style>