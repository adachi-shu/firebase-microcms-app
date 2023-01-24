const { join } = require('path')
const { https } = require('firebase-functions')
const { default: next } = require('next')
const {axios} = require("axios")

const nextjsDistDir = join('src', require('./src/next.config.js').distDir)

const nextjsServer = next({
  dev: false,
  conf: {
    distDir: nextjsDistDir,
  },
})
const nextjsHandle = nextjsServer.getRequestHandler()

exports.nextjsFunc = https.onRequest(async(req, res) => {
  const {id, draftKey} = req.query;
  try {
    // getでデータを取得
    const info = await axios.get(`https://myblogadachi.microcms.io/api/v1//${id}?draftKey=${draftKey}`, {headers: {"X-MICROCMS-API-KEY": "oFEJGZ1QvJoMwkZepUknvuYNrMXABqg4kjr4"}});
    const previewData = info.data;
  // 取得したデータが変数usersに格納される
  } catch (error) {
  // データ取得が失敗した場合
    console.error(error);
  }
  return nextjsServer.prepare().then(() => nextjsHandle(req, res))
})
