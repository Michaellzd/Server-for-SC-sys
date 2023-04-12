const express = require('express');
const axios = require('axios');
const cors = require('cors');
const multer = require('multer');
const FormData = require('form-data'); // 新增

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// 使用 memoryStorage 来处理文件
const storage = multer.memoryStorage();
const upload = multer({ storage });

// 修改路由处理程序，添加 multer 中间件
app.post('/api/predict', upload.single('file'), async (req, res) => {
  try {
    console.log('sending request to api server');

    const formData = new FormData();
    console.log(req.file);

    // 使用 getBuffer() 方法将 Buffer 实例添加到 formData
    formData.append('file', req.file.buffer, {
      filename: req.file.originalname,
      contentType: req.file.mimetype,
    });

    // 更新请求头，以便正确设置 'Content-Type' 和 'boundary'
    const headers = formData.getHeaders();

    const response = await axios.post('http://127.0.0.1:8000/predict', formData, {
      headers,
    });

    console.log('received response from fastapi:', response.data);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error in prediction');
  }
});


app.put('/chat', async (req, res) => {
  try {
    const { text } = req.body;


    const response = await axios.put('http://127.0.0.1:8000/chat', { text });

    res.send({ chat: response.data.chat });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error in chat');
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});