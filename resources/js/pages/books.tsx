import { Head } from '@inertiajs/react';

type Book = {
    isbn: number;
    title: string;
    author: string;
    in_stock: number;
    cover_image_path: string;
};

interface IndexProps {
    books: Book[];
}

interface BookComponentProps {
    book: Book;
}

const BookComponent = ({ book }: BookComponentProps) => {
    return (
        <div
            key={book.isbn}
            className="m-auto flex w-56 flex-col items-center rounded-lg border border-gray-300 bg-white p-4 text-center shadow-sm md:m-0"
        >
            {book.cover_image_path ? (
                <img src={book.cover_image_path} alt={book.title} className="mb-4 h-44 w-30 rounded object-cover" />
            ) : (
                <div className="mb-4 h-44 w-30 items-center justify-center rounded bg-gray-200 text-sm md:flex">No Image</div>
            )}
            <h2 className="mb-1 text-lg font-semibold">{book.title}</h2>
            <p className="mb-1 text-gray-700">by {book.author}</p>
            <p className="mb-2">
                <span className="font-medium">In Stock:</span> {book.in_stock}
            </p>
            <button
                disabled={book.in_stock === 0}
                className={`mt-auto rounded px-4 py-2 font-medium text-white transition ${
                    book.in_stock === 0 ? 'cursor-not-allowed bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
                }`}
            >
                {book.in_stock === 0 ? 'Sold Out' : 'Buy'}
            </button>
        </div>
    );
};

export default function Index({ books }: IndexProps) {
    return (
        <div className="h-full w-full bg-amber-100">
            <Head title="Books" />
            <h1 className="my-8 text-center text-3xl font-bold text-gray-500">Book Store</h1>
            <div className="mx-auto flex max-w-5xl flex-wrap gap-8 text-gray-500">
                {books.map((book) => (
                    <BookComponent book={book} />
                ))}
            </div>
        </div>
    );
}
