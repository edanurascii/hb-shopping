// Assets
import iphoneGreen from 'assets/iphone-green.png'
import iphoneYellow from 'assets/iphone-yellow.png'
import iPhoneCaseRed from 'assets/iphone-case-red.png'
import iPhonePurple from 'assets/iphone-purple.png'
import xiaomi from 'assets/xiaomi.png'
import samsungs from 'assets/samsungs.jpg'
import samsung from 'assets/samsung.png'
import samsungGalaxyZ from 'assets/samsung-galaxy-z.png'
import samsungGalaxyS8 from 'assets/samsung-galaxy-s8.png'
import pinkNokia from 'assets/pink-nokia.png'
import nokia from 'assets/nokia.png'
import nokia3310 from 'assets/nokia-3310.png'
import LGV30 from 'assets/lg-v30.png'
import pinkLG from 'assets/lg-pink.png'
import LGG6 from 'assets/lg-g6.jpg'
import LG20 from 'assets/lg-20.jpg'
import huaweiP20 from 'assets/huawei-p20.png'
import huaweiP20Lite from 'assets/huawei-p20-lite.png'
import huaweiNova2 from 'assets/huawei-nova-2.png'
import generalMobileGM6 from 'assets/general-mobile-gm-6.png'
import generalMobileGM5Plus from 'assets/general-mobile-gm-5-plus.jpg'

const products = {
    data: [
        {
            id: '1',
            title: 'Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)',
            brand: 'Apple',
            color: 'Siyah',
            price: '124,00 TL',
            afterDiscountPrice: '90,85',
            discount: '12%',
            createdDate: '2019-10-03T23:27:13.228Z',
            img: iphoneGreen
        },
        {
            id: '2',
            title: 'Apple iPhone 11',
            brand: 'Apple',
            color: 'Sarı',
            price: '900,00 TL',
            afterDiscountPrice: '800,85',
            discount: '2%',
            createdDate: '2019-09-20T05:14:06.668Z',
            img: iphoneYellow
        },
        {
            id: '3',
            title: 'iPhone 11 Kırmızı Kılıf',
            brand: 'Apple',
            color: 'Kırmızı',
            price: '127,85 TL',
            afterDiscountPrice: '124,10',
            discount: '12%',
            createdDate: '2020-11-11T07:42:03.719Z',
            img: iPhoneCaseRed
        },
        {
            id: '4',
            title: 'Apple Telefon',
            brand: 'Apple',
            color: 'Lila',
            price: '155,85 TL',
            afterDiscountPrice: '124,10',
            discount: '12%',
            createdDate: '2017-06-27T16:08:05.863Z',
            img: iPhonePurple
        },
        {
            id: '5',
            title: 'Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)',
            brand: 'Apple',
            color: 'Siyah',
            price: '124,00 TL',
            afterDiscountPrice: '90,85',
            discount: '12%',
            createdDate: '2012-10-20T18:16:09.256Z',
            img: iphoneGreen
        },
        {
            id: '6',
            title: 'Apple iPhone 11',
            brand: 'Apple',
            color: 'Sarı',
            price: '900,00 TL',
            afterDiscountPrice: '800,85',
            discount: '2%',
            createdDate: '2020-01-27T20:55:56.639Z',
            img: iphoneYellow
        },
        {
            id: '7',
            title: 'iPhone 11 Kırmızı Kılıf',
            brand: 'Apple',
            color: 'Kırmızı',
            price: '127,85 TL',
            afterDiscountPrice: '124,10',
            discount: '12%',
            createdDate: '2014-10-29T23:16:41.661Z',
            img: iPhoneCaseRed
        },
        {
            id: '8',
            title: 'Apple Telefon',
            brand: 'Apple',
            color: 'Lila',
            price: '155,85 TL',
            afterDiscountPrice: '124,10',
            discount: '12%',
            createdDate: '2014-10-29T23:16:42.661Z',
            img: iPhonePurple
        },
        {
            id: '9',
            title: 'Xiaomi Modeller',
            brand: 'Xiaomi',
            color: 'Kırmızı',
            price: '1232,45 TL',
            afterDiscountPrice: '1223,15',
            discount: '3%',
            createdDate: '2021-09-25T19:55:30.252Z',
            img: xiaomi
        },
        {
            id: '10',
            title: 'Samsung Modeller',
            brand: 'Samsung',
            color: 'Siyah',
            price: '5800,00 TL',
            afterDiscountPrice: '5300,10',
            discount: '20%',
            createdDate: '2019-09-17T22:26:02.391Z',
            img: samsungs
        },
        {
            id: '11',
            title: 'Samsung Telefon',
            brand: 'Samsung',
            color: 'Beyaz',
            price: '4364,21 TL',
            afterDiscountPrice: '3456,85',
            discount: '2%',
            createdDate: '2019-11-02T01:31:10.638Z',
            img: samsung
        },
        {
            id: '12',
            title: 'Samsung Galaxy Z',
            brand: 'Samsung',
            color: 'Pembe',
            price: '345,75 TL',
            afterDiscountPrice: '342,12',
            discount: '2%',
            createdDate: '2021-11-24T22:07:18.258Z',
            img: samsungGalaxyZ
        },
        {
            id: '13',
            title: 'Samsung Galaxy S8',
            brand: 'Samsung',
            color: 'Siyah',
            price: '7546,25 TL',
            afterDiscountPrice: '7655,85',
            discount: '10%',
            createdDate: '2014-04-23T15:09:14.475Z',
            img: samsungGalaxyS8
        },
        {
            id: '14',
            title: 'Nokia C3',
            brand: 'Nokia',
            color: 'Pembe',
            price: '135,00 TL',
            afterDiscountPrice: '105,80',
            discount: '10%',
            createdDate: '2013-10-20T09:22:52.788Z',
            img: pinkNokia
        },
        {
            id: '15',
            title: 'Nokia C2',
            brand: 'Nokia',
            color: 'Siyah',
            price: '123,23 TL',
            afterDiscountPrice: '120,20',
            discount: '2%',
            createdDate: '2016-10-22T21:32:21.888Z',
            img: nokia
        },
        {
            id: '16',
            title: 'Nokia 3310',
            brand: 'Nokia',
            color: 'Mavi',
            price: '20,85 TL',
            afterDiscountPrice: '19,85',
            discount: '10%',
            createdDate: '2022-03-09T00:25:44.247Z',
            img: nokia3310
        },
        {
            id: '17',
            title: 'LG V30',
            brand: 'LG',
            color: 'Beyaz',
            price: '224,85 TL',
            afterDiscountPrice: '155,85',
            discount: '12%',
            createdDate: '2013-07-07T11:06:35.042Z',
            img: LGV30
        },
        {
            id: '18',
            title: 'LG Pink',
            brand: 'LG',
            color: 'Pembe',
            price: '3223,85 TL',
            afterDiscountPrice: '1552,85',
            discount: '12%',
            createdDate: '2015-12-15T14:30:55.382Z',
            img: pinkLG
        },
        {
            id: '19',
            title: 'LG G6',
            brand: 'LG',
            color: 'Siyah',
            price: '222,85 TL',
            afterDiscountPrice: '157,85',
            discount: '12%',
            createdDate: '2018-03-29T21:22:27.374Z',
            img: LGG6
        },
        {
            id: '20',
            title: 'LG 20',
            brand: 'LG',
            color: 'Siyah',
            price: '222,80 TL',
            afterDiscountPrice: '157,80',
            discount: '12%',
            createdDate: '2020-07-23T14:05:02.013Z',
            img: LG20
        },
        {
            id: '21',
            title: 'Huawei P20',
            brand: 'Huawei',
            color: 'Mavi',
            price: '900,00 TL',
            afterDiscountPrice: '880,80',
            discount: '12%',
            createdDate: '2020-04-02T05:18:02.947Z',
            img: huaweiP20
        },
        {
            id: '22',
            title: 'Huawei P20 Lite',
            brand: 'Huawei',
            color: 'Siyah',
            price: '225,85 TL',
            afterDiscountPrice: '556,85',
            discount: '12%',
            createdDate: '2018-08-12T23:48:15.410Z',
            img: huaweiP20Lite
        },
        {
            id: '23',
            title: 'Huawei Nova 2',
            brand: 'Huawei',
            color: 'Siyah',
            price: '3224,85 TL',
            afterDiscountPrice: '1553,85',
            discount: '12%',
            createdDate: '2021-07-16T18:18:48.119Z',
            img: huaweiNova2
        },
        {
            id: '24',
            title: 'General Mobile GM 6',
            brand: 'General Mobile',
            color: 'Beyaz',
            price: '300,85 TL',
            afterDiscountPrice: '200,85',
            discount: '10%',
            createdDate: '2020-07-18T10:01:04.253Z',
            img: generalMobileGM6
        },
        {
            id: '25',
            title: 'General Mobile GM 5 Plus',
            brand: 'General Mobile',
            color: 'Beyaz',
            price: '1224,85 TL',
            afterDiscountPrice: '1125,65',
            discount: '2%',
            createdDate: '2020-03-11T19:45:56.833Z',
            img: generalMobileGM5Plus
        },
        {
            id: '26',
            title: 'Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)',
            brand: 'Apple',
            color: 'Siyah',
            price: '124,00 TL',
            afterDiscountPrice: '90,85',
            discount: '12%',
            createdDate: '2020-04-23T21:21:29.371Z',
            img: iphoneGreen
        },
        {
            id: '27',
            title: 'Apple iPhone 11',
            brand: 'Apple',
            color: 'Sarı',
            price: '900,00 TL',
            afterDiscountPrice: '800,85',
            discount: '2%',
            createdDate: '2012-03-26T14:31:54.010Z',
            img: iphoneYellow
        },
        {
            id: '28',
            title: 'iPhone 11 Kırmızı Kılıf',
            brand: 'Apple',
            color: 'Kırmızı',
            price: '127,85 TL',
            afterDiscountPrice: '124,10',
            discount: '12%',
            createdDate: '2016-04-15T20:35:11.889Z',
            img: iPhoneCaseRed
        },
        {
            id: '29',
            title: 'Apple Telefon',
            brand: 'Apple',
            color: 'Lila',
            price: '155,85 TL',
            afterDiscountPrice: '124,10',
            discount: '12%',
            createdDate: '2017-01-29T13:13:45.265Z',
            img: iPhonePurple
        },
        {
            id: '30',
            title: 'Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)',
            brand: 'Apple',
            color: 'Siyah',
            price: '124,00 TL',
            afterDiscountPrice: '90,85',
            discount: '12%',
            createdDate: '2016-12-26T23:59:41.782Z',
            img: iphoneGreen
        },
        {
            id: '31',
            title: 'Apple iPhone 11',
            brand: 'Apple',
            color: 'Sarı',
            price: '900,00 TL',
            afterDiscountPrice: '800,85',
            discount: '2%',
            createdDate: '2014-09-25T16:28:20.975Z',
            img: iphoneYellow
        },
        {
            id: '32',
            title: 'iPhone 11 Kırmızı Kılıf',
            brand: 'Apple',
            color: 'Kırmızı',
            price: '127,85 TL',
            afterDiscountPrice: '124,10',
            discount: '12%',
            createdDate: '2017-05-21T10:35:11.156Z',
            img: iPhoneCaseRed
        },
        {
            id: '33',
            title: 'Apple Telefon',
            brand: 'Apple',
            color: 'Lila',
            price: '155,85 TL',
            afterDiscountPrice: '124,10',
            discount: '12%',
            createdDate: '2013-11-26T04:13:20.327Z',
            img: iPhonePurple
        },
        {
            id: '34',
            title: 'Samsung Telefon',
            brand: 'Samsung',
            color: 'Beyaz',
            price: '4364,21 TL',
            afterDiscountPrice: '3456,85',
            discount: '2%',
            createdDate: '2021-08-15T13:10:18.317Z',
            img: samsung
        },
        {
            id: '35',
            title: 'General Mobile GM 5 Plus',
            brand: 'General Mobile',
            color: 'Beyaz',
            price: '1224,85 TL',
            afterDiscountPrice: '1125,65',
            discount: '2%',
            createdDate: '2021-12-24T02:18:20.705Z',
            img: generalMobileGM5Plus
        },
        {
            id: '36',
            title: 'Samsung Galaxy Z',
            brand: 'Samsung',
            color: 'Pembe',
            price: '345,75 TL',
            afterDiscountPrice: '342,12',
            discount: '2%',
            createdDate: '2020-06-10T09:24:44.555Z',
            img: samsungGalaxyZ
        }
    ]
}

export default products