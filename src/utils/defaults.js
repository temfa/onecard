import logoMTN from "../assets/logos/mtn.svg";
import logoGlo from "../assets/logos/glo.svg";
import logoAirtel from "../assets/logos/airtel.svg";
import logo9mobile from "../assets/logos/9mobile.svg";
import logoJED from "../assets/logos/jed.png";
import logoEKEDC from "../assets/logos/ekedc.jpg";

const services = [
    {
        title: 'Data',
        icon: 'wifi',
        name: 'Data',
        providers: [
            {
                provider: "MTN",
                serviceCode: "MTN-DATA",
                logo: logoMTN
            },
            {
                provider: "Airtel",
                serviceCode: "AIRTEL-DATA",
                logo: logoAirtel
            },
            {
                provider: "Glo",
                serviceCode: "GLO-DATA",
                logo: logoGlo
            },
            {
                provider: "9mobile",
                serviceCode: "9MOBILE-DATA",
                logo: logo9mobile
            },
        ],
        select: true,
        inputs: [
            {
                type: 'number',
                placeholder: 'Phone Number',
                value: 'phoneNumber'
            }
        ],
    },
    {
        title: 'Airtime',
        icon: 'phone_in_talk',
        name: 'Airtime',
        providers: [
            {
                provider: "MTN",
                serviceCode: "MTN-AIRTIME",
                logo: logoMTN
            },
            {
                provider: "Airtel",
                serviceCode: "AIRTEL-AIRTIME",
                logo: logoAirtel
            },
            {
                provider: "Glo",
                serviceCode: "GLO-AIRTIME",
                logo: logoGlo
            },
            {
                provider: "9mobile",
                serviceCode: "9-AIRTIME",
                logo: logo9mobile
            },
        ],
        select: false,
        inputs: [
            {
                type: 'number',
                placeholder: 'Phone Number',
                value: 'phoneNumber'
            },
            {
                type: 'number',
                placeholder: 'Recharge Amount',
                value: 'amount'
            },
        ],
    },
    {
        title: 'Power',
        icon: 'power',
        name: 'Electricity',
        providers: [
            {
                provider: "EKEDP",
                serviceCode: "EKEDP",
                logo: logoJED,
            },
            {
                provider: "JED",
                serviceCode: "JED",
                logo: logoEKEDC,
            },
        ],
        select: false,
        inputs: [
            {
                type: 'text',
                placeholder: 'Meter Number',
                value: 'serviceNumber'
            },
            {
                type: 'text',
                placeholder: 'Phone Number',
                value: 'phoneNumber'
            },
            {
                type: 'number',
                placeholder: 'Recharge Amount',
                value: 'amount'
            },
        ],
    },
    {
        title: 'CableTV',
        icon: 'live_tv',
        name: 'Cable TV',
        providers: [],
        select: false,
        inputs: [],
    },
    {
        title: 'Others',
        icon: 'add_circle_outline',
        name: 'Others',
        providers: [],
        select: false,
        inputs: [],
    },
]

export default services
