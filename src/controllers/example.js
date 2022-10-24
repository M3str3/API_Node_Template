const hello = (req, res) => {
    res.json({
        "Title":"Hello, is working !!!"
    });
};

module.exports = { hello };