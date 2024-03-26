import { View, ScrollView, Text } from 'react-native';
import Home from '../../screens/Home';
import MiniCard from '../../components/@core/MiniCard';
import Button from '../../components/@core/Button';

import auth from '@react-native-firebase/auth';

const colorMiniCard = ['primary', 'black', 'default', 'blue', 'error', 'purple']

function signOut(navigation: any){
  auth()
    .signOut()
    .then(() => navigation.navigate('LoginPresentation'))
    .catch(error => console.log('ERROR SIGNOUT ', error))
  
}


const HomePresentation = ({navigation}: any) => {
  return (
    <Home title='Destaques'>
      <>
      <Button title='Cadastrar'  onClick={() => navigation.navigate('RegisterUserPresentation')} />
      <Button title='Sair'  onClick={() => signOut(navigation)} />
        {/* <Text>Dados Gerais</Text>
        <ScrollView horizontal>
          {['1', '2', '3', '4'].map((item: any, i) => (
            <View key={item} style={{ margin: 5 }}>
              <MiniCard background='primary'>
                <>
                  <Text>Total</Text>
                  <Text>Membros</Text>
                  <Text>45</Text>
                </>
              </MiniCard>
            </View>
          ))}
        </ScrollView> */}
      </>
    </Home >
  );
}

export default HomePresentation