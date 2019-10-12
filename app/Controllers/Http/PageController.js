'use strict';

class PageController {
    home({ view }) {
        return view.render('welcome')
    }

    contact({ view }) {
        return view.render('contact')
    }
}

module.exports = PageController;
