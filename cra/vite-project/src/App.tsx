import React from "react";
import Def from './AComp'
import B from './BComp'
import {C as Cd,D,E} from './CDEComp'
import Children from './ChildrenComp'
import Eventos from './Eventos'
import ColorSelected from "./ColorSelected";
import PreventDefault from './PreventDefault'
import PropagEventos from './PropagEventos'
import Logged from './Logged'
import Formulario from './Formulario'
import ArrayState from './ArrayState'
import UseEffect from './UseEffect'
import Intervarl from './Intervarl'
import Style1 from './Style1'
import Style2 from './Style2'
import Style3 from './Style3'
import UseRef from  './UseRef'
import  Reducer from './Reducer'

/*
  trabahando com temas no context 
*/ 




export class App2 extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <Reducer></Reducer>
        <hr />
        <UseRef></UseRef>
        <Style3></Style3>
        <Style1></Style1>
        <Style2></Style2>
        <hr />
        <Intervarl></Intervarl>
        <br />
        <UseEffect></UseEffect>
        <ArrayState></ArrayState>
        <hr />
        <Formulario></Formulario>
        <Logged></Logged>
        <PropagEventos></PropagEventos>
        <PreventDefault></PreventDefault>
        <ColorSelected></ColorSelected>
        <Children>
            <B></B>  
        </Children>
        <Eventos></Eventos>
        <B></B>
         <Def name="Osmar" age={9}  />
         <hr /> 
         <Cd></Cd>
         <hr />
         <D  ></D>
         <hr />
         <E></E>
         <hr />
        <h1>
          Componente padrão 
        </h1>
      </div>
    )
  }
}

export default App2;


/* const App = () => {
  return (<>
    <h1>Primeiro Componente</h1>
  </>

  )
}

export default App; */