import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'

import Modal from '../components/Modal'

import Image from './Image'
import Logo from '../images/logo.png'
import Logo1 from '../images/logo@2x.png'
import menu from '../images/menu.png'
import menu1 from '../images/menu1.png'
import close from '../images/close.png'
import { getToken } from '../utils/auth'

import request from '../utils/request'

const Nav = styled(Flex)`
    background-color: ${({ navWhite }) => navWhite || '#fff'};
    box-shadow: ${({ navWhite }) =>
        navWhite || '0px 4px 8px 0px rgba(0,0,0,0.08)'};
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
    border: 1px solid ${({ color }) => color || '#fff'};
    &:hover {
        color: ${({ color }) => '#fff' || '#fff'};
        background: #53a1ff;
    }
`

const Menus = styled(Flex)`
    & img {
        display: none;
    }
    @media (max-width: 600px) {
        overflow: hidden;
        width: 40px;
        height: 40px;
        & img {
            display: block;
        }
        & div {
            display: none;
        }
        &:hover {
            // background: yellow;
        }
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
        navWhite: true,
    }

    componentDidMount() {
        this.backTop()
        document.addEventListener('scroll', e => {
            let currentY =
                document.documentElement.scrollTop || document.body.scrollTop
            if (currentY > 10) {
                this.setState({
                    navWhite: false,
                })
            } else {
                this.setState({
                    navWhite: true,
                })
            }
        })
    }

    backTop() {
        const currentY =
            document.documentElement.scrollTop || document.body.scrollTop
        this.scroll(currentY, 0)
    }

    scroll(currentY, targetY) {
        // 获取当前位置方法
        // const currentY = document.documentElement.scrollTop || document.body.scrollTop
        console.log(currentY)
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
        const { navWhite } = this.state
        return (
            <Nav justifyContent="center" navWhite={navWhite}>
                <Flex
                    width={4 / 5}
                    alignItems="center"
                    justifyContent={'space-between'}
                    flexWrap="wrap"
                >
                    <Image
                        width={150}
                        height={40}
                        src={navWhite ? Logo1 : Logo}
                        onClick={this.backTop.bind(this)}
                        alt="apkchina-logo"
                    />
                    <Menus
                        justifyContent={['center', 'center', 'space-around']}
                        alignItems="center"
                        width={[1, 1, 1 / 2]}
                    >
                        <Image
                            width={40}
                            height={40}
                            src={navWhite ? menu1 : menu}
                        />
                        <Button
                            bg="none"
                            size="14px"
                            color={navWhite ? '#fff' : '#53A1FF'}
                        >
                            Service
                        </Button>
                        <Button
                            bg="none"
                            size="14px"
                            color={navWhite ? '#fff' : '#53A1FF'}
                        >
                            Resource
                        </Button>
                        <Button
                            bg="none"
                            size="14px"
                            color={navWhite ? '#fff' : '#53A1FF'}
                        >
                            Price
                        </Button>
                        <Button
                            bg="none"
                            size="14px"
                            color={navWhite ? '#fff' : '#53A1FF'}
                        >
                            Contact
                        </Button>
                        <Box>
                            <BgButton
                                size="14px"
                                bg="none"
                                color={navWhite ? '#fff' : '#53A1FF'}
                                onClick={this.goToDashboard.bind(this)}
                            >
                                Dashborad
                            </BgButton>
                        </Box>
                    </Menus>
                </Flex>
            </Nav>
        )
    }
}

export default App
