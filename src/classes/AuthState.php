<?php

namespace klongchu\sessionout\classes;

use klongchu\sessionout\Events\AuthSessionBegins;
use Auth;

class AuthState
{
    /**
     * broadcast user auth session available
     */
    public static function sessionAvailable()
    {
        broadcast(new AuthSessionBegins(Auth::id()));
    }
}
