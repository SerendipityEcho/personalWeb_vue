<template>
    <div style="padding: 30px">
        <el-alert :closable="false" title="menu 1-1" type="success">
            <router-view />
        </el-alert>
    </div>
</template>

<script>
export default {
    name: "PersonalWebVueIndex",

    data() {
        return {};
    },

    watch: {
        // $route: {
        //     handler: function (val, oldVal) {
        //         console.log(val);
        //     },
        //     immediate: true,
        //     // 深度观察监听
        //     deep: true,
        // },
    },

    beforeRouteEnter(to, from, next) {
        console.log(to, from);
        next();
    },
};
</script>
