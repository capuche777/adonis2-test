'use strict';

class PageController {
    home({ view }) {
        return view.render('pages/welcome')
    }

    contact({ view }) {
        return view.render('pages/contact')
    }

    edge({ view }) {
        let user = {
            name: 'Jeremias',
            age: 30,
            location: 'Guastatoya, EP',
            loggedIn: false
        };
        return view.render('pages/learning', {user})
    }

    admin({ view }) {
        return view.render('pages/account')
    }
}

module.exports = PageController;
