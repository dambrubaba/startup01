import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaGithub, FaYoutube } from "react-icons/fa";

// Import the necessary icons
function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function LightbulbIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2 text-xl font-bold" prefetch={false}>
          <LightbulbIcon className="w-6 h-6" />
          Startup Feedback
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Login
          </Link>
        </nav>
        <button className="md:hidden">
          <MenuIcon className="w-6 h-6" />
        </button>
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20 px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-md space-y-6">
            <h1 className="text-4xl font-bold tracking-tight">Get Detailed Feedback on Your Startup Idea</h1>
            <p className="text-lg">
              Our platform connects you with industry experts who provide in-depth feedback on your startup idea. Unlock
              your full potential and take your business to new heights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-6 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get Started
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Card className="p-6 shadow-md bg-primary/20">
              <p className="text-2xl font-bold">92%</p>
              <p className="text-primary-foreground/70">Customer satisfaction rate</p>
            </Card>
            <Card className="p-6 shadow-md bg-primary/20">
              <p className="text-2xl font-bold">15+</p>
              <p className="text-primary-foreground/70">Industry experts available</p>
            </Card>
            <Card className="p-6 shadow-md bg-primary/20">
              <p className="text-2xl font-bold">50+</p>
              <p className="text-primary-foreground/70">Startups served</p>
            </Card>
          </div>
        </section>
        <section className="py-20 px-6 md:px-10 lg:px-16">
          <h2 className="text-3xl font-bold tracking-tight mb-10">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-md flex flex-col items-center text-center">
              <CheckIcon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Trusted Experts</h3>
              <p className="text-primary-foreground/70">
                Our team of experts have years of experience in the industry, ready to provide actionable insights.
              </p>
            </Card>
            <Card className="p-6 shadow-md flex flex-col items-center text-center">
              <ClipboardIcon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Personalized Feedback</h3>
              <p className="text-primary-foreground/70">
                Get feedback that is tailored to your specific needs and goals, helping you grow your startup.
              </p>
            </Card>
            <Card className="p-6 shadow-md flex flex-col items-center text-center">
              <RocketIcon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Accelerate Growth</h3>
              <p className="text-primary-foreground/70">
                Use our feedback to make informed decisions and fast-track your startup's success.
              </p>
            </Card>
          </div>
        </section>
        <section className="py-20 px-6 md:px-10 lg:px-16">
          <h2 className="text-3xl font-bold tracking-tight mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-md flex flex-col items-center text-center">
              <UploadIcon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Submit Your Idea</h3>
              <p className="text-primary-foreground/70">
                Provide details about your startup idea and the specific areas where you need feedback.
              </p>
            </Card>
            <Card className="p-6 shadow-md flex flex-col items-center text-center">
              <ClipboardIcon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Get Expert Feedback</h3>
              <p className="text-primary-foreground/70">
                Our experts review your idea and provide detailed, actionable feedback to help you improve.
              </p>
            </Card>
            <Card className="p-6 shadow-md flex flex-col items-center text-center">
              <RocketIcon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Implement and Grow</h3>
              <p className="text-primary-foreground/70">
                Use the feedback to refine your idea, implement changes, and accelerate your startup's growth.
              </p>
            </Card>
          </div>
        </section>
        <section className="py-20 px-6 md:px-10 lg:px-16 bg-primary text-primary-foreground">
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
              <Button variant="outline" size="lg" className="text-primary-foreground">
                Choose Plan
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
              <Button variant="outline" size="lg" className="text-primary-foreground">
                Choose Plan
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
              <Button variant="outline" size="lg" className="text-primary-foreground">
                Choose Plan
              </Button>
            </Card>
          </div>
        </section>
        <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20 px-6 md:px-10 lg:px-16">
          <h2 className="text-3xl font-bold tracking-tight mb-10">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 shadow-md bg-primary/20">
              <blockquote className="text-primary-foreground/70">
                "This platform is a game-changer. The feedback we received was invaluable and helped us pivot our
                business model to achieve greater success."
              </blockquote>
              <p className="mt-4 font-bold text-primary-foreground">- Startup Founder</p>
            </Card>
            <Card className="p-6 shadow-md bg-primary/20">
              <blockquote className="text-primary-foreground/70">
                "The experts on this platform are top-notch. Their insights have been instrumental in our growth."
              </blockquote>
              <p className="mt-4 font-bold text-primary-foreground">- Tech Entrepreneur</p>
            </Card>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-10 px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" prefetch={false}>
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link href="#" prefetch={false}>
                <FaYoutube className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <p className="text-center text-primary-foreground/70">&copy; {new Date().getFullYear()} Startup Feedback. All rights reserved.</p>
      </footer>
    </div>
  );
}
