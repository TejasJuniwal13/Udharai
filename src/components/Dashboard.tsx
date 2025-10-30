import { useState } from 'react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Sparkles, LogOut, Home, CreditCard, History, BarChart3 } from 'lucide-react';
import { UdharScoreCard } from './UdharScoreCard';
import { TransactionAnalysis } from './TransactionAnalysis';
import { LoanApplication } from './LoanApplication';
import { LoanHistory } from './LoanHistory';

interface DashboardProps {
  onLogout: () => void;
}

export function Dashboard({ onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');

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
          <Button variant="outline" onClick={onLogout} className="gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Welcome back, Rahul</h1>
          <p className="text-gray-600">Manage your loans and check your Udhar Score</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl grid-cols-4">
            <TabsTrigger value="overview" className="gap-2">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="transactions" className="gap-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Analysis</span>
            </TabsTrigger>
            <TabsTrigger value="apply" className="gap-2">
              <CreditCard className="w-4 h-4" />
              <span className="hidden sm:inline">Apply</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="gap-2">
              <History className="w-4 h-4" />
              <span className="hidden sm:inline">History</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <UdharScoreCard />
          </TabsContent>

          <TabsContent value="transactions" className="mt-6">
            <TransactionAnalysis />
          </TabsContent>

          <TabsContent value="apply" className="mt-6">
            <LoanApplication />
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <LoanHistory />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
