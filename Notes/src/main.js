// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

let store = new Vuex.Store({
    state: {
        notes: [],
        activeNote: {}
    },
    getters: {
        getNotes(state) {
            return state.notes
        },
        getActiveNote(state) {
            return state.activeNote
        }
    },
    mutations: {
        add(state) {
            let newNote = {
                text: 'new note',
                favorite: false
            }
            state.notes.push(newNote)
            state.activeNote = newNote
        },
        editor(state, text) {
            state.activeNote.text = text
        },
        setActiveNote(state, note) {
            state.activeNote = note
        },
        toggleFavorite(state) {
            state.activeNote.favorite = !state.activeNote.favorite
        },
        del(state) {
            for (let i = 0; i < state.notes.length; i++) {
                if (state.notes[i] === state.activeNote) {
                    state.notes.splice(i, 1)
                }
            }
            state.activeNote = state.notes[0]
        }
    },
    actions: {
        addNote(context) {
            context.commit('add')
        },
        editNote(context, text) {
            context.commit('editor', text)
        },
        delNote(context) {
            context.commit('del')
        },
        toggleFavoriteNote(context) {
            context.commit('toggleFavorite')
        },
        updateActiveNote(context, note) {
            context.commit('setActiveNote', note)
        }
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    // router,
    store,
    template: '<App/>',
    components: { App }
})