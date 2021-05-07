import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
 
} from "react-native";
import { Block, Text, theme, Button, Icon } from "galio-framework";
import QRCode from 'react-native-qrcode-svg';
import {Input} from "../components";

const { width, height } = Dimensions.get("screen");


class MyProfile extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = { email: "", dataQr:"example" , flagMessage:true, nombre:"", telefono:"",empresa:"" };
        this.handleChangeEmail=this.handleChangeEmail.bind(this)
        this.handleChangeName=this.handleChangeName.bind(this)
        this.handleChangePhone=this.handleChangePhone.bind(this)
        this.handleChangeCompany=this.handleChangeCompany.bind(this)
        this.handleSave=this.handleSave.bind(this)
      }

 handleChangeEmail(email){

 this.setState(
     {...this,email:email
     
    }

 )

 }
 handleChangeName(nombre){

    this.setState(
        {...this, nombre:nombre
       }
   
    )   
}
handleChangePhone(telefono){

    this.setState(
        {...this, telefono:telefono
       }
   
    )   
}
handleChangeCompany(empresa){

    this.setState(
        {...this, empresa:empresa
       }
   
    )   
}

 handleSave (){
   
    console.log(this.state.nombre)
    console.log(this.state.email)
    console.log(this.state.telefono)
    console.log(this.state.empresa)

    this.setState({
        dataQr: this.state.nombre+this.state.email+this.state.telefono+this.state.empresa,
        flagMessage:!this.state.flagMessage
    })

 }

  render() {

    const {email, dataQr, flagMessage, nombre, telefono, empresa}=this.state;
    const { navigation } = this.props;
    const cardContainer = [styles.card, styles.shadow];

    return (
        <ScrollView  showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
    <Block flex>
    <Block style={styles.imgContainer1} >

    <Block card flex style={cardContainer}>

    
      <Block flex row style={styles.cardDescription}>
        <Block>
        <Icon name= "user-circle-o" family="font-awesome" size={90} color="#4682B4" style={styles.icon} />
        </Block>
       <Block flex style={styles.textContainer}>
        <Text size={14} style={styles.cardTitle}>Comparte fácilmente tus datos a través de NFC o un código QR</Text>
        </Block>
     </Block>

     <Block flex style={styles.formContainer}>

        <Input
        placeholder="Nombre"
        color="#4682B4"
        borderless        
        value={nombre}
        onChangeText={nombre => this.handleChangeName(nombre)}
        />
         <Input
        placeholder="Email"
        color="#4682B4"
        borderless
        value={email}
        onChangeText={email => this.handleChangeEmail(email)}
        />

      <Block flex row style={styles.formContainer1}>
        
        <Input
        placeholder="Teléfono"
        color="#4682B4"
        borderless
        type="phone-pad"
        value={telefono}
        onChangeText={telefono => this.handleChangePhone(telefono)}
        />
       
       <Input
        placeholder="Empresa"
        color="#4682B4"
        borderless
        value={empresa}
        onChangeText={empresa => this.handleChangeCompany(empresa)}
        
        />
       
      </Block>

     </Block>
     
   
  </Block> 

    </Block>  
    
   {flagMessage?(
     <Block flex row style={styles.messageContainer}>
        <Block  style={styles.cardDescription1}>
          
        <Block flex style={styles.textContainer1}>
            <Text size={14} style={styles.cardTitle1}>Rellena tus datos personales y pulsa el botón Guardar para generar el código QR</Text>
            </Block>
        </Block>
    </Block>
   ): null

  }

    <Block flex row style={styles.QrContainer}>
    <QRCode
      value={dataQr}
      
    />
    </Block>

    <Block row style={styles.buttonContainer}>
        <Button style={{ width: 60, height: 60}} onlyIcon icon="save" iconFamily="font-awesome" iconSize={30} color="#4682B4" round iconColor="white" onPress={this.handleSave}></Button>
     </Block>
    </Block>
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
 
  articles: {
    width: width - theme.SIZES.BASE * 1,
    paddingVertical: theme.SIZES.BASE,
    marginHorizontal: width *0.02
  },
  
  imgContainer:{

    paddingBottom:7,
    marginBottom:25
 
   },

  imgContainer1:{

    paddingBottom:7,
    paddingTop:7
 
   },
   card: {
     backgroundColor: "#F8F9FE",
    // marginVertical: theme.SIZES.BASE,
     borderWidth: 0,
     minHeight: 114,
     marginBottom: 5,
     justifyContent:"center",
     paddingBottom:20,
     paddingTop:20
   
   },
   shadow: {
     shadowColor: theme.COLORS.BLACK,
     shadowOffset: { width: 0, height: 2 },
     shadowRadius: 4,
     shadowOpacity: 0.1,
     elevation: 2,
   },
    
   cardTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
    textAlign:"center",
    fontSize: 16,
   color:"#2F4F4F",
   paddingTop:10
   },
   cardDescription: {
    paddingTop: 15,
    paddingLeft:10
   },
   buttonContainer:{
      justifyContent:"flex-end",
      marginTop: height*0.12
   },
   
  textContainer:{
    justifyContent:"center",
    paddingRight:5,
    paddingLeft:5
 },
 formContainer:{
    justifyContent:"center",
    paddingTop:20,
    paddingRight:10,
    paddingLeft:10
 },
 formContainer1:{
    justifyContent:"center",
    
    paddingRight:10,
    paddingLeft:10
 },
 QrContainer:{
    justifyContent:"center",
   marginTop:height*0.06
 },
 messageContainer:{
    justifyContent:"center",
    elevation:100,
    position: 'absolute',
    marginTop:height*0.49,
    marginLeft:10,
    marginRight:10,
    backgroundColor:"#DFE0E5",
   
 },
 cardTitle1: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 15,
    textAlign:"center",
    fontSize: 16,
    color:"#4682B4"
  
   },
   cardDescription1: {
    paddingTop: 15,
   
   },

  textContainer1:{
    justifyContent:"center",
    paddingRight:5,
    paddingLeft:5,
    
 },
});

export default MyProfile;
