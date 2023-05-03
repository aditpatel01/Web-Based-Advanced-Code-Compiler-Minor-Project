# import requests
# import json
# from decouple import config

# def run_code(source, input):
#     RUN_URL = u'https://api.hackerearth.com/v4/partner/code-evaluation/submissions/'
#     CLIENT_SECRET = config("CLIENT_SECRET")
#     callback = "https://client.com/callback/"

#     data = {
#         'client_secret': CLIENT_SECRET,
#         'async': 0,
#         'source': source,
#         'input': input,
#         'lang': "PYTHON",
#         'time_limit': 5,
#         'memory_limit': 262144,
#         'callback' : callback,
#     }

#     r = requests.post(RUN_URL, data=data)
#     # json_formatted_str = json.dumps(r.json(), indent=4)

#     # print(json_formatted_str)
#     return r.json()


import json
import requests
import time
import urllib3

CODE_EVALUATION_URL = u'https://api.hackerearth.com/v4/partner/code-evaluation/submissions/'
CLIENT_SECRET = 'bd42c16b76ed9d3218f32aeceb87e456d2131787'

def run_code(source, input):

    data = {    
        'source': source,        
        'lang': "PYTHON",
        'time_limit': 5,
        'memory_limit': 243232,
        'input': input,
        "context": "{'id': 213121}",
        'id': "client-001"
    }
    headers = {"client-secret": CLIENT_SECRET}
    resp = requests.post(CODE_EVALUATION_URL, json=data, headers=headers)
    """
    This will also work:
    resp = requests.post(CODE_EVALUATION_URL, data=data, headers=headers)
    """
    print(resp.json())
    print(resp.json()['status_update_url'])
    time.sleep(5)
    return suar(resp.json()['status_update_url'])


def suar(url):

    payload={}
    headers = {
    'client-secret': 'bd42c16b76ed9d3218f32aeceb87e456d2131787',
    'Cookie': 'HE_UTS_ID=b4e19067e8694b0d87727196e772d399a27f6e3876cf4e89a2ccace6a5c39651; HE_UTS_ID_CL=6c3d6688f18a4c739348fe11ece01bb088b2d92d00dc4aafa784041555453c49; HE_UTS_ID_LP="/v4/partner/code-evaluation/submissions/1e55a483-ffff-4a6e-a678-4335c687db80/"; csrftoken=fHPC7UXjupAI2TjBjZZQe8fy6Cgw8UO8wq2VXQCi2mzip5RGY38KeFcSk3yfntg2'
    }
    response = requests.request("GET", url, headers=headers, data=payload)

    http = urllib3.PoolManager()
    r = http.request('GET', response.json()['result']['run_status']['output'])
    resu=r.data[:-1]
    finalRes=resu.decode('utf-8')
    res=dict()
    res['fir']=response.json()['result']['run_status']
    res['sec']=resu
    print('------')
    print(finalRes)
    print('------')
    return res
    # return response.json()['result']['run_status']

