# Kart Mithra — Local Commerce, Elevated.

Kart Mithra is a hyper-local pre-order and pickup platform built for the Indian market. It bridges the gap between neighborhood Kirana stores, juice shops, and modern digital convenience, completely eliminating queues and manual stock tracking.

![Kart Mithra Preview](/og-image.png)

## 🌟 Features

- **Digital Chitty & Pre-Orders**: Upload handwritten grocery lists, let AI build the cart, and schedule pickups.
- **Zero Waiting Time**: Customers order ahead and simply walk in to collect.
- **Merchant Dashboard**: 60-second frictionless onboarding (📱 + PIN). Live ping notifications for orders, and effortless stock management.
- **Multilingual Native (i18n)**: Built-in, lightweight auto-detecting language support for **English**, **Telugu**, and **Hindi** based on user IP geography.

---

## 🛠 Tech Stack

Designed for speed, SEO, and stunning UX:

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **i18n**: Custom React Context + `ipapi.co` geolocation.

---

## 🚀 Getting Started for Developers

### Prerequisites
- Node.js `18.x` or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kirankumar3117/kart-mithra.git
   cd kart-mithra
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 🌍 Managing Translations
Translations are handled locally in the `src/i18n/` directory. If you are contributing:
1. Add new keys to `src/i18n/en.ts` (this drives the TypeScript schema).
2. Add the corresponding translated strings to `te.ts` (Telugu) and `hi.ts` (Hindi).
3. Use the `useLanguage()` hook in components.

---

## 📢 Open Source Initiative (Coming Soon)

**Kart Mithra is going Open Source!** 💚 

In the future, we will be opening up this repository to the community. We believe in building *for* India, *with* India. Whether you're passionate about frontend UX, backend scalability, or hyper-local logistics, there will be a place for you to contribute.

**Want to get notified when we open source?**
⭐ **Star / Mark this repository** to get updates on when we start accepting community PRs, feature requests, and technical discussions!

---

*Made with 💚 for local commerce in India.*
