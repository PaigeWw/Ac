import React from 'react'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'
import Image from './Image'
import Text from './Text'

const ServiceStep = ({ serviceSteps }) => {
    return (
        <Container
            flexDirection="column"
            alignItems="center"
            size="24px"
        >
            <Text pb="100px" fontSize={['34px','48px']}  fontWeight={'bold'}>
                Steps to request service
            </Text>
            <Wrapper
                flexDirection="column"

                px="10px"
                pt="32px"
                pb="75px"
                alignItems="center"
                justifyContent={['space-around']}

            >
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    width={4 / 5}>
                    <StepsImage src={serviceSteps}/>
                </Flex>
                <Button mt={'36px'} mb={'100px'}>Contact us</Button>
            </Wrapper>
        </Container>
    )
}

export default ServiceStep

const Container = styled(Flex)`
    width: 100%;
`

const Wrapper = styled(Flex)`
    width: 100%;
    background-color: #F7F9FB;
`
const Button = styled(Flex)`
    align-items: center;
    justify-content: center;
    width:200px;
    height:64px;
    background:rgba(83,161,255,1);
    box-shadow:0px 12px 20px 0px rgba(189,219,255,1);
    border-radius:32px;
    color: white;
    cursor: pointer;
`

const StepsImage = styled(Image)`
    max-width: 808px;
    width: 100%;
`
