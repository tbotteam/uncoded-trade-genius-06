
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LayoutDashboard, Activity, Settings, ChevronRight, ArrowUpRight, ArrowDownRight, Zap } from "lucide-react";
import { useState } from "react";

const mockData = [
  { time: '00:00', value: 4000 },
  { time: '04:00', value: 3000 },
  { time: '08:00', value: 5000 },
  { time: '12:00', value: 2780 },
  { time: '16:00', value: 4890 },
  { time: '20:00', value: 3390 },
  { time: '24:00', value: 4490 },
];

const Dashboard = () => {
  const [activeBot, setActiveBot] = useState(true);

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      <Navigation />
      
      <div className="pt-20 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gradient mb-2">Trading Dashboard</h1>
            <p className="text-gray-400">Überwachen Sie Ihre Trading-Performance in Echtzeit</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${activeBot ? 'bg-green-500' : 'bg-red-500'} pulse-ring`}></div>
              <span className="text-sm text-gray-400">{activeBot ? 'Aktiv' : 'Inaktiv'}</span>
            </div>
            <Button 
              onClick={() => setActiveBot(!activeBot)}
              className={`${activeBot ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
            >
              {activeBot ? 'Bot Stoppen' : 'Bot Starten'}
            </Button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Performance Card */}
          <Card className="p-6 glass-effect">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-gray-400">Performance (24h)</p>
                <h3 className="text-2xl font-bold text-gradient">+2.45%</h3>
              </div>
              <div className="p-2 rounded-lg bg-green-500/10">
                <ArrowUpRight className="w-5 h-5 text-green-500" />
              </div>
            </div>
            <div className="h-[100px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockData}>
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#22c55e" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Current Balance Card */}
          <Card className="p-6 glass-effect">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-gray-400">Aktuelles Guthaben</p>
                <h3 className="text-2xl font-bold text-gradient">€24,150.45</h3>
              </div>
              <div className="p-2 rounded-lg bg-primary/10">
                <Activity className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Gewinn/Verlust</span>
                <span className="text-green-500">+€450.45 (1.8%)</span>
              </div>
            </div>
          </Card>

          {/* Active Trades Card */}
          <Card className="p-6 glass-effect">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-gray-400">Aktive Trades</p>
                <h3 className="text-2xl font-bold text-gradient">12</h3>
              </div>
              <div className="p-2 rounded-lg bg-blue-500/10">
                <Zap className="w-5 h-5 text-blue-500" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-400">Long Positionen</span>
                <span className="text-green-500">8</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Short Positionen</span>
                <span className="text-red-500">4</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Trades */}
        <Card className="p-6 glass-effect mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Letzte Trades</h3>
            <Button variant="outline" size="sm" className="text-primary">
              Alle anzeigen <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="space-y-4">
            {[
              { pair: 'BTC/USDT', type: 'Long', amount: '0.125', profit: '+$245.50', timestamp: '15:30' },
              { pair: 'ETH/USDT', type: 'Short', amount: '2.5', profit: '-$122.30', timestamp: '14:45' },
              { pair: 'BNB/USDT', type: 'Long', amount: '5.0', profit: '+$78.20', timestamp: '13:15' },
            ].map((trade, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg glass-effect">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${trade.type === 'Long' ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                    {trade.type === 'Long' ? (
                      <ArrowUpRight className={`w-5 h-5 ${trade.type === 'Long' ? 'text-green-500' : 'text-red-500'}`} />
                    ) : (
                      <ArrowDownRight className={`w-5 h-5 ${trade.type === 'Long' ? 'text-green-500' : 'text-red-500'}`} />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold">{trade.pair}</h4>
                    <p className="text-sm text-gray-400">{trade.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${trade.profit.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {trade.profit}
                  </p>
                  <p className="text-sm text-gray-400">{trade.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Settings Preview */}
        <Card className="p-6 glass-effect">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Bot-Einstellungen</h3>
            <Button variant="outline" size="sm" className="text-primary">
              Bearbeiten <Settings className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: 'Risiko-Level', value: 'Mittel' },
              { label: 'Max. Trade Größe', value: '€1,000' },
              { label: 'Stop-Loss', value: '2%' },
              { label: 'Take-Profit', value: '5%' },
            ].map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg glass-effect">
                <span className="text-gray-400">{setting.label}</span>
                <span className="font-semibold">{setting.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
