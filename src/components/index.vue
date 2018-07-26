<template>
  <div class="index-wrap">
    <div class="left">
      <div class="device-info device-items">
        <div class="title">设备详情（Device info）</div>
        <div class="content">
          <div class="img">
            <img src="../assets/dengta.png" alt="">
          </div>
          <div class="info">
            <p><span>Status：</span><span>no Bink(1)</span></p>
            <p><span>Serial number：</span><span>sasasa2121</span></p>
            <p><span>Serial number1：</span><span>sasasa2121</span></p>
          </div>
        </div>
      </div>
      <div class="device-items device-event">
        <div class="title">最近消息（Recent Events）</div>
        <div class="content">
          <div class="overscroll-wrap">
            <ul>
              <li>FackBook收到一条好友消息</li>
              <li>微信收到一条好友消息</li>
              <li>twitter收到一条好友消息</li>
              <li>微信收到一条好友消息</li>
              <li>twitter收到一条好友消息</li>
              <li>微信收到一条好友消息</li>
              <li>twitter收到一条好友消息</li>
              <li>twitter收到一条好友消息</li>
              <li>twitter收到一条好友消息</li>
            </ul>
          </div>
          <a href="javascript:;" class="clear-btn">忽略所有（Dismiss All）</a>
        </div>
      </div>
    </div>
    <div class="main">
      <con-main></con-main>
    </div>
  </div>
</template>

<script>
import conMain from './main';

export default {
  data() {
    return {};
  },
  components: {
    conMain,
  },
};
</script>

<style lang="postcss" scoped>
@import url(../css/index.css);
</style>

