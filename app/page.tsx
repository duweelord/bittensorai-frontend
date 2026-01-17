import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center">
                <Image
                  src="/assets/icons/Bittensor logo-White.svg"
                  alt="Bittensor.ai Logo"
                  width={150}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
              <div className="hidden lg:flex items-center gap-6">
                <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
                  Invest
                </Link>
                <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
                  Trade AI Tokens
                </Link>
                <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
                  Discover
                </Link>
                <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
                  Explore AI
                </Link>
                <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
                  Dashboard
                </Link>
                <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
                  Monitor
                </Link>
                <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
                  Learn
                </Link>
                <Link href="#" className="text-sm hover:text-purple-400 transition-colors">
                  Guides+Reference
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-sm px-4 py-2 hover:text-purple-400 transition-colors">
                Login
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                Connect Wallet
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-400 mb-4">SN68 - MetaNova Labs: Crypto as a Cure for Broken Biotech Incentives</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Invest in 100+ AI Startups
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Bittensor.ai is like Bitcoin for AI.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Trade Bittensor TAO tokens
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity mb-8">
              Sign Up
            </button>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The world's first open marketplace for intelligence—invest and trade in AI innovation today.
            </p>
          </div>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 border-t border-b border-white/10 py-8">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold mb-2">$---</p>
              <p className="text-sm text-gray-400">Market Cap</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold mb-2">$---</p>
              <p className="text-sm text-gray-400">24hr Volume</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold mb-2">𝞃 0</p>
              <p className="text-sm text-gray-400">Circulating Supply</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold mb-2">---</p>
              <p className="text-sm text-gray-400">Blocks</p>
            </div>
          </div>
        </section>

        {/* Laptop Image Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="relative w-full max-w-6xl mx-auto">
            <Image
              src="/assets/images/laptop-dtao.png"
              alt="dTAO Trading Interface"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </section>

        {/* Market Sections */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                TAO Market Cap
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Track the market capitalization of Bittensor TAO tokens and monitor the growth of the AI economy.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/assets/images/Homepage-dTAO.png"
                alt="TAO Market Cap"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <Image
                src="/assets/images/Homepage-Subnets.png"
                alt="AI Subnets"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                AI Subnets for Investing
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Explore 100+ AI subnets and discover the projects shaping tomorrow's intelligence.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                AI Projects Market Cap
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Monitor the market cap of individual AI projects and tokens within the Bittensor ecosystem.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/assets/images/Coins-DTAO.png"
                alt="AI Projects"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Trading Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trade Bittensor TAO for AI Tokens
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Help fund the next big thing in AI
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
              Sign Up
            </button>
          </div>
          <div className="relative w-full max-w-5xl mx-auto">
            <Image
              src="/assets/images/laptop-dtao.png"
              alt="Trading Interface"
              width={1000}
              height={700}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Back the Future Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Back the future of AI in minutes
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Sign up for a free account</h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect your wallet</h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Invest in AI Projects</h3>
              </div>
            </div>
            <div className="mt-12">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity mr-4">
                Sign Up
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* What is Bittensor Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">What is Bittensor?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl mb-4">AI</div>
                <h3 className="text-xl font-semibold mb-2">AI that solves real problems</h3>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">+</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">Crypto</div>
                <h3 className="text-xl font-semibold mb-2">Powered by blockchain</h3>
              </div>
            </div>
            <div className="mt-12">
              <div className="text-4xl font-bold mb-4">=</div>
              <div className="text-3xl font-bold mb-4">Bittensor</div>
              <p className="text-xl text-gray-300 mb-8">
                AI driven by you, not corporations
              </p>
              <div className="flex gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
                  Sign Up
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Bittensor Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why people choose Bittensor.ai
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Your all-in-one platform to grow with Bittensor
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Trading that's simple and secure</h3>
              <p className="text-gray-300 mb-6">
                Whether you are trading tokens, staking TAO, or bridging from other crypto; we've got you covered
              </p>
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                  Sign Up
                </button>
                <button className="border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors">
                  Trade Now
                </button>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-5xl mx-auto">
            <Image
              src="/assets/images/Select-Wallet.png"
              alt="Select Wallet"
              width={1000}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* But Wait There's More Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">But wait, there's more!</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/assets/images/Homepage-Dashboard.png"
                  alt="Dashboard"
                  width={200}
                  height={150}
                  className="w-full h-auto rounded-lg mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Dashboard</h3>
              <p className="text-gray-400 text-sm mb-2">Your portfolio, staking, and rewards—organized in one simple view</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/assets/images/Rendered-Learn-Center.png"
                  alt="Learning"
                  width={200}
                  height={150}
                  className="w-full h-auto rounded-lg mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Learning</h3>
              <p className="text-gray-400 text-sm mb-2">Guides and resources to take you from beginner to confident investor</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/assets/images/Rendered-Subnets.png"
                  alt="AI Discovery"
                  width={200}
                  height={150}
                  className="w-full h-auto rounded-lg mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Discovery</h3>
              <p className="text-gray-400 text-sm mb-2">Explore 100+ AI Subnets and spot the projects shaping tomorrow</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/assets/images/Bittensor-Services.png"
                  alt="Services"
                  width={200}
                  height={150}
                  className="w-full h-auto rounded-lg mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Services</h3>
              <p className="text-gray-400 text-sm mb-2">Tools and support designed to make your Bittensor journey seamless</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-12 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start your AI investment journey
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Sign up to invest in over 100+ AI Projects.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
              Sign Up
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">dTAO Trading</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Subnet Explorer</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Learn</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Learning Hub</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Get a Wallet</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Buy TAO</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Communities</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Developers</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">API Docs</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Community Help</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Account Help</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="/assets/icons/Bittensor logo-White.svg"
                alt="Bittensor.ai Logo"
                width={120}
                height={32}
                className="h-6 w-auto"
              />
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              <span>•</span>
              <Link href="#" className="hover:text-white transition-colors">Terms</Link>
              <span>•</span>
              <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-8">
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/assets/icons/discordwhite.svg"
                alt="Discord"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/assets/icons/x-logo.svg"
                alt="X (Twitter)"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/assets/icons/githubwhite.svg"
                alt="GitHub"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
