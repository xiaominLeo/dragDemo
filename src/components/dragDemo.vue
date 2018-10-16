<template>
  <ul ref="items" id="demo">
    <li class="item" v-for="item in items">{{item.name}}</li>
  </ul>
</template>

<script>
// import Sortable from 'Sortable'
export default {
  name: 'dragDemo',
  data () {
    return {
      items: [{name:"item1",id:1},{name:"item2",id:2},{name:"item3",id:3},{name:"item4",id:4}]
    }
  },
  mounted() {
    var that = this;
    let obj = {};  // 属性配置
    // const sortable = new Sortable(el, obj)  // el表示拖动dom的名称
   Sortable.create(this.$refs.items, {
     sort: true,
     scroll: true,
     onStart(evt) {
       evt.oldIndex;
     },
     onEnd(evt) {
       // 拖动后数据保存方法调用
       // that.sortCom(that.items, evt);
       var itemEl = evt.item;
       evt.to;
       evt.from;
       evt.oldIndex;
       evt.newIndex;
     }
   });
  },
  methods: {
    // 拖动排序
   // 将处理后的数据返回给后端
   sortCom(items, evt) {
     // let oldIndex = evt.oldIndex; // element's old index within old parent
		 // let newIndex = evt.newIndex; // element's new index within new parent
		 // if(oldIndex == newIndex) {
			//  return;
		 // }

     let movedRow = items[evt.oldIndex];
     items.splice(evt.oldIndex, 1);
     items.splice(evt.newIndex, 0, movedRow);
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #demo{
    width: 300px;
    margin: 0 auto;
    .item{
      list-style: none;
      height: 30px;
      width: 200px;
      margin-top: 30px;
      background: #42b983;
      line-height: 30px;
      color: #2c3e50;
    }
  }


</style>
