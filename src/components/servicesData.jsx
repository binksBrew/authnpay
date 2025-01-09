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
            "Nearly perfect 99% success rate for hassle-free onboarding",
            "Premium security powered by biometrics and multi-factor authentication",
            "Enables authentication through multiple channels",
            "Pay-per-growth pricing approach"
        ],
        pricingInfo: 'Contact us for pricing details tailored to your needs.',
        pricingTable: [
                {range: "First 500 auth (0-500)", core: "₹0.31", guard: "₹0.21", select: "₹0.10", faceKey: "₹0.56", access: "₹0.10", webShield: "₹0.56" },
                {range: "Next 1000 auth (500-1500)", core: "₹0.28", guard: "₹0.19", select: "₹0.09", faceKey: "₹0.49", access: "₹0.09", webShield: "₹0.49" },
                {range: "Next 2000 auth (1500-3500)", core: "₹0.24", guard: "₹0.17", select: "₹0.08", faceKey: "₹0.43", access: "₹0.08", webShield: "₹0.43" },
                {range: "More than 3500 auth", core: "₹0.22", guard: "₹0.15", select: "₹0.07", faceKey: "₹0.38", access: "₹0.07", webShield: "₹0.38"}
              
        ],
    },
    {
        id: 'net-banking-auth',
        title: 'Net Banking Auth',
        description: 'Easy, secure authentication for net banking users.',
        img: netBankingAuthIcon,
        keyPoints: [
            "Quick, user-friendly, and trustworthy",
            "Easy connection with existing platforms",
            "Aligned with worldwide banking standard",
            "24/7 helpdesk and compliance commitment"
        ],
        pricingInfo: 'Flexible pricing based on user volume.',
        pricingTable: [
            {range: "First 500 auth (0-500)", core: "₹0.31", guard: "₹0.21", select: "₹0.10", faceKey: "₹0.56", access: "₹0.10", webShield: "₹0.56" },
                {range: "Next 1000 auth (500-1500)", core: "₹0.28", guard: "₹0.19", select: "₹0.09", faceKey: "₹0.49", access: "₹0.09", webShield: "₹0.49" },
                {range: "Next 2000 auth (1500-3500)", core: "₹0.24", guard: "₹0.17", select: "₹0.08", faceKey: "₹0.43", access: "₹0.08", webShield: "₹0.43" },
                {range: "More than 3500 auth", core: "₹0.22", guard: "₹0.15", select: "₹0.07", faceKey: "₹0.38", access: "₹0.07", webShield: "₹0.38"}
        ],
    },
    {
        id: 'net-banking-payment-auth',
        title: 'Net Banking Payment Auth',
        description: 'Simple, secure payment authentication for digital banking transactions.',
        img: netBankingPaymentAuthIcon,
        keyPoints: [
            "Provides reliable payment security",
            "Improves payment ease",
            "Conforms to worldwide standards",
            "Quick and easy connectivity with banking platforms"
        ],
        pricingInfo: 'Subscription plans available based on transaction volume.',
        pricingTable: [
            {range: "First 500 auth (0-500)", core: "₹0.31", guard: "₹0.21", select: "₹0.10", faceKey: "₹0.56", access: "₹0.10", webShield: "₹0.56" },
            {range: "Next 1000 auth (500-1500)", core: "₹0.28", guard: "₹0.19", select: "₹0.09", faceKey: "₹0.49", access: "₹0.09", webShield: "₹0.49" },
            {range: "Next 2000 auth (1500-3500)", core: "₹0.24", guard: "₹0.17", select: "₹0.08", faceKey: "₹0.43", access: "₹0.08", webShield: "₹0.43" },
            {range: "More than 3500 auth", core: "₹0.22", guard: "₹0.15", select: "₹0.07", faceKey: "₹0.38", access: "₹0.07", webShield: "₹0.38"}
        ],
    },
    {
        id: 'payment-wallet-auth',
        title: 'Payment Wallet Auth',
        description: 'Improved protection for wallet-based transactions.',
        img: walletAuthIcon,
        keyPoints: [
            "Strong encryption for secure wallet transactions",
            "Integrates with well-known wallet platforms",
            "Simple authentication flow",
            "Flexible pricing options for businesses"
        ],
        pricingInfo: 'Competitive pricing options for businesses of all sizes.',
        pricingTable: [
            {range: "First 500 auth (0-500)", core: "₹0.31", guard: "₹0.21", select: "₹0.10", faceKey: "₹0.56", access: "₹0.10", webShield: "₹0.56" },
                {range: "Next 1000 auth (500-1500)", core: "₹0.28", guard: "₹0.19", select: "₹0.09", faceKey: "₹0.49", access: "₹0.09", webShield: "₹0.49" },
                {range: "Next 2000 auth (1500-3500)", core: "₹0.24", guard: "₹0.17", select: "₹0.08", faceKey: "₹0.43", access: "₹0.08", webShield: "₹0.43" },
                {range: "More than 3500 auth", core: "₹0.22", guard: "₹0.15", select: "₹0.07", faceKey: "₹0.38", access: "₹0.07", webShield: "₹0.38"}
        ],
    },
    {
        id: 'payment-gateway',
        title: 'Payment Gateway',
        description: 'Comprehensive support for payments via net banking, cards, UPI, wallets, and more.',
        img: paymentGatewayIcon,
        keyPoints: [
            "Supports multiple payment options",
            "Fast and reliable payment processing",
            "Scalable for small to large businesses",
            "Custom pricing tailored to transaction needs"
        ],
        pricingInfo: 'Custom pricing tailored to your transaction needs.',
        pricingTable: [
            {range: "First 500 auth (0-500)", core: "₹0.31", guard: "₹0.21", select: "₹0.10", faceKey: "₹0.56", access: "₹0.10", webShield: "₹0.56" },
            {range: "Next 1000 auth (500-1500)", core: "₹0.28", guard: "₹0.19", select: "₹0.09", faceKey: "₹0.49", access: "₹0.09", webShield: "₹0.49" },
            {range: "Next 2000 auth (1500-3500)", core: "₹0.24", guard: "₹0.17", select: "₹0.08", faceKey: "₹0.43", access: "₹0.08", webShield: "₹0.43" },
            {range: "More than 3500 auth", core: "₹0.22", guard: "₹0.15", select: "₹0.07", faceKey: "₹0.38", access: "₹0.07", webShield: "₹0.38"}
        ],
    },
    {
        id: 'digital-signature',
        title: 'Digital Signature',
        description: 'Enable safe and legally valid digital document signing.',
        img: digitalSignatureIcon,
        keyPoints: [
            "Legally recognized e-signatures",
            "Integrates with major document management frameworks",
            "High-level encryption for protected signing",
            "Scalable and affordable pricing for every organization"
        ],
        pricingInfo: 'Affordable plans for individuals and enterprises.',
        pricingTable: [
            {range: "First 500 auth (0-500)", core: "₹0.31", guard: "₹0.21", select: "₹0.10", faceKey: "₹0.56", access: "₹0.10", webShield: "₹0.56" },
            {range: "Next 1000 auth (500-1500)", core: "₹0.28", guard: "₹0.19", select: "₹0.09", faceKey: "₹0.49", access: "₹0.09", webShield: "₹0.49" },
            {range: "Next 2000 auth (1500-3500)", core: "₹0.24", guard: "₹0.17", select: "₹0.08", faceKey: "₹0.43", access: "₹0.08", webShield: "₹0.43" },
            {range: "More than 3500 auth", core: "₹0.22", guard: "₹0.15", select: "₹0.07", faceKey: "₹0.38", access: "₹0.07", webShield: "₹0.38"}
        ],
    },
    {
        id: 'digi-locker',
        title: 'Digi Locker',
        description: 'Keep your documents safe and access them anytime.',
        img: digiLockerIcon,
        keyPoints: [
            "Safe and encrypted storage for documents",
            "Accessible 24/7, from any place",
            "Simplified interface for user convenience",
            "Compliance with data protection protocols"
        ],
        pricingInfo: 'Monthly and annual plans available.',
        pricingTable: [
            {range: "First 500 auth (0-500)", core: "₹0.31", guard: "₹0.21", select: "₹0.10", faceKey: "₹0.56", access: "₹0.10", webShield: "₹0.56" },
            {range: "Next 1000 auth (500-1500)", core: "₹0.28", guard: "₹0.19", select: "₹0.09", faceKey: "₹0.49", access: "₹0.09", webShield: "₹0.49" },
            {range: "Next 2000 auth (1500-3500)", core: "₹0.24", guard: "₹0.17", select: "₹0.08", faceKey: "₹0.43", access: "₹0.08", webShield: "₹0.43" },
            {range: "More than 3500 auth", core: "₹0.22", guard: "₹0.15", select: "₹0.07", faceKey: "₹0.38", access: "₹0.07", webShield: "₹0.38"}
        ],
    },
    {
        id: 'kyc',
        title: 'KYC',
        description: 'All-in-one KYC services, including Basic Yes/NO KYC, Full KYC, and Aadhar-linked verification.',
        img: kycIcon,
        keyPoints: [
            "Facilitates Yes/No KYC, Full KYC, and Aadhaar-linked KYC",
            "Adhere to regulatory guidelines",
            "Ensure reliable and protected verification",
            "Scalable business solution"
        ],
        pricingInfo: 'Flexible pricing for businesses and institutions.',
        pricingTable: [
            {range: "First 500 auth (0-500)", core: "₹0.31", guard: "₹0.21", select: "₹0.10", faceKey: "₹0.56", access: "₹0.10", webShield: "₹0.56" },
                {range: "Next 1000 auth (500-1500)", core: "₹0.28", guard: "₹0.19", select: "₹0.09", faceKey: "₹0.49", access: "₹0.09", webShield: "₹0.49" },
                {range: "Next 2000 auth (1500-3500)", core: "₹0.24", guard: "₹0.17", select: "₹0.08", faceKey: "₹0.43", access: "₹0.08", webShield: "₹0.43" },
                {range: "More than 3500 auth", core: "₹0.22", guard: "₹0.15", select: "₹0.07", faceKey: "₹0.38", access: "₹0.07", webShield: "₹0.38"}
        ],
    },
    {
        id: 'user-verification',
        title: 'User Verification',
        description: 'Trusted and optimized identity verification services.',
        img: userVerificationIcon,
        keyPoints: [
            "Secure and accurate identity verification",
            "Anti-fraud measures and compliance management",
            "Supports a variety of industries and business needs",
            "Customizable solutions for business of any size"
        ],
        pricingInfo: 'Affordable plans to suit your user verification needs.',
        pricingTable: [
            {range: "First 500 auth (0-500)", core: "₹0.31", guard: "₹0.21", select: "₹0.10", faceKey: "₹0.56", access: "₹0.10", webShield: "₹0.56" },
            {range: "Next 1000 auth (500-1500)", core: "₹0.28", guard: "₹0.19", select: "₹0.09", faceKey: "₹0.49", access: "₹0.09", webShield: "₹0.49" },
            {range: "Next 2000 auth (1500-3500)", core: "₹0.24", guard: "₹0.17", select: "₹0.08", faceKey: "₹0.43", access: "₹0.08", webShield: "₹0.43" },
            {range: "More than 3500 auth", core: "₹0.22", guard: "₹0.15", select: "₹0.07", faceKey: "₹0.38", access: "₹0.07", webShield: "₹0.38"}
        ],
    },
];

export default servicesData;
