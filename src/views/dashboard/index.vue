<template>
    <div class="dashboard-container">
        <div class="dashboard-text">name: {{ name }}</div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Dashboard",
    computed: {
        ...mapGetters(["name"]),
    },
    data(){
        return {
            name: "小易"
        }
    },

    mounted() {
        let pro = new Promise(function(resolve, reject){
          resolve();
        })

        pro.then(this.change).then(this.get);
    },

    methods: {
        get() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("bbb");
                    resolve("bbb");
                }, 1000);

                // let url =
                //     "https://mock.presstime.cn/mock/62f7316e34c8760033f5dd85/example";
                // let data = axios.get(`${url}/mock`);
                // data.then((res)=>{
                //   console.log(res);
                //   resolve(res);
                // })
            });
        },

        change() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("aaaa");
                    resolve("aaa");
                }, 2000);
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.dashboard {
    &-container {
        margin: 30px;
    }
    &-text {
        font-size: 30px;
        line-height: 46px;
    }
}
</style>
