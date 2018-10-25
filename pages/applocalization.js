import MouldPage from '../components/MouldPage'
import {AppLocalizationData} from '../utils/appdata'

import React from 'react'



class App extends React.Component {
    state = {
        isLoading: false,
    }

    componentDidMount() {
    }


    render() {
        return (
            <MouldPage justifyContent="center" appdata={AppLocalizationData}>

            </MouldPage>
        )
    }
}

export default App

