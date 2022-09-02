<template>
    <div class="cantion">
        <div id="sakana1"></div>
        <div class="sakana2"></div>
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
    const imagejs = require('../../assets/404_images/404.png')
    const test = SakanaWidget.getCharacter('chisato')
    test.image = imagejs
    SakanaWidget.registerCharacter('test', test)
    new SakanaWidget({character: 'test'}).mount("#sakana1")
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
    }
  }
}
</script>

<style lang="scss" scoped>
// .sakana1 {
//     display: inline-block;
// }
// .sakana2 {
    
//     display: inline-block;
// }
// .cantion {
//     display: flex;
//     justify-content: space-around;
//     border: 1px #000 solid;
// }
</style>