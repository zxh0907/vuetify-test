<template>
  <div>
    <p class="text-xs-right">
      <v-btn color="primary" normal @click.stop="addGame">添加游戏</v-btn>
    </p>
     <v-data-table
      :headers="headers"
      :items="items"
      hide-actions
      class="elevation-1 myTb"
     >
      <template slot="headers" slot-scope="props">
        <tr>

          <th
            v-for="header in props.headers"
            :key="header.text"
          >
            {{ header.text }}
          </th>
        </tr>
      </template>
     
      <template slot="items" slot-scope="props">
          <tr :active="props.selected" @click="props.selected = !props.selected">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-left">{{ props.item.description }}</td>
              <td>{{ props.item.catgory }}</td>
              <td><v-chip small v-for="k in props.item.keywords">{{k}}</v-chip></td>
              <td>{{ props.item.sid }}</td>
              <td>{{ props.item.appid }}</td>
              <td>
                <v-layout row>
                  <v-flex>
                    <v-btn icon class="mx-0" @click="editGame(props.item)">
                      <v-icon small color="teal">edit</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex>
                    <v-btn icon class="mx-0" @click="deleteGame(props.item)">
                      <v-icon small color="pink">delete</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </td>
          </tr>
      </template>
    </v-data-table>
    <Dialog :game="game" :visible="dialogVisible" v-on:updateData="updateData" v-on:closeDialog="closeDialog"/>
  </div>
</template>

<script>
import Dialog from './Dialog'

  export default {
    data () {
      return {
        all:true,
        selected: true,
        headers: [
          {
            text: '游戏名称',
            align: 'left',
            sortable: false,
            value: 'name'            
          },
          { text: '描述', value: 'description',sortable: false},
          { text: '分类', value: 'catgory',sortable: false},
          { text: '关键字', value: 'keywords',sortable: false},
          { text: 'sid', value: 'sid' ,sortable: false},
          { text: 'appid', value: 'appid' ,sortable: false},
          { text: '操作', value: '',sortable: false}
        ],
        items: [],
        dialogVisible: false,
        game: {},
        defGame: {
          keywords: []
        },
        editedIndex: -1
      }
    },
    components: {
      Dialog
    },
    created () {
      const self = this;
      this.$http.get('/api/getGames', {
          params: {
            rnd: Date.now()
          }
        }).then(function (res) {
          self.items = res.data.games;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    methods: {
      addGame () {
        this.resetGames();
        this.showDialog();
        this.editedIndex = -1;
      },
      editGame (data) {
        this.game = Object.assign({}, data);
        this.showDialog();
        this.editedIndex = this.items.indexOf(data);
      },
      deleteGame (data) {

        this.items.splice(this.items.indexOf(data), 1);
      },
      updateData (gameData) {
        if(this.editedIndex > -1){
          Object.assign(this.items[this.editedIndex], gameData)
        } else {
          this.items.unshift(gameData);
        }        
        this.closeDialog();
      },
      showDialog () {
        this.dialogVisible = true;
      },
      closeDialog () {
        const self = this;
        this.dialogVisible = false;
        this.resetGames();
      },
      resetGames () {
        this.game = {
          keywords: []
        }
      }
    }
  }
</script>

<style>
  .myTb table thead th{font-size:14px; font-weight:bold;}
</style>