<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container>
          <h3 class="headline">游戏数据表</h3>
          <myTb/>
        </v-container>
        
      </v-content>
    </v-app>
    
  </div>
</template>

<script>
import MyTb from './components/MyTable'

export default {
  name: 'App',
  components: {
    MyTb
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
