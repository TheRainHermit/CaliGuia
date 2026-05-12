import { View, Text, ScrollView } from 'react-native';

export default function ExplorerScreen() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 24 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 16 }}>Explora Cali</Text>
      {/* Aquí puedes renderizar un mapa y cards de lugares */}
      <Text>Mapa y lugares recomendados aparecerán aquí.</Text>
    </ScrollView>
  );
}