import * as http from 'http';
import * as https from 'https';


export default class check  {
    static async get(req: http.IncomingMessage, res: http.ServerResponse) {
        res.writeHead(200, { 'Content-Type': 'application/json' })

        res.end(JSON.stringify(
            {
                "retcode": 0,
                "message": "OK",
                "data": {
                    "modified": true,
                    "protocol": {
                        "id": 0,
                        "app_id": 4,
                        "language": "en",
                        "user_proto": "",
                        "priv_proto": "",
                        "major": 7,
                        "minimum": 0,
                        "create_time": "0",
                        "teenager_proto": "",
                        "third_proto": ""
                    }
                }
            }
        ))
    }
}