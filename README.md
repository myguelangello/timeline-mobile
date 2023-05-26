# App de linha do tempo

  ### Setup do Projeto Mobile

  #### Features
  
    ✅ React Native
    ✅ TypeScript
    ✅ Expo GO
    ✅ NativeWind (TailwindCSS para React Native)
    ✅ ESLint + Prettier Tailwind
    ✅ Expo Goolge Fonts: 
      - Bai Jamjuree 
      - Roboto
    ✅ Expo AuthSession
      - Pegar o code do github e trocar por um token ✅
      - Pegar o token e buscar as informações do usuário ✅
      - Salvar os dados do usuário no AsyncStore ✅
      - Redirecionar o usuário para outra tela quando logar ✅
    ✖ Expo Router

  #### Nota
    - Verificar se os links de localhost estão funcionando
      
      ```js
      // src/lib/api.ts
      baseURL: 'http://ip-da-máquina:3333', -> para acessar o backend

      // app/index.js 61:5
      redirectUri: 'exp://ip-da-máquina:19000', -> para acessar o app

      // https://github.com/settings/developers
      Authorization callback URL: exp://ip-da-máquina:19000 -> para acessar o app
      ```
