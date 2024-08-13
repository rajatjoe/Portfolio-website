

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/portfolioMailDB', { useNewUrlParser: true, useUnifiedTopology: true });

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true }
});

const Form = mongoose.model('Form', formSchema);

app.post('/forms', async (req, res) => {
  const newForm = new Form(req.body);
  await newForm.save();
  res.json(newForm);
});


app.get('/formsget', async (req, res) => {
  const forms = await Form.find({});
  res.json(forms);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
