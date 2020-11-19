<template>
    <div>
        <div>1、导出Excel,外加map的另类操作，看注释即可</div>
        <filename-option v-model="filename" />
        <autoWidth-option v-model="autoWidth" />
        <bookType-option v-model="bookType" />
        <el-button :loading="downloadLoading" type="danger" @click.stop="handleDownload">填写完参数后导出 excel</el-button>
        <el-table v-loading="listLoading" :data="list" element-loading-text="拼命加载中" border fit highlight-current-row @selection-change="handleSelectionChange" ref="multipleTable">
           <el-table-column
                align="center"
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column align="center" label="Id" width="95">
                <template slot-scope="scope">
                {{ scope.$index + 1 }}
                </template>
            </el-table-column>
            <el-table-column label="Title">
                <template slot-scope="scope">
                {{ scope.row.title }}
                </template>
            </el-table-column>
            <el-table-column label="Author" width="110" align="center">
                <template slot-scope="scope">
                <el-tag>{{ scope.row.author }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="Readings" width="115" align="center">
                <template slot-scope="scope">
                {{ scope.row.pageviews }}
                </template>
            </el-table-column>
            <el-table-column align="center" label="Date" width="220">
                <template slot-scope="scope">
                <i class="el-icon-time" />
                <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
                </template>
            </el-table-column>
        </el-table>
        <div>2、导出所选项</div>
        <div>其实也可以是，吧选中的列，给导出出去，其实思路是一样的，选中后，拿出选中项，放入数组，</div>
        <el-button :loading="downloadLoading" type="danger" @click.stop="handleLook">查看选中项，选中项即是一个数组（只有选中项）再赋值给 插件，即是打印出所选项了</el-button>
        <div>3、导出多级表头--详见 demo 吧（element-admin那一套）</div>
        <div>4、上传Excel，其实是选中某个 Excel 以后，在本地逆向生成table表格</div>
        <div style="maring-top:150px;">
            <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />
            <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
               <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
            </el-table>
        </div>
    </div>
</template>
<script>
import FilenameOption from './components/FilenameOption'
import AutoWidthOption from './components/AutoWidthOption'
import BookTypeOption from './components/BookTypeOption'
import UploadExcelComponent from './components/UploadExcel'
import { parseTime } from '@/utils'
const list = [
    {author: 'Donna11',id: 1,title:'标题1',pageviews: 1684,display_time: "1981-08-26 13:08:32",timestamp: 1155847172644},
    {author: 'Donna22',id: 1,title:'标题2',pageviews: 1685,display_time: "1981-08-26 13:08:33",timestamp: 1155847172690},
    {author: 'Donna33',id: 1,title:'标题3',pageviews: 1686,display_time: "1981-08-26 13:08:34",timestamp: 1155648279680}
];
export default{
    components:{
        FilenameOption,
        AutoWidthOption,
        BookTypeOption,
        UploadExcelComponent
    },
    mounted(){
        setTimeout(()=>{
            this.listLoading = false
        },1500)

        // demo
        let arr = [{name:'name11',title:'title1',id:1},{name:'name22',title:'title2',id:2}]
        console.log('arr==',arr)
        // 现在想拿出某一个字段，作为数组，比如，只拿出 id 字段或者是那么字段 ，其实也可以用 forEach 但是 map 似乎是要更加简单一些的
        let arr1 =  this.demoMap(arr)  // 详见 demoMap 的写法，之前是没用过这样子写法的，注意是不需要加 {} 的，加了，就是返回的本身了而不是一个只有某字段的数组
        console.log('arr1==',arr1)
    },
    filters:{                  // 默认的会将字段的值作为第一个参数，所以这里只传入第一个参数，实际上是表示的是第二个参数了
        parseTime 
    },
    data(){
        return {
            list,
            filename: '',
            autoWidth: true,
            bookType: 'xlsx',
            downloadLoading:false,
            listLoading: true,
            multipleSelection:[],
            tableData: [],
            tableHeader: []
        }
    },
    methods:{
        handleSelectionChange(val) {
             this.multipleSelection = val
        },
        handleDownload() {
            this.downloadLoading = true
            import('@/vendor/Export2Excel').then(excel => {
                console.log('引入了阿啥的客户方'+excel);
                const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']    // 这是生成的 excel 的字段 和下面的字段一一对应
                const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time','timestamp']  // 这是数组中的原始子段，可以在导出时定义为新的字段，如上
                const list = this.list
                const data = this.formatJson(filterVal, list)
                console.log('data===',data)
                excel.export_json_to_excel({
                header: tHeader,
                data,
                filename: this.filename,
                autoWidth: this.autoWidth,
                bookType: this.bookType
                })
                this.downloadLoading = false
            })
        },
        /*
        是将 内层的 map 中的 每一项中（假设有）timestamp字段，那么，使用函数处理之,在返回处理的字段的新的值，最后的结果时数组的数组；
                                           filterVal将被替换为 value 值，其原始数组是 key 值；并且最后是返回数组的数组；
         但这不是简单处理，比如，原始 list 为： list:[{author: 'Donna11',display_time: "1981-08-26 13:08:32",timestamp: 1155847172644}}       
                                      第一个参数为：const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time','timestamp']
                                             处理以后：[ [1', '标题1', 'Donnall', 1684, '"1981-08-26 13:08:32"','"2006-08-18 04:39:32"'] ]
                                             也就是，将其替换为了 数组的数组； 里面之前是key 值，最终替换为了 value 值 并且返回
        */ 
        formatJson(filterVal, jsonData) {  
            return jsonData.map(v => filterVal.map(j => { 
                if (j === 'timestamp') {
                return parseTime(v[j])
                } else {
                return v[j]
                }
            }))
        },
        demoMap(arr){
            return arr.map(v => v.name)
        },
        handleLook(){
            console.log(this.multipleSelection)
        },
        beforeUpload(file) {
            const isLt1M = file.size / 1024 / 1024 < 1

            if (isLt1M) {
                return true
            }

            this.$message({
                message: 'Please do not upload files larger than 1m in size.',
                type: 'warning'
            })
            return false
        }, 
        handleSuccess({ results, header }) {
            console.log('父组件传的值results==',results)
            console.log('父组件传的值==header',header)
            this.tableData = results
            this.tableHeader = header
        }
    }

}
</script>  
<style scoped>

</style>
