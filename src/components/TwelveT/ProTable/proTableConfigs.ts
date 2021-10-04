/**
 * proTable默认配置
 */
export default {
    // 支持横向超出自适应
    scroll: {
        x: 'auto'
    },
    // 分页设置
    pagination: {
        // 是否允许每页大小更改 
        showSizeChanger: true,
        // 每页显示条数
        pageSize: 10,
    },
    // 处理返回数据
    // postData: (data: any[]) => {
    //     if (data instanceof Array) {
    //         return data
    //     }
    //     const { records, total } = data
    //     console.log(records)
    //     return records
    // },
    // 展开子列表设置
    expandable: {
        // 展开列名称
        childrenColumnName: 'children',
        // 展开缩进px
        indentSize: 15,
        defaultExpandAllRows: false,
    }
}