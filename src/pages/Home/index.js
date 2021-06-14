import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';


import imageowner from '../../assets/teslaowner.jpg';

import 
{
Owner,
ImageLogo,
ViewImgLogo,
ButtonAccess,
ButtonAccessText
} from './styles';

const ImageLogoAnimated = Animatable.createAnimatableComponent(ImageLogo);

const ButtonAnimated = Animatable.createAnimatableComponent(ButtonAccess)


export default function App() {

  const navigation = useNavigation();

  return (
      
    <Owner>
      <ImageBackground style={{width: '100%', height: '100%'}} source={imageowner}>
        <StatusBar backgroundColor="#b71c1c" style="light" />

      <ViewImgLogo>
        <ImageLogoAnimated animation="bounceInDown" source={require('../../assets/teslalogo.png')}/>
      </ViewImgLogo>  

      <ButtonAccess animation="bounceIn" onPress={() => navigation.navigate('HomeCars')}>
        <ButtonAccessText>JOIN</ButtonAccessText>
      </ButtonAccess>

      </ImageBackground>
    </Owner>
  );
}


