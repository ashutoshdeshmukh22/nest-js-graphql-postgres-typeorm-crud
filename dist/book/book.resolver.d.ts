import { BookService } from './book.service';
import { AddBookArgs } from './args/addbook.args';
import { UpdateBookArgs } from './args/updatebook.args';
export declare class BookResolver {
    private bookService;
    constructor(bookService: BookService);
    getAllBooks(): Promise<import("./entity/book.entity").BookEntity[]>;
    getBookById(id: number): Promise<import("./entity/book.entity").BookEntity>;
    deleteBookById(id: number): Promise<string>;
    addBook(addBookArgs: AddBookArgs): Promise<string>;
    updateBook(updateBookArgs: UpdateBookArgs): Promise<string>;
}
