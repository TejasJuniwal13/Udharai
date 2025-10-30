import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { CreditCard, TrendingUp, Shield, Sparkles, IndianRupee, Smartphone, BarChart3 } from 'lucide-react';

interface LandingPageProps {
  onLogin: () => void;
}

export function LandingPage({ onLogin }: LandingPageProps) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl">Udhar AI</span>
          </div>
          <Button onClick={onLogin}>Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Credit Scoring</span>
          </div>
          <h1 className="text-4xl md:text-6xl mb-6">
            Get Loans Without <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">CIBIL Score</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Access credit based on your actual financial behavior. We analyze your UPI transactions and monetary flows to calculate your Udhar Score.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button onClick={onLogin} size="lg" className="gap-2">
              <IndianRupee className="w-5 h-5" />
              Apply for Loan
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl mb-2">50K+</div>
            <div className="text-gray-600">Loans Disbursed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">₹500Cr+</div>
            <div className="text-gray-600">Total Credit Given</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">95%</div>
            <div className="text-gray-600">Approval Rate</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl text-center mb-12">How Udhar Score Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>1. Connect UPI</CardTitle>
              <CardDescription>
                Securely link your UPI account. We analyze your transaction patterns.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle>2. Get Your Score</CardTitle>
              <CardDescription>
                Our AI calculates your Udhar Score based on income, spending patterns, and financial behavior.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>3. Get Instant Loan</CardTitle>
              <CardDescription>
                Receive loan approval in minutes and get funds directly in your account.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl text-center mb-12">Why Choose Udhar AI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                No CIBIL Required
              </CardTitle>
              <CardDescription>
                Get loans even with no credit history. We assess your real financial behavior.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                Secure & Private
              </CardTitle>
              <CardDescription>
                Bank-grade encryption. Your data is completely secure and never shared.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                AI-Powered Analysis
              </CardTitle>
              <CardDescription>
                Advanced algorithms analyze purchasing power parity and monetary flows.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-orange-600" />
                Instant Approval
              </CardTitle>
              <CardDescription>
                Get approval in minutes, not days. Fast disbursement directly to your account.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-white">Ready to Get Started?</CardTitle>
            <CardDescription className="text-white/90 text-lg">
              Join thousands of people who got access to credit with Udhar AI
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button onClick={onLogin} size="lg" variant="secondary">
              Check Your Udhar Score
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span>Udhar AI</span>
            </div>
            <div className="text-gray-600">
              © 2025 Udhar AI. Empowering financial inclusion.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
