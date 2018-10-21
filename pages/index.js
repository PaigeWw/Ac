import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import Link from 'next/link'

import Head from '../components/Head'
import Nav, { BgButton } from '../components/Nav'
import Modal from '../components/Modal'
import Image from '../components/Image'

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

const BigContainer = styled(Flex)`
    margin: 0 auto;
    position: relative;
    height: ${({ height }) => (height ? height + 'px' : '100%')};
`
const Title = styled(Box)`
    margin: 0 0 24px;
    text-align: center;
    font-weight: bold;
`
const SubTitle = styled(Flex)`
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    max-width: 1040px;
`

const BannerContainer = styled('img')`
    object-fit: contain;
    width: 100%;
    left: 0;
    right: 0;
    position: absolute;
    margin: auto;
    max-width: 1040px;
    z-index: -1;
    bottom: 40px;
`
const AbsoluteText = styled(Flex)`
    position: absolute;
`
const VideoText = styled('div')`
    margin-left: 8px;
    font-size: 12px;
    z-index: 9;
    color: #606266;
    cursor: pointer;
    &:hover {
        color: #409eff;
    }
`
const AppDashboard = styled(Flex)`
    min-height: ${({ height }) => (height ? height + 'px' : '100%')};
`
const TabItem = styled(Flex)`
    color: rgb(32, 34, 46);
    line-height: 26px;
    margin-bottom: 30px;
    padding-left: 20px;
    vertical-align: middle;
    cursor: pointer;
    &:last-child {
        margin-bottom: 0;
    }
`
const ResponseImg = styled('img')`
    width: 100%;
    height: 100%;
`
const AppService = styled(Flex)`
    background: #fafafb;
    min-height: ${({ height }) => (height ? height + 'px' : '100%')};
`
const ServiceTitle = styled('h4')`
    font-size: 16px;
    line-height: 26px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
const ServiceSubTitle = styled(Flex)`
    font-size: 14px;
    line-height: 22px;
    min-height: 124px;
    text-align: center;
`
const Input = styled('input')`
    border: 2px solid rgb(221, 221, 221);
    border-radius: 24px;
    font-size: 16px;
    height: 48px;
    width: 100%;
    outline: none;
    padding: 0 15px;
    box-sizing: border-box;
`
const GradientButton = styled('button')`
    background-image: linear-gradient(
        90deg,
        rgb(66, 139, 238),
        rgb(80, 215, 255)
    );
    border: none;
    border-radius: 24px;
    font-size: 16px;
    height: 48px;
    cursor: pointer;
    width: 100%;
    color: #fff;
    border: none;
    &:focus {
        outline: none;
    }
`
const Testimonial = styled(Flex)`
    border: 1px solid rgb(242, 242, 242);
    border-radius: 8px;
    box-shadow: 0 4px 24px 0 #f0f0f0;
    margin: 0 auto;
    min-height: 200px;
    padding-bottom: 48px;
    position: relative;

    margin-top: 80px;
`
const Symbol = styled(Image)`
    left: 28px;
    position: relative;
    top: 24px;
`
const SymbolText = styled(Box)`
    color: rgb(32, 34, 46);
    font-size: 14px;
    line-height: 22px;
    margin: 0 auto;
    text-indent: 28px;
    width: 65%;
`
const Customer = styled(Flex)`
    background: #fafafb;
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
const TestimonialWrap = styled(Flex)``
const SearchWrap = styled(Flex)``
const ResponseText = styled(Flex)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
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
const IframeWrap = styled(Flex)`
    background: #eee;
    max-width: 760px;
    position: relative;
`
const Iframe = styled('iframe')`
    height: 510px;
    width: 100%;
`
const CloseIcon = styled(Box)`
    position: absolute;
    top: -40px;
    right: -40px;
    cursor: pointer;
`

class App extends React.Component {
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
        return (
            <Flex justifyContent="center" flexDirection="column">
                <Modal isOpen={showVideoModal}>
                    <IframeWrap width={1}>
                        <CloseIcon mr={['40px', 0]}>
                            <Image
                                width={30}
                                height={30}
                                src={close}
                                onClick={this.toggleVideoModal.bind(
                                    this,
                                    false
                                )}
                            />
                        </CloseIcon>
                        <Iframe
                            src="https://www.youtube.com/embed/hJtqm79-vyg?rel=0&amp;autoplay=1"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                        />
                    </IframeWrap>
                </Modal>
                <Head />
                <Nav />
                <BigContainer
                    width={4 / 5}
                    pt={[50, 150]}
                    height={height}
                    justifyContent="center"
                >
                    {
                        <ResponseText
                            alignItems="center"
                            flexDirection="column"
                            mt={150}
                        >
                            <Flex width={[0.9, 4 / 5]} justifyContent="center">
                                <Title fontSize={['30px', '40px']}>
                                    Get Your Mobile App to China
                                </Title>
                            </Flex>
                            <Flex width={[4 / 5, 3 / 5]}>
                                <SubTitle>
                                    ApkChina provides professional app services
                                    and track various app data to connect your
                                    business with 1 billion+ Chinese users
                                    seamlessly.
                                </SubTitle>
                            </Flex>
                            <Flex
                                width={1}
                                alignItems="center"
                                justifyContent="center"
                                mt={14}
                            >
                                <Image
                                    width={28}
                                    height={28}
                                    src={play}
                                    alt="apkchina"
                                />
                                <VideoText
                                    onClick={this.toggleVideoModal.bind(
                                        this,
                                        true
                                    )}
                                >
                                    Watch the video
                                </VideoText>
                            </Flex>
                        </ResponseText>
                    }

                    <BannerContainer src={illustration} />
                </BigContainer>
                <AppDashboard
                    width={[1, 4 / 5]}
                    alignItems="center"
                    alignSelf="center"
                    flexDirection="column"
                    flexWrap="wrap"
                    height={height}
                    justifyContent="center"
                >
                    <Flex width={1} justifyContent="center" mb={80}>
                        <Title fontSize={['30px', '40px']}>App Dashboard</Title>
                    </Flex>
                    <Flex
                        width={1}
                        justifyContent="center"
                        alignItems="center"
                        flexWrap="wrap"
                        px={-40}
                    >
                        <Box width={[1, 1, 0.6]} px={40} mb={[30, 0]}>
                            <ResponseImg src={JsonData.tabsScreenhots[1]} />
                        </Box>
                        <Box width={[1, 1, 0.4]}>
                            {JsonData.tabs.map((item, index) => (
                                <TabItem
                                    active={activeTabIndex === index}
                                    key={index}
                                    onClick={this.changeTabIndex.bind(
                                        this,
                                        index
                                    )}
                                >
                                    {item}
                                </TabItem>
                            ))}
                        </Box>
                    </Flex>
                    <Flex py={40} justifyContent="center" width={1}>
                        <BgButton onClick={this.goToDashboard.bind(this)}>
                            Dashboard
                        </BgButton>
                    </Flex>
                </AppDashboard>
                <AppService
                    width={1}
                    justifyContent="center"
                    alignItems="center"
                    height={height}
                    flexDirection="column"
                >
                    <Flex width={1} justifyContent="center" mb={80}>
                        <Title fontSize={['30px', '40px']}>App Service</Title>
                    </Flex>
                    <Flex flexWrap="wrap" width={1} justifyContent="center">
                        {JsonData.service.map((item, index) => (
                            <Flex
                                width={[1, 1, 1 / 3]}
                                flexDirection="column"
                                alignItems="center"
                                key={index}
                            >
                                <Image
                                    width={48}
                                    height={48}
                                    src={item.icon}
                                    alt={item.alt}
                                />
                                <ServiceTitle>{item.title}</ServiceTitle>
                                <ServiceSubTitle
                                    width={[0.85, 3 / 5]}
                                    justifyContent="center"
                                >
                                    {item.subtitle}
                                </ServiceSubTitle>
                            </Flex>
                        ))}
                    </Flex>
                </AppService>
                <SearchWrap
                    py={[80, 160]}
                    flexDirection="column"
                    alignItems="center"
                    flexWrap="wrap"
                >
                    <Title fontSize={['30px', '40px']}>
                        Search App in China App Stores
                    </Title>
                    <Flex
                        flexWrap="wrap"
                        width={4 / 5}
                        justifyContent="center"
                        mt={40}
                    >
                        <Box width={[1, 1, 7 / 10]} css={{ maxWidth: '500px' }}>
                            <Input
                                value={search}
                                onChange={this.handleChange.bind(this)}
                            />
                        </Box>
                        <Box
                            width={[1, 1, '120px']}
                            mt={[20, 20, 0]}
                            ml={[0, 0, 40]}
                            css={{ maxWidth: '500px' }}
                        >
                            <GradientButton
                                onClick={this.handleSubmit.bind(this)}
                            >
                                Search
                            </GradientButton>
                        </Box>
                    </Flex>
                </SearchWrap>
                <TestimonialWrap
                    flexDirection="column"
                    alignItems="center"
                    pm={120}
                >
                    <Title fontSize={['30px', '40px']}>
                        Customer Testimonial
                    </Title>
                    <Testimonial
                        width={[9 / 10, 1 / 2]}
                        justifyContent="center"
                    >
                        <Symbol width={48} height={48} src={symbol} />
                        <SymbolText pt={60}>
                            For GoPro, publishing and updating our mobile apps
                            to the most popular China Android App Stores is
                            critical for our Chinese customers to enjoy the
                            latest and fullest experience with their GoPros.
                            APKChina has made this process completely seamless
                            for GoPro, assisting with developer account
                            registration, app submission, facilitating the
                            review process, maintaining our listings up to date,
                            and providing GoPro with much needed visibility on
                            usage and issues in China through the lens of third
                            party Android app stores. APKChina has provided
                            GoPro with outstanding service, and I recommend
                            APKChina as a must-have tool for any app developer
                            who is serious about the China market.
                        </SymbolText>
                    </Testimonial>
                </TestimonialWrap>
                <Customer
                    width={1}
                    flexDirection="column"
                    alignItems="center"
                    py={80}
                    mt={120}
                >
                    <Title fontSize={['30px', '40px']}>Our Customer</Title>
                    <Flex justifyContent="center">
                        <Image
                            width={100}
                            height={100}
                            src={leftq}
                            alt="apkchina-customer"
                        />
                        <Box ml={60}>
                            <Image
                                width={100}
                                height={100}
                                src={rightq}
                                alt="apkchina-quora"
                            />
                        </Box>
                    </Flex>
                </Customer>
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
            </Flex>
        )
    }
}

export default App
