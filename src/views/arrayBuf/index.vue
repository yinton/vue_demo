<template>
    <div class="buf">
        <div class="box">
            1、生成类似[1-100]这样的的数组,测试大量数据的数组时可以这样生成：
            <pre>
                // fill
                const arr = new Array(100).fill(0).map((item, index) => index + 1)

                // Array.from() 
                const arr = Array.from(Array(100), (v, k) => k + 1)

                // ... + array.keys()  生成的是0-99的数组
                const ary = [...Array(100).keys()] 
            </pre>
        </div>
        <div class="box">
            2、数组解构赋值应用
            <pre>
                // 交换变量
                [a, b] = [b, a]
                [o.a, o.b] = [o.b, o.a]
                // 生成剩余数组
                const [a, ...rest] = [...'asdf'] // a：'a'，rest: ["s", "d", "f"]
            </pre>
        </div>
        <div class="box">
            3、数组和对象浅拷贝 拷贝后 修改不会互相影响
            <pre>
                const arr = [1, 2, 3]
                const arrClone = [...arr]
                // 对象也可以这样浅拷贝
                const obj = { a: 1 }
                const objClone = { ...obj }
            </pre>
        </div>
        <div class="box">
            4、数组合并  扩展运送符 将数组展开
            <pre>
                const arr1 = [1, 2, 3]
                const arr2 = [4, 5, 6]
                const arr3 = [7, 8, 9]
                const arr = [...arr1, ...arr2, ...arr3]
            </pre>
        </div>
        <div class="box">
            5、数组去重 简单数组 
            <pre>
                const arr = [1, 1, 2, 2, 3, 4, 5, 5]
                const newArr = [...new Set(arr)]
            </pre>
        </div>
        <div class="box">
            6、数组取交集 (相同的部分)
            <pre>
                const a = [0, 1, 2, 3, 4, 5]
                const b = [3, 4, 5, 6, 7, 8]
                const duplicatedValues = [...new Set(a)].filter(item => b.includes(item))
                duplicatedValues // [3, 4, 5]
            </pre>
        </div>
        <div class="box">
            7、数组取差集 new Set 先剔除重复项 得到  0, 1, 2, 3, 4, 5, 6, 7, 8
            <pre>
                const a = [0, 1, 2, 3, 4, 5]
                const b = [3, 4, 5, 6, 7, 8]
                const diffValues = [...new Set([...a, ...b])].filter(item => !b.includes(item) || !a.includes(item)) // [0, 1, 2, 6, 7, 8]
            </pre>

        </div>
        <div class="box">
            8、数组转对象
            <pre>
                const arr = [1, 2, 3, 4]
                const newObj = {...arr} // {0: 1, 1: 2, 2: 3, 3: 4}
                const obj = {0: 0, 1: 1, 2: 2, length: 3}
                // 对象转数组不能用展开操作符，因为展开操作符必须用在可迭代对象上
                let newArr = [...obj] // Uncaught TypeError: object is not iterable...
                // 可以使用Array.form()将类数组对象转为数组
                let newArr = Array.from(obj) // [0, 1, 2]
            </pre>
        </div>
        <div class="box">
            8、数组摊平 使用 includes （可是数组或者字符串方法） 找出数组中 每一项 的 有 那个字符的 那一项，拿出来
            <pre>
                const obj = {a: '群主', b: '男群友', c: '女裙友', d: '未知性别'}
                const getName = function (item) { return item.includes('群')}
                // 方法   Object.values(obj) 返回对象中 value 值组成的数组
                const flatArr = Object.values(obj).flat().filter(getName)
                二维数组用array.flat()，三维及以上用array.flatMap()。array.flat(2)可以传参数字如 2，表示要摊平的层数。
            </pre>
        </div>
        <div class="box">
            数组常用遍历
            <pre>
                数组常用遍历有 forEach、every、some、filter、map、reduce、reduceRight、find、findIndex 等方法，很多方法都可以达到同样的效果。数组方法不仅要会用，而且要用好。要用好就要知道什么时候用什么方法。
            </pre>
        </div>
        <div class="box">
            9、遍历的混合使用 filter、map方法返回值仍旧是一个数组，所以可以搭配其他数组遍历方法混合使用。注意遍历越多效率越低~
            <pre>
                const arr = [1, 2, 3, 4, 5]
                const value = arr
                    .map(item => item * 3)
                    .filter(item => item % 2 === 0)
                    .map(item => item + 1)
                    .reduce((prev, curr) => prev + curr, 0)
            </pre>
        </div>
        <div class="box">
             10、检测数组所有元素是否都符合判断条件 every 或者 some
            <pre>
                const arr = [1, 2, 3, 4, 5]
                const isAllNum = arr.every(item => typeof item === 'number')
            </pre>
        </div>
        <div class="box">
             11、找出第一个符合条件的元素/下标
            <pre>
                const arr = [1, 2, 3, 4, 5]
                const findItem = arr.find(item => item === 3) // 返回子项
                const findIndex = arr.findIndex(item => item === 3) // 返回子项的下标

                // 我以后再也不想看见下面这样的代码了😂
                let findIndex
                arr.find((item, index) => {
                    if (item === 3) {
                        findIndex = index
                    }
                })
            </pre>
        </div>
        <div class="box">
             12、数组使用误区
            <pre>
                数组的方法很多，很多方法都可以达到同样的效果，所以在使用时要根据需求使用合适的方法。
                垃圾代码产生的很大原因就是数组常用方法使用不当，这里有以下需要注意的点：

                array.includes() 和 array.indexOf()
                array.includes() 返回布尔值，array.indexOf() 返回数组子项的索引。indexOf 一定要在需要索引值的情况下使用。

                array.indexOf()找 NaN 会找不到，返回-1，array.includes()能找到，返回true~
            </pre>
        </div>    
        <div class="box">
             13、array.find() 、 array.findIndex() 和 array.some()
            <pre>
                array.find()返回值是第一个符合条件的数组子项，array.findIndex() 返回第一个符合条件的数组子项的下标，array.some() 返回有无复合条件的子项，如有返回true，若无返回false。注意这三个都是短路操作，即找到符合条件的之后就不在继续遍历。
                在需要数组的子项的时候使用array.find() ；需要子项的索引值的时候使用 array.findIndex() ；而若只需要知道有无符合条件的子项，则用 array.some()。

                array.find() 和 array.filter()
                只需要知道 array.filter() 返回的是所有符合条件的子项组成的数组，会遍历所有数组；而 array.find() 只返回第一个符合条件的子项，是短路操作。不再举例~
            </pre>
        </div>         
        <div class="box">
             14、合理使用 Set 数据结构
            <pre>
                由于 es6 原生提供了 Set 数据结构，而 Set 可以保证子项不重复，且和数组转换十分方便，所以在一些可能会涉及重复添加的场景下可以直接使用 Set 代替 Array，避免了多个地方重复判断是否已经存在该子项。
                const set = new Set()
                set.add(1)
                set.add(1)
                set.add(1)
                set.size // 1
                const arr = [...set] // arr: [1]
            </pre>
        </div>          
        <div class="box">
            15、强大的reduce（奇巧淫技）
            <pre>
                array.reduce 遍历并将当前次回调函数的返回值作为下一次回调函数执行的第一个参数。
                利用 array.reduce 替代一些需要多次遍历的场景，可以极大提高代码运行效率。
                利用reduce 输出一个数字/字符串
                假如有如下每个元素都由字母's'加数字组成的数组arr，现在找出其中最大的数字：（arr不为空）
                const arr = ['s0', 's4', 's1', 's2', 's8', 's3']

                // 方法1  进行了多次遍历，低效
                const newArr = arr.map(item => item.substring(1)).map(item => Number(item))
                const maxS = Math.max(...newArr)

                // 方法2  一次遍历
                const maxS = arr.reduce((prev, cur) => {
                const curIndex = Number(cur.replace('s', ''))
                return curIndex > prev ? curIndex : prev
                }, 0)

                实际运用：比如在 vue 的 computed 中 计算总价格
                          
                computed: {
                    submitBarText() {
                    //  const count = this.checkedGoods.length;
                    const count = this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.num : 0), 0);
                    return '结算' + (count ? `(${count})` : '');
                    },
                    totalPrice() {
                    let totals = 0;
                    totals = this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price*item.num : 0), 0);
                    return totals*100;
                    }
                },

                利用reduce 输出一个数组/对象
                const arr = [1, 2, 3, 4, 5]

                // 方法1  遍历了两次，效率低
                const value = arr.filter(item => item % 2 === 0).map(item => ({ value: item }))

                // 方法1  一次遍历，效率高
                const value = arr.reduce((prev, curr) => {
                    return curr % 2 === 0 ? [...prev, { value: curr }] : prev
                }, [])


                这里还有一个替代 reverse 函数的技巧

                const myReverse = (arr = []) => {
                    return  arr.reduceRight((prev, cur) => [...prev, cur], []) // 也可以返回逗号表达式 (prev.push(cur), prev)
                }
            </pre>
        </div>           
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    mounted(){
        const arr = [1, 2, 3, 4, 5];

        // 方法1  遍历了两次，效率低
   //     const value = arr.filter(item => item % 2 === 0).map(item => ({ value: item }))

        // 方法1  一次遍历，效率高
        const value = arr.reduce((prev, curr) => {
            return curr % 2 === 0 ? [...prev, { value: curr }] : prev
        }, []);
        console.log(value)
    }
}
</script>  
<style scoped>
.buf {
    padding: 20px;
}
.box {
    margin: 15px 0;
}
</style>