import treeData from './data.json' // 树的数据

const dataList = []
deepList(null, [treeData], 0)

// 扁平化数据
function deepList(pid, list, level) {
  if (list && Array.isArray(list) && list.length) {
    list.forEach(item => {
      dataList.push({
        id: item.code,
        pid,
        level,
        open: false,
        name: item.value,
        count:
          item.children && Array.isArray(item.children) && item.children.length
      })
      if (item.children) {
        deepList(item.code, item.children, level + 1)
      }
    })
  }
}

// console.table(dataList)
export default dataList
