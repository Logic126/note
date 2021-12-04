import { ref } from 'vue'

//
const folder_width = ref(200)
const file_width = ref(200)
const min_folder_width = 180
const min_file_width = 180
let move_folder_flag = false
let move_folder_x = 0
let move_file_flag = false
let move_file_x = 0
const time_speed = 220
let timer = null

// 修改文件夹宽度 TODO: 需要优化
const handleChangeFolderWidth = width => {
  if (move_folder_x === 0) {
    move_folder_x = width
  } else {
    if (move_folder_x !== width) {
      const speed = width - move_folder_x
      if (folder_width.value <= min_folder_width && speed <= 0) {
        return
      }
      folder_width.value = folder_width.value + speed
      move_folder_x = width
    }
  }
}

// 修改文件列表宽度 TODO: 需要优化
const handleChangeFileWidth = width => {
  if (move_file_x === 0) {
    move_file_x = width
  } else {
    if (move_file_x !== width) {
      const speed = width - move_file_x
      if (file_width.value <= min_file_width && speed <= 0) {
        return
      }
      file_width.value = file_width.value + speed
      move_file_x = width
    }
  }
}

const handleMousedown = type => {
  if (type === 'folder') {
    move_folder_flag = true
  }
  if (type === 'file') {
    move_file_flag = true
  }
}

const handleMouseup = () => {
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    move_folder_flag = false
    move_file_flag = false
  }, time_speed)
}

const handleMousemove = e => {
  if (move_folder_flag) {
    handleChangeFolderWidth(e.clientX)
  }
  if (move_file_flag) {
    handleChangeFileWidth(e.clientX)
  }
}

export default function () {
  return {
    folder_width,
    file_width,
    handleMousedown,
    handleMouseup,
    handleMousemove
  }
}
