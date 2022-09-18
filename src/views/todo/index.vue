<template>
    <div>
        <el-row>
            <el-col
                class="contain"
                :span="16"
            >
                <!-- 添加待办 -->
                <el-row>
                    <el-col :span="24">
                        <el-input
                            placeholder="添加新待办"
                            v-model="todoForm.content"
                            @keydown.enter.native="addTodoInfo"
                        ></el-input>
                    </el-col>
                </el-row>
                <!-- 未完成的待办 -->
                <el-row>
                    <el-col :span="24">
                        <el-divider content-position="left">未完成</el-divider>
                        <template v-for="item in todoList">
                            <el-card
                                @click.native="showSetModal(item)"
                                v-if="item.finished == 0"
                                class="todoBox"
                                shadow="hover"
                                :key="item.id"
                            >
                                <div style="display: inline-block;" @click.stop>
                                    <el-checkbox
                                        size="medium"
                                        class="checkBox"
                                        true-label="1"
                                        false-label="0"
                                        v-model="item.finished"
                                        :change="changeTodo"
                                    />
                                </div>
                                <span class="todoText">{{item.content}}</span>
                                <span class="startTimeBox">{{item.startTime}}</span>
                            </el-card>
                        </template>

                    </el-col>

                </el-row>
                <!-- 已完成 -->
                <el-row>
                    <el-col>
                        <el-divider content-position="left">已完成</el-divider>
                        <template v-for="item in todoList">
                            <el-card
                                v-if="item.finished == 1"
                                class="todoBox todoBoxFinished"
                                shadow="hover"
                                :key="item.id"
                            >
                                <el-checkbox
                                    size="medium"
                                    class="checkBox"
                                    true-label="1"
                                    false-label="0"
                                    v-model="item.finished"
                                />
                                <span class="todoText">{{item.content}}</span>
                                <span class="startTimeBox">{{item.startTime}}</span>
                            </el-card>
                        </template>

                    </el-col>
                </el-row>
            </el-col>
        </el-row>

        <!-- 侧边弹出的设置栏 -->
        <el-drawer
            title="我是标题"
            :visible.sync="showSetModalState"
            @close="closeSetModal"
        >
            <span>{{this.todoForm}}</span>
        </el-drawer>
    </div>
</template>

<script>
import { updateTodo, getList, addTodo } from '@/api/todo.js'

export default {
  name: 'PersonalWebVueTodo',

  data() {
    return {
      test: false,
      showSetModalState: false,
      todoList: [],
      todoForm: {
        content: ''
      }
    }
  },

  mounted() {
    this.queryTodo()
  },

  methods: {
    // 显示侧边设置栏事件
    showSetModal(item) {
        this.todoForm = item
      this.showSetModalState = true
    },
    closeSetModal(){
        this.todoForm = {}
    },
    // 添加待办事项方法
    addTodoInfo() {
      if (this.addTodoInfo == '') {
        return
      }
      addTodo(this.addTodoInfo).then((res) => {
        console.log(res)
        this.addTodoInfo = {}
        this.$message({
          message: '添加成功',
          type: 'success'
        })
        this.queryTodo()
      })
    },
    // 待办任务更新方法
    changeTodo(item) {
      updateTodo(item).then((res) => {
        console.log(res)
      })
    },
    // 查询待办任务方法
    queryTodo() {
      getList().then((res) => {
        console.log(res.data)
        this.todoList = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.contain {
    
    padding: 2%;
}

.todoBox {
    margin-bottom: 2%;
    margin: 1%;
}

.todoBox :active {
    background-color: rgba(183, 251, 249, 0.5);
}

.todoBoxFinished {
    text-decoration: line-through;
}

.todoCheckbox {
    zoom: 160%;
}

.todoText {
    margin-left: 1rem;
    // text-decoration: line-through;
}

.startTimeBox {
    float: right;
    font-size: 18px;
    line-height: 25px;
}
</style>