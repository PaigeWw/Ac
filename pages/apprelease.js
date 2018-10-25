import MouldPage from '../components/MouldPage'
import {AppReleaseData} from '../utils/appdata'

import React from 'react'



class App extends React.Component {
    state = {
        isLoading: false,
    }

    componentDidMount() {
    }


    render() {
        return (
            <MouldPage justifyContent="center" appdata={AppReleaseData}>

            </MouldPage>
        )
    }
}

export default App

