class Sl {
    constructor(){
       this.lo = '父级实例变量 lo'
       Sl.op = '父级本身方法'
    }
    sj() {
        console.log('这是父级类里面的非静态方法')
    }

    static sh() {
        console.log('静态方法1101100011')
    }
}

class Auth extends Sl {
    level = null;    // 可以省略
    constructor(level){
            super() 
            this.level = level || 1      
                
            Auth.ADMIN = 16
            Auth.SUPER_ADMIN = 32
            console.log('初始化',this.lo,Sl.op)
        //    Auth.init()
         //   this.verify2(12)
       // Sl.sh()
    }

    get m(){           // m 是一个属性
      return 'm属性调用'

    }

    static init() {
        console.log('init初始化调用的静态方法')
     //   Sl.sh()
    }

    static verifyToken(token){     
        console.log('调用了静态方法==verifyToken',token);
       
    }

    verify2(token){     
       console.log('调用了非静态方法==verify22',token);
       Sl.sh()
    }

    ak(){
        console.log('ak111111')
        
    }
}

export { Auth } 