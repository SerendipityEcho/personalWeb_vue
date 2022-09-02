<template>
    <el-row>
        <el-col>
            <el-row>
                <el-col :span="24">
                    <p>用户管理</p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-table
                        :data="userList"
                        border
                        stripe
                        style="width: 100%"
                    >
                        <el-table-column
                            prop="username"
                            label="用户名"
                            width="180"
                        >
                        </el-table-column>
                        <el-table-column
                            prop="password"
                            label="密码"
                            width="180"
                        >
                        </el-table-column>
                        <el-table-column
                            prop="updateTime"
                            label="更新时间"
                        >
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
import {getUserList} from '@/api/user'

export default {
  name: 'PersonalWebVueUser',

  data() {
    return {
        userList: []
    }
  },

  mounted() {
    getUserList().then((res)=>{
        this.userList = res.data
    })
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
</style>