<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :header-cell-style="headerCellStyle"
      ref="tableRef"
    >
      <el-table-column prop="date" label="日期" width="150" />
      <el-table-column label="配送信息">
        <el-table-column prop="name" label="姓名" width="120" />
        <el-table-column label="地址">
          <el-table-column prop="province" label="省份" width="120" />
          <el-table-column prop="city" label="市区" width="120" />
          <el-table-column prop="address" label="地址" width="300" />
          <el-table-column prop="zip" label="邮编" width="120" />
          <el-table-column prop="articleNumber" label="物品数量" width="120" />
          <el-table-column prop="zipNumber" label="邮件数量" width="120" />
          <el-table-column prop="zipNumber" label="数量" width="120" />
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "tableMerge",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          articleNumber: 10,
          zipNumber: 15,
        },
      ],
    };
  },
  methods: {
    // 表头合并与样式
    // { 当前行的值, 当前列的值, 行的下标, 列的下标 }
    headerCellStyle({ row, column, rowIndex, columnIndex }) {
      // 由于是多级表头 -- 合并目标表头在第三层 -- 寻找第三级表头
      if (row[0].level === 3) {
        // 第 4  5 列合并
        row[4].colSpan = 2;
        row[5].colSpan = 0;
        // 根据列数进行样式赋予  
        if (columnIndex === 5) {
          return { display: "none" };
        }
      }
      return {
        color: "#333333",
        fontWeight: "bold",
        textAlign: "center",
      };
    },
  },
};
</script>

<style scoped lang="less">
</style>