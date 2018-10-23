import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import Link from 'next/link'

import Head from './Head'
import Nav2, { BgButton } from './Nav2'
import CustomerProblems from './CustomerProblems'
import OurService from './OurService'
import Image from './Image'

import { getToken } from '../utils/auth'
import GA from '../utils/ga'

import email from '../images/email.png'
import twitter from '../images/twitter.png'
import quora from '../images/quora.png'
import adress from '../images/adress.png'
import logoGray from '../images/logo-grap.png'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
        'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  }
  * {
    cursor: default;
  }
`
const Container = styled(Flex)`
    background-image: url(${({ bg }) => bg});
    background-repeat: no-repeat;
    background-size: 100% auto;
`
const BigContainer = styled(Flex)`
    margin: 0 auto;
    margin-top: 582px;
    position: relative;
    max-width: 1040px;
`

const Bottom = styled(Flex)`
    background: rgb(32, 34, 46);
    color: rgb(94, 96, 107);
    font-size: 14px;
    padding-top: 30px;
    position: relative;
`
const Contact = styled('h4')`
    ont-size: 28px;
    line-height: 26px;
    margin: 0;
`
const FooterText = styled(Flex)`
    font-size: 14px;
    margin-top: 12px;
    text-align: center;
`
const Copyright = styled(Flex)`
    border-top: 1px solid rgb(50, 52, 64);
    margin-top: 34px;
    padding-bottom: 20px;
    padding-top: 20px;
    text-align: center;
`
const BottomLogo = styled(Image)`
    left: 0;
    position: ${({ isMobile }) => (isMobile ? 'relative' : 'absolute')};
    top: 0;
`
const BottomWrap = styled(Flex)`
    position: relative;
`

class ModalPage extends React.Component {
    state = {
        activeTabIndex: 0,
        showVideoModal: false,
        search: '',
        isMobile: false,
    }

    componentDidMount() {
        window.onresize = this.handleResize()
        console.log(process.env.BUILD_ENV)
        setTimeout(() => this.handleResize(), 150)

        if (process.env.BUILD_ENV === 'PROD') {
            console.log('正式')
            GA('UA-127199752-2') //正式
        } else {
            console.log('测试')
            GA('UA-127199752-1') //测试
        }
    }

    handleResize() {
        const bodyHeight =
            window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight
        const bodyWidth =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth
        console.log(bodyHeight)
        this.setState({
            height: bodyHeight,
        })
        if (bodyWidth <= 640) {
            this.setState({
                isMobile: true,
            })
        }
    }

    changeTabIndex(activeTabIndex) {
        this.setState({
            activeTabIndex,
        })
    }

    toggleVideoModal(showVideoModal) {
        this.setState({
            showVideoModal,
        })
    }

    handleChange(e) {
        this.setState({
            search: e.target.value,
        })
    }

    handleSubmit() {
        const { search } = this.state
        if (getToken()) {
            window.location.assign(
                `/dashboard/#/addNewApplication?keyword=${search}`
            )
        } else {
            window.location.assign(`/dashboard/#/login?keyword=${search}`)
        }
    }

    goToDashboard() {
        if (getToken()) {
            window.location.assign('/dashboard/#/allApplications')
            return
        }
        window.location.assign('/dashboard/#/login')
    }

    render() {
        const {
            activeTabIndex,
            showVideoModal,
            search,
            height,
            isMobile,
        } = this.state

        const {
            title,
            bg,
            cProblems,
            service,
            serviceSteps,
        } = this.props.appdata

        return (
            <Container justifyContent="center" flexDirection="column" bg={bg}>
                <Head />
                <Nav2 />
                <BigContainer
                    pt={[50, 150]}
                    width={4 / 5}
                    flexDirection="column"
                >
                    <CustomerProblems problems={cProblems} />
                    <OurService service={service} />
                </BigContainer>
                <Bottom justifyContent="center">
                    <BottomWrap
                        width={4 / 5}
                        flexDirection="column"
                        alignItems={['center', 'flex-end']}
                    >
                        {
                            <BottomLogo
                                width={149}
                                height={40}
                                src={logoGray}
                                isMobile={isMobile}
                                alt="apkchina-logo"
                            />
                        }
                        <Contact>Contact us</Contact>
                        <Flex mt={12}>
                            <a
                                href="https://twitter.com/apk_china"
                                target="_blank"
                            >
                                <Image
                                    width={16}
                                    height={16}
                                    src={twitter}
                                    alt="apkchina-twitter"
                                    pointer
                                />
                            </a>
                            <Box ml={24}>
                                <a href="mailto:customerservice@apkchina.org">
                                    <Image
                                        width={16}
                                        height={16}
                                        src={email}
                                        alt="apkchina-email"
                                        pointer
                                    />
                                </a>
                            </Box>
                            <Box ml={24}>
                                <a
                                    href="https://apkchina-org.quora.com"
                                    target="_blank"
                                >
                                    <Image
                                        width={16}
                                        height={16}
                                        src={quora}
                                        alt="apkchina-quora"
                                        pointer
                                    />
                                </a>
                            </Box>
                        </Flex>
                        <FooterText>customerservice@apkchina.org</FooterText>

                        <FooterText justifyContent="center">
                            <Image
                                width={16}
                                height={16}
                                src={adress}
                                alt="apkchina-address"
                            />
                            701 Taogan Road, Sheshan, Shanghai, China 201602
                        </FooterText>
                        <Copyright width={1} justifyContent="center">
                            © 2023 by www.apkchina.org
                        </Copyright>
                    </BottomWrap>
                </Bottom>
            </Container>
        )
    }
}

export default ModalPage
