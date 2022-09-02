<template>
    <div>
        <el-row
            type="flex"
            align="middle"
            style="margin-top: 2%"
        >
            <el-col
                :span="21"
                :offset="1"
            >
                <!-- 查询条件输入框 -->
                <el-form
                    :inline="true"
                    :model="queryForm"
                >
                    <el-form-item label="姓名：">
                        <el-input
                            v-model="queryForm.username"
                            placeholder="姓名"
                        ></el-input>
                    </el-form-item>
                    <el-form-item style="float: right">
                        <el-button
                            type="primary"
                            @click="queryInfo"
                        >查询</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <!-- 用户列表展示表格 -->
                <el-table
                    :data="userList"
                    border
                    stripe
                    style="width: 100%"
                >
                    <el-table-column
                        type="index"
                        width="60"
                        align="center"
                    >
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="username"
                        label="用户名"
                        min-width="180"
                    >
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="password"
                        label="密码"
                        min-width="180"
                    >
                    </el-table-column>
                    <el-table-column
                        align="center"
                        prop="updateTime"
                        label="更新时间"
                        min-width="180"
                    >
                    </el-table-column>
                    <el-table-column
                        label="操作"
                        align="center"
                        min-width="180"
                    >
                        <template slot-scope="scope">
                            <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)"
                            >编辑</el-button>
                            <el-popconfirm
                                style="margin-left: 10px"
                                icon="el-icon-info"
                                icon-color="red"
                                title="确定删除该用户吗？"
                            >
                                <el-button
                                    slot="reference"
                                    size="mini"
                                    type="danger"
                                    @click="handleDelete(scope.$index, scope.row)"
                                >删除</el-button>
                            </el-popconfirm>

                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>

</template>

<script>
import { getUserList } from '@/api/user'

export default {
  name: 'PersonalWebVueUser',

  data() {
    return {
      userList: [],
      queryForm: {
        username: ''
      }
    }
  },

  mounted() {
    getUserList().then((res) => {
      this.userList = res.data
    })
  },

  methods: {
    queryInfo() {},
    handleEdit(index, item) {},
    handleDelete(index, item) {}
  }
}
</script>

<style lang="scss" scoped>

</style>