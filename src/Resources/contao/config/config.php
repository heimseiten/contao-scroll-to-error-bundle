<?php

/*
 * This file is part of scroll to error.
 * 
 * (c) Niels Hegmans 2021 <info@heimseiten.de>
 * @license GPL-3.0-or-later
 * For the full copyright and license information,
 * please view the LICENSE file that was distributed with this source code.
 * @link https://github.com/heimseiten/contao-scroll-to-error-bundle
 */

if (TL_MODE == 'FE')
{
    $GLOBALS['TL_JAVASCRIPT'][] = 'bundles/contaoscrolltoerror/scroll_to_error.js';    
}
