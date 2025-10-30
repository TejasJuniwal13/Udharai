import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle, IndianRupee, Calendar, Zap } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const scoreHistory = [
  { month: 'Jan', score: 620 },
  { month: 'Feb', score: 645 },
  { month: 'Mar', score: 660 },
  { month: 'Apr', score: 685 },
  { month: 'May', score: 705 },
  { month: 'Jun', score: 732 },
];

const scoreFactors = [
  {
    name: 'Transaction Regularity',
    score: 85,
    status: 'good',
    description: 'Consistent monthly income detected',
  },
  {
    name: 'Spending Pattern',
    score: 78,
    status: 'good',
    description: 'Healthy spending habits',
  },
  {
    name: 'Savings Behavior',
    score: 65,
    status: 'moderate',
    description: 'Can be improved',
  },
  {
    name: 'Payment History',
    score: 92,
    status: 'excellent',
    description: 'Excellent payment track record',
  },
];

export function UdharScoreCard() {
  const currentScore = 732;
  const maxScore = 900;
  const scorePercentage = (currentScore / maxScore) * 100;

  const getScoreColor = (score: number) => {
    if (score >= 700) return 'text-green-600';
    if (score >= 600) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreGrade = (score: number) => {
    if (score >= 750) return 'Excellent';
    if (score >= 650) return 'Good';
    if (score >= 550) return 'Fair';
    return 'Poor';
  };

  return (
    <div className="space-y-6">
      {/* Main Score Card */}
      <Card className="border-2">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>Your Udhar Score</CardTitle>
              <CardDescription>Based on UPI transactions and financial behavior</CardDescription>
            </div>
            <Badge variant="outline" className="gap-1">
              <TrendingUp className="w-3 h-3" />
              +27 this month
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Score Display */}
            <div className="flex flex-col items-center justify-center">
              <div className={`text-6xl mb-2 ${getScoreColor(currentScore)}`}>
                {currentScore}
              </div>
              <div className="text-gray-600 mb-4">out of {maxScore}</div>
              <Badge className="mb-4">{getScoreGrade(currentScore)}</Badge>
              <Progress value={scorePercentage} className="w-full h-2" />
              <div className="flex justify-between w-full mt-2">
                <span className="text-sm text-gray-500">Poor</span>
                <span className="text-sm text-gray-500">Excellent</span>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <IndianRupee className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Max Loan Amount</div>
                    <div className="text-xl">₹50,000</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Max Tenure</div>
                    <div className="text-xl">12 months</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Interest Rate</div>
                    <div className="text-xl">12% p.a.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Score Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Score Trend</CardTitle>
          <CardDescription>Your Udhar Score over the last 6 months</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={scoreHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[600, 800]} />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#8b5cf6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Score Factors */}
      <Card>
        <CardHeader>
          <CardTitle>Score Breakdown</CardTitle>
          <CardDescription>Factors affecting your Udhar Score</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {scoreFactors.map((factor, index) => {
            const getStatusIcon = (status: string) => {
              if (status === 'excellent' || status === 'good') {
                return <CheckCircle className="w-5 h-5 text-green-600" />;
              }
              if (status === 'moderate') {
                return <AlertCircle className="w-5 h-5 text-yellow-600" />;
              }
              return <TrendingDown className="w-5 h-5 text-red-600" />;
            };

            return (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(factor.status)}
                    <span>{factor.name}</span>
                  </div>
                  <span className="text-gray-600">{factor.score}/100</span>
                </div>
                <Progress value={factor.score} className="h-2" />
                <p className="text-sm text-gray-500">{factor.description}</p>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Tips */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            Tips to Improve Your Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Maintain regular UPI transactions to show consistent income</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Keep a healthy balance between income and expenses</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Pay any existing loans on time to build trust</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Avoid excessive spending spikes that indicate financial stress</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
