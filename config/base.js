import axios from 'axios'
export default {
  request(method, url, param, cb, errcb) {
    //token认证
    const config = {
      //baseURL: ' http://data.blcu.edu.cn/mis-web',
      baseURL: 'http://localhost:8081/api', //开发
      url: url,
      method: method,
      data: param,
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    };
    axios(config).then((res) => {
      var data = res.data;
      if (data.status=="1") {
        // 请求成功
        if (cb) {
          cb(data)
        }
      } else {
        // 请求错误
        console.error(data);
        this.$message('sorry,服务器报错');
        if (errcb) {
          errcb(data)
        } else {
          alert(data)
        }
      }
    }).catch((error) => {
      console.error(error)
      // alert('发生错误')
    })
  },
  $stringify(param) {
    var query = []
    for (var k in param) {
      query.push(k + '=' + param[k])
    }
    return query.join('&')
  },
}
