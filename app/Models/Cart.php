<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Cart extends Model
{
    //

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /*
    @todo
    - need to finish pivot table setup
    -- need created_at so it can be garbage collected
    -- need quantity ADDED to cart, not quantity in stock
    - book: change in_stock to amt_in_stock
    */
    public function books(): BelongsToMany
    {
        return $this->belongsToMany(Book::class)->withPivot('quantity');
    }
}
