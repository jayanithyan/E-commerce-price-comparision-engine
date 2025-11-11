// Expanded product database with online images and multiple products per category
const productDatabase = {
    'laptop': [
        {
            id: 'laptop1',
            name: 'Dell XPS 15 Laptop',
            description: '15.6" FHD Display, Intel i7, 16GB RAM, 512GB SSD',
            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 107999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 103999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 99999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 105999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'laptop2',
            name: 'MacBook Pro 16"',
            description: 'M2 Pro Chip, 16GB RAM, 512GB SSD, Liquid Retina Display',
            image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 219999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 214999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 209999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 217999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'laptop3',
            name: 'HP Pavilion 15',
            description: '15.6" FHD, AMD Ryzen 7, 16GB RAM, 1TB SSD',
            image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 74999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 71999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 69999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 73999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'laptop4',
            name: 'Lenovo ThinkPad X1 Carbon',
            description: '14" 2K Display, Intel i7, 16GB RAM, 512GB SSD',
            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 149999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 144999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 139999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 147999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'laptop5',
            name: 'ASUS ROG Strix G15',
            description: '15.6" FHD 144Hz, AMD Ryzen 9, 16GB RAM, RTX 3060',
            image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 99999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 94999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 91999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 97999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        }
    ],
    'smartphone': [
        {
            id: 'phone1',
            name: 'Samsung Galaxy S23',
            description: '128GB Storage, 8GB RAM, Triple Camera, 5G',
            image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 66399, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 62199, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 60499, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 64699, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'phone2',
            name: 'iPhone 15 Pro',
            description: '256GB Storage, 8GB RAM, Triple Camera, 5G',
            image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 124999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 119999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 117999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 122999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'phone3',
            name: 'OnePlus 12',
            description: '256GB Storage, 12GB RAM, 50MP Camera, 5G',
            image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 64999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 61999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 59999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 63999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'phone4',
            name: 'Xiaomi 13 Pro',
            description: '256GB Storage, 12GB RAM, Leica Camera, 5G',
            image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 59999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 56999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 54999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 58999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'phone5',
            name: 'Google Pixel 8 Pro',
            description: '128GB Storage, 12GB RAM, Triple Camera, 5G',
            image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 89999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 84999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 82999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 87999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        }
    ],
    'headphones': [
        {
            id: 'headphone1',
            name: 'Sony WH-1000XM5',
            description: 'Wireless Noise Cancelling Headphones',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 33199, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 31499, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 30649, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 32299, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'headphone2',
            name: 'Bose QuietComfort 45',
            description: 'Wireless Noise Cancelling Headphones',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 29999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 27999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 26999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 28999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'headphone3',
            name: 'Apple AirPods Max',
            description: 'Wireless Over-Ear Headphones, Active Noise Cancellation',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 54999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 51999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 49999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 53999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'headphone4',
            name: 'JBL Tune 770NC',
            description: 'Wireless Noise Cancelling Headphones',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 8999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 8499, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 7999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 8799, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'headphone5',
            name: 'Sennheiser Momentum 4',
            description: 'Wireless Noise Cancelling Headphones',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 27999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 25999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 24999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 26999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        }
    ],
    'tablet': [
        {
            id: 'tablet1',
            name: 'iPad Pro 12.9"',
            description: 'M2 Chip, 256GB Storage, Wi-Fi',
            image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 91299, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 87099, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 85409, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 89509, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'tablet2',
            name: 'Samsung Galaxy Tab S9 Ultra',
            description: '14.6" Display, Snapdragon 8 Gen 2, 256GB, 5G',
            image: 'https://images.unsplash.com/photo-1544244015-0df4b3a217d6?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 109999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 104999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 99999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 107999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'tablet3',
            name: 'iPad Air 11"',
            description: 'M2 Chip, 128GB Storage, Wi-Fi',
            image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 59999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 56999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 54999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 58999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'tablet4',
            name: 'Microsoft Surface Pro 9',
            description: '13" Display, Intel i7, 16GB RAM, 256GB SSD',
            image: 'https://images.unsplash.com/photo-1544244015-0df4b3a217d6?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 124999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 119999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 114999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 122999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'tablet5',
            name: 'OnePlus Pad',
            description: '11.6" Display, MediaTek Dimensity 9000, 128GB',
            image: 'https://images.unsplash.com/photo-1544244015-0df4b3a217d6?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 27999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 25999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 24999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 26999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        }
    ],
    'watch': [
        {
            id: 'watch1',
            name: 'Apple Watch Series 9',
            description: 'GPS, 45mm, Aluminum Case',
            image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 35609, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 33119, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 32299, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 34769, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'watch2',
            name: 'Samsung Galaxy Watch 6',
            description: '44mm, Bluetooth, Health Tracking',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf0a?w=400&h=300&fit=crop&q=80',
            prices: [
                { site: 'Amazon', price: 29999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 27999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 26999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 28999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'watch3',
            name: 'Garmin Fenix 7',
            description: 'GPS Smartwatch, 47mm, Multi-Sport',
            image: 'https://images.unsplash.com/photo-1579586337278-3befd40f17da?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 69999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 64999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 62999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 67999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'watch4',
            name: 'Fitbit Versa 4',
            description: 'Fitness Smartwatch, Health Tracking',
            image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 19999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 17999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 16999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 18999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'watch5',
            name: 'Fossil Gen 6',
            description: 'Smartwatch, 44mm, Wear OS',
            image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 14999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 13999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 12999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 14499, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        }
    ],
    'camera': [
        {
            id: 'camera1',
            name: 'Canon EOS R6',
            description: 'Mirrorless Camera, 20.1MP, 4K Video',
            image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 207499, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 199117, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 194867, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 203267, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'camera2',
            name: 'Sony A7 IV',
            description: 'Full-Frame Mirrorless Camera, 33MP, 4K Video',
            image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 219999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 209999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 204999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 214999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'camera3',
            name: 'Nikon Z6 II',
            description: 'Full-Frame Mirrorless, 24.5MP, 4K Video',
            image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 189999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 179999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 174999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 184999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'camera4',
            name: 'Fujifilm X-T5',
            description: 'Mirrorless Camera, 40.2MP, 4K Video',
            image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 159999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 149999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 144999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 154999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'camera5',
            name: 'GoPro Hero 12',
            description: 'Action Camera, 5.3K Video, Waterproof',
            image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 49999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 46999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 44999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 48999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        }
    ],
    'speaker': [
        {
            id: 'speaker1',
            name: 'JBL Charge 5',
            description: 'Portable Bluetooth Speaker, Waterproof',
            image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 14857, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 14027, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 13207, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 14437, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'speaker2',
            name: 'Sony SRS-XB43',
            description: 'Extra Bass Bluetooth Speaker, Waterproof',
            image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 19999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 17999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 16999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 18999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'speaker3',
            name: 'Bose SoundLink Flex',
            description: 'Portable Bluetooth Speaker, Waterproof',
            image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 9999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 8999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 8499, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 9499, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'speaker4',
            name: 'Marshall Acton III',
            description: 'Bluetooth Speaker, Vintage Design',
            image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 24999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 22999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 21999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 23999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        },
        {
            id: 'speaker5',
            name: 'Sonos Move',
            description: 'Portable Smart Speaker, WiFi & Bluetooth',
            image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop',
            prices: [
                { site: 'Amazon', price: 39999, url: 'https://www.amazon.in', icon: 'fab fa-amazon' },
                { site: 'Flipkart', price: 37999, url: 'https://www.flipkart.com', icon: 'fas fa-shopping-cart' },
                { site: 'Myntra', price: 35999, url: 'https://www.myntra.com', icon: 'fas fa-tshirt' },
                { site: 'Reliance Digital', price: 38999, url: 'https://www.reliancedigital.in', icon: 'fas fa-store' }
            ]
        }
    ]
};

// Cart functionality
let cart = [];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsContainer = document.getElementById('resultsContainer');
const menuToggle = document.getElementById('menuToggle');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const overlay = document.getElementById('overlay');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartBadge = document.getElementById('cartBadge');
const checkoutBtn = document.getElementById('checkoutBtn');
const categoryFilters = document.getElementById('categoryFilters');
let currentCategory = 'all';

// Format price in Indian Rupees
function formatPrice(price) {
    return '₹' + price.toLocaleString('en-IN');
}

// Get all products as flat array
function getAllProducts() {
    return Object.values(productDatabase).flat();
}

// Get products by category
function getProductsByCategory(category) {
    if (category === 'all') {
        return getAllProducts();
    }
    return productDatabase[category] || [];
}

// Search function
function searchProducts(query) {
    const searchTerm = query.toLowerCase().trim();
    
    if (!searchTerm) {
        showWelcomeMessage();
        return;
    }

    const allProducts = getAllProducts();
    const matchingProducts = allProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.id.toLowerCase().includes(searchTerm)
    );

    if (matchingProducts.length === 0) {
        showNoResults();
        return;
    }

    displayResults(matchingProducts);
}

// Display search results with animations
function displayResults(products) {
    resultsContainer.innerHTML = '';
    resultsContainer.classList.add('fade-in');

    products.forEach((product, productIndex) => {
        const prices = product.prices.map(p => p.price);
        const bestPrice = Math.min(...prices);
        const bestPriceItem = product.prices.find(p => p.price === bestPrice);

        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.animationDelay = `${productIndex * 0.1}s`;

        const sortedPrices = [...product.prices].sort((a, b) => a.price - b.price);

        card.innerHTML = `
            <div class="product-header">
                <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/300x300?text=Product'">
                <div class="product-info">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                </div>
            </div>
            <div class="price-comparison">
                ${sortedPrices.map((item, index) => {
                    const isBestPrice = item.price === bestPrice;
                    return `
                        <div class="price-item ${isBestPrice ? 'best-price' : ''}" style="animation-delay: ${(productIndex * 0.1 + index * 0.05)}s">
                            <div class="ecommerce-name">
                                <i class="${item.icon}"></i>
                                <span>${item.site}</span>
                                ${isBestPrice ? '<span class="best-badge bounce-in">BEST PRICE</span>' : ''}
                            </div>
                            <div class="price">${formatPrice(item.price)}</div>
                            <div class="price-label">Price per unit</div>
                            <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="visit-link" onclick="event.stopPropagation(); return true;">
                                <i class="fas fa-external-link-alt"></i>
                                Visit ${item.site}
                            </a>
                        </div>
                    `;
                }).join('')}
            </div>
            <div class="product-actions">
                <button class="add-to-cart-btn" onclick="addToCart('${product.id}', '${product.name}', ${bestPrice}, '${bestPriceItem.url}', '${product.image}')">
                    <i class="fas fa-cart-plus"></i> Add to Cart (Best Price)
                </button>
            </div>
        `;

        resultsContainer.appendChild(card);
    });
}

// Add to cart
function addToCart(productId, productName, price, url, image) {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: price,
            url: url,
            image: image,
            quantity: 1
        });
    }
    
    updateCartUI();
    showCartNotification();
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

// Update cart UI
function updateCartUI() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = formatPrice(total);
    cartBadge.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart fa-3x"></i>
                <p>Your cart is empty</p>
            </div>
        `;
        checkoutBtn.disabled = true;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/100x100?text=Product'">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${formatPrice(item.price)} each</p>
                    <div class="cart-item-controls">
                        <button onclick="updateQuantity('${item.id}', -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity('${item.id}', 1)">+</button>
                    </div>
                </div>
                <div class="cart-item-total">
                    <p>${formatPrice(item.price * item.quantity)}</p>
                    <button class="remove-item" onclick="removeFromCart('${item.id}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
        checkoutBtn.disabled = false;
    }
}

// Show cart notification
function showCartNotification() {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = '<i class="fas fa-check-circle"></i> Item added to cart!';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Show welcome message
function showWelcomeMessage() {
    resultsContainer.innerHTML = `
        <div class="welcome-message fade-in">
            <div class="featured-categories">
                <h2>Shop by Category</h2>
                <div class="category-grid">
                    <div class="category-card" data-category="laptop">
                        <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop" alt="Laptops">
                        <div class="category-overlay">
                            <h3>Laptops</h3>
                            <p>Find the best deals</p>
                        </div>
                    </div>
                    <div class="category-card" data-category="smartphone">
                        <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop" alt="Smartphones">
                        <div class="category-overlay">
                            <h3>Smartphones</h3>
                            <p>Compare prices</p>
                        </div>
                    </div>
                    <div class="category-card" data-category="headphones">
                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop" alt="Headphones">
                        <div class="category-overlay">
                            <h3>Headphones</h3>
                            <p>Best audio deals</p>
                        </div>
                    </div>
                    <div class="category-card" data-category="tablet">
                        <img src="https://images.unsplash.com/photo-1544244015-0df4b3a217d6?w=400&h=300&fit=crop" alt="Tablets">
                        <div class="category-overlay">
                            <h3>Tablets</h3>
                            <p>Compare tablets</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search-prompt">
                <i class="fas fa-search fa-3x bounce-animation"></i>
                <h2>Start Searching for Products</h2>
                <p>Enter a product name in the search bar above or click a category to browse</p>
            </div>
        </div>
    `;
    
    // Add category card click handlers
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            filterByCategory(category);
        });
    });
}

// Show no results message
function showNoResults() {
    resultsContainer.innerHTML = `
        <div class="no-results fade-in">
            <i class="fas fa-search fa-3x shake-animation"></i>
            <h2>No Products Found</h2>
            <p>Try searching for: laptop, smartphone, headphones, tablet, watch, camera, or speaker</p>
        </div>
    `;
}

// Filter by category
function filterByCategory(category) {
    currentCategory = category;
    
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    const products = getProductsByCategory(category);
    if (products.length > 0) {
        displayResults(products);
    } else {
        showNoResults();
    }
}

// Event listeners
searchBtn.addEventListener('click', () => {
    searchBtn.classList.add('click-animation');
    setTimeout(() => searchBtn.classList.remove('click-animation'), 300);
    searchProducts(searchInput.value);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.classList.add('click-animation');
        setTimeout(() => searchBtn.classList.remove('click-animation'), 300);
        searchProducts(searchInput.value);
    }
});

searchInput.addEventListener('focus', () => {
    document.querySelector('.search-container').classList.add('search-focused');
});

searchInput.addEventListener('blur', () => {
    document.querySelector('.search-container').classList.remove('search-focused');
});

// Cart sidebar toggle
menuToggle.addEventListener('click', () => {
    cartSidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
});

overlay.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
});

// Category filter buttons
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        filterByCategory(btn.dataset.category);
    });
});

// Checkout button
checkoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Thank you for your purchase! Total: ' + formatPrice(cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)));
        cart = [];
        updateCartUI();
        cartSidebar.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Event delegation for visit links
document.addEventListener('click', (e) => {
    if (e.target.closest('.visit-link')) {
        const link = e.target.closest('.visit-link');
        const url = link.getAttribute('href');
        if (url) {
            e.preventDefault();
            e.stopPropagation();
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    }
});

// Initialize
showWelcomeMessage();
updateCartUI();

// Make functions globally available
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;