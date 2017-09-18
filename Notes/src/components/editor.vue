<template>
    <div class="editor">
        <textarea :value="activeNoteText" @input="editNote" class="form-control"></textarea>
    </div>
</template>

<script>
export default {
    computed: {
        activeNoteText(){
            return this.$store.getters.getActiveNote.text
        }
    },
    methods: {
        editNote(e){
            this.$store.dispatch('editNote', e.target.value)
        }
    }
}
</script>

<style scoped>
.editor {
    margin-left: 380px;
    height: 100%;
}

.editor textarea {
    height: 100%;
    width: 100%;
    border: 0;
}
</style>