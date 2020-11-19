class AdjoinMatrix {
    vertex = [] // 顶点数组
    quantity = null; // 矩阵长度
    adjoinArray = [] // 矩阵数组
  
    constructor(vertx) {
        // 经由 子类处理过后，vertx 是合并了的 数组，里面存了 所有的 规格字段 字段
       console.log('子类所传处理过的参数数组',vertx);
      this.vertex = vertx;
      this.quantity = this.vertex.length;
      this.adjoinArray = [];
      this.init();
    }
    // 初始化数组
    init() {
        // 生成一个 11 x 11 的  全为 0 的方阵 或者说是 矩形 其实就是  左边，例如文章所说的 
      this.adjoinArray = Array(this.quantity * this.quantity).fill(0);
      console.log('生成一个 11 x 11 的  全为 0 的方阵',this.adjoinArray)
    }
  
    /*
     * @param id string
     * @param sides Array<string>
     *  传入一个顶点，和当前顶点可达的顶点数组，将对应位置置为1
     */
    setAdjoinVertexs(id, sides) {
      const pIndex = this.vertex.indexOf(id); // 比如 id 现在是某一个规格  如 紫色、vertex中记录了所有的规格 ，sides是一类规格 如 颜色
      
      sides.forEach((item) => {
        const index = this.vertex.indexOf(item);
        this.adjoinArray[pIndex * this.quantity + index] = 1;
      });
      // console.log('this.adjoinArray==',this.adjoinArray)
    }
  
    /*
     * @param id string
     * 传入顶点的值，获取该顶点的列
     */
    getVertexCol(id) {
      const index = this.vertex.indexOf(id);
      const col = [];
      this.vertex.forEach((item, pIndex) => {
        col.push(this.adjoinArray[index + this.quantity * pIndex]);
      });
      return col;
    }
  
    /*
     * @param params Array<string>
     * 传入一个顶点数组，求出该数组所有顶点的列的合
     */
    getColSum(params) {
      const paramsVertex = params.map((id) => this.getVertexCol(id));
      const paramsVertexSum = [];
      this.vertex.forEach((item, index) => {
        const rowtotal = paramsVertex
          .map((value) => value[index])
          .reduce((total, current) => {
            total += current || 0;
            return total;
          }, 0);
        paramsVertexSum.push(rowtotal);
      });
      return paramsVertexSum;
    }
  
    /*
     *  @param params Array<string>
     * 传入一个顶点数组，求出并集
     */
    getCollection(params) {
      const paramsColSum = this.getColSum(params);
      let collections = [];
      paramsColSum.forEach((item, index) => {
        if (item && this.vertex[index]) collections.push(this.vertex[index]);
      });
      return collections;
    }
  
    /*
     *  @param params Array<string>
     * 传入一个顶点数组，求出交集
     */
    getUnions(params) {
      const paramsColSum = this.getColSum(params);
      let unions = [];
      paramsColSum.forEach((item, index) => {
        if (item >= params.length && this.vertex[index]) unions.push(this.vertex[index]);
      });
      return unions;
    }
  }

  export default AdjoinMatrix;