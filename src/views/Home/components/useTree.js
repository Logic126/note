// TODO: 组件设计有问题，调整在Tree.md中描述
import { ref } from 'vue'
import dataList from './handleData'

// 数据
const data = ref(dataList)
// 展开的节点
const expandedNode = ref([])
// 当前选中的节点
const currentNode = ref({})

const useTree = () => {
  return {
    data,
    expandedNode,
    currentNode,
    handleTargetFolder,
    showItem,
    showFolder
  }
}

// 展开折叠
const handleTargetFolder = currentData => {
  // current
  currentNode.value = currentData
  //
  const index = expandedNode.value.indexOf(currentData.id)
  if (index > -1) {
    // 收起
    expandedNode.value.splice(index, 1)
    deepList(data.value, currentData.id, id => {
      const index = expandedNode.value.indexOf(id)
      if (index > -1) {
        expandedNode.value.splice(index, 1)
      }
    })
  } else {
    // 展开
    expandedNode.value.push(currentData.id)
  }
}

const showItem = data => {
  if (
    expandedNode.value.includes(data.id) ||
    expandedNode.value.includes(data.pid)
  ) {
    return true
  }
  return false
}

// 遍历
const deepList = (list, id, cb) => {
  list.forEach(item => {
    if (item.pid === id) {
      cb(item.id)
      deepList(list, item.id, cb)
    }
  })
}

const showFolder = folder => {
  const open = expandedNode.value.indexOf(folder.id) > -1
  const is_first = folder.levle === 0
  return open || is_first
}

export default useTree
