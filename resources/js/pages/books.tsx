import { SharedData } from '@/types';
import {
    Head,
    Link,
    usePage,
} from '@inertiajs/react';

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
            {/* when buy is pressed, go to "buy book" route */}
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
    const { auth } = usePage<SharedData>().props;
    return (
        <>
            <Head title="Books" />
            {auth.user ? (
                <>
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                            {/* href={route('cart')} */}
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Cart (x)
                            </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                        <main>
            <section className="h-full w-full bg-amber-100">
            <h1 className="my-8 text-center text-3xl font-bold text-gray-500">Book Store</h1>
            <div className="mx-auto flex max-w-5xl flex-wrap gap-8 text-gray-500">
                {books.map((book) => (
                    <BookComponent book={book} />
                ))}
            </div>
            </section>
            </main>
        </>
    );
}
