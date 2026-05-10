// components/dashboard/revenue-chart.tsx
"use client"; // Penting di Next.js App Router untuk chart

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Jan', total: 4500000 },
  { name: 'Feb', total: 5200000 },
  { name: 'Mar', total: 4800000 },
  { name: 'Apr', total: 6100000 },
  { name: 'Mei', total: 5900000 },
  { name: 'Jun', total: 7200000 },
];

export const RevenueChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="mb-4">
        <h3 className="font-bold text-slate-800">Analisis Penghasilan</h3>
        <p className="text-xs text-slate-500">Performa penjualan 6 bulan terakhir</p>
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} 
              tickFormatter={(value) => `Rp${value/1000000}jt`} 
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              formatter={(value: number) => [`Rp ${value.toLocaleString('id-ID')}`, "Penghasilan"]}
            />
            <Area type="monotone" dataKey="total" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorTotal)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};