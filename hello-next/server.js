// app
//     .prepare()
//     .then(() => {
//         const server = express()

//         //Code to handle 'localhost:3000/p/12345' routing
//         server.get('/p/:id', (req, res) => {
//             const actualPage = '/post';
//             const queryParams = {title: req.params.id};
//             app.render(req, res, actualPage, queryParams);
//         })

//         server.get('*', (req, res) => {
//             return handle(req, res);
//         })

//         server.listen(3000, err => {
//             if(err) throw err;
//             console.log('> Ready on http://localhost:3000');
//         })
//     })
//     .catch(ex => {
//         console.error(ex.stack);
//         process.exit(1);
//     })