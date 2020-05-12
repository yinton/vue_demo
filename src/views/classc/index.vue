<template>
<div style="margin:10px 0 35px 0;">
    classc 
    <div class="ll"><span class="spans">先来 探索一下 export 和 export default 导出方式的 问题</span></div>
    <div class="ll">1、<span class="spans">对于 export 导出 写法为</span>  ：export { A, B } AB为方法或者变量都是可以的，在vue中引入：import { A, C } from './test' </div>
    <div class="ll">注意：使用了export的话，即使只是抛出一个，都需要使用 花括号{}，例如：export { A } 不把 A放入花括号就会报错，除非把 export 写到每个函数或者方法的前面，例如：
        <div>
            export const A = function(){
                let arr = ['a','b','c']
                return arr
            } 这种 不需要集中抛出
        </div>
        <div class="ll">
            还需认识的一点是，无论如何，使用 export 抛出的东西，在引入时都是需要使用花括号{}引入的  import { C } from './test' ，C需要用花括号围起来的
        <div>另外，对于 export 抛出，可以抛出别名，引入时就使用取的别名，例如：export { A as AAS, B, C } 此处就是将A取别名为AAS，引入时亦需要 AAS，import { AAS } from './test'，抛出时不能是 export { B:c } ,会报错，只能是 as 这样的语法</div>
        </div>
        
    </div>
    <div class="ll">
        <span class="spans">2、对于 export default 抛出的语法</span>，第一点，在使用 export default 导出方法时，在js文件内，只能有一个 export default命令，不能有两个（例如在每个方法前面加导出命令，只能使用一次，否则就会报错） 
        <div>在集中导出时分为多种情况：（1、）导出多个方法（或者变量什么的）使用语法：export default {A,B,C}，引入使用语法：import AAS from './test' ，首先，导出时，可以一起导出多个，仍然可以使用 export default ，但是，引用时，只需要一个变量 AAS，随便取，代表了所有的方法，使用时，AAS.A() 即可调用到其中某一个了，引用的时候如果使用花括号是会报错的。（2、）导出一个方法，导出使用语法：export default A 导出时可不加{}括号,引入使用：import AAS from './test' 使用 AAS()，因为只是导出了一个，所以直接调用就行 （3、）导出时可以使用别名,注意这里面有一个大坑：先看导出语法：export default { As:A } As 是别名，A是函数名，导入语法：import AAS from './test'  使用：AAS.As()，这样是对的</div>
    </div>
    <div class="ll">
        <span class="spans">3、混合导出，导出时可以同时使用 export 和 export default 命令</span>，例如： export default { As:A } export {B}  引入：import AAS,{ B } from './test' ，但是，好像不能同时 使用两者导出同一个方法
    </div>
    <div class="ll">
         <span class="spans">4、导入时使用星号（应该是针对 export导出方式） * </span> 先看下 js文件内部：export {B,A}  引入使用方式：import * as AAS from './test'  AAS即是所有的方法总称，调用时：AAS.A() 其实就和引入 export default 一样的了，*号用于export default应该是无意义了 
    </div>
    <div class="lll">小节（更加详细的sao操作看《阮一峰es6标准入门》）</div>
    <div class="lll">1，对于导出方式（集中导出）：export 到需要使用 {}花括号，导出所有的方法变量，而export default 在只导出一个的情况下，可以不使用花括号，直接 export default A 即可</div>
    <div class="lll">2，对于引入使用方式：export 导出的都需要使用 {}花括号来接收所需要的方法名或变量名，而export default导出的，在引用时都只需定义一个变量接收即可</div>
    <div class="lll">3，对于导出时的别名，两者都可以取别名，但是，写法不一样</div>
    <div class="lk">
        <span class="spans">类 class 的操作 </span>
        
            <div class="a2"> class Auth { </div>
            <div>    constructor(level){       </div>
                <div class="al">           this.level = level || 1       </div>
                <div class="al">         Auth.ADMIN = 16           </div>
                    <div class="al">       Auth.SUPER_ADMIN = 32    </div>
            <div>    }                                </div>
                <div class="al">get m(){}           // m 是一个属性        </div>
            <div class="al">    static verifyToken(token){}              </div>    
             <div class="al">   verify2(token){}              </div>    
            <div>}</div>
            <div>export { Auth } </div>
            <div class="ll"><div>外部调用的情况：</div>上面一个类的定义，以及导出，也可以使用 export default 这里直接抛出 类本身而不是 先new 再抛出其实例</div>
            <div class="ll">construction里面的this.level,其实是在 外部先定义了一个level = null;再用this赋值的，当然可以直接使用this.xx而不需要先定义，但是在 ts中是需要先定义的，或者使用 public修饰符。 this.level称为实例属性，实例属性只有 new出来的实例才能调用得到。比如：const a = new Auth(10) a.level能调用到level，但是 a 调用不到ADMIN和SUPER_ADMIN，因为这两个是类本身的属性，引入的变量Auth才能调用到，调用时有前提，先要new一下，因为，这两个是在construction里面定义的</div>
            <div class="ll">
                静态方法与非静态方法（外部）：  静态方法只能使用 引入时的变量 Auth 来调用，比如：Auth.verifyToken(100)  调用前也不需要先 new Auth(),new出来的实例是调用不到的，反之，非静态方法，只能使用 new 的实例调用，否则报错；里面还有一个属性：get m(){} ，m 是一个属性（暂不考虑静态属性），只能使用实例来调用 new Auth().m
            </div>
            <div class="ll">
                内部调用：constructor里面可以调用 类内部的定义的静态（或者非静态方法）， 如：Auth.init()，或者此处调用一个静态方法，该方法里面再调用其他的静态方法（依旧使用Auth.xxx）来调用。非静态方法使用 this 来调用，而且非静态方法里面亦可以调用其他的非静态方法；
                <div class="ll">注意：(内部调用时)在非静态方法里面，可以调用其他非静态方法，并且，也可以调用到其他的静态方法（使用Auth内部类本身来调用），但是，注意了，静态方法内部是调用不到非静态方法的（使用this.xx调用不到其他的非静态方法）</div>
            </div>
            <div class="ll">
                关于继承：当前 类为 Auth 继承 Sl 后， class Auth extends Sl {}  子类的 constructor 里面需要调用一次 super() ，也就是调用了 父类的构造函数
                <div class="a2"> class Sl { </div>
                <div>    constructor(){       </div>
                    <div class="al">           this.lo = '父级实例变量 lo'       </div> 
                    <div class="al">        Sl.op = '父级本身方法'           </div>
                <div>    }                                </div>
                <div class="al">    static sh(){}              </div>    
                <div class="al">   sj(){}              </div>    
                <div>}</div>
            </div>
            <div>1、在父类 Auth 中的静态方法，可以在子类中的静态方法中（或者直接在子类constructorn中）调用到，比如在Auth类的构造函数中： Sl.sh(),此外，像上面一样，父类的静态方法，也是可以在子类的实例方法中，调用到的，比如在子类constructor中先调用一个实例方法，再在里面 Sl.sh()；注意，虽然 在外部引入类后，new出来的实例，不能直接调用当前类，或者其父类的静态方法，但是，由于，实例方法（非静态方法）内部是可以调用到静态方法的，所以，new出来的实例，其实可以，通过先调用一个实例方法，内部再调用其他静态方法即可，也就实现了，实例调用静态方法了</div>
            <div>2、子类的constructor中均可以调用到，父类的实例属性和本身定义的属性，以及静态和非静态方法</div>  
        
    </div>
</div> 
</template>    
<script>
import * as AAS from './test' 
import { Auth } from './auth'
export default{
    mounted(){
      //  console.log(AAS.A())  
        const a = new Auth(10)
       a.verify2()
      //  console.log('user==',Auth.ADMIN)
      //  Auth.verifyToken(100)
    }
}
</script>  
<style scoped>
.ll{
   padding: 10px 10px;
}
.lll{
   padding: 10px 10px;
   font-weight: 700;
}
.spans{
    font-weight: 600;
}
.lk{
    margin-top: 30px;
    padding: 10px 10px;
    font-weight: 600;
}
.al{
    padding-left: 20px;
    font-weight: 600;
}
.a2{
    transform: translateX(-9px);
    font-weight: 600;
}
</style>