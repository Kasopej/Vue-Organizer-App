<template>
    <div>
        <div class="text-left row">
            <div class="card col-4 p-1 d-inline-block m-1" v-for="(todo, index) in todos" :key="todo.id">
                <h3 class="card-title">{{todo.title}}</h3>
                <label class="pr-1 mb-0" for="#showId">Show Id</label>
                <input type="checkbox" name="" id="showId" @click="showId(index, $event)">
                <div class="card-body">
                    <ol class="todo-card-list">
                        <li v-for="text in todo.text" :key="text">{{text}}</li>
                    </ol>
                    <router-link :to="{name: 'EditTodo', params: {id: todo.id}}" class="d-block text-right">edit</router-link>
                    <span class="d-block m-0" v-if="showWhich === 'show' + index ">{{todo.id}}</span>
                </div>
            </div>
        </div>
        <router-link to="/add-todo">Create a Todo!</router-link>
    </div>
  
</template>

<script>
export default {
    props: {
        todos: {
            type: Array,
            default: () => [],
        }
    },
    data() {

        return {
            showWhich: '',
        }

    },
    methods: {
        showId(index, event){
            if(event.target.checked) {this.showWhich = 'show' + index}
            else{this.showWhich = ''}
        }
    },
}
</script>

<style>

</style>