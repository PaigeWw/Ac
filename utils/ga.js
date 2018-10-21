function gtag() {
    window.dataLayer = window.dataLayer || []
    dataLayer.push(arguments)
}

function GA(id) {
    gtag('js', new Date())
    gtag('config', id || 'UA-127199752-1')
}

export default GA
