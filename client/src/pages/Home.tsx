import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, MapPin, Zap, DollarSign, Shield, Users, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design Philosophy: Modern Minimalist with African Warmth
 * - Warm gold (#D4A574) and charcoal (#2C2C2C) for luxury
 * - Clean asymmetric layouts with intentional whitespace
 * - Smooth animations and micro-interactions
 * - Typography-driven hierarchy with Poppins headlines
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm md:text-base">LR</span>
            </div>
            <span className="font-bold text-lg md:text-xl hidden sm:inline">Lux Rides</span>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <a href="#riders" className="text-sm md:text-base hover:text-primary transition-colors">
              For Riders
            </a>
            <a href="#drivers" className="text-sm md:text-base hover:text-primary transition-colors">
              For Drivers
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Premium Rides,{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  African Pride
                </span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                Experience the future of mobility in Africa. Safe, reliable, and designed for you.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://apps.apple.com"
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 13.5c-.91 0-1.64.46-2.09 1.35.98.68 1.65 1.77 1.65 3.02 0 .3-.03.59-.09.87.54.69 1.42 1.13 2.39 1.13 2.02 0 3.66-1.64 3.66-3.66 0-2.02-1.64-3.66-3.66-3.66-1.01 0-1.92.41-2.57 1.07.06-.28.09-.57.09-.87 0-1.25-.67-2.34-1.65-3.02.45.89 1.18 1.35 2.09 1.35 1.66 0 3-1.34 3-3 0-1.66-1.34-3-3-3-1.66 0-3 1.34-3 3 0 .3.03.59.09.87-.65-.66-1.56-1.07-2.57-1.07-2.02 0-3.66 1.64-3.66 3.66 0 2.02 1.64 3.66 3.66 3.66.97 0 1.85-.44 2.39-1.13-.06.28-.09.57-.09.87 0 1.25.67 2.34 1.65 3.02-.45-.89-1.18-1.35-2.09-1.35-1.66 0-3 1.34-3 3 0 1.66 1.34 3 3 3 1.66 0 3-1.34 3-3 0-.3-.03-.59-.09-.87.65.66 1.56 1.07 2.57 1.07 2.02 0 3.66-1.64 3.66-3.66 0-2.02-1.64-3.66-3.66-3.66z" />
                  </svg>
                  Download on App Store
                </Button>
              </a>
              <a
                href="https://play.google.com"
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary/10 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.609-.908V2.722c0-.384.22-.743.609-.908zm16.959 10.645L5.935 2.722v18.556l14.633-9.819zM3 2.722v18.556l10.957-9.278L3 2.722z" />
                  </svg>
                  Get on Google Play
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/50">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">50K+</p>
                <p className="text-sm text-foreground/60">Active Riders</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">15K+</p>
                <p className="text-sm text-foreground/60">Verified Drivers</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">4.8★</p>
                <p className="text-sm text-foreground/60">Average Rating</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663393222026/Bj6pW9aUA7CVhKMMmdxaXD/hero-african-city-3J2fcMWZktYY9bvr4dRCRR.webp"
                alt="Lux Rides in African City"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Riders Section */}
      <section id="riders" className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              For Riders
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Experience premium mobility tailored to African cities. Safe, affordable, and always on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <Card className="p-6 md:p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0 bg-background">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Easy Booking</h3>
              <p className="text-foreground/70">
                Request a ride in seconds. Real-time tracking and driver details for complete peace of mind.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-6 md:p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0 bg-background">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Your Safety First</h3>
              <p className="text-foreground/70">
                Verified drivers, emergency support 24/7, and ride insurance included in every journey.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-6 md:p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0 bg-background">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Affordable Fares</h3>
              <p className="text-foreground/70">
                Transparent pricing with no hidden charges. Enjoy premium comfort at fair prices.
              </p>
            </Card>
          </div>

          {/* Rider CTA */}
          <div className="mt-12 md:mt-16 text-center">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Download Now for Riders <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Drivers Section */}
      <section id="drivers" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              For Drivers
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Turn your car into income. Flexible work, competitive earnings, and complete support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663393222026/Bj6pW9aUA7CVhKMMmdxaXD/hero-driver-income-RVxnb5qkhJsA53625Erw7f.webp"
                  alt="Lux Rides Driver Earnings"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold">
                  Earn More, Work Flexible
                </h3>
                <p className="text-lg text-foreground/70">
                  Be your own boss. Set your own schedule and earn competitive income on your terms.
                </p>
              </div>

              <div className="space-y-4">
                {/* Benefit 1 */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Competitive Earnings</h4>
                    <p className="text-sm text-foreground/70">
                      Earn up to $1,500+ per week with transparent commission rates.
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">24/7 Support</h4>
                    <p className="text-sm text-foreground/70">
                      Dedicated driver support team always ready to help you succeed.
                    </p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Bonus Programs</h4>
                    <p className="text-sm text-foreground/70">
                      Earn extra through referrals, performance bonuses, and surge pricing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Driver CTA */}
              <div className="pt-4">
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Start Earning Now <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Join Lux Rides?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Download the app today and experience premium mobility in Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 13.5c-.91 0-1.64.46-2.09 1.35.98.68 1.65 1.77 1.65 3.02 0 .3-.03.59-.09.87.54.69 1.42 1.13 2.39 1.13 2.02 0 3.66-1.64 3.66-3.66 0-2.02-1.64-3.66-3.66-3.66-1.01 0-1.92.41-2.57 1.07.06-.28.09-.57.09-.87 0-1.25-.67-2.34-1.65-3.02.45.89 1.18 1.35 2.09 1.35 1.66 0 3-1.34 3-3 0-1.66-1.34-3-3-3-1.66 0-3 1.34-3 3 0 .3.03.59.09.87-.65-.66-1.56-1.07-2.57-1.07-2.02 0-3.66 1.64-3.66 3.66 0 2.02 1.64 3.66 3.66 3.66.97 0 1.85-.44 2.39-1.13-.06.28-.09.57-.09.87 0 1.25.67 2.34 1.65 3.02-.45-.89-1.18-1.35-2.09-1.35-1.66 0-3 1.34-3 3 0 1.66 1.34 3 3 3 1.66 0 3-1.34 3-3 0-.3-.03-.59-.09-.87.65.66 1.56 1.07 2.57 1.07 2.02 0 3.66-1.64 3.66-3.66 0-2.02-1.64-3.66-3.66-3.66z" />
                </svg>
                App Store
              </Button>
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary/10 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.609-.908V2.722c0-.384.22-.743.609-.908zm16.959 10.645L5.935 2.722v18.556l14.633-9.819zM3 2.722v18.556l10.957-9.278L3 2.722z" />
                </svg>
                Google Play
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-8 md:py-12 border-t border-border/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">LR</span>
                </div>
                <span className="font-bold">Lux Rides</span>
              </div>
              <p className="text-sm text-foreground/60">Premium mobility for Africa.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Safety</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2026 Lux Rides. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
