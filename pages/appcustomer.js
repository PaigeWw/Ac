import MouldPage from '../components/MouldPage'
import {AppCustomerCareData} from '../utils/appdata'

import React from 'react'



class App extends React.Component {
    state = {
        isLoading: false,
    }

    componentDidMount() {
    }


    render() {
        return (
            <MouldPage justifyContent="center" appdata={AppCustomerCareData}>

            </MouldPage>
        )
    }
}

export default App

