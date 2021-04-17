
/**
 * @fileoverview Example to compose HTTP request
 * and handle the response.
 *
 */

const url = "https://jzsz.uestc.edu.cn/wxvacation/./monitorRegisterForReturned";
const method = "POST";
const headers = {"Content-Type": "application/json", "Cookie": ""};//此处加入自己的coockie
const data = {
  "healthCondition" : "正常",
  "todayMorningTemperature" : "36°C以下",
  "yesterdayEveningTemperature" : "36°C以下",
  "yesterdayMiddayTemperature" : "36°C以下",
  "location" : "四川省成都市郫都区S9"
};

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
