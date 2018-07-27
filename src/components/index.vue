<template>
  <div class="index-wrap">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="NTOUCH提醒" name="ntouch">
        <n-touch></n-touch>
      </el-tab-pane>
      <el-tab-pane label="邮件提醒" name="email">
        <email></email>
      </el-tab-pane>
      <el-tab-pane label="社交信息提醒" name="application">
        <application></application>
      </el-tab-pane>
      <el-tab-pane label="闹钟" name="alarm-clock">
        <alarm-clock></alarm-clock>
      </el-tab-pane>
      <el-tab-pane label="计时器" name="timer">
        <timer></timer>
      </el-tab-pane>
      <el-tab-pane label="设置" name="setting">
        <setting></setting>
      </el-tab-pane>
      <el-tab-pane label="帮助" name="help">
        <help></help>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import NTouch from './Ntouch';
import Email from './Email';
import Application from './Application';
import AlarmClock from './AlarmClock';
import Timer from './Timer';
import Setting from './Setting';
import Help from './Help';

export default {
  data() {
    return {
      activeName: 'ntouch',
    };
  },
  methods: {
    handleClick() {
      return false;
    },
  },
  components: {
    NTouch,
    Email,
    Application,
    AlarmClock,
    Timer,
    Setting,
    Help,
  },
};
</script>

<style lang="postcss" scoped>
@import url(../css/index.css);
</style>

