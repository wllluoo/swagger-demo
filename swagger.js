/*
 * @Author: zhongpeipei 
 * @Date: 2018-08-12 23:31:25 
 * @Last Modified by: zhongpeipei
 * @Last Modified time: 2018-08-13 00:00:28
 */
const Swagger = require('swagger-client');
const url = 'https://app.swaggerhub.com/apis/swagger-test93/test/1.0.0#/store/getInventory';
const request = {
  url,
  query: {
    url,
    // proxy-token: 'bezecnf',
  },
  method: "GET",
  // body,
  // headers,
  // requestInterceptor,
  // responseInterceptor,
  // userFetch
}

Swagger(url).then(({ spec: { paths, tags } }) => {
  console.log(paths, tags);
  
});

// Swagger.http(request)
//   .then((res) => {
//     // res.statusCode // status code
//     // res.statusText // status text, ie: "Not Found"
//     // res.body       // JSON object or undefined
//     // res.obj        // same as above, legacy
//     // res.text       // textual body, or Blob
//     // res.headers    // header hash
//     console.log(res);
    
//   })
//   .catch((err) => {
//     // err            // instanceof Error
//     // err.response   // response or null
//     console.log('err', err);
    
//   })

