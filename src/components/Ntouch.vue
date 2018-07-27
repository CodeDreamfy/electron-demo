<template>
  <div class="inner-ntouch">
    <div class="event-wrap">
      <div class="title">
        <span>最近通知</span>
        <a href="javascript:;" class="clean" @click="cleanEvent">清空列表</a>
      </div>
      <div class="content">
        <div class="scroll-wrap">
          <ul>
            <li v-for="val in eventList" :key="val.id"> {{ val }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="warn-btn">
      <div class="title">
        <span>提醒控制器</span>
        <a href="javascript:;" class="addbtn">增加按钮</a>
      </div>
      <div class="content">
        <div
        v-for="elm in controlBtnList"
        :key="elm.id" class="control-btn">
          <a href="javascript:;" :style=elm.style></a>
          <p>{{ elm.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    eventList: [
      '微信收到一条消息',
      'QQ收到两条消息',
      'twitter收到一张裸照',
      'Facebook账号被举报涉嫌发布黄色信息',
      '微信收到一条消息',
      'twitter收到一张裸照',
      'Facebook账号被举报涉嫌发布黄色信息',
      '微信收到两条消息',
      'twitter收到一张裸照',
    ],
    controlBtnList: [
      {
        style: { background: 'red' },
        name: '主人正忙勿打扰',
        callback: null,
      }, {
        style: { background: 'green' },
        name: '主人可接洽',
        callback: null,
      }, {
        style: { background: 'orange' },
        name: '主人离开',
        callback: null,
      }, {
        style: { background: 'gray' },
        name: '主人呼叫',
        callback: null,
      }, {
        style: { background: 'pink' },
        name: 'LED提醒一键开关',
        callback: null,
      }, {
        style: { background: 'blue' },
        name: '315无线提醒一键开关',
        callback: null,
      },
    ],
  }),
  methods: {
    cleanEvent() {
      this.eventList = [];
    },
  },
};
</script>

<style lang="postcss" scoped>
@import url(../css/ntouch.css);
</style>
