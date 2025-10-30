import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Alert, AlertDescription } from './ui/alert';
import { Badge } from './ui/badge';
import { CheckCircle, AlertCircle, IndianRupee, Calendar, Percent } from 'lucide-react';

export function LoanApplication() {
  const [loanAmount, setLoanAmount] = useState([25000]);
  const [tenure, setTenure] = useState([6]);
  const [purpose, setPurpose] = useState('personal');
  const [showSuccess, setShowSuccess] = useState(false);

  const maxLoanAmount = 50000;
  const interestRate = 12;

  const calculateEMI = () => {
    const principal = loanAmount[0];
    const rate = interestRate / 12 / 100;
    const months = tenure[0];
    const emi = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    return Math.round(emi);
  };

  const handleApply = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const emi = calculateEMI();
  const totalPayable = emi * tenure[0];
  const totalInterest = totalPayable - loanAmount[0];

  return (
    <div className="space-y-6">
      {showSuccess && (
        <Alert className="border-green-200 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            Your loan application has been submitted successfully! You'll receive approval within 24 hours.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Application Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Apply for Loan</CardTitle>
              <CardDescription>
                Based on your Udhar Score, you're eligible for up to ₹{maxLoanAmount.toLocaleString('en-IN')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Loan Amount */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label>Loan Amount</Label>
                  <Badge variant="outline">₹{loanAmount[0].toLocaleString('en-IN')}</Badge>
                </div>
                <Slider
                  value={loanAmount}
                  onValueChange={setLoanAmount}
                  max={maxLoanAmount}
                  min={5000}
                  step={1000}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>₹5,000</span>
                  <span>₹{maxLoanAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Tenure */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label>Loan Tenure</Label>
                  <Badge variant="outline">{tenure[0]} months</Badge>
                </div>
                <Slider
                  value={tenure}
                  onValueChange={setTenure}
                  max={12}
                  min={3}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>3 months</span>
                  <span>12 months</span>
                </div>
              </div>

              {/* Purpose */}
              <div className="space-y-3">
                <Label>Loan Purpose</Label>
                <RadioGroup value={purpose} onValueChange={setPurpose}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="personal" id="personal" />
                    <Label htmlFor="personal" className="cursor-pointer">Personal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medical" id="medical" />
                    <Label htmlFor="medical" className="cursor-pointer">Medical Emergency</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="education" id="education" />
                    <Label htmlFor="education" className="cursor-pointer">Education</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="business" id="business" />
                    <Label htmlFor="business" className="cursor-pointer">Business/Work</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other" className="cursor-pointer">Other</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Contact Details */}
              <div className="space-y-3">
                <Label htmlFor="phone">Mobile Number</Label>
                <Input id="phone" type="tel" placeholder="+91 98765 43210" defaultValue="+91 98765 43210" />
              </div>

              <div className="space-y-3">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="your@email.com" defaultValue="rahul@email.com" />
              </div>
            </CardContent>
          </Card>

          {/* Terms */}
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-base">Important Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>No hidden charges or processing fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Instant approval for eligible applicants</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Flexible repayment options available</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Late payment may affect your Udhar Score</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Loan Summary */}
        <div className="space-y-6">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Loan Summary</CardTitle>
              <CardDescription>Your EMI breakdown</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <IndianRupee className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">Loan Amount</span>
                </div>
                <span>₹{loanAmount[0].toLocaleString('en-IN')}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">Tenure</span>
                </div>
                <span>{tenure[0]} months</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Percent className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Interest Rate</span>
                </div>
                <span>{interestRate}% p.a.</span>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Monthly EMI</span>
                  <span>₹{emi.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Total Interest</span>
                  <span className="text-red-600">₹{totalInterest.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span>Total Payable</span>
                  <span>₹{totalPayable.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <Button onClick={handleApply} className="w-full" size="lg">
                Apply Now
              </Button>

              <p className="text-xs text-center text-gray-500">
                By applying, you agree to our terms and conditions
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Quick Approval
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>No collateral required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>No paperwork needed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Instant disbursal</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
