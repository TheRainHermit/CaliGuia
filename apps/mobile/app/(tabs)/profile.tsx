import { View, Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Mi Perfil</Text>
      <Text>Configura tus intereses y preferencias aquí.</Text>
    </View>
  );
}