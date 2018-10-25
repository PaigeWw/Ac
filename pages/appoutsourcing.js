import MouldPage from '../components/MouldPage'
import {AppOutsourcingData} from '../utils/appdata'

import React from 'react'



class App extends React.Component {
    state = {
        isLoading: false,
    }

    componentDidMount() {
    }


    render() {
        return (
            <MouldPage justifyContent="center" appdata={AppOutsourcingData}>

            </MouldPage>
        )
    }
}

export default App

