import { /* Link, */ useRouter } from 'expo-router'
import React, { ReactNode } from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import Icon from '@expo/vector-icons/Feather'

export interface MovieProps {
  id?: number
  nome: string
  poster_url: string
  genero: string
  ano: number
  nota: number
  sinopse: string
  children?: ReactNode
}

export default function MovieCard(movie: MovieProps) {
  const router = useRouter()

  function handlePress() {
    router.back()
  }

  return (
    <View
      key={movie?.id}
      className="mb-4 space-y-4 rounded-lg border-none bg-white p-4 shadow-lg ring-2  ring-black"
    >
      <View className="flex-row items-center justify-between">
        <Text className="w-4/5 font-title text-2xl text-gray-300">
          {movie?.nome}
        </Text>
        <TouchableOpacity
          className="h-10 w-10 items-center justify-center rounded-full bg-purple-50"
          activeOpacity={0.7}
        >
          <Icon name="heart" size={20} color="#9e9ea0" />
        </TouchableOpacity>
      </View>

      <View className="px-1/2 space-y-4">
        {!movie?.poster_url ? (
          ''
        ) : (
          <Image
            source={{
              uri: movie?.poster_url,
            }}
            className="aspect-video w-full rounded-lg"
            alt={!movie?.poster_url ? 'Sem imagem' : movie?.nome}
          />
        )}
        <View>
          <Text className="font-body text-sm capitalize leading-relaxed text-gray-300">
            Gênero: {movie?.genero}
          </Text>
          <Text className="font-body text-sm leading-relaxed text-gray-300">
            Ano: {movie?.ano}
          </Text>
          <Text className="font-body text-sm leading-relaxed text-gray-300">
            Nota: {movie?.nota}
          </Text>
        </View>
        <Text className="font-body text-base leading-relaxed text-gray-300">
          Sinopse: {movie?.sinopse}
        </Text>

        <TouchableOpacity
          className="flex-row items-center justify-center gap-2"
          onPress={handlePress}
        >
          <Text className="font-body text-sm text-gray-200">Ler mais</Text>
          <Icon name="arrow-right" size={16} color="#9e9ea0" />
        </TouchableOpacity>

        <Text>{movie?.children}</Text>
      </View>
    </View>
  )
}
