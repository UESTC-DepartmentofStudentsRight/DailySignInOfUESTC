import requests
import json
from datetime import datetime as dt
import time

payload = {"healthCondition": "正常",
           "todayMorningTemperature": "36.5°C~36.9°C",
           "yesterdayEveningTemperature": "36.5°C~36.9°C",
           "yesterdayMiddayTemperature": "36.5°C~36.9°C",
           "location": "四川省成都市郫都区S9"
           }

url = "https://jzsz.uestc.edu.cn/wxvacation/./monitorRegisterForReturned"

headers = {'Content-Type': 'application/json ',
           'Cookie': 'JSESSIONID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'  # your cookie
           }

while True:
    success = False  # 判断打卡是否成功
    h = dt.now().hour
    m = dt.now().minute
    if h == 0 and m == 1:  # 到达打卡时间
        while not success and m < 10:  # 未成功则一直打卡,持续10min
            r = [
                requests.post(url, data=json.dumps(payload), headers=headers),
            ]
            for i in r:  # 检测是否打卡成功
                status = json.loads(i.text)
                if status["status"]:  # 成功其中一次则默认成功打卡
                    success = True
            time.sleep(30)
            m = dt.now().minute
        if not success:  # 失败则xxx
            pass
        time.sleep(60 * 60 * 24 - 10 * 60)  # 然后睡觉
