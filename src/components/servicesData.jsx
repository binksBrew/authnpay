// import authIcon from '../assets/icons/1.png';
// import netBankingAuthIcon from '../assets/icons/2.png';
// import netBankingPaymentAuthIcon from '../assets/icons/3.png';
// import walletAuthIcon from '../assets/icons/4.png';
// import paymentGatewayIcon from '../assets/icons/5.png';
// import digitalSignatureIcon from '../assets/icons/6.png';
// import digiLockerIcon from '../assets/icons/7.png';
// import kycIcon from '../assets/icons/8.png';
// import userVerificationIcon from '../assets/icons/9.png';

// const servicesData = [
//     {
//         id: 'authentication-user-onboarding',
//         title: 'Authentication / User Onboarding',
//         description: 'Advanced encryption and security protocols to streamline onboarding.',
//         img: authIcon,
//         detailedInfo: `
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus justo urna, sed tincidunt purus pharetra vel. Cras viverra metus felis, sit amet iaculis nibh molestie sed. Sed a faucibus quam. Curabitur imperdiet dolor at ipsum fringilla hendrerit. Sed non ex ex. Morbi et ornare augue, at feugiat massa. Integer fringilla rutrum nunc non tempus. Praesent at molestie ligula. Proin vel aliquet ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean in lacus sed ligula gravida commodo. Nulla nec neque tempor, pulvinar felis in, luctus lacus. Ut nec augue vitae urna vehicula congue vitae a justo. Proin urna risus, accumsan id fermentum et, pretium nec enim. Nam ac libero nec felis bibendum imperdiet. Phasellus rhoncus elementum lacus, at euismod lorem molestie quis.

// In hac habitasse platea dictumst. Maecenas consectetur, dui quis tristique fermentum, mauris lorem interdum sem, id aliquam sem nibh eget metus. Phasellus id sem accumsan, lobortis eros quis, elementum sem. Sed a augue ac magna feugiat pharetra. Sed a lorem eleifend, fringilla libero mattis, rhoncus ex. Mauris eu dolor id quam luctus ornare. Duis tortor ante, tincidunt et rutrum nec, pellentesque in magna. Phasellus finibus, ipsum non fringilla dictum, ipsum turpis faucibus leo, vel tincidunt ex ante non libero. Nullam scelerisque sapien ut urna imperdiet accumsan.

// Nulla nec sapien a nisi sodales porttitor. Nullam pulvinar, leo non interdum finibus, ex tortor lobortis metus, ac tincidunt sapien libero quis lacus. Vivamus auctor magna dolor, non posuere justo ultricies et. Nunc dapibus quis dui sed aliquet. Mauris faucibus felis non ligula venenatis pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed fringilla ex massa, et maximus lacus accumsan ac. Sed eget arcu iaculis, sollicitudin est vel, mattis nisi. Sed et aliquet nulla. Quisque imperdiet mauris vel efficitur ultricies.

// Quisque efficitur euismod ex convallis bibendum. Praesent nec congue purus. Nulla blandit dui quis sapien varius dignissim vitae quis nisi. Sed eu ipsum vitae turpis convallis ultricies viverra efficitur orci. Morbi accumsan semper purus. Suspendisse egestas nulla nec luctus porta. Nam nec nulla et tortor pretium consectetur in lacinia risus. Fusce at maximus diam. In ipsum ipsum, fermentum ut egestas quis, vestibulum id eros. Mauris lobortis neque sit amet felis mollis cursus.
//         `,
//         pricingInfo: 'Contact us for pricing details tailored to your needs.',
//         pricingTable: [
//             { range: 'First 500 auth (0-500)', whatsapp: '₹0.31', sms: '₹0.21', email: '₹0.10', biometric: '₹0.56' },
//             { range: 'Next 1000 auth (500-1500)', whatsapp: '₹0.28', sms: '₹0.19', email: '₹0.09', biometric: '₹0.49' },
//             { range: 'Next 2000 auth (1500-3500)', whatsapp: '₹0.24', sms: '₹0.17', email: '₹0.08', biometric: '₹0.43' },
//             { range: 'More than 3500 auth', whatsapp: '₹0.22', sms: '₹0.15', email: '₹0.07', biometric: '₹0.38' },
//         ],
//     },
//     {
//         id: 'net-banking-auth',
//         title: 'Net Banking Auth',
//         description: 'Secure and seamless authentication for net banking users.',
//         img: netBankingAuthIcon,
//         detailedInfo: `
//             Our Net Banking Auth service provides secure and seamless user authentication.
//             Integrate easily with existing systems and enhance trust with your customers.
//         `,
//         pricingInfo: 'Flexible pricing based on user volume.',
//         pricingTable: [
//             { range: 'First 500 auth (0-500)', whatsapp: '₹0.31', sms: '₹0.21', email: '₹0.10', biometric: '₹0.56' },
//             { range: 'Next 1000 auth (500-1500)', whatsapp: '₹0.28', sms: '₹0.19', email: '₹0.09', biometric: '₹0.49' },
//             { range: 'Next 2000 auth (1500-3500)', whatsapp: '₹0.24', sms: '₹0.17', email: '₹0.08', biometric: '₹0.43' },
//             { range: 'More than 3500 auth', whatsapp: '₹0.22', sms: '₹0.15', email: '₹0.07', biometric: '₹0.38' },
//         ],
//     },
//     {
//         id: 'net-banking-payment-auth',
//         title: 'Net Banking Payment Auth',
//         description: 'Effortless and secure payment authentication for net banking transactions.',
//         img: netBankingPaymentAuthIcon,
//         detailedInfo: `
//             Simplify net banking payments with our secure authentication service.
//             Reduce friction and ensure compliance with regulatory standards.
//         `,
//         pricingInfo: 'Subscription plans available based on transaction volume.',
//         pricingTable: [
//             { range: 'First 500 auth (0-500)', whatsapp: '₹0.31', sms: '₹0.21', email: '₹0.10', biometric: '₹0.56' },
//             { range: 'Next 1000 auth (500-1500)', whatsapp: '₹0.28', sms: '₹0.19', email: '₹0.09', biometric: '₹0.49' },
//             { range: 'Next 2000 auth (1500-3500)', whatsapp: '₹0.24', sms: '₹0.17', email: '₹0.08', biometric: '₹0.43' },
//             { range: 'More than 3500 auth', whatsapp: '₹0.22', sms: '₹0.15', email: '₹0.07', biometric: '₹0.38' },
//         ],
//     },
//     {
//         id: 'payment-wallet-auth',
//         title: 'Payment Wallet Auth',
//         description: 'Enhanced security for wallet-based transactions.',
//         img: walletAuthIcon,
//         detailedInfo: `
//             Wallet-based transactions are secured with state-of-the-art encryption.
//             Your users will enjoy a seamless and safe experience every time.
//         `,
//         pricingInfo: 'Competitive pricing options for businesses of all sizes.',
//         pricingTable: [
//             { range: 'First 500 auth (0-500)', whatsapp: '₹0.31', sms: '₹0.21', email: '₹0.10', biometric: '₹0.56' },
//             { range: 'Next 1000 auth (500-1500)', whatsapp: '₹0.28', sms: '₹0.19', email: '₹0.09', biometric: '₹0.49' },
//             { range: 'Next 2000 auth (1500-3500)', whatsapp: '₹0.24', sms: '₹0.17', email: '₹0.08', biometric: '₹0.43' },
//             { range: 'More than 3500 auth', whatsapp: '₹0.22', sms: '₹0.15', email: '₹0.07', biometric: '₹0.38' },
//         ],
//     },
//     {
//         id: 'payment-gateway',
//         title: 'Payment Gateway',
//         description: 'Comprehensive support for payments via net banking, cards, UPI, wallets, and more.',
//         img: paymentGatewayIcon,
//         detailedInfo: `
//             Our Payment Gateway supports a wide range of payment options. 
//             From cards to wallets to UPI, we ensure fast and reliable payment solutions.
//         `,
//         pricingInfo: 'Custom pricing tailored to your transaction needs.',
//         pricingTable: [
//             { range: 'First 500 auth (0-500)', whatsapp: '₹0.31', sms: '₹0.21', email: '₹0.10', biometric: '₹0.56' },
//             { range: 'Next 1000 auth (500-1500)', whatsapp: '₹0.28', sms: '₹0.19', email: '₹0.09', biometric: '₹0.49' },
//             { range: 'Next 2000 auth (1500-3500)', whatsapp: '₹0.24', sms: '₹0.17', email: '₹0.08', biometric: '₹0.43' },
//             { range: 'More than 3500 auth', whatsapp: '₹0.22', sms: '₹0.15', email: '₹0.07', biometric: '₹0.38' },
//         ],
//     },
//     {
//         id: 'digital-signature',
//         title: 'Digital Signature',
//         description: 'Facilitate secure and legally binding digital document signing.',
//         img: digitalSignatureIcon,
//         detailedInfo: `
//             Sign documents digitally with ease and ensure legal compliance. 
//             Our service supports integration with major document management systems.
//         `,
//         pricingInfo: 'Affordable plans for individuals and enterprises.',
//         pricingTable: [
//             { range: 'First 500 auth (0-500)', whatsapp: '₹0.31', sms: '₹0.21', email: '₹0.10', biometric: '₹0.56' },
//             { range: 'Next 1000 auth (500-1500)', whatsapp: '₹0.28', sms: '₹0.19', email: '₹0.09', biometric: '₹0.49' },
//             { range: 'Next 2000 auth (1500-3500)', whatsapp: '₹0.24', sms: '₹0.17', email: '₹0.08', biometric: '₹0.43' },
//             { range: 'More than 3500 auth', whatsapp: '₹0.22', sms: '₹0.15', email: '₹0.07', biometric: '₹0.38' },
//         ],
//     },
//     {
//         id: 'digi-locker',
//         title: 'Digi Locker',
//         description: 'Securely store and access your digital documents anytime.',
//         img: digiLockerIcon,
//         detailedInfo: `
//             Store, access, and share your documents securely using our Digi Locker service.
//             Designed to provide maximum convenience with robust security measures.
//         `,
//         pricingInfo: 'Monthly and annual plans available.',
//         pricingTable: [
//             { range: 'First 500 auth (0-500)', whatsapp: '₹0.31', sms: '₹0.21', email: '₹0.10', biometric: '₹0.56' },
//             { range: 'Next 1000 auth (500-1500)', whatsapp: '₹0.28', sms: '₹0.19', email: '₹0.09', biometric: '₹0.49' },
//             { range: 'Next 2000 auth (1500-3500)', whatsapp: '₹0.24', sms: '₹0.17', email: '₹0.08', biometric: '₹0.43' },
//             { range: 'More than 3500 auth', whatsapp: '₹0.22', sms: '₹0.15', email: '₹0.07', biometric: '₹0.38' },
//         ],
//     },
//     {
//         id: 'kyc',
//         title: 'KYC',
//         description: 'Comprehensive KYC solutions, including Yes/No KYC, Full KYC, and Aadhar-based KYC.',
//         img: kycIcon,
//         detailedInfo: `
//             Ensure compliance and security with our end-to-end KYC solutions.
//             Our offerings include Yes/No KYC, Full KYC, and Aadhaar-based verification.
//         `,
//         pricingInfo: 'Flexible pricing for businesses and institutions.',
//         pricingTable: [
//             { range: 'First 500 auth (0-500)', whatsapp: '₹0.31', sms: '₹0.21', email: '₹0.10', biometric: '₹0.56' },
//             { range: 'Next 1000 auth (500-1500)', whatsapp: '₹0.28', sms: '₹0.19', email: '₹0.09', biometric: '₹0.49' },
//             { range: 'Next 2000 auth (1500-3500)', whatsapp: '₹0.24', sms: '₹0.17', email: '₹0.08', biometric: '₹0.43' },
//             { range: 'More than 3500 auth', whatsapp: '₹0.22', sms: '₹0.15', email: '₹0.07', biometric: '₹0.38' },
//         ],
//     },
//     {
//         id: 'user-verification',
//         title: 'User Verification',
//         description: 'Reliable and efficient user identity verification services.',
//         img: userVerificationIcon,
//         detailedInfo: `
//             Verify user identities with precision and reliability.
//             Our system ensures accuracy and reduces fraud risk significantly.
//         `,
//         pricingInfo: 'Affordable plans to suit your user verification needs.',
//         pricingTable: [
//             { range: 'First 500 auth (0-500)', whatsapp: '₹0.31', sms: '₹0.21', email: '₹0.10', biometric: '₹0.56' },
//             { range: 'Next 1000 auth (500-1500)', whatsapp: '₹0.28', sms: '₹0.19', email: '₹0.09', biometric: '₹0.49' },
//             { range: 'Next 2000 auth (1500-3500)', whatsapp: '₹0.24', sms: '₹0.17', email: '₹0.08', biometric: '₹0.43' },
//             { range: 'More than 3500 auth', whatsapp: '₹0.22', sms: '₹0.15', email: '₹0.07', biometric: '₹0.38' },
//         ],
//     },
// ];

// export default servicesData;














import authIcon from '../assets/icons/1.png';
import netBankingAuthIcon from '../assets/icons/2.png';
import netBankingPaymentAuthIcon from '../assets/icons/3.png';
import walletAuthIcon from '../assets/icons/4.png';
import paymentGatewayIcon from '../assets/icons/5.png';
import digitalSignatureIcon from '../assets/icons/6.png';
import digiLockerIcon from '../assets/icons/7.png';
import kycIcon from '../assets/icons/8.png';
import userVerificationIcon from '../assets/icons/9.png';

const servicesData = [
    {
        id: 'authentication-user-onboarding',
        title: 'Authentication / User Onboarding',
        description: 'Advanced encryption and security protocols to streamline onboarding.',
        img: authIcon,
        keyPoints: [
            "98% success rate for seamless onboarding.",
            "Best-in-class security with biometric and MFA.",
            "Supports multiple channels for authentication.",
            "Pay-as-you-grow pricing model."
        ],
        pricingInfo: 'Contact us for pricing details tailored to your needs.',
        pricingTable: [
            { range: 'First 500 auth (0-500)', whatsapp: '₹0.31', sms: '₹0.21', email: '₹0.10', biometric: '₹0.56' },
            { range: 'More than 3500 auth', whatsapp: '₹0.22', sms: '₹0.15', email: '₹0.07', biometric: '₹0.38' },
        ],
    },
    {
        id: 'net-banking-auth',
        title: 'Net Banking Auth',
        description: 'Secure and seamless authentication for net banking users.',
        img: netBankingAuthIcon,
        keyPoints: [
            "Seamless integration with existing systems.",
            "Enhanced security for banking authentication.",
            "Supports global banking standards.",
            "24/7 customer support and compliance."
        ],
        pricingInfo: 'Flexible pricing based on user volume.',
        pricingTable: [
            { range: 'First 500 auth (0-500)', whatsapp: '₹0.31', sms: '₹0.21', email: '₹0.10', biometric: '₹0.56' },
            { range: 'More than 3500 auth', whatsapp: '₹0.22', sms: '₹0.15', email: '₹0.07', biometric: '₹0.38' },
        ],
    },
    {
        id: 'net-banking-payment-auth',
        title: 'Net Banking Payment Auth',
        description: 'Effortless and secure payment authentication for net banking transactions.',
        img: netBankingPaymentAuthIcon,
        keyPoints: [
            "Ensures secure payment authentication.",
            "Reduces transaction friction.",
            "Complies with international standards.",
            "Easy integration with banking platforms."
        ],
        pricingInfo: 'Subscription plans available based on transaction volume.',
        pricingTable: [
            { range: 'First 500 auth (0-500)', whatsapp: '₹0.31', sms: '₹0.21', email: '₹0.10', biometric: '₹0.56' },
            { range: 'More than 3500 auth', whatsapp: '₹0.22', sms: '₹0.15', email: '₹0.07', biometric: '₹0.38' },
        ],
    },
    {
        id: 'payment-wallet-auth',
        title: 'Payment Wallet Auth',
        description: 'Enhanced security for wallet-based transactions.',
        img: walletAuthIcon,
        keyPoints: [
            "Secure wallet transactions with encryption.",
            "Supports popular wallet services.",
            "User-friendly authentication process.",
            "Customizable pricing for businesses."
        ],
        pricingInfo: 'Competitive pricing options for businesses of all sizes.',
        pricingTable: [
            { range: 'First 500 auth (0-500)', whatsapp: '₹0.31', sms: '₹0.21', email: '₹0.10', biometric: '₹0.56' },
            { range: 'More than 3500 auth', whatsapp: '₹0.22', sms: '₹0.15', email: '₹0.07', biometric: '₹0.38' },
        ],
    },
    {
        id: 'payment-gateway',
        title: 'Payment Gateway',
        description: 'Comprehensive support for payments via net banking, cards, UPI, wallets, and more.',
        img: paymentGatewayIcon,
        keyPoints: [
            "Supports multiple payment options.",
            "Fast and reliable payment processing.",
            "Scalable for small to large businesses.",
            "Custom pricing tailored to transaction needs."
        ],
        pricingInfo: 'Custom pricing tailored to your transaction needs.',
        pricingTable: [
            { range: 'First 500 auth (0-500)', whatsapp: '₹0.31', sms: '₹0.21', email: '₹0.10', biometric: '₹0.56' },
            { range: 'More than 3500 auth', whatsapp: '₹0.22', sms: '₹0.15', email: '₹0.07', biometric: '₹0.38' },
        ],
    },
    {
        id: 'digital-signature',
        title: 'Digital Signature',
        description: 'Facilitate secure and legally binding digital document signing.',
        img: digitalSignatureIcon,
        keyPoints: [
            "Legally binding digital document signing.",
            "Integration with major document management systems.",
            "Robust encryption for secure signing.",
            "Affordable plans for all sizes of organizations."
        ],
        pricingInfo: 'Affordable plans for individuals and enterprises.',
        pricingTable: [
            { range: 'First 500 auth (0-500)', whatsapp: '₹0.31', sms: '₹0.21', email: '₹0.10', biometric: '₹0.56' },
            { range: 'More than 3500 auth', whatsapp: '₹0.22', sms: '₹0.15', email: '₹0.07', biometric: '₹0.38' },
        ],
    },
    {
        id: 'digi-locker',
        title: 'Digi Locker',
        description: 'Securely store and access your digital documents anytime.',
        img: digiLockerIcon,
        keyPoints: [
            "Secure storage for digital documents.",
            "Accessible anytime, anywhere.",
            "User-friendly interface for ease of use.",
            "Compliance with digital security standards."
        ],
        pricingInfo: 'Monthly and annual plans available.',
        pricingTable: [
            { range: 'First 500 auth (0-500)', whatsapp: '₹0.31', sms: '₹0.21', email: '₹0.10', biometric: '₹0.56' },
            { range: 'More than 3500 auth', whatsapp: '₹0.22', sms: '₹0.15', email: '₹0.07', biometric: '₹0.38' },
        ],
    },
    {
        id: 'kyc',
        title: 'KYC',
        description: 'Comprehensive KYC solutions, including Yes/No KYC, Full KYC, and Aadhar-based KYC.',
        img: kycIcon,
        keyPoints: [
            "Supports Yes/No KYC, Full KYC, and Aadhaar-based KYC.",
            "Compliant with regulatory requirements.",
            "Ensures accurate and secure verification.",
            "Customizable solutions for businesses."
        ],
        pricingInfo: 'Flexible pricing for businesses and institutions.',
        pricingTable: [
            { range: 'First 500 auth (0-500)', whatsapp: '₹0.31', sms: '₹0.21', email: '₹0.10', biometric: '₹0.56' },
            { range: 'More than 3500 auth', whatsapp: '₹0.22', sms: '₹0.15', email: '₹0.07', biometric: '₹0.38' },
        ],
    },
    {
        id: 'user-verification',
        title: 'User Verification',
        description: 'Reliable and efficient user identity verification services.',
        img: userVerificationIcon,
        keyPoints: [
            "Reliable and precise identity verification.",
            "Fraud prevention and compliance assurance.",
            "Supports various industries and use cases.",
            "Scalable solutions for all business sizes."
        ],
        pricingInfo: 'Affordable plans to suit your user verification needs.',
        pricingTable: [
            { range: 'First 500 auth (0-500)', whatsapp: '₹0.31', sms: '₹0.21', email: '₹0.10', biometric: '₹0.56' },
            { range: 'More than 3500 auth', whatsapp: '₹0.22', sms: '₹0.15', email: '₹0.07', biometric: '₹0.38' },
        ],
    },
];

export default servicesData;
