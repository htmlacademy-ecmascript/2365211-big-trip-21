const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js', //имя бандла
    path: path.resolve(__dirname, 'build'), //Директория для файлов сборки
    clean: true,
  },
  devtool: 'source-map', // Генерируем карту исходного кода
  plugins: [ // Подключаем плагины
    new CopyPlugin({
      patterns: [{ from: 'public' }],
    }),
  ],
};
