const http = require('node:http');
const { getDataFromDB } = require('./database/db.js');
const { sendJSONResponse } = require('./utils/sendJSONResponse.js');
const { getDataByPathParams } = require('./utils/getDataByPathParams.js');
const getDataByQueryParams = require('./utils/getDataByQueryParams');

const PORT = 8000
const server = http.createServer(async (req, res) => {
    const products = await getDataFromDB()

    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    const queryObj = Object.fromEntries(urlObj.searchParams)


    if (urlObj.pathname === '/api' && req.method === 'GET') {
        let filteredData = getDataByQueryParams(products, queryObj)
        console.log(queryObj)
        sendJSONResponse(res, 200, filteredData)
    }
    else if (req.url.startsWith('/api/category') && req.method === 'GET') {
        const category = req.url.split('/').pop()
        const filteredData = getDataByPathParams(products, 'category', "Collar")
        sendJSONResponse(res, 200, filteredData)
    }
    else if (req.url.startsWith('/api/is_available') && req.method === 'GET') {
        const is_available = req.url.split('/').pop()
        const filteredData = getDataByPathParams(products, 'is_available', "true")
        sendJSONResponse(res, 200, filteredData)
    }
    else {
        sendJSONResponse(res, 404, ({ error: 'not found', message: 'Requested route does not exist' }))
    }

})

server.listen(PORT, () => console.log(`Server is running on : ${PORT}`))