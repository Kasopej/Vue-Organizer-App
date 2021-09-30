<template>
    <div>
        <div class="text-left row">
            <div class="card col-4 p-1 d-inline-block m-1" v-for="todo in todos" :key="todo.id">
                <h3 class="card-title">{{todo.title}}</h3>
                <div class="card-body">
                    <ol class="todo-card-list">
                        <li v-for="text in todo.text" :key="text">{{text}}</li>
                    </ol>
                    <router-link :to="{name: 'EditTodo', params: {id: todo.id}}" class="d-block text-right">edit</router-link>
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
    }
}
</script>

<style>

</style>