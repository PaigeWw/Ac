import React from 'react'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'
import Image from './Image'
import Text from './Text'

const OurService = ({ service }) => {
    const len = service.length
    let itemSpace = 1 / 3
    if (len === 1) {
        itemSpace = 1 / 2
    } else if (len >= 3) {
        itemSpace = 1 / 4
    }
    return (
        <Container
            flexDirection="column"
            alignItems="center"
            size="24px"
            mb="120px"
        >
            <Text py="48px" fontSize="24px">
                Our Service
            </Text>
            <Wrapper
                flexDirection="column"
                px="10px"
                pt="32px"
                pb="75px"
                justifyContent={['center', 'center', 'space-around']}
                flexWrap="wrap"
            >
                {service.map(item => (
                    <Item width={1}>
                        <Image src={item.icon} zoom="0.5" />
                        <Info py="48px" fontSize="16px">
                            {item.info}
                        </Info>
                    </Item>
                ))}
            </Wrapper>
        </Container>
    )
}

export default OurService

const Container = styled(Flex)`
    width: 100%;
`

const Wrapper = styled(Flex)`
    width: calc(100% - 20px);
`
const Item = styled(Flex)`
    align-items: center;
    text-align: center;
`

const Info = styled(Text)`
    width: 100%;
    word-wrap: break-word;
`
