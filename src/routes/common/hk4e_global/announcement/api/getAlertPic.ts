import http from 'http';
import https from 'https';


export default class check {
    static async get(req: http.IncomingMessage, res: http.ServerResponse){

        res.write(`{"retcode":0,"message":"OK","data":{"total":0,"list":[]}}`);
        res.end();
    }
}