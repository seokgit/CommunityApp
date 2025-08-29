import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import ProfileCard from '../components/ProfileCard';

function MainPage() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16}}>
      <ProfileCard profileImageUrl='https://i.pinimg.com/originals/3f/a9/0e/3fa90e19628414e52d2d187094af10f8.jpg' name='Title' date='8/18/2021' subject='Subject'/>
    </View>
  );
}

export default MainPage;