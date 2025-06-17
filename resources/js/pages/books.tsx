import { Head } from '@inertiajs/react';

type Book = {
  isbn: number;
  title: string;
  author: string;
  in_stock: number;
  cover_image_path: string;
}

type IndexProps = {
  books: Book[];
}

export default function Index({ books }: IndexProps) {
    return (
      <>
        <Head title="Books" />
        <h1>Welcome</h1>
        <p>Found {books.length} books...</p>
      </>
    )
}