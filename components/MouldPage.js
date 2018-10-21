import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import Link from 'next/link'

import Head from './Head'
import Nav2, { BgButton } from './Nav2'
import Modal from './Modal'
import Image from './Image'

import { getToken } from '../utils/auth'
import GA from '../utils/ga'

import screenshot1 from '../images/screenshot_1.png'
import screenshot2 from '../images/screenshot_2.svg'
import screenshot3 from '../images/screenshot_3.png'
import maitain from '../images/maitain.png'
import play from '../images/play.png'
import test from '../images/test.png'
import service from '../images/service.png'
import local from '../images/local.png'
import work from '../images/work.png'
import symbol from '../images/symbol.png'
import close from '../images/close.png'
import email from '../images/email.png'
import twitter from '../images/twitter.png'
import quora from '../images/quora.png'
import leftq from '../images/left-q.png'
import rightq from '../images/right-q.png'
import adress from '../images/adress.png'
import logoGray from '../images/logo-grap.png'
import illustration from '../images/illustration.png'

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
    background-image: url(${({bg}) => bg});
    background-repeat: no-repeat;
    background-size: 100% auto;
`
const BigContainer = styled(Flex)`
    margin: 0 auto;
    position: relative;
    height: ${({ height }) => (height ? height + 'px' : '100%')};
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

const JsonData = {
    service: [
        {
            icon: maitain,
            title: 'App Release and Maintenance',
            alt: 'Release app china - maintenance',
            subtitle:
                'Launch/update/maintain your app in major Chinese app stores.',
        },
        {
            icon: test,
            title: 'App Testing',
            alt: 'App test china - app test',
            subtitle:
                'High-quality manual testing in real China environment and mobile devices.',
        },
        {
            icon: service,
            title: 'App Customer Care',
            alt: 'App customer care china - customer care',
            subtitle:
                'Professionally collect user feedbacks, reply to user reviews and assist resolve user problems.',
        },
        {
            icon: local,
            title: 'App Localization',
            alt: 'App localization china - localization',
            subtitle:
                'Provide a complete solution for your app localization in China.',
        },
        {
            icon: work,
            title: 'App Outsourcing',
            alt: 'App outsourcing china - outsourcing',
            subtitle: 'outsource your app development to a team in China.',
        },
    ],
    tabs: [
        'Track your app statistics in major Chinese appstores, including app downloads, rating,reviews, keyword rank, category rank, etc.',

        'Set up daily/monthly email notification aboutyour app or a notice for some specific events,making you better aware of your app status inChina.',

        'Watch your competitor’s app performance orupdates to have a good and real-time knowledgeabout the market.',
    ],
    tabsScreenhots: [screenshot1, screenshot2, screenshot3],
}


class ModalPage extends React.Component {
    state = {
        activeTabIndex: 0,
        showVideoModal: false,
        search: '',
        height: 400,
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

        const  {
            title,
            bg,
            cProblems,
            service,
            serviceSteps
        } = this.props.appdata


        return (
            <Container justifyContent="center" flexDirection="column" bg={bg}>
                {/*<Modal isOpen={showVideoModal}>*/}
                    {/*<IframeWrap width={1}>*/}
                        {/*<CloseIcon mr={['40px', 0]}>*/}
                            {/*<Image*/}
                                {/*width={30}*/}
                                {/*height={30}*/}
                                {/*src={close}*/}
                                {/*onClick={this.toggleVideoModal.bind(*/}
                                    {/*this,*/}
                                    {/*false*/}
                                {/*)}*/}
                            {/*/>*/}
                        {/*</CloseIcon>*/}
                        {/*<Iframe*/}
                            {/*src="https://www.youtube.com/embed/hJtqm79-vyg?rel=0&amp;autoplay=1"*/}
                            {/*frameBorder="0"*/}
                            {/*allow="autoplay; encrypted-media"*/}
                            {/*allowfullscreen*/}
                        {/*/>*/}
                    {/*</IframeWrap>*/}
                {/*</Modal>*/}
                <Head />
                <Nav2 />
                <BigContainer
                    width={4 / 5}
                    pt={[50, 150]}
                    height={height}
                    justifyContent="center"
                >
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
