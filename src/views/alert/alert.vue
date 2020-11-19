<!-- alert.vue -->
<template>
  <div class="alert">
    <transition-group name="list-complete" tag="div"> 
      <div class="alert-main" v-for="item in notices" :key="item.name">
        <div class="alert-content">{{ item.content }}</div>
      </div>
    </transition-group>    
  </div>
</template>
<script>
  let seed = 0;

  function getUuid() {
    return 'alert_' + (seed++);
  }

  export default {
    data () {
        return {
            notices: []
        }
    },
    methods: {
      add (notice) {
        const name = getUuid();

        let _notice = Object.assign({        // 将两个对象（ name: name 和 notice ）的内容 合并到了一个对象（ _notice ）中去了，
          name: name                     // name 仅是用来作为 key 的唯一值
        }, notice);    
      //  console.log('notice===',_notice)  _notice 的值可能是 { name:'',content:'',duration:''  } 
        this.notices.push(_notice);

        // 定时移除，单位：秒
        const duration = notice.duration;
        setTimeout(() => {
          this.remove(name);
        }, duration * 1000);   // 由于这里 * 了 1000，所以传入的值 如果是 1 就代表了 1000 毫秒了  
      },
      remove (name) {
        const notices = this.notices;

        for (let i = 0; i < notices.length; i++) {
          if (notices[i].name === name) {
            this.notices.splice(i, 1);
            break;
          }
        }
      }
    }
  }
</script>
<style> 
.alert-main{
  transition: all 1s;
}
.list-complete-enter, .list-complete-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  transform: translateY(30px);
}
</style>
<style scoped>
  .alert{
    position: fixed;
    width: 100%;
    top: 16px;
    left: 0;
    text-align: center;
    pointer-events: none;
    transition: all 1s;
  }
  .alert-content{
    display: inline-block;
    padding: 8px 16px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
    margin-bottom: 8px;
  }

</style>