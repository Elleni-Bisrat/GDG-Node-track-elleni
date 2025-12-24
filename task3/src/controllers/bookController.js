import bookSchema from "../utils/validation.js";
let books = [
  { id: 1, title: "The Alchemist", price: 980 },
  { id: 2, title: "Atomic Habit", price: 690 },
  { id: 3, title: "Atomic habit", price: 384 },
];
const getBooks = (req, res) => {
  res.json(books);
};

const getbyID = (req, res) => {
  const { id } = req.params;
  const book = books.find((b) => b.id === parseInt(id));
  if (!book) return res.status(404).json({ message: "book not found" });
  res.status(200).json(book);
};
const createBooks = (req, res, next) => {
  const { error } = bookSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    price: req.body.price,
  };
  books.push(newBook);
  res.status(201).json({
    message: "success",
    user: req.body,
  });
};

export default { getBooks, createBooks, getbyID };
