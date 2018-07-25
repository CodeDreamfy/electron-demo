<template>
  <div class="index-wrap">
    <div class="inner-wrap">
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple list-devices">

          </div>
        </el-col>
        <el-col :span="18"><div class="grid-content bg-purple-light device-main"></div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="postcss" scoped>
@import url(../css/index.css);
</style>

