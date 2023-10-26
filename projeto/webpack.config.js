module.exports = {
    // ... outras configurações do Webpack ...
  
    module: {
      rules: [
        // Regra para arquivos de imagem usando file-loader
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]', // Nome do arquivo de saída
                outputPath: 'images/', // Caminho de saída para as imagens
              },
            },
          ],
        },
        // Regra para arquivos de imagem usando url-loader (opcional)
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192, // Limita o tamanho para uso direto de base64
                name: '[name].[ext]', // Nome do arquivo de saída
                outputPath: 'img/', // Caminho de saída para as imagens
              },
            },
          ],
        },
        // ... outras regras ...
      ],
    },
  };