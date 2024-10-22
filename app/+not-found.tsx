import { Link, Stack } from "expo-router";
import { View } from "react-native";

export default function NotFoundScreen () {
  return (
    <>
      <Stack.Screen options={{ title: 'notFound' }}>
      </Stack.Screen>
      <View>
        <Link href={'/'}>Back Home</Link>
      </View>
    </>
  )
}