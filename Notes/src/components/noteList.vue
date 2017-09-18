<template>
    <div class="note-list">
        <div class="list-header">
            <h2>Notes</h2>
            <div class="btn-group btn-group-justified" role="group">
                <div class="btn-group" role="group">
                    <button @click="show='all'" :class="{active: show === 'all'}" type="button" class="btn btn-default">All notes</button>
                </div>
                <div class="btn-group" role="group">
                    <button @click="show='favorite'" :class="{active: show === 'favorite'}" type="button" class="btn btn-default">Favorite notes</button>
                </div>
            </div>
        </div>

        <div class="content">
            <div class="list-group">
                <a v-for="item in notes" :class="{active: activeNote === item}" @click="updateActiveNote(item)" href="#" class="list-group-item">
                    <h4 class="list-group-item-heading">{{ item.text }}</h4>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: 'all'
        }
    },
    computed: {
        notes() {
            if (this.show === 'all') {
                return this.$store.getters.getNotes
            }else {
                return this.$store.getters.getNotes.filter(note => note.favorite)
            }
        },
        activeNote(){
            return this.$store.getters.getActiveNote
        }
    },
    methods: {
        updateActiveNote(note){
            console.log(note)
            this.$store.dispatch('updateActiveNote', note)
        }
    }
}
</script>

<style scoped>
    .note-list {
        float: left;
        width: 300px;
        height: 100%;
        background: #f5f5f5;
        position: relative;
    }
    
    .list-header {
        width: 100%;
        text-align: center;
        padding: 5px 25px 25px 25px;
    }
    
    .list-header h2 {
        padding-bottom: 8px;
    }
    
    .content {
        position: absolute;
        left: 0;
        bottom: 0;
        top: 135px;
        width: 100%;
    }
    
    .content .list-group-item {
        border: 0;
        border-radius: 0;
    }
    
    .list-group-item-heading {
        font-weight: 300px;
        font-size: 15px;
    }
</style>