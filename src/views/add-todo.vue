<template>
  <div class="p-3">
      <div class="input-group">
            <label class="labels" for="#title">Title</label>
            <input type="text" name="title" id="title" placeholder="title of todo" v-model="todo.title" class="text-input">
        </div>
        <div class="input-group">
            <label class="labels" for="#id">Id</label>
            <input type="number" name="title" id="id" placeholder="id of todo" v-model="todo.id" class="text-input">
        </div>
        <div class="input-group">
            <label class="labels" for="#step">Step</label>
            <input type="text" name="title" id="step" placeholder="title of todo" v-model="newText" class="text-input">
            <button @click="addText(newText)">+</button>
        </div>
        <div class="input-controls mb-5">
            <button @click="saveTodo" class="btn btn-success p-2 mx-2">Save</button>
            <button @click="cancelTodo" class="btn btn-success p-2 mx-2">Cancel</button>
        </div>
        <ul v-for="text in todo.text" :key="text">
            <li>{{text}}</li>
        </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {

        return {
            todo: {
                title: '', text: [], id: 0,
            },
            newText: '',
        }

    },
    methods: {
        ...mapActions(['addData']),
        addText(text){
            this.todo.text.push(text);
        },
        saveTodo(){
            this.addData(this.todo);
            this.$router.push({name: 'MainView'})
        },
        cancelTodo(){
            this.$router.push({name: 'MainView'});
        },
    },
}
</script>

<style>

</style>