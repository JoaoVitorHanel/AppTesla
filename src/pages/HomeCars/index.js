import React,{useState} from 'react';
import { View,StatusBar,ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';

const ViewInfoCarAnimatable = Animatable.createAnimatableComponent(ViewInfoCar);
const TypeOneCar = Animatable.createAnimatableComponent(TypeOne);
const TypeTwoCar = Animatable.createAnimatableComponent(TypeTwo);
const TypeThreeCar = Animatable.createAnimatableComponent(TypeThree);
const TypeTextCarAnimated = Animatable.createAnimatableComponent(TypeTextCar);



import { SimpleLineIcons } from '@expo/vector-icons';


import teslacarone from '../../assets/teslacarone.jpg';


import 
{
Owner,
ViewButtonInfo,
ViewButtonInfoOwner,
ImageBackground,
TypeTextCar,
ViewTypeTextCar,
ViewInfoCar,
ViewInfoCarType,
TypeOne,
TypeTwo,
TypeThree
} from './styles';


export default function HomeCars(){
    

    const [screen, setScreen] = useState(false)

    function AboutCar(){

        if( screen == true ){
            setScreen(false);
        }else{
            setScreen(true);
        }

    }

    return(
        <Owner>
  
            <ImageBackground source={teslacarone}>
                <StatusBar backgroundColor="#b71c1c" style="light" />

                <ViewTypeTextCar>
                    <TypeTextCarAnimated animation="bounceInDown"> Model S</TypeTextCarAnimated>
                </ViewTypeTextCar>

                <ViewInfoCarAnimatable name={screen} animation={screen ? "bounceInDown" : null}>

                    <ViewInfoCarType>
                        <TypeOneCar animation={screen ? "bounceInLeft" : null} ><SimpleLineIcons name="speedometer" size={40} color={screen  ? '#FF0000' : 'transparent'} /></TypeOneCar>
                        <TypeTwoCar animation={screen ? "fadeIn" : null} name={screen}>1,99s</TypeTwoCar>
                        <TypeThreeCar animation={screen ? "fadeIn" : null}  name={screen}>0-60 mph *</TypeThreeCar>
                    </ViewInfoCarType>

                    <ViewInfoCarType>
                        <TypeOneCar animation={screen ? "bounceInLeft" : null}><SimpleLineIcons name="speedometer" size={40} color={screen  ? '#FF0000' : 'transparent'}  /></TypeOneCar>
                        <TypeTwoCar animation={screen ? "fadeIn" : null} name={screen}>200mph</TypeTwoCar >
                        <TypeThreeCar animation={screen ? "fadeIn" : null}  name={screen}>Velocidade máxima</TypeThreeCar>
                    </ViewInfoCarType>

                    <ViewInfoCarType>
                    <TypeOneCar animation={screen ? "bounceInLeft" : null}><SimpleLineIcons name="energy" size={40} color={screen  ? '#FF0000' : 'transparent'}  /></TypeOneCar>
                        <TypeTwoCar animation={screen ? "fadeIn" : null} name={screen}>1.020hp</TypeTwoCar>
                        <TypeThreeCar animation={screen ? "fadeIn" : null}  name={screen}>Pico de energia</TypeThreeCar>
                    </ViewInfoCarType>

                </ViewInfoCarAnimatable>

                <ViewButtonInfo>
                    <ViewButtonInfoOwner onPress={() => AboutCar()}>
                        <SimpleLineIcons name="info" size={34} color="white" />
                    </ViewButtonInfoOwner>
                </ViewButtonInfo>

            </ImageBackground>
            
        </Owner>
    )
}