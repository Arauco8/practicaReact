/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
//crear rapido un componente rcc

export default class ClassComponent extends Component {
    constructor(props){
        console.log("Class: Aparece el Constructor")
        super(props)
        this.state = {
            name: 'Puma'
        }
    }

    componentDidMount() {
        console.log("Class: Se montó el componente")
    }

    componentDidUpdate() {
        console.log("Class: Se actualizó el componente")
    }

    componentWillUnmount() {
        console.log("Class: Se desmontó el componente")
    }

    render() {
        console.log("Class: Aparece el Render")
        return (
            <div>
                <h1>Componente de Clase</h1>
                <h1>{this.state.name}</h1>
                <button onClick={() => this.setState({name: 'Caupolican'})}>
                    Cambiar el Nombre</button>
            </div>
        )
    }
}
