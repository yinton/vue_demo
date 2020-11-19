import AdjoinMatrix from './skuClass'

class SpecAdjoinMatrix extends AdjoinMatrix {
    specList = [];
    specCombinationList = [];
  
    constructor(specList, specCombinationList) {
        //  reduce 的第一个参数是一个累加值，不断地叠加 合并 里面的数组，最终将 specList 里面的 list 数组的值 合并为一个数组
      super(specList.reduce((total, current) => [...total, ...current.list], [])); // total 为累加值，第二个参数 [] 为total初始值
      this.specList = specList;  //  分类 套餐，比如 颜色 、大小 、 尺寸
      this.specCombinationList = specCombinationList;  //  可以有的 组合，可能性 的数组
      // 根据可选规格列表矩阵创建
      this.initSpec();
      // 同级顶点创建
      this.initSameLevel();
    }
  
    /**
     * 根据可选规格组合填写邻接矩阵的值
     */
    initSpec() {
      console.log('asd');
      this.specCombinationList.forEach((item) => {
        this.fillInSpec(item.specs);
      });
    }
    // 填写同级点
    initSameLevel() {
      // 获得初始所有可选项
      const specsOption = this.getCollection(this.vertex);
      this.specList.forEach((item) => {
        const params = [];
        // 获取同级别顶点
        item.list.forEach((value) => {
          if (specsOption.includes(value)) params.push(value);
        });
        // 同级点位创建
        this.fillInSpec(params);
      });
    }
    /*
     * 传入顶点数组，查询出可选规格
     * @param params
     */
    getSpecscOptions(params) {
      let specOptionCanchoose = [];
      if (params.some(Boolean)) {
        // 过滤一下选项
        specOptionCanchoose = this.getUnions(params.filter(Boolean));
      } else {
        // 所有可选项
        specOptionCanchoose = this.getCollection(this.vertex);
      }
      return specOptionCanchoose;
    }
  
    /*
     * @params
     * 填写邻接矩阵的值
     */
    fillInSpec(params) {
      params.forEach((param) => {
        this.setAdjoinVertexs(param, params);
      });
    }
  }

  export default SpecAdjoinMatrix;
  