import React, { Component } from 'react'
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Departamentos from './components/Departamentos';
import CreateDepartamento from './components/CreateDepartamento';
import MenuDepartamentos from './components/MenuDepartamentos';
import DetallesDepartamento from './components/DetallesDepartamento';
import DeleteDepartamento from './components/DeleteDepartamento';
import UpdateDepartamento from './components/UpdateDepartamento';
import Empleados from './components/Empleados';

export default class Router extends Component {
  render() {
    function DetallesDepartamentoElement() {
      var {num, nom, loc} = useParams();
      return (
        <DetallesDepartamento iddepartamento={num}
          nombre={nom} localidad={loc}/>
      );
    }

    function DeleteDepartamentoElement() {
      var { id } = useParams();
      return (<DeleteDepartamento id={id}/>);
    }

    function UpdateDepartamentoElement() {
      var { iddepartamento } = useParams();
      return (<UpdateDepartamento id={iddepartamento}/>);
    }

    function EmpleadosElement() {
      var {iddepartamento} = useParams();
      return (<Empleados iddepartamento={iddepartamento}/>);
    }

    return (
      <BrowserRouter>
        <MenuDepartamentos/>
        <Routes>
            <Route path="/" element={<Departamentos/>}/>
            <Route path="/create" element={<CreateDepartamento/>}/>
            <Route path="/details/:num/:nom/:loc"
              element={<DetallesDepartamentoElement/>}/>
            <Route path='/delete/:id' element={<DeleteDepartamentoElement/>}/>
            <Route path="/update/:iddepartamento"
              element={<UpdateDepartamentoElement/>}/>
            <Route path="/empleados/:iddepartamento"
            element={<EmpleadosElement/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
