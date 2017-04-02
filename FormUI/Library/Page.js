function Page() {
    this.Render = function (req, res, pageurl, resdata) {
        res.render(pageurl, resdata, function (err, html) {
            if (err) {
                res.type('text/plain').status(500).send('访问异常，正千里传音呼叫程序猿上线排查！/r/n' + err);
            }
            else {
                res.status(200).send(html);
            }
        });
    }
}

module.exports = Page;
