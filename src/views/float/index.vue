<template>
    <div class="float">
        <div>
            一：首先我们说下什么是浮动？ 浮动：使得元素脱离文档流，按照指定的方向(左或右发生移动)，直到它的边缘碰到包含框或另一个浮动框为止。浮动只会影响它后面的那个元素，如果给2 一个浮动的话，3会在2后面，如果给4，就不会有什么变化的，右浮动的话其实就是从右边往左边排列,设置了float的元素脱离了文档流。需要注意在使用过浮动后，需要清除浮动，从而避免影响后面的非浮动元素。
        </div>
        <div class="float-box">
            <div class="float-box-op">
                <div class="case1">1--左浮动</div>
                <div class="case2">2</div>
                <div class="case3">3</div>
                <div class="case4">4</div>
            </div>
            <div>浮动对文字的影响，我们现在给1框浮动 浮动框只会占据自己的位置，使得文字可以围绕浮动框显示</div>
            <div style="width:100%;height:140px;background:#f7e5ff;">
                <div style="background:#ccc;width:100px;height:70px;float:left;margin:10px 10px -10px 10px;">121</div>
                <div>
                    打字辛苦啊啊啊啊打字辛苦啊啊啊啊啊打字辛苦啊啊啊啊打字辛苦啊啊啊啊啊打字辛苦啊啊啊啊打字辛苦啊啊啊啊啊打字辛苦啊啊啊啊打字辛苦啊啊啊啊啊打字辛苦啊啊啊啊打字辛苦啊啊啊啊啊打字辛苦啊啊啊啊打字辛苦啊啊啊啊啊打字辛苦啊啊啊啊打字辛苦啊啊啊啊啊打字辛苦啊啊啊啊打字辛苦啊啊啊啊啊打字辛苦啊啊啊啊打字辛苦啊啊啊啊啊打字辛苦啊啊啊啊打字辛苦啊啊啊啊啊打字辛苦啊啊啊啊打字辛苦啊啊啊啊啊打字辛苦啊啊啊啊打字辛苦啊啊啊啊啊打字辛苦啊啊啊啊打字辛苦啊啊啊啊啊打字辛苦啊啊啊啊打字辛苦啊啊啊啊啊打字辛苦啊啊啊啊打字辛苦啊啊啊啊啊打字辛苦啊啊啊啊打字辛苦啊啊啊啊啊打字辛苦啊啊啊啊打字辛苦啊啊啊啊啊
                </div>
            </div>
            <div style="height:200px;background:pink;">
                浮动锚点和浮动参考？听都没听过！
                <!-- 测试浮动参考 -->
                <div style="width: 200px;text-align: justify;background: yellow">
                    <span>这里有很多文字，且要超出一行且要超出一行且要超出一行</span>
                    <p style="float: right;color:blue">更多</p>
                </div>
                <div>
                    结果已经出来了，那么，为什么呢？
                    这个时候就要邀请我们的浮动参考出场了。浮动参考，顾名思义，就是指float元素要对齐参考的实体是谁？
                </div>
            </div>
            清除浮动 第三个 clear：both 就不能再和左右做朋友了 或者 clear：left
            <div>
                <div class="li"></div>
                <div class="li"></div>
                <div class="li"></div>
                <div class="li"></div>
                <div class="li"></div>
                <div class="li"></div>
                <div class="li"></div>
                <div class="li"></div>
                <div class="li"></div>
                <div class="li"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.float-box {
    width: 92%;
    background-color:  #f2f2f2;
    padding: 0 4%;
    
}
.float-box-op { 
    width: 100%;
    height: 300px;
    background-color: #f7e5ff;

}
.case1 {width: 320px;height: 230px;background-color: cadetblue;
    float: left;
}
.case2 {width: 330px;height: 200px;background-color: orange;
float: left;
}
.case3 {width: 350px;height: 240px;background-color: red;
float: left;
}
.case4 {width: 380px;height: 200px;background-color: palegoldenrod;
float: left;
}
.li{ 
    float: left;
    margin: 10px;
    width: 40px;
    height: 40px;
    background: yellow
}
.li:nth-of-type(3){
    clear: left;
}
</style>
