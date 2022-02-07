import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import User from 'flarum/common/models/User';
import Model from 'flarum/common/Model';

app.initializers.add('datlechin/flarum-remove-sidenav', () => {
  User.prototype.canViewSidenav = Model.attribute('canViewSidenav');

  extend(IndexPage.prototype, 'oncreate', function () {
    const user = app.session.user;
    if (user && user.canViewSidenav()) return;
    this.element.querySelector('.IndexPage-nav.sideNav').remove();
  });
});
