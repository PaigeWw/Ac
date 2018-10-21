import bg_test from '../images/bg_test.png'
import network from '../images/network.png'
import device from '../images/device.png'
import deploy from '../images/deploy.png'
import operator from '../images/operator.png'
import step_test from '../images/step_test.png'



export const AppTextData = {
    title: 'App Testing',
    bg: bg_test,
    cProblems: [
        {
            icon: network,
            info: 'Internet environment in China is special. Google, Facebook, AWS services are not available in China, which cause many mobile apps not work in China.'
        },
        {
            icon: device,
            info: 'There are so many Android device manufacturers(Huawei,Xiaomi,VIVO,OPPO,OnePlus, Lenovo, Smartson, Samsung, HTC, Sony, LG, etc) and corresponding custom Android operating systems in China, which makes Android fragmentation issue even worse.'
        }
    ],
    service: [
        {
            icon: operator,
            info: 'We have real Android and iOS devices that covers major Android device manufacturers and Android operating systems in China. We also provide different network test environment including CMCC, China Unicom, China Telecom and Wi-Fi.'
        },
        {
            icon: deploy,
            info: 'We have experienced Quality Assurance Engineer in team to manually test the apps or deploy automated tests if required by our customer.'
        }
    ],
    serviceSteps: step_test
}
