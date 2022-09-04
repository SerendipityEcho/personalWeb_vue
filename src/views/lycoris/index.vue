<template>
    <div class="cantion">
        <!-- <div id="sakana1"></div> -->
        <div id="sakana2"></div>
    </div>
</template>

<script>
export default {
  name: 'PersonalWebVueLycoris',

  data() {
    return {}
  },
  mounted() {
    // this.init()
    // const test = SakanaWidget.getCharacter('chisato')
    // test.image = require('../../assets/role/walnut.jpg')
    // SakanaWidget.registerCharacter('test', test)
    // new SakanaWidget({character: 'test'}).mount("#sakana1")
    this.initDMRole()
  },

  methods: {
    init() {
      Sakana.init({
        el: '.sakana1', // 启动元素 node 或 选择器
        character: 'takina', // 启动角色 'chisato','takina'
        inertia: 0.05, // 惯性
        decay: 0.95, // 衰减
        r: 60, // 启动角度
        y: 10, // 启动高度
        scale: 0.1, // 缩放倍数
        translateY: 1, // 位移高度
        canSwitchCharacter: true, // 允许换角色
        onSwitchCharacter(character) {
          // 切换角色回调
          console.log(`${character} dayo~`)
        }
      })
      Sakana.init({
        el: '.sakana2', // 启动元素 node 或 选择器
        character: 'chisato', // 启动角色 'chisato','takina'
        inertia: 0.05, // 惯性
        decay: 0.95, // 衰减
        r: 60, // 启动角度
        y: 10, // 启动高度
        scale: 0.1, // 缩放倍数
        translateY: 1, // 位移高度
        canSwitchCharacter: true, // 允许换角色
        onSwitchCharacter(character) {
          // 切换角色回调
          console.log(`${character} dayo~`)
        }
      })
    },
    initDMRole(){
      // 加载角色图片
      const walnut = require('../../assets/role/walnut.png')
      // 获取初始角色对象
      let baseRole = SakanaWidget.getCharacter('chisato')
      // 设置角色配置
      baseRole.image = walnut
      baseRole.initialState = {
        i: 0.05, // 惯性
        s: 0.5, // 粘性
        d: 0.95, // 衰减
        r: 10, // 角度
        y: 10, // 高度
        t: 1, // 垂直速度
        w: 1 // 水平速度
      }
      // 注册角色
      SakanaWidget.registerCharacter('walnut', baseRole)
      // 初始化显示面板配置
      const set = {
        size: 10, // 大小
        autoFit: true , // 自适应容器大小
        character: 'walnut',  // 显示的角色
        controls: true, // 底部控制栏是否显示
        stroke: {  // canvas 线条设置，默认 `#b4b4b4` & `10`
          color: '#b4b4b4',
          width: 10,
        },
        threshold: 0.2, // 停止动画的阈值，默认 `0.1`
        rotate: 0 // 旋转角度，默认 `0`
      }
      // 挂载角色到DOM元素上
      new SakanaWidget(set).mount("#sakana2")
    }
  }
}
</script>

<style lang="scss" scoped>
.sakana1 {
    display: inline-block;
    height: 200px;
    width: 200px;
}
#sakana2 {
    height: 300px;
    width: 500px;
    display: block;

}
// .cantion {
//     display: flex;
//     justify-content: space-around;
//     border: 1px #000 solid;
// }
</style>