# InstaContent Studio - Zero-Cost Instagram SaaS

A fully-featured Instagram content creation studio built with Next.js 14, Supabase, and Paddle. Launch your SaaS with zero upfront costs!

## 🚀 Quick Start

### 1. Create Project
```bash
node create-project.js
cd my-insta-studio
npm install
```

### 2. Environment Setup
```bash
cp .env.example .env.local
```

### 3. Supabase Setup
1. Go to [Supabase](https://supabase.com) and create a new project
2. Enable Authentication (Email/Magic Link)
3. Run the SQL from `supabase/schema.sql` in the SQL Editor
4. Get your URL and anon key from Settings > API
5. Update `.env.local` with your Supabase credentials

### 4. Paddle Setup
1. Create account at [Paddle](https://paddle.com)
2. Add a product (Subscription, $4.99/month)
3. Get Vendor ID and Public Key from Developer settings
4. Add webhook endpoint: `https://yourdomain.com/api/paddle/webhook`
5. Update `.env.local` with Paddle credentials

### 5. Payoneer Setup (for Tunisia)
1. Sign up at [Payoneer](https://payoneer.com)
2. Complete verification (ID required)
3. Get your US receiving account details
4. In Paddle, go to Payment Settings > Payout Methods
5. Add your Payoneer US bank account details
6. Withdraw funds to your Tunisian bank via Payoneer

## 💰 Monetization

- **Free tier**: 10 generations/month, watermark
- **Pro tier**: $4.99/month, unlimited, no watermark
- **Referral program**: 1 month free for successful referrals

## 🛠️ Features

- Post & Carousel Generator
- Caption & Hashtags Generator  
- Feed Planner
- Story Creator
- Reel Scripts
- Mockup Maker
- Client-side processing (no API costs)
- Paddle payments integration
- Supabase auth & storage

## 🔧 Configuration

### Change Pricing
Edit `app/pricing/page.js` and update Paddle product IDs

### Customize Watermark
Edit watermark text in component files

### Add New Tools
Create new page in `app/tools/` following existing patterns

## 📈 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Environment Variables on Vercel
Add all variables from `.env.local` to Vercel project settings

## 🔒 Security Notes

- File uploads limited to 10MB
- Client-side validation
- Paddle webhook signature verification
- Row Level Security in Supabase

## 💡 Important Notes

> **Zero-Cost Principle**: This project uses client-side generation and free-tier Supabase features. Paddle and Payoneer charge normal processing fees.

> **Tunisian Payouts**: Payoneer is recommended for receiving payouts from Paddle in Tunisia. Follow the setup steps above carefully.

## 🚨 Launch Checklist

See `LAUNCH_CHECKLIST.md` for complete go-live steps.

## 📞 Support

For issues and questions, check the code comments and Supabase/Paddle documentation.

---

**Built for creators in Tunisia and worldwide** 🇹🇳 🌍