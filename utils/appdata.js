import bg_test from '../images/bg_test.png'
import network from '../images/network.png'
import device from '../images/device.png'
import deploy from '../images/deploy.png'
import operator from '../images/operator.png'
import step_test from '../images/step_test.png'

import bg_release from '../images/bg_release@2x.png'
import file from '../images/file@2x.png'
import approval from '../images/approval@2x.png'
import store from '../images/store@2x.png'
import lisence from '../images/lisence@2x.png'
import release from '../images/release@2x.png'
import server from '../images/server@2x.png'
import step_release from '../images/step_release@2x.png'

import bg_outsoucring from '../images/bg_outsoucring@2x.png'
import develop_tool from '../images/develop_tool@2x.png'
import developer from '../images/developer@2x.png'
import step_outsourcing from '../images/step_outsourcing@2x.png'

import bg_customer from '../images/bg_customer@2x.png'
import comment from '../images/comment@2x.png'
import reply from '../images/reply@2x.png'
import dashboard from '../images/dashboard@2x.png'
import report from '../images/report@2x.png'
import step_customer from '../images/step_customer@2x.png'

import bg_localization from '../images/bg_localization@2x.png'
import social from '../images/social@2x.png'
import habit from '../images/habit@2x.png'
import locallization from '../images/locallization@2x.png'
import step_local from '../images/step_local@2x.png'

export const AppTextData = {
    title: 'App Testing',
    bg: bg_test,
    cProblems: [
        {
            icon: network,
            subtitle: 'Special Internet',
            info: 'Internet environment in China is special. Google, Facebook, AWS services are not available in China, which cause many mobile apps not work in China.'
        },
        {
            icon: device,
            subtitle: 'Android Fragmentatio',
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
export const AppReleaseData = {
    title: 'App Release and Maintenance',
    bg: bg_release,
    cProblems: [
        {
            icon: file,
            subtitle: 'Various Documents',
            info: 'Various documents are required to release an app. Those includes but not limit to Chinese Business License, Software Copyright, legal representative’s ID. '
        },
        {
            icon: store,
            subtitle: 'Tens of App Stores',
            info: 'There are so many app stores in China. It is hard to choose what app stores to release the app to.'
        },
        {
            icon: approval,
            subtitle: 'Release Rejected',
            info: 'Different app store has different standard of app review. Apps release may get rejected due to many reasons. '
        },
    ],
    service: [
        {
            icon: lisence,
            info: 'We will provide the best solution based on our customer’s situation to get the essential licenses. '
        },
        {
            icon: server,
            info: 'We will propose the most popular app stores to our customer based on the app store data our web crawler collected and the user surveys we did in China. '
        },
        {
            icon: release,
            info: 'We will help our customer with the app store review. We believe our experience and professional mobile engineers will fasten customer’s app release. '
        },
    ],
    serviceSteps: step_release
}
export const AppOutsourcingData = {
    title: 'App Outsourcing',
    bg: bg_outsoucring,
    cProblems: [
        {
            icon: develop_tool,
            subtitle: 'Outsource Team Not Good',
            info: 'Chinese outsourcing teams are less expensive, but they do not speak English well, not familiar with the developer tools used outside China, which cause the corporation may not be very successful.'
        },
    ],
    service: [
        {
            icon: developer,
            info: 'We have developers with globalized developing experience, familiar with the developer tools inside and outside China, knowing the develop process and also have many experience in this field.'
        },

    ],
    serviceSteps: step_outsourcing
}
export const AppCustomerCareData = {
    title: 'App Customer Care',
    bg: bg_customer,
    cProblems: [
        {
            icon: comment,
            subtitle: 'Customer Support Varies',
            info: 'There are so many app stores and user feedback function in each app store varies a lot. Some app stores console does not even show the user comments or does not support replying to users'
        },
        {
            icon: store,
            subtitle: 'Too Many App Stores',
            info: 'The big number of app stores increase the time cost to track user reviews and it is hard to notice user reported problems in time. '
        },
    ],
    service: [
        {
            icon: reply,
            info: 'We have professional customer service representative who will reply to users, thank users for their likes, collect more details from user who complains, which maintain a good relationship with your users. '
        },
        {
            icon: dashboard,
            info: 'We provide an app data dashboard which will automatically collect user comments of your app from many app stores and you can view all comments in one place. Also, those user feedbacks will be auto-translated into English. '
        },
        {
            icon: report,
            info: 'Bundle of customer service and app test service will improve the efficiency of the work, since user reported issues will be tested and if it is true, then it will be reported to you, otherwise, it is less severe.'
        },
    ],
    serviceSteps: step_customer
}
export const AppLocalizationData = {
    title: 'App Localization',
    bg: bg_localization,
    cProblems: [
        {
            icon: social,
            subtitle: 'Unique Social Medias',
            info: 'Social media platforms that Chinese users are using are different. They are using Wechat, Weibo, TikTok, Youku instead of Facebook, Instagram, Twitter or Snapchat. '       },
        {
            icon: habit,
            subtitle: 'Local User Habits',
            info: 'Like any other country, Chinese users may have some other unique use habits'
        },
    ],
    service: [
        {
            icon: locallization,
            info: 'We will provide with the best localization plan based on use our developer experience, user surveys and big amount of app data.'
        },

    ],
    serviceSteps: step_local
}



//
//
//
//
