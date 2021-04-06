import './App.css'
import React from 'react';

import Card from './components/layout/Card';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from './components/basicos/ComFilhos';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';

export default (props) => (
  <div className="App">
    <Card titulo="#6 - Condicional v2">
      <CondicionalComIf numero={2}/>
    </Card>

    <Card titulo="#05 - Condicional v1">
      <Condicional numero={1}/>
    </Card>

    <Card titulo="#04 - Repetição">
      <Repeticao/>
    </Card>

    <Card titulo="#03 - Componente com Filhos">
    <ComFilhos>
      <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Zé</li>
      </ul>
    </ComFilhos>
    </Card>

    <Card titulo="#02 -Componente com Parametro">
      <ComParametro titulo="esse é o título" subtitulo="este é o subtitulo"/>
    </Card>

    <Card titulo="#01 - Primeiro componente">
      <Primeiro />
    </Card>
  </div>
)
