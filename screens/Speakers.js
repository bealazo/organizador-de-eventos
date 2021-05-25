import React from "react";
import {
 
  Dimensions,
  ScrollView,
  
 
} from "react-native";

import { ListItem, Avatar } from 'react-native-elements'
import { Block} from 'galio-framework';



const { width, height } = Dimensions.get("screen");


//Vista para  los Ponentes

class Speakers extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={

          list:[],
          
        }
      
    }
    
    componentDidMount(){

      //Cargar de BD la lista de productos antes de montar el componente
      //DataSample    
    let list = [
        {
            id:5,
            nombre: 'Raúl Fernández Hernández',
            rutaImagenFormatServidor: "/estatico/1/ponentes/6/ponente.png",
            hora_inicio:"13:00",
            hora_fin:"15:00",
            empresa:"ABAMobile",
            puesto:"Product Manager",
            biografia:""
      
          },
    
        
       
          {   id:0,
            nombre: 'Alberto Sánchez Casado',
            rutaImagenFormatServidor: "/estatico/1/ponentes/4/ponente.png",
              hora_inicio:"13:00",
              hora_fin:"15:00",
              empresa:"ABAMobile",
              puesto:"Director",
              biografia:"<span style=\"font-size:11.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;\r\nmso-fareast-font-family:&quot;Times New Roman&quot;;mso-bidi-font-family:&quot;Times New Roman&quot;;\r\nmso-ansi-language:ES;mso-fareast-language:ES;mso-bidi-language:AR-SA\">Alberto\r\nSánchez Casado es Director de ABAMobile, cuenta con más de 14 años de\r\nexperiencia en el sector TIC, concretamente en desarrollo de software,\r\nprincipalmente para entidades financieras. Desde 2012 es Director General y Comercial\r\nde ABAMobile.</span><div><span style=\"font-size: 11pt;\">En su pasado profesional, se\r\nha dedicado a la gestión proyectos tanto desde el punto de vista organizativo\r\n(planificación, gestión de recursos, gestión de&nbsp;</span><span style=\"font-size: 11pt; line-height: 1.42857;\">cambios, resolución de\r\nincidencias), como económico (gestión de la facturación, control de indicadores\r\nde rentabilidad) y de relación con el cliente. Siendo en&nbsp;</span><span style=\"font-size: 11pt; line-height: 1.42857;\">algunos casos el responsable\r\nde la comunicación de la empresa con él cliente&nbsp;</span><span style=\"font-size: 11pt; line-height: 1.42857;\">(Liberbank, Caja de\r\nIngenieros, GITPA, CAC, etc...).</span><span style=\"font-size: 11pt; line-height: 1.42857;\">&nbsp;</span><div>\r\n\r\n<p class=\"MsoNormal\"><span style=\"font-size:11.0pt\">Las tareas de dirección de\r\nproyectos y gestión de la relación con el cliente y preventa, le ha permitido\r\ndesarrollar sus habilidades como gestor para&nbsp;</span><span style=\"font-size: 11pt; line-height: 1.42857;\">complementar la amplia\r\nexperiencia en distintas tecnologías acumulada durante los años de trabajo.&nbsp;</span></p><p class=\"MsoNormal\"><span style=\"font-family: Arial, sans-serif; font-size: 11pt; line-height: 1.42857;\">Ha trabajado en empresas\r\ncomo: COFAS, CAPGEMINI, INSA, SERESCO, COREMAIN, TREELOGIC, lo que le ha\r\npermitido tener conocimiento de varias tecnologías y conocimiento funcional en\r\nvarios sectores (Banca, Telecomunicaciones, Administración pública,\r\nFarmacéutico, etc…)</span></p></div></div>"
        
    
            },
       
          {
            id:2,
            nombre: 'Luis Nicieza Tuñón',
            rutaImagenFormatServidor: "/estatico/1/ponentes/7/ponente.png",
            hora_inicio:"13:00",
            hora_fin:"15:00",
            empresa:"ABAMobile",
            puesto:"CTO",
            biografia:""
      
    
          },
        
        {
          id:4,
          nombre: 'Nerea Sánchez Sánchez',
          rutaImagenFormatServidor: "/estatico/1/ponentes/5/ponente.png",
          hora_inicio:"13:00",
          hora_fin:"15:00",
          empresa:"ABAMobile",
          puesto:"Project Manager",
          biografia: "<span style=\"font-size: 11pt; line-height: 1.42857;\">Nerea Sánchez es Responsable\r\nde proyectos en ABAMobile. Cuenta con más de 11 años de experiencia en en el\r\nsector TIC, principalmente trabajando en proyectos de software relacionados con\r\nsector público, sector bancario y empresa privada. A lo largo de su trayectoria\r\nprofesional ha realizando labores muy variadas dentro de los diferentes\r\nproyectos de software, abarcando por tanto un conocimiento técnico y funcional\r\nque va desde el desarrollo de software propiamente, al análisis y definición de\r\nproyectos, la consultoría, el diseño de interfaces y la propia gestión de\r\nproyectos, de equipos de trabajo y de clientes.</span><span style=\"font-size: 11pt; line-height: 1.42857;\">&nbsp;</span>\r\n\r\n<p class=\"MsoNormal\"><span style=\"font-size:11.0pt\">Tecnológicamente, durante\r\nonce años ha tenido la oportunidad de trabajar y participar directamente en\r\nproyectos en los que se han empleado tecnologías y plataformas muy diversas,\r\ncomo pueden ser plataformas de Portales como Liferay o Vignette, Gestores Documentales\r\ncomo Alfresco, diferentes tecnologías y lenguajes de programación como Java,\r\nPHP o .NET… Gracias a ello posee la perspectiva global y la experiencia que\r\nfacilita un enfoque global a la hora de definir funcional y tecnológicamente un\r\nproyecto.</span></p><p class=\"MsoNormal\"><span style=\"font-size: 11pt; line-height: 1.42857;\">Durante los últimos cuatro\r\naños ha estado especializada en el canal móvil, en su papel como responsable de\r\nproyectos en ABAMobile, participando en diversos proyectos del ámbito de la\r\nmovilidad para empresas como:</span></p>\r\n\r\n<ul style=\"margin-top:0cm\" type=\"disc\">\r\n <li class=\"MsoNormal\"><span style=\"font-size:\r\n     11.0pt\">Fremap<o:p></o:p></span></li>\r\n <li class=\"MsoNormal\"><span style=\"font-size:\r\n     11.0pt\">Philips<o:p></o:p></span></li>\r\n <li class=\"MsoNormal\"><span style=\"font-size:\r\n     11.0pt\">Exxon Mobil <o:p></o:p></span></li>\r\n <li class=\"MsoNormal\"><span style=\"font-size:\r\n     11.0pt\">Confederación Asturiana de la Construcción <o:p></o:p></span></li>\r\n <li class=\"MsoNormal\"><span style=\"font-size:\r\n     11.0pt\">AJE Asturias, etc.<o:p></o:p></span></li>\r\n</ul>"
    
        },
       
    ]

    //Ordenar alfabéticamente
    list.sort((a, b) => {
      if(a.nombre < b.nombre) return -1;
      if(a.nombre > b.nombre) return 1;
  
      return 0;
  })

    //Asignar a variable de estado:
    this.setState({
      list:list
    })
 

    }

   
  render() {

    const { navigation } = this.props;
    const list=this.state.list;
       
    return (
                 
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
            {
             list.map((item, i) => (
            
                <ListItem key={i} bottomDivider containerStyle={{backgroundColor:"#F2F2F2", height:120, marginBottom:5}} 
                onPress={() => navigation.navigate("PonenteProfile", { item: item })}>         
                
                  <Avatar rounded size="large" source={{
                      uri: 'http://aplicacionesparaeventos.com'+item.rutaImagenFormatServidor
                   }}/>  
                 
                  <ListItem.Content>

               
                   <Block >
                    <ListItem.Subtitle>{item.hora_inicio +"-"+item.hora_fin }</ListItem.Subtitle>                    
                    
                    <ListItem.Title style={{ color: '#4682B4', fontSize:22 }}>{item.nombre}</ListItem.Title>                    
                    </Block>

                  </ListItem.Content>                 
                  
                  <ListItem.Chevron color='#4682B4'/>
                
                </ListItem>
                
              ))
            }
          </ScrollView>
   
    );
  }
}


export default Speakers;
