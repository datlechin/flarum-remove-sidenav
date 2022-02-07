import app from 'flarum/admin/app';

app.initializers.add('datlechin/flarum-remove-sidenav', () => {
  app.extensionData.for('datlechin-remove-sidenav').registerPermission(
    {
      icon: 'fas fa-eye',
      label: app.translator.trans('datlechin-remove-sidenav.admin.permissions.view_sidenav_label'),
      permission: 'viewSidenav',
    },
    'start'
  );
});
