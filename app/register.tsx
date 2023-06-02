import { Link } from 'expo-router'
import { useState } from 'react'
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  TextInputProps,
  Alert,
} from 'react-native'

import Icon from '@expo/vector-icons/Feather'

import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Button from './components/Button'
import { api } from '../src/lib/api'

export default function Register({ ...rest }: TextInputProps) {
  const { bottom, top } = useSafeAreaInsets()

  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [genre, setGenre] = useState('')
  const [synopsis, setSynopsis] = useState('')
  const [posterUrl, setPosterUrl] = useState('')
  const [rating, setRating] = useState('')

  async function handleRegisterMovie() {
    await api
      .post('http://192.168.0.6:8000/api/filmes/', {
        nome: title,
        nota: parseFloat(rating),
        ano: parseInt(year),
        sinopse: synopsis,
        genero: genre,
        poster_url: posterUrl,
      })
      .then(() => {
        setTitle('')
        setYear('')
        setGenre('')
        setSynopsis('')
        setPosterUrl('')
        setRating('')
        Alert.alert('Filme cadastrado com sucesso!')
      })
      .catch((err) => {
        console.error(err)
        return Alert.alert('Erro ao cadastrar filme!')
      })
  }

  return (
    <ScrollView
      className="flex-1 px-8"
      contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
    >
      <View className="mt-4 flex-row items-center justify-between">
        <Text className="font-title text-2xl text-purple-500">
          Cadastre seus filmes
        </Text>
        <Link href="/" asChild>
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500">
            <Icon name="arrow-left" size={16} color="#fff" />
          </TouchableOpacity>
        </Link>
      </View>

      <View className="mt-6 space-y-2">
        <Text className="font-body text-lg text-gray-300">Título</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          textAlignVertical="top"
          className=" w-full rounded-sm border-2 border-gray-100 px-4 py-2 text-gray-300"
          placeholderTextColor="#bebebf"
          placeholder="Digite o título do filme..."
        />
      </View>
      {/* Gênero */}
      <View className="mt-6 space-y-1">
        <Text className="font-body text-lg text-gray-300">Gênero</Text>
        <TextInput
          value={genre}
          onChangeText={setGenre}
          textAlignVertical="top"
          className=" w-full rounded-sm border-2 border-gray-100 px-4 py-2 text-gray-300"
          placeholderTextColor="#bebebf"
          placeholder="Digite o gênero do filme..."
        />
      </View>
      <View className="mt-6 space-y-1">
        {/* Ano */}
        <Text className="font-body text-lg text-gray-300">Ano</Text>
        <TextInput
          value={year}
          onChangeText={setYear}
          textAlignVertical="top"
          className="rounded-sm border-2 border-gray-100 py-2 text-gray-300"
          placeholderTextColor="#bebebf"
          placeholder="Nota para esse filme"
          keyboardType="numeric"
        />
      </View>
      <View className="mt-6 space-y-1">
        {/* Nota */}
        <Text className="font-body text-lg text-gray-300">Nota</Text>
        <TextInput
          value={rating}
          onChangeText={setRating}
          textAlignVertical="top"
          className=" w-auto rounded-sm border-2 border-gray-100 py-2 text-gray-300"
          placeholderTextColor="#bebebf"
          placeholder="Nota para esse filme"
          keyboardType="numeric"
        />
      </View>
      <View className="mt-6 space-y-1">
        <Text className="font-body text-lg text-gray-300">Sinopse</Text>
        <TextInput
          multiline
          value={synopsis}
          onChangeText={setSynopsis}
          textAlignVertical="top"
          className=" w-full rounded-sm border-2 border-gray-100 px-4 py-2 text-gray-300"
          placeholderTextColor="#bebebf"
          placeholder="Digite a sinopse do filme..."
        />
      </View>
      <View className="mt-6 space-y-1">
        <Text className="font-body text-lg text-gray-300">URL do Poster</Text>
        <TextInput
          value={posterUrl}
          onChangeText={setPosterUrl}
          textAlignVertical="top"
          className=" w-full rounded-sm border-2 border-gray-100 px-4 py-2 text-gray-300"
          placeholderTextColor="#bebebf"
          placeholder="Cole a URL do poster do filme..."
        />
      </View>
      <View className="mt-6 space-y-1">
        <Button title="Salvar" onPress={handleRegisterMovie} />
      </View>
    </ScrollView>
  )
}
