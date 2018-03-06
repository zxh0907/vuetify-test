<template>
    <v-data-table
    :headers="headers"
    :items="items"
    select-all
    hide-actions
    class="elevation-1"
   >
    <template slot="headers" slot-scope="props">
      <tr>
        <th>
          <v-checkbox
            primary
            hide-details
            @click.native="toggleAll"
            :input-value="props.all"
            :indeterminate="props.indeterminate"
          ></v-checkbox>
        </th>
        <th
          v-for="header in props.headers"
          :key="header.text"
          @click="changeSort(header.value)"
        >
          {{ header.text }}
        </th>
      </tr>
    </template>
   
    <template slot="items" slot-scope="props">
        <tr>
            <td>{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.description }}</td>
            <td>{{ props.item.catgory }}</td>
            <td class="text-xs-center">{{ props.item.sid }}</td>
            <td class="text-xs-center">{{ props.item.appid }}</td>
            <td class="text-xs-center">{{ props.item.downTotal }}</td>
        </tr>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: '游戏名称',
            align: 'left',
            sortable: false,
            value: 'name',
            width: '20%'
          },
          { text: '描述', value: 'description',sortable: false, width:"35%"},
          { text: '分类', value: 'catgory',sortable: false, width:"15%"},
          { text: 'sid', value: 'sid' ,sortable: false,width:"10%"},
          { text: 'appid', value: 'appid' ,sortable: false,width:"10%"},
          { text: '当前下载量', value: 'downTotal',sortable: false, width:"10%"}
        ],
        items: [
          {
            value: false,
            name: '我的世界',
            catgory: '热门网游',
            description: '我的世界游戏简介，我的世界游戏简介我的世界游戏简介我的世界游戏简介。',
            sid: 123456,
            appid: 87654321,
            downTotal: '100'
          },
          {
            value: false,
            name: '荒野行动',
            catgory: '热门网游',
            description: '荒野行动游戏简介，荒野行动游戏简介,荒野行动游戏简介,荒野行动游戏简介。',
            sid: 123456,
            appid: 87654321,
            downTotal: '130'
          },
          {
            value: false,
            name: '滑雪大冒险',
            catgory: '精品单机',
            description: '滑雪大冒险游戏简介，滑雪大冒险游戏简介,滑雪大冒险游戏简介,滑雪大冒险游戏简介。',
            sid: 123456,
            appid: 87654321,
            downTotal: '100'
          },
          {
            //value: false,
            name: '植物大战僵尸',
            catgory: '精品单机',
            description: '植物大战僵尸游戏简介，植物大战僵尸游戏简介,植物大战僵尸游戏简介,植物大战僵尸游戏简介。',
            sid: 123456,
            appid: 87654321,
            downTotal: '100'
          },
          {
            value: false,
            name: '攻沙',
            catgory: '页游',
            description: '攻沙游戏简介，攻沙游戏简介,攻沙游戏简介,攻沙游戏简介。',
            sid: 123456,
            appid: 87654321,
            downTotal: '300'
          },
          {
            //value: false,
            name: '神仙劫',
            catgory: '页游',
            description: '神仙劫简介，神仙劫简介,神仙劫简介,神仙劫简介。',
            sid: 123456,
            appid: 87654321,
            downTotal: '100'
          },
          {
            value: false,
            name: '天天欢乐斗地主',
            catgory: '棋牌游戏',
            description: '天天欢乐斗地主游戏简介，天天欢乐斗地主游戏简介,天天欢乐斗地主游戏简介,天天欢乐斗地主游戏简介。',
            sid: 123456,
            appid: 87654321,
            downTotal: '200'
          },
          {
            value: false,
            name: '中国象棋',
            catgory: '棋牌游戏',
            description: '中国象棋游戏简介，中国象棋游戏简介,中国象棋游戏简介,中国象棋游戏简介。',
            sid: 123456,
            appid: 87654321,
            downTotal: '235'
          },
          {
            value: true,
            name: '植物大战僵尸',
            catgory: '精品单机',
            description: '植物大战僵尸游戏简介，植物大战僵尸游戏简介,植物大战僵尸游戏简介,植物大战僵尸游戏简介。',
            sid: 123456,
            appid: 87654321,
            downTotal: '100'
          }
        ]
      }
    }
  }
</script>