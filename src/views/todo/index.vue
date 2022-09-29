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
                                v-if="item.finished == 0"
                                @click.native="showSetModal(item)"
                                class="todoBox"
                                shadow="hover"
                                :key="item.id"
                            >
                                <div
                                    style="display: inline-block;"
                                    @click.stop
                                >
                                    <el-checkbox
                                        size="medium"
                                        class="checkBox"
                                        true-label="1"
                                        false-label="0"
                                        v-model="item.finished"
                                        @change="changeTodo(item)"
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
                                @click.native="showSetModal(item)"
                                class="todoBox todoBoxFinished"
                                shadow="hover"
                                :key="item.id"
                            >
                                <div
                                    style="display: inline-block;"
                                    @click.stop
                                >
                                    <el-checkbox
                                        size="medium"
                                        class="checkBox"
                                        true-label="1"
                                        false-label="0"
                                        v-model="item.finished"
                                        @change="changeTodo(item)"
                                    />
                                </div>

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
            title="设置待办"
            :visible.sync="showSetModalState"
            :show-close="false"
            @close="closeSetModal"
        >
            <div class="formBox">
                <el-form :model="todoForm">
                    <el-form-item>
                        <el-input
                            v-model="todoForm.content"
                            placeholder="请输入内容"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="开始时间：">
                        <el-date-picker
                            v-model="todoForm.startTime"
                            type="datetime"
                            value-format="yyyy-MM-dd HH:mm:ss"
                            placeholder="选择日期时间"
                        >
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="结束时间：">
                        <el-date-picker
                            v-model="todoForm.endTime"
                            type="datetime"
                            value-format="yyyy-MM-dd HH:mm:ss"
                            placeholder="选择日期时间"
                        >
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="任务难度：">
                        <el-radio-group
                            size="small"
                            v-model="todoForm.level"
                        >
                            <el-radio-button label="3">一般难度</el-radio-button>
                            <el-radio-button label="2">中等难度</el-radio-button>
                            <el-radio-button label="1">较高难度</el-radio-button>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="是否完成：">
                        <el-radio-group
                            size="small"
                            v-model="todoForm.finished"
                        >
                            <el-radio-button label="1">已完成</el-radio-button>
                            <el-radio-button label="0">未完成</el-radio-button>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
                <div class="formBottomBox">
                    <el-button
                        class="formBottomButton"
                        type="success"
                        size="small"
                        icon="el-icon-check"
                        @click="changeTodo(todoForm)"
                    >保存</el-button>
                    <el-popconfirm
                        title="确定删除该条待办吗"
                        @onConfirm="delTodo"
                    >
                        <el-button
                            slot="reference"
                            type="danger"
                            icon="el-icon-delete"
                            size="small"
                        >删除</el-button>
                    </el-popconfirm>

                </div>
            </div>

            <!-- <span>{{this.todoForm}}</span> -->
        </el-drawer>
    </div>
</template>

<script>
import { updateTodo, getList, addTodo, deleteTodo } from '@/api/todo.js'

export default {
  name: 'PersonalWebVueTodo',

  data() {
    return {
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
      this.todoForm = { ...item }
      this.showSetModalState = true
    },
    closeSetModal() {
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
      console.log(item)
      updateTodo(item).then((res) => {
        this.$message({
          message: '待办任务更新成功',
          type: 'success'
        })
        this.showSetModalState = false
      })
    },
    // 查询待办任务方法
    queryTodo() {
      getList().then((res) => {
        console.log(res)
        this.todoList = res.data
      })
    },
    // 删除待办任务
    delTodo() {
      deleteTodo(this.todoForm).then((res) => {
        const message = res.message
        let type = 'error'
        if (res.success) {
          type = 'success'
          this.queryTodo()
          this.showSetModalState = false
        }
        this.$message({
          message,
          type
        })
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

.formBox {
    margin: 4%;
    height: 60%;
}

.formBottomBox {
    border-top: 1px solid #000;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0;
}

.formBottomButton {
    margin: 1%;
}
</style>