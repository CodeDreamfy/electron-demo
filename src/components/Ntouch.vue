<template>
  <div class="inner-ntouch">
    <p class="beizhu">默认打勾✔️开启提醒，取消不提醒</p>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label=""
        align="center"
        width="280">
      </el-table-column>
      <el-table-column
        label="led提醒"
        align="center"
        width="180">
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.mledstatus" @change="test"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="315远程提醒">
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.m315status" @change="test"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column
        label="测试">
        align="center"
        <template slot-scope="scope">
          发送
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    tableData: [
      {
        name: 'NTOUCH',
        mledstatus: false,
        m315status: false,
      },
    ],
  }),
  methods: {
    test() {
    },
  },
};
</script>

<style lang="postcss" scoped>
@import url(../css/ntouch.css);
</style>
