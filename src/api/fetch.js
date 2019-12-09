import axios from 'axios'

// 获取后台数据方法封装

function fetch (path,callback,method) {
  axios({
    url:'http://localhost:8080' + path,
    method:method || "GET"
  }).then(res=>{
    let data = res.data
    callback && callback(data)
  }).catch(err=>{
    console.log(err)
  }).then()
}

export default fetch