import { View, ScrollView, Text } from 'react-native';
import Home from '../../screens/Home';
import MiniCard from '../../components/@core/MiniCard';

const colorMiniCard = ['primary', 'black', 'default', 'blue', 'error', 'purple']


const HomePresentation = () => {
  return (
    <Home title='Destaques'>
      <>
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