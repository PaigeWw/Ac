import react from 'react'
import styled from 'styled-components'

const Image = styled('img')`
    width: ${({ width }) => width + 'px'};
    height: ${({ height }) => height + 'px'};
    cursor: ${({ pointer }) => (pointer ? 'pointer' : 'default')};
    zoom: ${({ zoom }) => (zoom ? zoom : 1)};
`

export default Image
