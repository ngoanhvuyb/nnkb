let getHomePage = (req, res) => {
    return res.render("homepage.ejs", {
        // user: req.user
    })
};

let handleAccount = (req, res) => {    
    return res.render("account.ejs");
};

module.exports = {
    getHomePage: getHomePage,
    handleAccount:handleAccount
};
