const tokenIcon = {
    ADA: require('../images/icons/ADA.png'),
    ANKR: require('../images/icons/ANKR.png'),
    BAND: require('../images/icons/BAND.png'),
    BCH: require('../images/icons/BCH.png'),
    BNB: require('../images/icons/BNB.png'),
    BTCB: require('../images/icons/BTCB.png'),
    BURGER: require('../images/icons/BURGER.png'),
    BUSD: require('../images/icons/BUSD.png'),
    CAN: require('../images/icons/CAN.png'),
    CREAM: require('../images/icons/CREAM.png'),
    DAI: require('../images/icons/DAI.png'),
    DOT: require('../images/icons/DOT.png'),
    EOS: require('../images/icons/EOS.png'),
    ETH: require('../images/icons/ETH.png'),
    FOR: require('../images/icons/FOR.png'),
    LINK: require('../images/icons/LINK.png'),
    LTC: require('../images/icons/LTC.png'),
    ONT: require('../images/icons/ONT.png'),
    PROM: require('../images/icons/PROM.png'),
    USDT: require('../images/icons/USDT.png'),
    WBNB: require('../images/icons/WBNB.png'),
    XRP: require('../images/icons/XRP.png'),
    XTZ: require('../images/icons/XTZ.png'),
    BAKE: require('../images/icons/BAKE.png'),
    MILK: require('../images/icons/MILK.png'),
    PEACH: require('../images/icons/PEACH.png'),
    SPARTA: require('../images/icons/SPARTA.png'),
    TUNA: require('../images/icons/TUNA.png'),
    JULb: require('../images/icons/JULb.jpg'),
    KOGE: require('../images/icons/KOGE.png'),
    RAVEN: require('../images/icons/RAVEN.png'),
    BHC: require('../images/icons/BHC.png'),
    ANY: require('../images/icons/ANY.png'),
    Cake: require('../images/icons/CAKE.png'),
    PROPEL: require('../images/icons/PROPEl.png'),
    ATOM: require('../images/icons/ATOM.png'),
    ZEC: require('../images/icons/ZEC.png'),
    YFII: require('../images/icons/YFII.png'),
    CBIX: require('../images/icons/CBIX.png'),
    STM: require('../images/icons/STM.png'),
    BZAR: require('../images/icons/BZAR.png'),
    DOS: require('../images/icons/DOS.png'),
    INNBC: require('../images/icons/INNBC.png'),
    GIV: require('../images/icons/GIV.png'),
    BNX: require('../images/icons/BNEX.png'),
    bUNI: require('../images/icons/UNI.png'),
    bRNT: require('../images/icons/RNT.png'),
    FRIES: require('../images/icons/FRIES.png'),
    XVS: require('../images/icons/XVS.png'),


    bGL: require('../images/icons/BGL.png'),
    '7UP': require('../images/icons/7UP.png'),
    BSC: require('../images/icons/BSC.png'),
    HPS: require('../images/icons/HPS.png'),
    COKE: require('../images/icons/COKE.png'),
    ALPA: require('../images/icons/ALPA.png'),

    ROOBEE: require('../images/icons/ROOBEE.jpg'),
    bROOBEE: require('../images/icons/bROOBEE.png'),
    'JNTR/b': require('../images/icons/JNTR_b.jpg'),
    BAT: require('../images/icons/BAT.png'),
    YFI: require('../images/icons/YFI.png'),
    UNI: require('../images/icons/UNI.png'),
    FIL: require('../images/icons/FIL.png'),
    SNX: require('../images/icons/SNX.png'),
    NEAR: require('../images/icons/NEAR.png'),
    JGN: require('../images/icons/JGN.png'),
    QUSD: require('../images/icons/QUSD.png'),
    KUN: require('../images/icons/KUN.png'),
    Helmet: require('../images/icons/Helmet.jpg'),
    HGET: require('../images/icons/Hedget.png'),
    FNX: require('../images/icons/FNX.svg'),
    SATO: require('../images/icons/SATO.png'),
    ROCKS: require('../images/icons/ROCKS.png'),
    xBURGER: require('../images/icons/xBURGER.svg'),
    TPT: require('../images/icons/TPT.png'),
    MTV: require('../images/icons/MTV.jpg'),
    FUN: require('../images/icons/FUN.svg'),
    hxBURGER: require('../images/icons/htBURGER.svg'),
    ARTS: require('../images/icons/ARTS.png'),
    Wasabi: require('../images/icons/Wasabi.svg'),
    BBQ: require('../images/icons/BBQ.svg'),
    default: require('../images/icons/def_icon.svg')
};

const _getIcon = (param = '') => {
    let key, matched;
    key = param.length < 30 ? 'symbol' : 'address';
    switch (key) {
        case 'address': {
            const token = WhiteListMap[param.toLowerCase()];
            matched = token && tokenIcon[token.symbol];
        }
            break;
        case 'symbol': {
            matched = tokenIcon[param];
            break;
        }
    }
    return matched;
};

export const getIcon = (param = {}) => {
    let matched;
    if (typeof param === 'string') {
        matched = _getIcon(param);
    } else {
        const {address = '', symbol = ''} = param;
        // matched = _getIcon(address) || _getIcon(symbol);
        matched = _getIcon(address);
    }
    return matched || tokenIcon.default;
};

export const isWhite = function (address) {
    for (let i = 0; i < tokenWhiteList.length; i++) {
        if (
            tokenWhiteList[i]?.address.toLocaleUpperCase() ==
            address?.toLocaleUpperCase()
        ) {
            return tokenWhiteList[i].symbol;
        }
    }
    return false;
};

export const isWrite = function (address) {
    for (let i = 0; i < tokenWhiteList.length; i++) {
        if (
            tokenWhiteList[i].address.toLocaleUpperCase() ==
            address.toLocaleUpperCase()
        ) {
            return tokenWhiteList[i].symbol;
        }
    }
    return false;
};

export let ICONMAP = tokenIcon;

export let IconKey = ICONMAP;

export const ETHConfig = {
    symbol: 'ETH',
    address: '0x0000000000000000000000000000000000000000',
    chainId: 1,
    decimals: 18,
    name: 'Ethereum',
    balance: '0',
    allowance: '100000000000',
    icon: require('../images/ETH-logo.png')
};

const OFFICIAL_LIST = [
    {address: '0x0eb3a705fc54725037cc9e008bdede697f62f335', symbol: 'ATOM'},
    {address: '0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb', symbol: 'ZEC'},
    {address: '0xfd7b3a77848f1c2d67e05e54d78d174a0c850335', symbol: 'ONT'},
    {address: '0x7f70642d88cf1c4a3a7abb072b53b929b653eda5', symbol: 'YFII'},
    {address: '0xcd7c5025753a49f1881b31c48caa7c517bb46308', symbol: 'RAVEN'},
    {address: '0x34681c1035f97e1edcccec5f142e02ff81a3a230', symbol: 'CBIX'},
    {address: '0x90df11a8cce420675e73922419e3f4f3fe13cccb', symbol: 'STM'},
    {address: '0xf68c9df95a18b2a5a5fa1124d79eeeffbad0b6fa', symbol: 'ANY'},
    {address: '0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4', symbol: 'BHC'},
    {address: '0x3791cc676c34f82e9438ed9752ec5dbc983a0bbc', symbol: 'BZAR'},
    {address: '0xdc0f0a5719c39764b011edd02811bd228296887c', symbol: 'DOS'},
    {address: '0xdf1f0026374d4bcc490be5e316963cf6df2fff19', symbol: 'INNBC'},
    {address: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', symbol: 'Cake'},
    {address: '0x9b44df3318972be845d83f961735609137c4c23c', symbol: 'PROPEL'},
    {address: '0xe49b84771470a87f4d9544685ea0f0517933b2b4', symbol: 'GIV'},
    {address: '0xf7682a5d3e587652ab770e8c98eb2fd786022b7b', symbol: 'BNX'},
    {address: '0xa78b3ec00a3799d90bbdbb36d902c2a65cdec824', symbol: 'bUNI'},
    {address: '0x262dAb9a6C3894d7016F510D21aD8F04d64c7f8F', symbol: 'bRNT'},
    {address: '0x393b312c01048b3ed2720bf1b090084c09e408a1', symbol: 'FRIES'},
    {address: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63', symbol: 'Venus'},
    {address: '0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe', symbol: 'ROOBEE'},
    {address: '0x78e1936f065fd4082387622878c7d11c9f05ecf4', symbol: 'JNTR/b'},
    {address: '0x4e5a337d646323df39eecaf44454a88e9efa14da', symbol: 'bGL'},
    {address: '0x29f350b3822f51dc29619c583adbc9628646e315', symbol: '7UP'},
    {address: '0x17bc015607fdf93e7c949e9ca22f96907cfbef88', symbol: 'BSC'},
    {address: '0xeda21b525ac789eab1a08ef2404dd8505ffb973d', symbol: 'HPS'},
    {address: '0x0950c852436B3e25e6fe798a74489A4686B18159', symbol: 'COKE'},
    {address: '0xc5e6689c9c8b02be7c49912ef19e79cf24977f03', symbol: 'ALPA'},
    {address: '0x101d82428437127bF1608F699CD651e6Abf9766E', symbol: 'BAT'},
    {address: '0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153', symbol: 'FIL'},
    {address: '0x1Fa4a73a3F0133f0025378af00236f3aBDEE5D63', symbol: 'NEAR'},
    {address: '0x9Ac983826058b8a9C7Aa1C9171441191232E8404', symbol: 'SNX'},
    {address: '0xBf5140A22578168FD562DCcF235E5D43A02ce9B1', symbol: 'UNI'},
    {address: '0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e', symbol: 'YFI'},
    {address: '0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75', symbol: 'JGN'},
    {address: '0xb8c540d00dd0bf76ea12e4b4b95efc90804f924e', symbol: 'QUSD'},
    {address: '0x1a2fb0af670d0234c2857fad35b789f8cb725584', symbol: 'KUN'},
    {address: '0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe', symbol: 'bROOBEE'},
    {address: '0x658A109C5900BC6d2357c87549B651670E5b0539', symbol: 'FOR'},
    {address: '0xd4CB328A82bDf5f03eB737f37Fa6B370aef3e888', symbol: 'CREAM'},
    {address: '0xf307910a4c7bbc79691fd374889b36d8531b08e3', symbol: 'ANKR'},
    {address: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5', symbol: 'BAKE'},
    {address: '0x40929FB2008c830731A3d972950bC13f70161c75', symbol: 'TUNA'},
    {address: '0xaCd6b5f76Db153FB45EAE6D5be5BDbd45d1b2A8C', symbol: 'PEACH'},
    {address: '0xE4Ae305ebE1AbE663f261Bc00534067C80ad677C', symbol: 'SPARTA'},
    {address: '0x8E9f5173e16Ff93F81579d73A7f9723324d6B6aF', symbol: 'MILK'},
    {address: '0x32dffc3fe8e3ef3571bf8a72c0d0015c5373f41d', symbol: 'JULb'},
    {address: '0xe6df05ce8c8301223373cf5b969afcb1498c5528', symbol: 'KOGE'},
    {address: '0xAe9269f27437f0fcBC232d39Ec814844a51d6b8f', symbol: 'BURGER'},
    {address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', symbol: 'BNB'},
    {address: '0x55d398326f99059fF775485246999027B3197955', symbol: 'USDT'},
    {address: '0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE', symbol: 'XRP'},
    {address: '0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD', symbol: 'LINK'},
    {address: '0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf', symbol: 'BCH'},
    {address: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402', symbol: 'DOT'},
    {address: '0x4338665CBB7B2485A8855A139b75D5e34AB0DB94', symbol: 'LTC'},
    {address: '0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6', symbol: 'EOS'},
    {address: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47', symbol: 'ADA'},
    {address: '0x16939ef78684453bfDFb47825F8a5F714f12623a', symbol: 'XTZ'},
    {address: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', symbol: 'DAI'},
    {address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', symbol: 'BUSD'},
    {address: '0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18', symbol: 'BAND'},
    {address: '0xaF53d56ff99f1322515E54FdDE93FF8b3b7DAFd5', symbol: 'PROM'},
    {address: '0x007EA5C0Ea75a8DF45D288a4debdD5bb633F9e56', symbol: 'CAN'},
    {address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', symbol: 'BTCB'},
    {address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8', symbol: 'ETH'},
    {address: '0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8', symbol: 'Helmet'},
    {address: '0xc7d8d35eba58a0935ff2d5a33df105dd9f071731', symbol: 'HGET'},
    {address: '0xdfd9e2a17596cad6295ecffda42d9b6f63f7b5d5', symbol: 'FNX'},
    {address: '0xF6E6892325a74383A70570F1EBea9A476483a611', symbol: 'SATO'},
    {address: '0xa01000c52b234a92563ba61e5649b7c76e1ba0f3', symbol: 'ROCKS'},
    {address: '0xAFE24E29Da7E9b3e8a25c9478376B6AD6AD788dD', symbol: 'xBURGER'},
    {address: '0xeca41281c24451168a37211f0bc2b8645af45092', symbol: 'TPT'},
    {address: '0x8aa688ab789d1848d131c65d98ceaa8875d97ef1', symbol: 'MTV'},
    {address: '0xCC89AC2C6f4a82e5A4c53215b6a6d7ebA4C25E6a', symbol: 'FUN'},
    {address: '0xca7597633927a98b800738ed5cd2933a74a80e8c', symbol: 'hxBURGER'},
    {address: '0x83C4637Ba42A1cB483A20189385FEfb6A94EC635', symbol: 'ARTS'},
    {address: '0x86e73212002f80c57070efad4765ff0117de5aea', symbol: 'Wasabi'},
    {address: '0xd9a88f9b7101046786490baf433f0f6ab3d753e2', symbol: 'BBQ'}
];

const BSCTEST_TOKENS = [
    {address: '0x06bF890dfF5b422c35c9683f47d2d7663f6E1c24', symbol: 'BURGER'},
    {address: '0xF2ED382e6A3439Be124813842200cf6702fD6ecA', symbol: 'USDT'},
    {address: '0x7FcCaDD3e6A3F80e194CaDf13FeDF36B9BBbe98F', symbol: 'BNB'},
    {address: '0xFBb5921D1eAb55dd951c962265f474888a4B9e4E', symbol: 'FNX'}
]

export const tokenWhiteList = [
    ...OFFICIAL_LIST,
    ...BSCTEST_TOKENS,
]

export const AddList = {
    56: OFFICIAL_LIST,
    97: BSCTEST_TOKENS
};

export const KOVAN_TOKENS = [
    {
        'chainId': 42,
        'address': '0x0000000000000000000000000000000000000000',
        'name': 'ETH',
        'symbol': 'ETH',
        'decimals': 18,
        'logoURI': ''
    },
    {
        'chainId': 42,
        'address': '0xD5FAdFe4b86E06b57f93D57dB5933B90b07648AF',
        'name': 'USDT',
        'symbol': 'USDT',
        'decimals': 6,
        'logoURI': 'https://assets.coingecko.com/coins/images/325/thumb/Tether-logo.png?1598003707'
    },
    {
        'chainId': 42,
        'address': '0xc0D2c91e0B6A46235A0649C2314164Ec848Da704',
        'name': 'BNB',
        'symbol': 'BNB',
        'decimals': 18,
        'logoURI': ''
    }
]

export const tokenSort = [
    'BURGER',
    'BNB',
    'BUSD',
    'USDT',
    'BTCB',
    'ETH',
    'LINK',
    'DOT',
    'ADA',
    'XRP',
    'LTC',
    'BCH',
    'EOS',
    'XTZ',
    'ANKR',
    'PROM',
    'CAN',
    'BAND',
    'SPARTA',
    'CREAM',
    'FOR',
    'BAKE',
    'MILK',
    'PEACH',
    'TUNA',
    'GIV',
    'BNX',
    'bUNI',
    'bRNT',
    'FRIES',
    'Venus',
    'BAT',
    'FIL',
    'NEAR',
    'bROOBEE',
    'SNX',
    'UNI',
    'YFI',
    'JGN',
    'QUSD',
    'KUN',
    'HGET',
    'Helmet',
    'MTV',
    'FUN'
];
export const WhiteListMap = tokenWhiteList.reduce((obj, d) => {
    Reflect.set(obj, d.address.toLowerCase(), d);
    return obj;
}, {});
