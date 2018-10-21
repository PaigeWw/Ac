import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'

import Modal from '../components/Modal'

import Image from './Image'
import Logo from '../images/logo.png'
import close from '../images/close.png'
import { getToken } from '../utils/auth'

import request from '../utils/request'

const Nav = styled(Flex)`
    background-color: rgb(255, 255, 255);
    left: 0;
    right: 0;
    padding: 20px 0;
    position: fixed;
    top: 0;
    z-index: 99;
`

const Button = styled('button')`
    height: 44px;
    min-width: 120px;
    font-weight: 500;
    line-height: 1;
    background: ${({ bg }) => bg || '#039be5'};
    border-radius: 4px;
    font-size: ${({ size }) => size || '14px'};
    padding: 10px 20px;
    color: ${({ color }) => color || '#fff'};
    cursor: pointer;
    border: none;
    &:focus {
        outline: none;
    }
    &:hover {
        color: #409eff;
    }
`
export const BgButton = styled(Button)`
    &:hover {
        color: #fff;
        background: rgb(3, 155, 229, 0.7);
    }
`
const Submit = styled(Button)`
    width: 100%;
    background: #039be5;
    opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
    &:hover {
        color: #fff;
        background: #039be5;
    }
`
const ContactWrap = styled(Flex)`
    background: #fff;
    max-width: 560px;
    min-height: 500px;
    border-radius: 10px;
    position: relative;
    width: 100%;
`
const CloseIcon = styled(Image)`
    position: absolute;
    top: -15px;
    right: -15px;
    cursor: pointer;
`
const Input = styled('input')`
    background-color: rgb(248, 248, 248);
    border: none;
    border-radius: 4px;
    height: 47px;
    width: 100%;
    padding-left: 20px;
    &:focus {
        outline: none;
    }
`
const Title = styled('h4')`
    color: rgb(32, 34, 46);
    font-size: 22px;
    margin: 0 0 40px;
    padding-top: 20px;
    text-align: center;
`
const TextArea = styled('textarea')`
    background-color: rgb(248, 248, 248);
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    min-height: 80px;
    &:focus {
        outline: none;
    }
`
const Tips = styled(Box)`
    position: absolute;
    font-size: 12px;
    color: #f56c6c;
    margin-top: 2px;
`

class App extends React.Component {
    state = {
        showContactModal: false,
        showNameTips: false,
        showEmailTips: false,
        name: '',
        phone: '',
        email: '',
        help: '',
        isLoading: false,
    }

    componentDidMount() {
        this.backTop()
    }

    backTop() {
        const currentY =
            document.documentElement.scrollTop || document.body.scrollTop
        this.scroll(currentY, 0)
    }

    scroll(currentY, targetY) {
        // 获取当前位置方法
        // const currentY = document.documentElement.scrollTop || document.body.scrollTop

        // 计算需要移动的距离
        let needScrollTop = targetY - currentY
        let _currentY = currentY
        setTimeout(() => {
            // 一次调用滑动帧数，每次调用会不一样
            const dist = Math.ceil(needScrollTop / 10)
            _currentY += dist
            window.scrollTo(_currentY, currentY)
            // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
            if (needScrollTop > 10 || needScrollTop < -10) {
                this.scroll(_currentY, targetY)
            } else {
                window.scrollTo(_currentY, targetY)
            }
        }, 1)
    }

    toggleContactModal() {
        this.setState(prevState => ({
            showContactModal: !prevState.showContactModal,
        }))
    }

    handleChange(type, e) {
        this.setState({
            [type]: e.target.value,
        })
    }

    handleBlur(type, e) {
        if (!e.target.value) {
            this.setState({
                [`show${type}Tips`]: true,
                tips: 'Required',
            })
            return
        }
        if (type === 'Email') {
            this.testEmail(e.target.value)
        }
    }

    testEmail(email) {
        if (
            !/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(email)
        ) {
            this.setState({
                showEmailTips: true,
                tips: 'Please enter the correct email',
            })
            return false
        }
        return true
    }

    async handleSubmit() {
        const { name, email, phone, help, showContactModal } = this.state
        if (!name) {
            this.setState({
                showNameTips: true,
                tips: 'Required',
            })
            return
        }
        if (!email) {
            this.setState({
                showEmailTips: true,
                tips: 'Required',
            })
            return
        }
        if (!this.testEmail(email)) {
            return
        }
        const params = {}
        const data = {
            name,
            email,
        }
        if (phone) {
            params.phone = phone
        }
        if (help) {
            data.purpose = help
        }
        this.setState({
            isLoading: true,
        })
        const res = await request({
            url: '/api/function/contactUs',
            method: 'post',
            data,
            params,
        })
        if (res.code === 0) {
            this.setState({
                showContactModal: false,
            })
        }
        this.setState({
            isLoading: false,
        })
        console.log(res)
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
            name,
            phone,
            email,
            help,
            showNameTips,
            showEmailTips,
            tips,
            isLoading,
            showContactModal,
        } = this.state
        return (
            <Nav justifyContent="center">
                <Flex
                    width={4 / 5}
                    alignItems="center"
                    justifyContent={['center', 'center', 'space-between']}
                    flexWrap="wrap"
                >
                    <Image
                        width={150}
                        height={40}
                        src={Logo}
                        onClick={this.backTop.bind(this)}
                        alt="apkchina-logo"
                    />
                    <Flex
                        justifyContent={['center', 'center', 'flex-end']}
                        alignItems="center"
                        width={[1, 1, 1 / 2]}
                        mt={[10, 10, 0]}
                    >
                        <Button
                            bg="#fff"
                            color="#000"
                            onClick={this.toggleContactModal.bind(this)}
                            size="16px"
                        >
                            Contact us
                        </Button>
                        <Box ml={40}>
                            <BgButton onClick={this.goToDashboard.bind(this)}>
                                Dashborad
                            </BgButton>
                        </Box>
                    </Flex>
                </Flex>
                <Modal isOpen={showContactModal}>
                    <ContactWrap>
                        <CloseIcon
                            width={30}
                            height={30}
                            src={close}
                            onClick={this.toggleContactModal.bind(this)}
                        />
                        <Flex
                            width={1}
                            px={30}
                            pt={20}
                            pb={40}
                            flexDirection="column"
                        >
                            <Title>Contact Us</Title>
                            <Box>
                                <Input
                                    placeholder="Name *"
                                    value={name}
                                    onChange={this.handleChange.bind(
                                        this,
                                        'name'
                                    )}
                                    onBlur={this.handleBlur.bind(this, 'Name')}
                                />
                                {showNameTips && <Tips>{tips}</Tips>}
                            </Box>
                            <Box my={25}>
                                <Input
                                    placeholder="Email *"
                                    value={email}
                                    onChange={this.handleChange.bind(
                                        this,
                                        'email'
                                    )}
                                    onBlur={this.handleBlur.bind(this, 'Email')}
                                />
                                {showEmailTips && <Tips>{tips}</Tips>}
                            </Box>

                            <Box mb={25}>
                                <Input
                                    placeholder="Phone number"
                                    value={phone}
                                    onChange={this.handleChange.bind(
                                        this,
                                        'phone'
                                    )}
                                />
                            </Box>
                            <TextArea
                                placeholder="How can we help you?"
                                value={help}
                                onChange={this.handleChange.bind(this, 'help')}
                            />
                            <Box mt={25}>
                                <Submit
                                    onClick={this.handleSubmit.bind(this)}
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Please Waiting' : 'Submit'}
                                </Submit>
                            </Box>
                        </Flex>
                    </ContactWrap>
                </Modal>
            </Nav>
        )
    }
}

export default App
