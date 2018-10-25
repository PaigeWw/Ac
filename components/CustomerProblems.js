import React from 'react'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'
import Image from './Image'
import Text from './Text'

const CustomerProblems = ({ problems }) => {
    const len = problems.length
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
            <Text py="48px" fontSize="24px" fontWeight={'bold'}>
                Customer's Problems
            </Text>
            <Wrapper
                px="10px"
                pt="32px"
                pb="75px"
                justifyContent={['center', 'center', 'space-around']}
                flexWrap="wrap"
            >
                {problems.map(item => (
                    <Item width={[1, 1, 1 / 3]}>

                        <Image src={item.icon} width="148" height="108" />
                        <Text pt="40px" fontSize="16px" fontWeight={'bold'}>
                            {item.subtitle}
                        </Text>
                        <Info pt="20px" pb="20px" fontSize="14px">
                            {item.info}
                        </Info>
                    </Item>
                ))}
            </Wrapper>
        </Container>
    )
}

export default CustomerProblems

const Container = styled(Flex)`
    width: 100%;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 16px 36px 0px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
`

const Wrapper = styled(Flex)`
    width: calc(100% - 20px);
`
const Item = styled(Flex)`
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const Info = styled(Text)`
    width: 100%;
    word-wrap: break-word;
`
