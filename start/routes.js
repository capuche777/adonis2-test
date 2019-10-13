'use strict'

const Route = use('Route');

// Route.any('*', 'PageController.home');
Route.get('/', 'PageController.home').as('home');
Route.get('/edge', 'PageController.edge').as('edge');
Route.get('/account', 'PageController.admin').as('admin');
Route.get('/contact', 'PageController.contact').as('contact');
// Route.get('/:category/:min/:max', 'ItemController.index');

Route.group(() => {
    Route.get('/dragon-ball-z', () => `<h1>Dragon Ball Z</h1>`);
    Route.get('/call-of-duty', () => `<h1>Call Of Duty</h1>`);
}).prefix('games/ps4');
