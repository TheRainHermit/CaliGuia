import { View, Text, Button } from 'react-native';

export default function CameraScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Reconocimiento Visual</Text>
      <Button title="Abrir cámara" onPress={() => { /* Lógica de cámara */ }} />
    </View>
  );
}