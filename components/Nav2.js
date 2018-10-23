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
    background-color: none;
    left: 0;
    right: 0;
    padding: 10px 0;
    position: fixed;
    top: 0;
    z-index: 99;
`

const Button = styled(Flex)`
    justify-content: center;
    align-items: center;
    height: 30px;
    min-width: 82px;
    font-weight: 500;
    line-height: 1;
    background: ${({ bg }) => bg || '#039be5'};
    border-radius: 4px;
    font-size: ${({ size }) => size || '14px'};
    color: ${({ color }) => color || '#fff'};
    cursor: pointer;
    border: none;
    &:focus {
        outline: none;
    }
    &:hover {
        color: #333;
    }
`
export const BgButton = styled(Button)`
    border: 1px solid #fff;
    &:hover {
        color: #fff;
        background: #5e52ff;
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
                        justifyContent={['center', 'center', 'space-around']}
                        alignItems="center"
                        width={[1, 1, 1 / 2]}
                        mt={[10, 10, 0]}
                    >
                        <Button bg="none" size="14px">
                            Service
                        </Button>
                        <Button bg="none" size="14px">
                            Resource
                        </Button>
                        <Button bg="none" size="14px">
                            Pricing
                        </Button>
                        <Button bg="none" size="14px">
                            Contact
                        </Button>
                        <Box>
                            <BgButton
                                size="14px"
                                bg="none"
                                onClick={this.goToDashboard.bind(this)}
                            >
                                Dashborad
                            </BgButton>
                        </Box>
                    </Flex>
                </Flex>
            </Nav>
        )
    }
}

export default App
