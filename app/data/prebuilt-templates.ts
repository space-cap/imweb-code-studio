export interface PrebuiltTemplate {
    id: string;
    name: string;
    category: 'hero' | 'card' | 'navigation' | 'form' | 'button' | 'footer';
    description: string;
    code: string;
    tags: string[];
}

export const prebuiltTemplates: PrebuiltTemplate[] = [
    // Hero Sections
    {
        id: 'hero-gradient',
        name: 'Gradient Hero',
        category: 'hero',
        description: '그라디언트 배경의 멋진 히어로 섹션',
        tags: ['gradient', 'centered', 'cta'],
        code: `<div class="dc-flex dc-items-center dc-justify-center dc-min-h-screen dc-bg-gradient-to-r dc-from-purple-600 dc-to-blue-600">
  <div class="dc-text-center dc-text-white dc-px-4">
    <h1 class="dc-text-5xl md:dc-text-6xl dc-font-bold dc-mb-6">
      Welcome to Our Platform
    </h1>
    <p class="dc-text-xl dc-mb-8 dc-opacity-90">
      Build amazing things with our powerful tools
    </p>
    <div class="dc-flex dc-gap-4 dc-justify-center">
      <button class="dc-bg-white dc-text-purple-600 dc-px-8 dc-py-3 dc-rounded-lg dc-font-semibold dc-hover:bg-gray-100">
        Get Started
      </button>
      <button class="dc-border-2 dc-border-white dc-text-white dc-px-8 dc-py-3 dc-rounded-lg dc-font-semibold dc-hover:bg-white dc-hover:text-purple-600">
        Learn More
      </button>
    </div>
  </div>
</div>`
    },
    {
        id: 'hero-split',
        name: 'Split Hero',
        category: 'hero',
        description: '좌우 분할 레이아웃의 히어로 섹션',
        tags: ['split', 'image', 'modern'],
        code: `<div class="dc-grid md:dc-grid-cols-2 dc-min-h-screen">
  <div class="dc-flex dc-items-center dc-justify-center dc-bg-gray-900 dc-text-white dc-p-12">
    <div>
      <h1 class="dc-text-5xl dc-font-bold dc-mb-6">
        Transform Your Business
      </h1>
      <p class="dc-text-xl dc-mb-8 dc-text-gray-300">
        Innovative solutions for modern challenges
      </p>
      <button class="dc-bg-blue-500 dc-text-white dc-px-8 dc-py-3 dc-rounded-lg dc-font-semibold dc-hover:bg-blue-600">
        Start Free Trial
      </button>
    </div>
  </div>
  <div class="dc-bg-gradient-to-br dc-from-blue-500 dc-to-purple-600 dc-flex dc-items-center dc-justify-center">
    <div class="dc-text-white dc-text-9xl">🚀</div>
  </div>
</div>`
    },

    // Cards
    {
        id: 'card-product',
        name: 'Product Card',
        category: 'card',
        description: '제품 카드 레이아웃',
        tags: ['product', 'ecommerce', 'shop'],
        code: `<div class="dc-max-w-sm dc-bg-white dc-rounded-xl dc-shadow-lg dc-overflow-hidden">
  <div class="dc-bg-gradient-to-br dc-from-pink-400 dc-to-purple-500 dc-h-64 dc-flex dc-items-center dc-justify-center">
    <div class="dc-text-white dc-text-8xl">👟</div>
  </div>
  <div class="dc-p-6">
    <h3 class="dc-text-2xl dc-font-bold dc-mb-2">Premium Sneakers</h3>
    <p class="dc-text-gray-600 dc-mb-4">Comfortable and stylish for everyday wear</p>
    <div class="dc-flex dc-items-center dc-justify-between">
      <span class="dc-text-3xl dc-font-bold dc-text-gray-900">$129</span>
      <button class="dc-bg-black dc-text-white dc-px-6 dc-py-2 dc-rounded-lg dc-hover:bg-gray-800">
        Add to Cart
      </button>
    </div>
  </div>
</div>`
    },
    {
        id: 'card-pricing',
        name: 'Pricing Card',
        category: 'card',
        description: '가격 플랜 카드',
        tags: ['pricing', 'plan', 'subscription'],
        code: `<div class="dc-max-w-sm dc-bg-white dc-rounded-2xl dc-shadow-xl dc-p-8 dc-border-2 dc-border-blue-500">
  <div class="dc-text-center dc-mb-6">
    <h3 class="dc-text-2xl dc-font-bold dc-mb-2">Pro Plan</h3>
    <div class="dc-text-5xl dc-font-bold dc-mb-2">$29<span class="dc-text-xl dc-text-gray-500">/mo</span></div>
    <p class="dc-text-gray-600">Perfect for professionals</p>
  </div>
  <ul class="dc-space-y-4 dc-mb-8">
    <li class="dc-flex dc-items-center dc-gap-2">
      <span class="dc-text-green-500">✓</span>
      <span>Unlimited projects</span>
    </li>
    <li class="dc-flex dc-items-center dc-gap-2">
      <span class="dc-text-green-500">✓</span>
      <span>Priority support</span>
    </li>
    <li class="dc-flex dc-items-center dc-gap-2">
      <span class="dc-text-green-500">✓</span>
      <span>Advanced analytics</span>
    </li>
  </ul>
  <button class="dc-w-full dc-bg-blue-500 dc-text-white dc-py-3 dc-rounded-lg dc-font-semibold dc-hover:bg-blue-600">
    Get Started
  </button>
</div>`
    },

    // Navigation
    {
        id: 'nav-top-logo',
        name: 'Top Nav with Logo',
        category: 'navigation',
        description: '로고가 있는 상단 네비게이션',
        tags: ['header', 'navbar', 'menu'],
        code: `<nav class="dc-bg-white dc-shadow-md dc-px-6 dc-py-4">
  <div class="dc-flex dc-items-center dc-justify-between dc-max-w-7xl dc-mx-auto">
    <div class="dc-text-2xl dc-font-bold dc-text-blue-600">Logo</div>
    <div class="dc-flex dc-gap-8">
      <a href="#" class="dc-text-gray-700 dc-hover:text-blue-600 dc-font-medium">Home</a>
      <a href="#" class="dc-text-gray-700 dc-hover:text-blue-600 dc-font-medium">About</a>
      <a href="#" class="dc-text-gray-700 dc-hover:text-blue-600 dc-font-medium">Services</a>
      <a href="#" class="dc-text-gray-700 dc-hover:text-blue-600 dc-font-medium">Contact</a>
    </div>
    <button class="dc-bg-blue-600 dc-text-white dc-px-6 dc-py-2 dc-rounded-lg dc-hover:bg-blue-700">
      Sign In
    </button>
  </div>
</nav>`
    },

    // Forms
    {
        id: 'form-contact',
        name: 'Contact Form',
        category: 'form',
        description: '연락처 입력 폼',
        tags: ['contact', 'email', 'message'],
        code: `<div class="dc-max-w-md dc-mx-auto dc-bg-white dc-p-8 dc-rounded-xl dc-shadow-lg">
  <h2 class="dc-text-3xl dc-font-bold dc-mb-6 dc-text-gray-900">Contact Us</h2>
  <form class="dc-space-y-4">
    <div>
      <label class="dc-block dc-text-sm dc-font-medium dc-mb-2">Name</label>
      <input type="text" class="dc-w-full dc-px-4 dc-py-2 dc-border-2 dc-border-gray-300 dc-rounded-lg" placeholder="Your name" />
    </div>
    <div>
      <label class="dc-block dc-text-sm dc-font-medium dc-mb-2">Email</label>
      <input type="email" class="dc-w-full dc-px-4 dc-py-2 dc-border-2 dc-border-gray-300 dc-rounded-lg" placeholder="your@email.com" />
    </div>
    <div>
      <label class="dc-block dc-text-sm dc-font-medium dc-mb-2">Message</label>
      <textarea class="dc-w-full dc-px-4 dc-py-2 dc-border-2 dc-border-gray-300 dc-rounded-lg dc-h-32" placeholder="Your message..."></textarea>
    </div>
    <button class="dc-w-full dc-bg-blue-600 dc-text-white dc-py-3 dc-rounded-lg dc-font-semibold dc-hover:bg-blue-700">
      Send Message
    </button>
  </form>
</div>`
    },
    {
        id: 'form-login',
        name: 'Login Form',
        category: 'form',
        description: '로그인 폼',
        tags: ['login', 'auth', 'signin'],
        code: `<div class="dc-max-w-md dc-mx-auto dc-bg-white dc-p-8 dc-rounded-2xl dc-shadow-xl">
  <h2 class="dc-text-3xl dc-font-bold dc-mb-6 dc-text-center">Welcome Back</h2>
  <form class="dc-space-y-4">
    <div>
      <label class="dc-block dc-text-sm dc-font-medium dc-mb-2">Email</label>
      <input type="email" class="dc-w-full dc-px-4 dc-py-3 dc-border-2 dc-border-gray-300 dc-rounded-lg" placeholder="your@email.com" />
    </div>
    <div>
      <label class="dc-block dc-text-sm dc-font-medium dc-mb-2">Password</label>
      <input type="password" class="dc-w-full dc-px-4 dc-py-3 dc-border-2 dc-border-gray-300 dc-rounded-lg" placeholder="••••••••" />
    </div>
    <button class="dc-w-full dc-bg-blue-600 dc-text-white dc-py-3 dc-rounded-lg dc-font-semibold dc-hover:bg-blue-700">
      Sign In
    </button>
  </form>
</div>`
    },

    // Buttons
    {
        id: 'btn-primary',
        name: 'Primary Button',
        category: 'button',
        description: '기본 버튼',
        tags: ['primary', 'cta', 'action'],
        code: `<button class="dc-bg-blue-600 dc-text-white dc-px-8 dc-py-3 dc-rounded-lg dc-font-semibold dc-hover:bg-blue-700 dc-transition">
  Click Me
</button>`
    },
    {
        id: 'btn-gradient',
        name: 'Gradient Button',
        category: 'button',
        description: '그라디언트 버튼',
        tags: ['gradient', 'colorful', 'modern'],
        code: `<button class="dc-bg-gradient-to-r dc-from-pink-500 dc-to-purple-600 dc-text-white dc-px-10 dc-py-4 dc-rounded-full dc-font-bold dc-text-lg dc-shadow-xl dc-hover:shadow-2xl dc-transform dc-hover:scale-105 dc-transition">
  Get Started Free
</button>`
    },

    // Footers
    {
        id: 'footer-simple',
        name: 'Simple Footer',
        category: 'footer',
        description: '심플한 푸터',
        tags: ['simple', 'minimal', 'copyright'],
        code: `<footer class="dc-bg-gray-900 dc-text-white dc-py-8 dc-text-center">
  <div class="dc-max-w-7xl dc-mx-auto dc-px-4">
    <p class="dc-text-gray-400">© 2024 Your Company. All rights reserved.</p>
  </div>
</footer>`
    },
];
