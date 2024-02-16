function Author(Name, birthyear, nationality) {
    this. Name= Name;
    this.birthyear = birthyear;
    this.nationality = nationality;
}
function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
}
Book.prototype.getBookInfo = function() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: $${this.price}`);
    console.log("-------------------");
}
const author1 = new Author("Rowling", 1965, "British");
const author2 = new Author("George", 1903, "British");


const book1 = new Book("Harry Potter and the Philosopher's Stone", author1, "Fantasy", 15.99);
const book2 = new Book("1984", author2, "Dystopian", 12.99)

book1.getBookInfo();
book2.getBookInfo();
