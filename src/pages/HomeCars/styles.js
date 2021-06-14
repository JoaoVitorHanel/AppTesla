import styled from 'styled-components';

export const Owner = styled.View`
width: 100%;
height: 100%;

`;

export const ImageBackground = styled.ImageBackground`
width: 100%;
height: 100%;
`;

export const ViewButtonInfo = styled.View`
width: 90%;
height: 20%;
align-items: flex-end;
flex-direction: column-reverse;
margin-top: 25%;
margin-bottom: 10%;
margin-left: 5%;
margin-right: 5%;
`;

export const ViewButtonInfoOwner = styled.TouchableOpacity`
height: 45%;
width: 20%;
justify-content: center;
align-items: center;
border-radius: 20px;
background-color: #FF0000;

`;

export const ViewTypeTextCar = styled.View`
width: 100%;
height: 10%;
margin-top: 10%;
justify-content: center;
align-items: center;
`;

export const TypeTextCar = styled.Text`
color: #fff;
font-size: 50px;
font-weight: bold;
justify-content: center;
align-items: center;
`;

export const ViewInfoCar = styled.View`
background-color: ${(props) => props.name ? '#000' :  'transparent'};
width: 96%;
height: 50%;
padding: 5%;
border-radius: 20px;
margin-left: 2%;
margin-right: 2%;
flex-direction: column;

`;

export const ViewInfoCarType = styled.View`
width: 100%;
height: 33%;
padding-right: 2%;
padding-left: 2%;
align-items: center;
flex-direction: row;
`;

export const TypeOne = styled.Text`
color: #FFF;
`;

export const TypeTwo = styled.Text`
padding-left: 5px;
color: ${(props) => props.name ? '#FFF' :  'transparent'};
font-size: 20px;
font-weight: bold;
`;

export const TypeThree = styled.Text`
padding-left: 5px;
color: ${(props) => props.name ? '#FFF' :  'transparent'};
font-size: 18px;
`;

