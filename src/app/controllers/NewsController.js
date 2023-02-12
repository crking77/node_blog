

class NewsController {

    // [GET] /news
    index(req, res) {
        res.render('news')
    }

    show(req, res) {
        res.send('Crking NewsDetail')
    }
}


module.exports = new NewsController;