import styled from 'styled-components'
import { fontWeight } from 'styled-system'
import { Box } from '@rebass/grid'

const themed = key => props => props.theme[key]

const Text = styled(Box)(fontWeight, themed('Text'))

export default Text
