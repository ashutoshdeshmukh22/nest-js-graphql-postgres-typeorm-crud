import { AddBookArgs } from './args/addbook.args';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BookEntity } from './entity/book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateBookArgs } from './args/updatebook.args';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity) public bookRepo: Repository<BookEntity>,
  ) {}

  // Get all Books
  async findAllBooks(): Promise<BookEntity[]> {
    const books = await this.bookRepo.find();
    return books;
  }

  // Get Single Book By Id
  async findBookById(id: number): Promise<BookEntity> {
    const book = await this.bookRepo.findOne({ where: { id: id } });
    return book;
  }

  // Delete Book
  async deleteBook(id: number): Promise<string> {
    await this.bookRepo.delete(id);
    return 'Book has been deleted';
  }

  // Add A Book
  async addBook(addBookArgs: AddBookArgs): Promise<string> {
    const book: BookEntity = new BookEntity();
    book.title = addBookArgs.title;
    book.price = addBookArgs.price;
    await this.bookRepo.save(book);
    return 'Book has been successfully added';
  }

  // Update A Book
  async updateBook(updateBookArgs: UpdateBookArgs): Promise<string> {
    const book: BookEntity = await this.bookRepo.findOne({
      where: { id: updateBookArgs.id },
    });
    book.title = updateBookArgs.title;
    book.price = updateBookArgs.price;
    await this.bookRepo.save(book);
    return 'Book has been successfully Updated';
  }
}
