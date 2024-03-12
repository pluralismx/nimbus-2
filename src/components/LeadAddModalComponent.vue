<template>
    <div class="modal-screen">
        <div class="modal-container">
            <div class="modal-header">
                <span>Agregar lead manualmente</span>
                <button class="btn-warning">&times;</button>
            </div>
            <div class="modal-body">
                <div.add-lead-form>
                    <label for="">Nombre</label>
                    <input type="text">
                    <label for="">Phone</label>
                    <input type="text">
                    <label for="">Email</label>
                    <input type="text">
                    <label for="">Status</label>
                    <select name="" id=""></select>
                </div.add-lead-form>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'LeadAddModalComponent',
    data() {
        return {
            name: null,
            phone: null,
            email: null,
            status: null
        }
    }
}

</script>

<style>
    .modal-screen {
        left: 0;
        top: 0;
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100%;
    }
</style>