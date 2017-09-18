<template>
    <div class="tool-bar">
        <i @click="add" class="glyphicon glyphicon-plus"></i>
        <i @click="toogleFav" class="glyphicon glyphicon-star" :class="{starred: activeNote.favorite}"></i>
        <i @click="del" class="glyphicon glyphicon-remove"></i>
    </div>
</template>

<script>
export default {
    computed: {
        activeNote(){
            return this.$store.getters.getActiveNote
        }
    },
    methods: {
        add(){
            this.$store.dispatch('addNote')
        },
        toogleFav(){
            this.$store.dispatch('toggleFavoriteNote')
        },
        del(){
            this.$store.dispatch('delNote')
        }
    }
}
</script>

<style>
.tool-bar {
    float: left;
    width: 80px;
    height: 100%;
    background: #30414D;
    color: #767676;
    padding: 35px 25px;
}

.tool-bar i {
    font-size: 30px;
    cursor: pointer;
    margin-bottom: 35px;
    opacity: .8;
    transition: opacity .5s ease;
}

.tool-bar i:hover {
    opacity: 1;
}

.starred {
  color: #F7AE4F;
}
</style>