<template>
	<v-dialog v-model="isShow" max-width="500px" persistent>
        <v-card>
          <v-card-title>
            {{title}}
          </v-card-title>
          	<v-form ref="form" lazy-validation>
          		<v-card-text>
          	
		          	<v-text-field
				      label="游戏名称"
				      v-model="game.name"
				      :rules="nameRule"
				      required
				    ></v-text-field>
				    <v-select
		              :items="catgories"
		              label="分类"
		              v-model="game.catgory"
		              :rules="categoryRule"
		              required
		            ></v-select>

				    <v-text-field
				      label="描述"
				      textarea
				      v-model="game.description"
				      rows=3
				    ></v-text-field>

				    <v-radio-group label="关键字" row hide-details>
				    	<template v-for="k in keywords">
				    		<v-checkbox :label="k" :value="k" v-model="game.keywords" hide-details></v-checkbox>
				    	</template>				    	
				    </v-radio-group>
					
		            
		            <v-text-field
				      label="SID"
				      v-model="game.sid"
				      :rules="sidRule"
				      required
				    ></v-text-field>
				    <v-text-field
				      label="AppId"
				      v-model="game.appid"
				      :rules="appidRule"
				      required
				    ></v-text-field>
				    <p>
					    <v-btn color="primary"
					      @click="submit"
					    >
					      提交
					    </v-btn>
						<v-btn normal @click.stop="closeDialog">关闭</v-btn>
					</p>
		        </v-card-text>
	        </v-form>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
	props: ['visible','game'],
    data () {
      return {
      	valid:false,
      	catgories: [
      		'热门网游', '精品单机', '页游', '棋牌游戏'
        ],
        keywords:["休闲", "益智", "冒险", "策略"],
      	nameRule: [
	        v => !!v || '游戏名称不能为空'
	    ],
	    sidRule: [
	        v => !!v || 'SID不能为空'
	    ],
	    appidRule: [
	        v => !!v || 'appid不能为空'
	    ],
	    categoryRule: [
	        v => !!v || '分类不能为空'
	    ]
      }
    },
    computed : {
    	title () {
    		return this.game.id ? '编辑游戏': '添加游戏';
    	},

    	isShow: {
    		get () { return this.visible; },
    		set (val) {
    			val || this.closeDialog()
    		}
    	}
    },
    methods: {
    	submit (e) {
	        if (this.$refs.form.validate()) {
	        	const game = this.game;
			    let data = Object.assign({
			    	id: game.id ? game.id : Date.now().toString(36),
			    }, game);

			    this.$emit("updateData", data);
	          	this.clear();
	        }
	    },
	    clear () {
	        this.$refs.form.reset()
	    },
	    closeDialog () {
	    	this.$emit('closeDialog', false);
	    }
    }
}
</script>