<template>
    <div class="p-3">
        <div class="input-group">
            <label class="labels" for="#title">Title</label>
            <input type="text" name="title" id="title" placeholder="title of todo" v-model="todo.title" class="text-input">
        </div>
        <div class="input-group" v-for="(text, index) in todo.text" :key="index">
            <label class="labels" for="#title">Step #{{index+1}}</label>
            <input type="text" name="title" id="title" placeholder="title of todo" v-model="todo.text[index]" class="text-input">
        </div>
        <div class="input-controls">
            <button @click="saveTodo" class="btn btn-success p-2 mx-2">Save</button>
            <button @click="cancelTodo" class="btn btn-success p-2 mx-2">Cancel</button>
        </div>
    </div>
</template>

<script>
import { cloneDeep } from "lodash";
import { mapGetters, mapActions } from "vuex";

export default {
    props: {
        id: {
            type: Number,
            default: () => 0,
        }
    },
    data() {

        return {
            todo: [],
        }

    },
    
    created() {
        this.todo = cloneDeep(this.getEntryById(this.id));
    },
    computed: {
        ...mapGetters(['getEntryById']),
    },
    methods: {
        ...mapActions(['updateData']),
        saveTodo(){
            this.updateData(this.todo);
            this.$router.push({name: 'MainView'})
        },
        cancelTodo(){
            this.$router.push({name: 'MainView'})
        },
    },
}
</script>

<style>

</style>