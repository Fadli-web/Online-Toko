"use client";

import React, { useState } from 'react';
import { 
  LayoutDashboard, ShoppingCart, Package, Users, 
  Settings, LogOut, ArrowUpRight, ArrowDownRight, 
  Search, Bell, MoreVertical, Plus
} from "lucide-react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  // Data Simulasi
  const stats = [
    { label: "Total Pendapatan", value: "Rp 128.430.000", change: "+12.5%", pos: true },
    { label: "Pesanan Baru", value: "154", change: "+8.2%", pos: true },
    { label: "Rata-rata Keranjang", value: "Rp 832.000", change: "-2.4%", pos: false },
    { label: "Pengunjung Aktif", value: "2,840", change: "+18.1%", pos: true },
  ];

  const chartData = [
    { label: "Sen", val: 40 }, { label: "Sel", val: 70 }, 
    { label: "Rab", val: 55 }, { label: "Kam", val: 90 }, 
    { label: "Jum", val: 65 }, { label: "Sab", val: 85 }, { label: "Min", val: 95 }
  ];

  const recentSales = [
    { id: "#1254", name: "Budi Santoso", item: "Sepatu Lari Ultra", price: "Rp 850.000", status: "Selesai" },
    { id: "#1255", name: "Siti Aminah", item: "Kacamata UV Plus", price: "Rp 210.000", status: "Proses" },
    { id: "#1256", name: "Andi Wijaya", item: "Jaket Windbreaker", price: "Rp 450.000", status: "Selesai" },
    { id: "#1257", name: "Rina Rose", item: "Tas Backpack 20L", price: "Rp 320.000", status: "Dibatalkan" },
  ];

  return (
    <div className="flex h-screen w-full bg-[#f8fafc] font-sans text-slate-900">
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-slate-900 flex flex-col hidden lg:flex">
        <div className="p-6">
          <div className="flex items-center gap-3 text-white">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold">M</div>
            <span className="font-bold text-xl tracking-tight">ModernStore</span>
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          {[
            { name: 'Dashboard', icon: <LayoutDashboard size={18} /> },
            { name: 'Pesanan', icon: <ShoppingCart size={18} /> },
            { name: 'Produk', icon: <Package size={18} /> },
            { name: 'Pelanggan', icon: <Users size={18} /> },
            { name: 'Pengaturan', icon: <Settings size={18} /> },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.name ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/20" : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
              }`}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-rose-400 hover:bg-rose-500/10 rounded-xl transition-colors">
            <LogOut size={18} />
            <span className="text-sm font-medium">Keluar</span>
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* HEADER */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="relative w-96 hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Cari transaksi atau produk..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div className="flex items-center gap-5">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold">Admin Toko</p>
                <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Super Admin</p>
              </div>
              <div className="w-10 h-10 bg-indigo-100 rounded-full border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold">
                AD
              </div>
            </div>
          </div>
        </header>

        {/* DASHBOARD BODY */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          
          {/* WELCOME SECTION */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Ringkasan Performa</h2>
              <p className="text-slate-500 text-sm">Update terakhir: Hari ini, 10 Mei 2026</p>
            </div>
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md">
              <Plus size={18} /> Tambah Produk
            </button>
          </div>

          {/* STATS CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{s.label}</p>
                <h3 className="text-2xl font-black text-slate-900">{s.value}</h3>
                <div className={`mt-3 flex items-center gap-1 text-xs font-bold ${s.pos ? 'text-emerald-500' : 'text-rose-500'}`}>
                  {s.pos ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  <span>{s.change} <span className="text-slate-400 font-normal">vs bln lalu</span></span>
                </div>
              </div>
            ))}
          </div>

          {/* CHARTS & RECENT SALES GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* MANUAL REVENUE CHART (CUSTOM CSS) */}
            <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="font-bold text-lg">Statistik Penjualan</h3>
                  <p className="text-xs text-slate-400">Total volume penjualan per minggu</p>
                </div>
                <select className="text-xs font-bold bg-slate-50 border-none rounded-lg p-2 outline-none">
                  <option>7 Hari Terakhir</option>
                  <option>30 Hari Terakhir</option>
                </select>
              </div>
              
              <div className="flex items-end justify-between h-56 gap-4">
                {chartData.map((d, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                    <div 
                      className="w-full bg-slate-100 group-hover:bg-indigo-500 rounded-t-xl transition-all duration-500 relative cursor-pointer"
                      style={{ height: `${d.val}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {d.val}%
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase">{d.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* PROGRESS WIDGETS */}
            <div className="space-y-6">
              <div className="bg-indigo-900 p-8 rounded-3xl text-white shadow-xl shadow-indigo-200">
                <h3 className="font-bold text-lg mb-1">Target Bulanan</h3>
                <p className="text-indigo-300 text-xs mb-8">Rp 150.000.000 dari Rp 200.000.000</p>
                
                <div className="w-full h-3 bg-indigo-800/50 rounded-full mb-3">
                  <div className="w-[75%] h-full bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)]"></div>
                </div>
                <p className="text-[10px] font-bold text-indigo-300 text-right uppercase">75% Tercapai</p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-sm mb-4">Kategori Produk</h3>
                <div className="space-y-4">
                  {[
                    { n: 'Elektronik', p: '65%', c: 'bg-indigo-500' },
                    { n: 'Pakaian', p: '25%', c: 'bg-emerald-400' },
                    { n: 'Lainnya', p: '10%', c: 'bg-amber-400' }
                  ].map((cat, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-[11px] font-bold mb-1.5 uppercase">
                        <span className="text-slate-500">{cat.n}</span>
                        <span>{cat.p}</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full">
                        <div className={`h-full ${cat.c} rounded-full`} style={{ width: cat.p }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RECENT SALES TABLE */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-50 flex items-center justify-between">
              <h3 className="font-bold text-lg">Transaksi Terbaru</h3>
              <button className="text-indigo-600 text-xs font-bold hover:underline">Lihat Semua</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <tr>
                    <th className="px-8 py-4">ID Pesanan</th>
                    <th className="px-8 py-4">Pelanggan</th>
                    <th className="px-8 py-4">Produk</th>
                    <th className="px-8 py-4">Harga</th>
                    <th className="px-8 py-4">Status</th>
                    <th className="px-8 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {recentSales.map((sale, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-5 text-sm font-bold text-indigo-600">{sale.id}</td>
                      <td className="px-8 py-5">
                        <p className="text-sm font-bold text-slate-800">{sale.name}</p>
                      </td>
                      <td className="px-8 py-5 text-sm text-slate-500">{sale.item}</td>
                      <td className="px-8 py-5 text-sm font-black text-slate-900">{sale.price}</td>
                      <td className="px-8 py-5">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                          sale.status === 'Selesai' ? 'bg-emerald-100 text-emerald-600' : 
                          sale.status === 'Proses' ? 'bg-amber-100 text-amber-600' : 'bg-rose-100 text-rose-600'
                        }`}>
                          {sale.status}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <button className="text-slate-300 hover:text-slate-600">
                          <MoreVertical size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}