<template>
<div>
    dayJs 情景的使用演示
    <div class="box">
        <div class="box-div">1、当前时间：写法 -- dayjs() 得到包含当前时间和日期的 Dayjs 对象 序列化对象：dayjs().toJSON() dayjs().toString() dayjs().toISOString()</div>
        <div class="box-div">2、可以解析传入的一个标准的 iso 8601 时间字符串 如：dayjs('1995-12-25')，可以解析传入的一个 Javascript Date 对象，如：dayjs(new Date(2018, 8, 18))</div>
        <div class="box-div">3、可以解析传入的一个Unix时间戳(秒)（10位数字）如：dayjs(1318781876406) 或者是（毫秒）十三位数字</div>
        <div>以上都是返回 day对象。。就像 new Date() 出来的一堆东西还要复杂的，它处理过的一堆</div>
        <div class="box-div">4、Dayjs 对象是不可变的，如果您想获得一个对象的拷贝，请执行 .clone() ，如：dayjs().clone()</div>
        <div class="box-div">5、检测当前 Dayjs 对象是否是一个有效的时间。 如：dayjs().isValid()</div>
        <div class="box-div">
            6、获取 + 改变时间
            <div>打印出当前年份：dayjs().year() --> 2020      设置当前年份：dayjs().year(2000) --> 得到的是day()对象</div>
            <div>打印当前月份：dayjs().month() --> 从 0 开始，如果结果为 4 则是5月份， 设置月份 ：dayjs().month(0)</div>  
            <div>获取或设置日期：从1开始 dayjs().date() / dayjs().date(1)</div>
            <div>获取或者设置星期，从星期天0开始：dayjs().day() / dayjs().day(1)</div>
            <div>获取或者设置小时，dayjs().hour() / dayjs().hour(12)</div>
            <div>获取或设置分钟，dayjs().minute() / dayjs().minute(58)</div>
            <div>获取或设置秒，dayjs().second() / dayjs().second(1)</div>
            <div>获取或设置毫秒，dayjs().millisecond() / dayjs().millisecond(1)</div>
        </div>
        <div class="box-div">
            7、获取从 dayjs 对象中取到的信息，传入的单位对大小写不敏感
            <div>获取月份，dayjs().get('month') 和上面的 dayjs().month()返回结果一样的 get方法中可用的参数还可以是 month day</div>
        </div>
        <div class="box-div">
            8、设置时间 dayjs().set('date', 1); 和上面的 dayjs().date(1)一致应该
        </div>
        <div class="box-div">
            9、可以对dayjs对象如下增加减少之类的操作：
            <div>增加（增加时间并返回一个新的dayjs对象）：dayjs().add(7, 'day'); 如此是在当前 天数，上，多加了 7天时间，返回的是day()对象，里面的天数是被加了7天的</div>
            <div>减少（减少时间并返回一个新的 Dayjs() 对象。）</div>
            <div>开头时间（减少时间并返回一个新的 Dayjs() 对象。）：dayjs().startOf('week'); // 取决于 locale 文件里 `weekStart` 的值，与其相对的是末尾时间</div>
        </div>
        <div>
            10、显示（格式化dayjs对象并且展示）
            格式化：接收一系列的时间日期字符串并替换成相应的值。
            dayjs('2019-01-25').format('YYYY/MM/DD HH:mm:ss') ，结果：2019/01/25 00:00:00 具体配置看文档即可

        </div>
        <div class="box-div">
            11、获取两个day对象的时间差（默认毫秒）：
            <div>
                如：const date1 = dayjs('2019-01-25') 、
                  const date2 = dayjs('2018-06-05')
                  <div>毫秒差：date1.diff(date2)</div>
                  <div>月份差：date1.diff(date2, 'month') 精确的话：date1.diff(date2, 'month', true)</div>
                  <div>Unix 时间戳 (毫秒) ：dayjs().valueOf()</div>
                  <div>返回月份天数：dayjs().daysInMonth() 当前月份  dayjs().month(1).daysInMonth()  为获取指定月份的天数</div>
            </div>
        </div>

    </div>
</div>
</template>    
<script> 
import dayjs from 'dayjs'
export default {
    mounted(){
        const date1 = dayjs('2019-01-25')
        const date2 = dayjs('2018-06-05')
        console.log(dayjs().toString())
       // console.log(dayjs().toLocaleString()) 
      //  console.log(dayjs('1995-12-25'))
      //  console.log(dayjs(new Date(2018, 8, 18)))
      //console.log(dayjs(1318781876406))
    },
    data(){
        return {
         
        }
    },
    methods:{

    }
}
</script>	    
<style scoped>
/* .box{

} */
.box-div{
    padding: 10px;
}
</style>