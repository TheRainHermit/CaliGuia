import { View, Text } from 'react-native';

export default function RoutesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Rutas sugeridas</Text>
      <Text>Aquí verás rutas inteligentes según tu perfil y ubicación.</Text>
    </View>
  );
}