import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
  title: string
}

export default function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="items-center self-end rounded-full bg-green-500 px-5 py-2"
      {...rest}
    >
      <Text className="font-alt text-sm uppercase text-white">{title}</Text>
    </TouchableOpacity>
  )
}
