"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";

// Import the necessary icons
import { 
  RiLightbulbLine, 
  RiTeamLine, 
  RiRocketLine, 
  RiSearchLine, 
  RiDiscussLine, 
  RiThumbUpLine 
} from "react-icons/ri";

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePricingClick = async (priceId: string) => {
    setLoading(true);
    setError("");
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize.');

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Startup Feedback
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#features" className="hover:underline">
                Features
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="hover:underline">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20 px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Expert Feedback on Your Startup Idea
            </h1>
            <p className="text-xl mb-8">
              Turn your vision into reality with personalized insights from industry professionals.
            </p>
            <Button size="lg" asChild>
              <Link href="#pricing">Get Started</Link>
            </Button>
          </div>
          <div className="md:w-1/2">
            <img
              src="/hero-image.jpg"
              alt="Startup team collaborating"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>
        <section id="features" className="py-20 px-6 md:px-10 lg:px-16">
          <h2 className="text-3xl font-bold tracking-tight mb-10">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <RiLightbulbLine className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Insights</h3>
              <p>Gain valuable feedback from experienced professionals in your industry.</p>
            </Card>
            <Card className="p-6">
              <RiTeamLine className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Supportive Community</h3>
              <p>Connect with like-minded entrepreneurs and share experiences.</p>
            </Card>
            <Card className="p-6">
              <RiRocketLine className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Accelerate Growth</h3>
              <p>Fast-track your startup's development with targeted advice and strategies.</p>
            </Card>
          </div>
        </section>
        <section className="py-20 px-6 md:px-10 lg:px-16">
          <h2 className="text-3xl font-bold tracking-tight mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <RiSearchLine className="text-5xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">1. Submit Your Idea</h3>
              <p>Share your startup concept and goals with our expert panel.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <RiDiscussLine className="text-5xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">2. Receive Feedback</h3>
              <p>Get detailed insights and suggestions from industry professionals.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <RiThumbUpLine className="text-5xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">3. Refine and Succeed</h3>
              <p>Use the feedback to improve your idea and launch with confidence.</p>
            </div>
          </div>
        </section>
        <section id="pricing" className="py-20 px-6 md:px-10 lg:px-16 bg-primary text-primary-foreground">
          <h2 className="text-3xl font-bold tracking-tight mb-10">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-md bg-primary/20 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <p className="text-4xl font-bold mb-6">$49</p>
              <ul className="text-primary-foreground/70 space-y-2 mb-6">
                <li>Basic feedback on your idea</li>
                <li>Access to community forum</li>
                <li>Email support</li>
              </ul>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-primary-foreground"
                onClick={() => handlePricingClick('price_basic')}
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Choose Plan'}
              </Button>
            </Card>
            <Card className="p-6 shadow-md bg-primary/30 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <p className="text-4xl font-bold mb-6">$99</p>
              <ul className="text-primary-foreground/70 space-y-2 mb-6">
                <li>In-depth feedback from experts</li>
                <li>Access to exclusive content</li>
                <li>Priority email support</li>
              </ul>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-primary-foreground"
                onClick={() => handlePricingClick('price_pro')}
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Choose Plan'}
              </Button>
            </Card>
            <Card className="p-6 shadow-md bg-primary/40 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p className="text-4xl font-bold mb-6">$199</p>
              <ul className="text-primary-foreground/70 space-y-2 mb-6">
                <li>Personalized expert feedback</li>
                <li>1-on-1 mentoring session</li>
                <li>24/7 priority support</li>
              </ul>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-primary-foreground"
                onClick={() => handlePricingClick('price_enterprise')}
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Choose Plan'}
              </Button>
            </Card>
          </div>
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </section>
        <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20 px-6 md:px-10 lg:px-16">
          <h2 className="text-3xl font-bold tracking-tight mb-10">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-primary/20">
              <p className="mb-4">"The feedback I received was invaluable. It helped me pivot my startup in the right direction."</p>
              <p className="font-semibold">- Sarah J., Tech Entrepreneur</p>
            </Card>
            <Card className="p-6 bg-primary/20">
              <p className="mb-4">"The experts' insights saved me months of trial and error. Highly recommended!"</p>
              <p className="font-semibold">- Mike R., E-commerce Founder</p>
            </Card>
            <Card className="p-6 bg-primary/20">
              <p className="mb-4">"The community support alone is worth the price. I've made valuable connections here."</p>
              <p className="font-semibold">- Emily T., Social Impact Startup</p>
            </Card>
          </div>
        </section>
      </main>
      <footer id="contact" className="bg-primary text-primary-foreground py-10 px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Startup Feedback</h3>
            <p>Empowering entrepreneurs with expert insights</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary-foreground/80">
              <FaGithub className="text-2xl" />
            </a>
            <a href="#" className="hover:text-primary-foreground/80">
              <FaYoutube className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-primary-foreground/70">
          <p>&copy; 2023 Startup Feedback. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
