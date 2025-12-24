import joi from "joi";
const bookSchema = joi.object({
  title: joi.string().required(),
  price: joi.number().integer(),
});

export default bookSchema;
