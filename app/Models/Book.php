<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Book extends Model
{
    protected $primaryKey = 'isbn';

    protected $fillable = [
        'isbn',
        'title',
        'author',
        'in_stock',
        'cover_image_path',
    ];


    public function books(): BelongsToMany
    {
        return $this->belongsToMany(Cart::class);
    }
}
