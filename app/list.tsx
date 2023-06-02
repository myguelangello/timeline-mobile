import { Link } from 'expo-router'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from '@expo/vector-icons/Feather'
import React, { useEffect, useState } from 'react'
import { api } from '../src/lib/api'

import MovieCard, { MovieProps } from './components/MovieCard'

export default function List() {
  const { bottom, top } = useSafeAreaInsets()
  const [movies, setMovies] = useState<MovieProps[]>([])

  async function getFilmes() {
    const response = await api.get('api/filmes/')

    setMovies(response.data)
  }

  useEffect(() => {
    getFilmes()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    getFilmes()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies])

  return (
    <ScrollView
      className="flex-1 px-8"
      contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
    >
      <View className="mt-4 flex-row items-center justify-between">
        {/* TITLE */}
        <Text className="font-title text-2xl text-purple-500">Seus filmes</Text>

        {/* BACK BUTTON */}
        <Link href="/" asChild>
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500">
            <Icon name="arrow-left" size={16} color="#fff" />
          </TouchableOpacity>
        </Link>
      </View>
      <View className="mt-6 space-y-10">
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              nome={movie.nome}
              ano={movie.ano}
              sinopse={movie.sinopse}
              genero={movie.genero}
              poster_url={movie.poster_url}
              nota={movie.nota}
            />
          )
        })}
      </View>
    </ScrollView>
  )
}
