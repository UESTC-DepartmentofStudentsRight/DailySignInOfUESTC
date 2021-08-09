
/**
 * @fileoverview Example to compose HTTP request
 * and handle the response.
 *
 */

const url = "https://jzsz.uestc.edu.cn/wxvacation/monitorRegister;
const method = "POST";
const headers = {"Content-Type": "application/json", "Cookie": ""};//此处加入自己的coockie
const data ={
  "isLeaveChengdu" : 1,
  "currentAddress" : "广东省深圳市福田区高级中学",
  "isContactWuhan" : 0,
  "isSymptom" : 0,
  "temperature" : "36.5°C~36.9°C",
  "province" : "广东省",
  "healthInfo" : "正常",
  "isFever" : 0,
  "remark" : "",
  "city" : "深圳市",
  "county" : "福田区",
  "isInSchool" : 0
}

const myRequest = {
    url: url,
    method: method, // Optional, default GET.
    headers: headers, // Optional.
    body: JSON.stringify(data) // Optional.
};

$task.fetch(myRequest).then(response => {
    // response.statusCode, response.headers, response.body
    console.log(response.body);
    $notify("Title", "Subtitle", response.body); // Success!
    $done();
}, reason => {
    // reason.error
    $notify("Title", "Subtitle", reason.error); // Error!
    $done();
});
