import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowUpRight, ArrowDownRight, TrendingUp, Smartphone, RefreshCw } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const monthlyData = [
  { month: 'Jan', income: 25000, expense: 18000 },
  { month: 'Feb', income: 26000, expense: 19000 },
  { month: 'Mar', income: 25500, expense: 17500 },
  { month: 'Apr', income: 27000, expense: 20000 },
  { month: 'May', income: 28000, expense: 19500 },
  { month: 'Jun', income: 29000, expense: 21000 },
];

const categoryData = [
  { name: 'Groceries', value: 6500, color: '#3b82f6' },
  { name: 'Utilities', value: 3500, color: '#8b5cf6' },
  { name: 'Transportation', value: 2500, color: '#ec4899' },
  { name: 'Food & Dining', value: 4500, color: '#f59e0b' },
  { name: 'Shopping', value: 3000, color: '#10b981' },
  { name: 'Others', value: 1000, color: '#6b7280' },
];

const recentTransactions = [
  { id: 1, type: 'credit', desc: 'Salary Credit', amount: 29000, date: '2025-06-01', category: 'Income' },
  { id: 2, type: 'debit', desc: 'Grocery Store', amount: 1500, date: '2025-06-05', category: 'Groceries' },
  { id: 3, type: 'debit', desc: 'Electric Bill', amount: 850, date: '2025-06-08', category: 'Utilities' },
  { id: 4, type: 'credit', desc: 'Freelance Payment', amount: 5000, date: '2025-06-10', category: 'Income' },
  { id: 5, type: 'debit', desc: 'Restaurant', amount: 800, date: '2025-06-12', category: 'Food' },
  { id: 6, type: 'debit', desc: 'Online Shopping', amount: 2500, date: '2025-06-15', category: 'Shopping' },
  { id: 7, type: 'debit', desc: 'Mobile Recharge', amount: 399, date: '2025-06-18', category: 'Utilities' },
  { id: 8, type: 'credit', desc: 'Refund', amount: 450, date: '2025-06-20', category: 'Others' },
];

export function TransactionAnalysis() {
  const totalIncome = 29000;
  const totalExpense = 21000;
  const savings = totalIncome - totalExpense;
  const savingsRate = ((savings / totalIncome) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Total Income (June)</CardDescription>
            <CardTitle className="text-2xl text-green-600 flex items-center gap-2">
              <ArrowDownRight className="w-5 h-5" />
              ₹{totalIncome.toLocaleString('en-IN')}
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Total Expense (June)</CardDescription>
            <CardTitle className="text-2xl text-red-600 flex items-center gap-2">
              <ArrowUpRight className="w-5 h-5" />
              ₹{totalExpense.toLocaleString('en-IN')}
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Net Savings</CardDescription>
            <CardTitle className="text-2xl text-blue-600 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              ₹{savings.toLocaleString('en-IN')}
              <Badge variant="outline" className="ml-2">{savingsRate}%</Badge>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* UPI Connection Status */}
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle>UPI Connected</CardTitle>
                <CardDescription>Last synced: 2 hours ago</CardDescription>
              </div>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Income vs Expense Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Income vs Expense Trend</CardTitle>
          <CardDescription>Last 6 months financial flow</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="income" fill="#10b981" name="Income" />
              <Bar dataKey="expense" fill="#ef4444" name="Expense" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Category Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Spending by Category</CardTitle>
            <CardDescription>Distribution of expenses (June)</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Category Details</CardTitle>
            <CardDescription>June spending breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {categoryData.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                    <span>{category.name}</span>
                  </div>
                  <span>₹{category.value.toLocaleString('en-IN')}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your latest UPI transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentTransactions.map((txn) => (
              <div
                key={txn.id}
                className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      txn.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                    }`}
                  >
                    {txn.type === 'credit' ? (
                      <ArrowDownRight className="w-5 h-5 text-green-600" />
                    ) : (
                      <ArrowUpRight className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                  <div>
                    <div>{txn.desc}</div>
                    <div className="text-sm text-gray-500">{txn.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className={txn.type === 'credit' ? 'text-green-600' : 'text-red-600'}
                  >
                    {txn.type === 'credit' ? '+' : '-'}₹{txn.amount.toLocaleString('en-IN')}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {txn.category}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Insights */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
        <CardHeader>
          <CardTitle>AI Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Your income has increased by 16% over the last 6 months</span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>You maintain a healthy savings rate of {savingsRate}%</span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingUp className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <span>Regular transactions detected - this positively impacts your Udhar Score</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
