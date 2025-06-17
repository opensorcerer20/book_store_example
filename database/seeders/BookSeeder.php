<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            'To Kill a Mockingbird,Harper Lee,9780061120084',
            '1984,George Orwell,9780451524935',
            'The Great Gatsby,F. Scott Fitzgerald,9780743273565',
            'Pride and Prejudice,Jane Austen,9780141439518',
            'The Catcher in the Rye,J.D. Salinger,9780316769488',
            'The Hobbit,J.R.R. Tolkien,9780547928227',
            'Fahrenheit 451,Ray Bradbury,9781451673319',
            'Moby-Dick,Herman Melville,9781503280786',
            'The Odyssey,Homer (trans. Robert Fagles),9780140268867',
            'Brave New World,Aldous Huxley,9780060850524',
            'The Book Thief,Markus Zusak,9780375842207',
            'Crime and Punishment,Fyodor Dostoevsky,9780486415871',
            'The Road,Cormac McCarthy,9780307387899',
            'The Alchemist,Paulo Coelho,9780062315007',
            'The Kite Runner,Khaled Hosseini,9781594631931',
            'Life of Pi,Yann Martel,9780156027328',
            'Slaughterhouse-Five,Kurt Vonnegut,9780385333849',
            'A Tale of Two Cities,Charles Dickens,9780486406510'
        ];
        array_map(function ($datum) {
            [$title, $author, $isbn] = explode(',', $datum);
            DB::table('books')->insert([
                'isbn' => $isbn,
                'title' => $title,
                'author' => $author,
                'in_stock' => 2,
            ]);
        }, $data);
    }
}
