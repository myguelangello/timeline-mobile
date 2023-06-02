import { StatusBar } from 'expo-status-bar'
import { useRouter } from 'expo-router'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'

import { styled } from 'nativewind'

import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { useFonts, BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurBg from '../src/assets/bg-blur.png'
import Stripes from '../src/assets/stripes.svg'
import NLWLogo from '../src/assets/nlw-spacetime-logo.svg'
// import { makeRedirectUri } from 'expo-auth-session'
// import { api } from '../src/lib/api'

const StyledStripes = styled(Stripes)

export default function App() {
  const router = useRouter()

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }
  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 justify-center bg-gray-900 px-8 py-10"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute left-2" />

      <View className="flex-1 items-center justify-center gap-6">
        <NLWLogo />

        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Sua coleção de resenha filmes
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Crie resenhas de filmes que marcaram a sua vida, faça sua lista e
            compartilhe (se quiser) com o mundo!
          </Text>
        </View>
        {/* Botão de cadastro de filmes */}
        <TouchableOpacity
          activeOpacity={0.7}
          className="min-w-[200] rounded-full bg-green-500 px-5 py-2"
          onPress={() => router.push('/register')}
        >
          <Text className="self-center font-alt text-sm uppercase text-black">
            Cadastrar filmes
          </Text>
        </TouchableOpacity>

        {/* Botão de meus files */}
        <TouchableOpacity
          activeOpacity={0.7}
          className="min-w-[200] rounded-full bg-green-500 px-5 py-2"
          onPress={() => router.push('/list')}
        >
          <Text className="self-center font-alt text-sm uppercase text-black">
            Meus filmes
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Feito com 💜 na Disciplina de Projeto Integrado II
      </Text>

      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
