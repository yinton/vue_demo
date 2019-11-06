export default { 
  data () {
    return {
      userInfo:{minixa:'',minixb:'',minixc:''},
    }
  },
  methods: {
    getUserInfo () {
      // 以下为伪代码
      this.userInfo = {
         minixa:'minixa1111',
         minixb:'minixb22222',
         minixc:'minixc3333'
      }
    }
  },
  mounted () {
    this.getUserInfo();
  }
}