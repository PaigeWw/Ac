import MouldPage from '../components/MouldPage'
import {AppTextData} from '../utils/appdata'

import React from 'react'



class App extends React.Component {
    state = {
        isLoading: false,
    }

    componentDidMount() {
    }


    render() {
        return (
            <MouldPage justifyContent="center" appdata={AppTextData}>

            </MouldPage>
        )
    }
}

export default App

