<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <ProfileBar class="col-3"/>
      <div class="col-9">
        <TitleBar class="p-4"/>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>


<script>
import ProfileBar from "@/components/profile-bar";
import TitleBar from "@/components/title-bar";
  export default {
    name: 'App',
    components: {
      ProfileBar,
      TitleBar,
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: white;
  border-radius: 8px;
}
body{padding: 20px; background-color: aqua;}
.input-group{display: flex; justify-content: center;}
.input-controls{display: flex; justify-content: space-between; margin-top: 20px; position: relative; left: 30vw; width: 100px;}
.labels{padding-right: 40px; margin-bottom: 0; font-size: 22px;}
.text-input{border: none; border-bottom: solid aqua 1.5px;}
.todo-card-list{padding: 5px;}
.home-link{position: absolute; top: 0; right: 10px;}
.home-link:hover{text-decoration: none;}
</style>
