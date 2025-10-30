import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { CheckCircle, Clock, XCircle, Download, Calendar, IndianRupee } from 'lucide-react';

const loanHistory = [
  {
    id: 'LN001234',
    amount: 20000,
    disbursedAmount: 20000,
    tenure: 6,
    emi: 3567,
    status: 'active',
    paidEMIs: 3,
    remainingEMIs: 3,
    nextDueDate: '2025-07-05',
    startDate: '2025-01-05',
    purpose: 'Medical Emergency',
  },
  {
    id: 'LN001156',
    amount: 15000,
    disbursedAmount: 15000,
    tenure: 4,
    emi: 3938,
    status: 'completed',
    paidEMIs: 4,
    remainingEMIs: 0,
    completedDate: '2024-12-20',
    startDate: '2024-08-20',
    purpose: 'Personal',
  },
  {
    id: 'LN000987',
    amount: 10000,
    disbursedAmount: 10000,
    tenure: 3,
    emi: 3470,
    status: 'completed',
    paidEMIs: 3,
    remainingEMIs: 0,
    completedDate: '2024-07-15',
    startDate: '2024-04-15',
    purpose: 'Education',
  },
];

const paymentHistory = [
  { date: '2025-06-05', amount: 3567, status: 'paid', loanId: 'LN001234' },
  { date: '2025-05-05', amount: 3567, status: 'paid', loanId: 'LN001234' },
  { date: '2025-04-05', amount: 3567, status: 'paid', loanId: 'LN001234' },
  { date: '2025-03-05', amount: 3567, status: 'paid', loanId: 'LN001234' },
  { date: '2024-12-20', amount: 3938, status: 'paid', loanId: 'LN001156' },
  { date: '2024-11-20', amount: 3938, status: 'paid', loanId: 'LN001156' },
];

export function LoanHistory() {
  const getStatusBadge = (status: string) => {
    if (status === 'active') {
      return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Active</Badge>;
    }
    if (status === 'completed') {
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Completed</Badge>;
    }
    return <Badge variant="outline">Unknown</Badge>;
  };

  const activeLoan = loanHistory.find(loan => loan.status === 'active');
  const completedLoans = loanHistory.filter(loan => loan.status === 'completed');

  return (
    <div className="space-y-6">
      {/* Active Loan */}
      {activeLoan && (
        <Card className="border-2 border-blue-200">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Active Loan</CardTitle>
                <CardDescription>Loan ID: {activeLoan.id}</CardDescription>
              </div>
              {getStatusBadge(activeLoan.status)}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Loan Amount</div>
                <div className="text-2xl">₹{activeLoan.amount.toLocaleString('en-IN')}</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Monthly EMI</div>
                <div className="text-2xl">₹{activeLoan.emi.toLocaleString('en-IN')}</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Next Due Date</div>
                <div className="text-xl">{activeLoan.nextDueDate}</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Repayment Progress</span>
                <span>{activeLoan.paidEMIs} of {activeLoan.tenure} EMIs paid</span>
              </div>
              <Progress value={(activeLoan.paidEMIs / activeLoan.tenure) * 100} className="h-3" />
              <div className="flex justify-between text-sm text-gray-600">
                <span>₹{(activeLoan.emi * activeLoan.paidEMIs).toLocaleString('en-IN')} paid</span>
                <span>₹{(activeLoan.emi * activeLoan.remainingEMIs).toLocaleString('en-IN')} remaining</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1">
                Pay Now
              </Button>
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Download Statement
              </Button>
            </div>

            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm">Upcoming Payment</div>
                  <div className="text-gray-600 text-sm">
                    Your next EMI of ₹{activeLoan.emi.toLocaleString('en-IN')} is due on {activeLoan.nextDueDate}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Loan Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Total Loans Taken</CardDescription>
            <CardTitle className="text-3xl">{loanHistory.length}</CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Total Amount Borrowed</CardDescription>
            <CardTitle className="text-3xl">
              ₹{loanHistory.reduce((sum, loan) => sum + loan.amount, 0).toLocaleString('en-IN')}
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>On-time Payment Rate</CardDescription>
            <CardTitle className="text-3xl text-green-600">100%</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Completed Loans */}
      <Card>
        <CardHeader>
          <CardTitle>Loan History</CardTitle>
          <CardDescription>Your previous loans</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {completedLoans.map((loan) => (
              <div key={loan.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span>Loan ID: {loan.id}</span>
                      {getStatusBadge(loan.status)}
                    </div>
                    <div className="text-sm text-gray-600">Purpose: {loan.purpose}</div>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Download className="w-4 h-4" />
                    Statement
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="text-gray-600">Amount</div>
                    <div>₹{loan.amount.toLocaleString('en-IN')}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">EMI</div>
                    <div>₹{loan.emi.toLocaleString('en-IN')}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Start Date</div>
                    <div>{loan.startDate}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Completed</div>
                    <div>{loan.completedDate}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payment History */}
      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
          <CardDescription>Recent EMI payments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {paymentHistory.map((payment, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span>EMI Payment</span>
                      <Badge variant="outline" className="text-xs">{payment.loanId}</Badge>
                    </div>
                    <div className="text-sm text-gray-500">{payment.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div>₹{payment.amount.toLocaleString('en-IN')}</div>
                  <div className="text-sm text-green-600">Paid</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Benefits Card */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-blue-600" />
            Excellent Repayment Record!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Your perfect payment history has increased your Udhar Score and you now qualify for:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <IndianRupee className="w-4 h-4 text-green-600" />
              <span>Higher loan amounts up to ₹75,000</span>
            </li>
            <li className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>Extended tenure up to 18 months</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-purple-600" />
              <span>Reduced interest rates (10% p.a.)</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
