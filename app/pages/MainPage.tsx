import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';

function MainPage() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Main Page</Text>
      <Button
        title='상세페이지로 이동'
        onPress={() => {
          navigation.navigate("Detail")
        }}
      />
      <Button
        title='글쓰기 페이지로 이동'
        onPress={() => {
          navigation.navigate("Write")
        }}
      />
    </View>
  );
}

export default MainPage;