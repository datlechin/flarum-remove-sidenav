<?php

/*
 * This file is part of datlechin/flarum-remove-sidenav.
 *
 * Copyright (c) 2022 Ngo Quoc Dat.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Datlechin\RemoveSidenav;

use Datlechin\RemoveSidenav\Listeners\AddUserAttributes;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),

    new Extend\Locales(__DIR__ . '/locale'),
    (new Extend\ApiSerializer(UserSerializer::class))
        ->attributes(function (UserSerializer $serializer, \Flarum\User\User $user, array $attributes) {
            $actor = $serializer->getActor();

            $attributes['canViewSidenav'] = $actor->id === $user->id && $actor->can('viewSidenav', $user);

            return $attributes;
        }),
];
