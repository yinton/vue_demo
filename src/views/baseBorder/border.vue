<template>
    <div class="border-container">
        <div class="main">
            <div class="main-content">
                <slot></slot>
            </div>
        </div>
        <div class="tl"></div>
        <div class="tr"></div>
        <div class="bl"></div>
        <div class="br"></div>
    </div>
</template>

<style scoped>
    .border-container {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        padding: 0;
    }
    .main {
        position: relative;
        z-index: 13;
        padding: 18px 25px;
        height: calc(100% - 36px);

    }
    .main-content {
        height: 100%;
        overflow: auto;
    }
    .tl {
        position: absolute;
        background: url("./border3.png") no-repeat left top;
        height: 50%;
        width: 50%;
        top: 0px;
        left: 0px;
        z-index: 11;
    }
    .tr {
        position: absolute;
        background: url("./border3.png") no-repeat right top;
        height: 50%;
        width: 50%;
        top: 0px;
        right: 0px;
        z-index: 11;
    }
    .bl {
        position: absolute;
        background: url("./border3.png") no-repeat left bottom;
        height: 50%;
        width: 50%;
        bottom: 0px;
        left: 0px;
        z-index: 11;
    }
    .br {
        position: absolute;
        background: url("./border3.png") no-repeat right bottom;
        height: 50%;
        width: 50%;
        bottom: 0px;
        right: 0px;
        z-index: 11;
    }
</style>