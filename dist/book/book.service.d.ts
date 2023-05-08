import { AddBookArgs } from './args/addbook.args';
import { Repository } from 'typeorm';
import { BookEntity } from './entity/book.entity';
import { UpdateBookArgs } from './args/updatebook.args';
export declare class BookService {
    bookRepo: Repository<BookEntity>;
    constructor(bookRepo: Repository<BookEntity>);
    findAllBooks(): Promise<BookEntity[]>;
    findBookById(id: number): Promise<BookEntity>;
    deleteBook(id: number): Promise<string>;
    addBook(addBookArgs: AddBookArgs): Promise<string>;
    updateBook(updateBookArgs: UpdateBookArgs): Promise<string>;
}
