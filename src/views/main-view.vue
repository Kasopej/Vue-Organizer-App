<template>
  <div >
    <Todos v-if="todos_data" :todos="todos_data"/>
    <EmptyTodo v-else/>
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from "@/components/display-todos";
import EmptyTodo from "@/components/empty-todo";
import {mapState, mapActions} from "vuex";

export default {
  name: 'Home',
  components: {
    Todos, 
    EmptyTodo
  },

created() {
  this.getTodosData();
},

methods: {
  ...mapActions({getTodosData: 'getData'}),

},

  computed: {
    ...mapState({todos_data: 'todoDataStore'})
  },
}
</script>
