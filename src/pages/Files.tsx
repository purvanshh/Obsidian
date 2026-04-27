import React, { useState } from 'react';
import { useObsidian } from '../context/ObsidianContext';

const DEFAULT_IMAGES = {
  design: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKXZiWvOwQ7Bq2jPcazcyXhcjD3uc_YzS62JPYcX4McGYdfuBzt23ymLXXC1IqmoGR-_ASGYM6TTi-3kpMhJyfJl1YC7L-MXtY0XsdGcyA8jzopSakmsE3Px6dkEnNmt4jGt_bDg40hSBENZbLc55D_jlkBDbP6-Qpthb_JqOjSsf8OxC0Ne8fLyCf-JtHk8vhcRcLdKsphYPKxCSVOyMvGZl6qMNJKbp-EMXDnBrnf01T32OSKMsfqkG5GmfUwgK62vN497ThuG4D',
  document: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpy5CAqORGN_ecbayTGF7nNH2xi6S9ZMi9ZtxDBAHbZDqUsiqvPuYhQRhOzrU7dcoWh804pkMy934xFzYoX5vitb2jfsHykjjjpTYMo9bxa0wUvppKmdQmnjA9kmbMqZnxhpCJp6rmt60DLHwm7tgUFa4QbSBttLBcF0yH7vbHrCLXVuQr28xi-nSJm7Ez-VQ3JmMR7utdrboDms3YIcUnKVB-nU6D3yoP-ytehWHwICChlDeQJapDXMmyGxynzNPJupTCY8T4AaQv',
  asset: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtye6l0EzlyVprJ8LgdrF0Xzg6HgGh-hOV98fVECVqV6oL3e73zxe-cE7uz8fMuFYiPcSXDSLLFhxoy2agFWBiB6HVlTfCz7vzZSY4-QmgoYjrJjVwmzlx_Q3KheiEShDQFIr3JyZYiXXvYnM4DMVMSrNhLeLfpz5mVMinPj--1nFSBeNqnMGPvVZThlDaXarLJhMuDutlIKSDuPDdX_K0LP2Trrmvb4mobIZmLtKnD7j6tyeRrYohydP1NuIy051YuwAavA0bxY1G',
};

const FILE_TYPE_ICONS = {
  design: 'palette',
  document: 'description',
  asset: 'folder_zip',
};

export function Files() {
  const { files, addFile, deleteFile } = useObsidian();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'document' | 'asset' | 'design'>('all');
  const [sortOrder, setSortOrder] = useState<'date' | 'name' | 'size'>('date');
  const [isGridView, setIsGridView] = useState(false);

  // Modal state
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadName, setUploadName] = useState('');
  const [uploadType, setUploadType] = useState<'document' | 'asset' | 'design'>('asset');
  const [uploadSize, setUploadSize] = useState('2.4 MB');

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadName.trim()) return;
    addFile(uploadName.trim(), uploadType, uploadSize);
    setUploadName('');
    setShowUploadModal(false);
  };

  const recentAssets = files.slice(0, 4);

  const filteredFiles = files
    .filter((f) => {
      const matchesSearch = f.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || f.type === categoryFilter;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOrder === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortOrder === 'size') {
        const sizeA = parseFloat(a.size) || 0;
        const sizeB = parseFloat(b.size) || 0;
        return sizeB - sizeA;
      } else {
        return b.date.localeCompare(a.date);
      }
    });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pb-24 lg:pb-12">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-black font-headline tracking-tight text-white mb-2">Project Assets</h1>
          <p className="text-on-surface-variant text-lg leading-relaxed font-body">
            Centralized repository for all high-fidelity designs, technical documentation, and production assets.
          </p>
        </div>
        <button 
          onClick={() => setShowUploadModal(true)}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-[#002913] font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all ease-[cubic-bezier(0.22,1,0.36,1)] duration-300 shadow-[0_0_30px_rgba(162,255,191,0.15)] group cursor-pointer"
        >
          <span className="material-symbols-outlined group-hover:rotate-90 transition-transform duration-300">add</span>
          Upload Asset
        </button>
      </header>

      {/* Filter Controls */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <div className="flex bg-surface-container-low p-1 rounded-xl overflow-x-auto no-scrollbar max-w-full">
          <button 
            onClick={() => setCategoryFilter('all')}
            className={`px-6 py-2 font-bold rounded-lg text-sm transition-all cursor-pointer ${
              categoryFilter === 'all' ? 'bg-surface-container-high text-primary' : 'text-on-surface-variant hover:text-white'
            }`}
          >
            All Files
          </button>
          <button 
            onClick={() => setCategoryFilter('document')}
            className={`px-6 py-2 font-bold rounded-lg text-sm transition-all cursor-pointer ${
              categoryFilter === 'document' ? 'bg-surface-container-high text-primary' : 'text-on-surface-variant hover:text-white'
            }`}
          >
            Documents
          </button>
          <button 
            onClick={() => setCategoryFilter('asset')}
            className={`px-6 py-2 font-bold rounded-lg text-sm transition-all cursor-pointer ${
              categoryFilter === 'asset' ? 'bg-surface-container-high text-primary' : 'text-on-surface-variant hover:text-white'
            }`}
          >
            Assets
          </button>
          <button 
            onClick={() => setCategoryFilter('design')}
            className={`px-6 py-2 font-bold rounded-lg text-sm transition-all cursor-pointer ${
              categoryFilter === 'design' ? 'bg-surface-container-high text-primary' : 'text-on-surface-variant hover:text-white'
            }`}
          >
            Designs
          </button>
        </div>

        {/* Searching input */}
        <div className="flex items-center bg-surface-container-low border border-white/5 rounded-xl px-4 py-2 w-full md:w-64 max-w-full">
          <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search filenames..."
            className="bg-transparent border-none focus:outline-none focus:ring-0 text-white placeholder:text-outline text-sm w-full font-medium"
          />
        </div>

        <div className="ml-auto flex items-center gap-3">
          <button 
            onClick={() => setIsGridView(true)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg border border-white/5 cursor-pointer ${
              isGridView ? 'bg-surface-container-high text-primary' : 'bg-surface-container-low text-on-surface-variant hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined">grid_view</span>
          </button>
          <button 
            onClick={() => setIsGridView(false)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg border border-white/5 cursor-pointer ${
              !isGridView ? 'bg-surface-container-high text-primary' : 'bg-surface-container-low text-on-surface-variant hover:text-white'
            }`}
          >
            <span className="material-symbols-outlined">list</span>
          </button>
        </div>
      </div>

      {/* Recent Assets: Horizontal Editorial Section */}
      <section className="mb-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold font-headline tracking-tight text-white">Recent Assets</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentAssets.map((file) => (
            <div key={file.id} className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container-high hover:scale-[1.02] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-lg cursor-pointer">
              <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" alt={file.name} src={file.image || DEFAULT_IMAGES[file.type]} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-black tracking-widest bg-primary/20 text-primary px-2 py-0.5 rounded-full uppercase">{file.type}</span>
                </div>
                <h3 className="font-bold text-white text-lg truncate">{file.name}</h3>
                <p className="text-white/60 text-xs">Updated {file.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Directory Section */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold font-headline tracking-tight text-white">Project Directory</h2>
          <div className="flex items-center gap-2 text-on-surface-variant text-sm">
            <span>Sorting by:</span>
            <select 
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'date' | 'name' | 'size')}
              className="bg-transparent border-none text-white font-bold cursor-pointer hover:text-primary transition-colors focus:outline-none"
            >
              <option className="bg-surface-container-high" value="date">Date Modified</option>
              <option className="bg-surface-container-high" value="name">Filename</option>
              <option className="bg-surface-container-high" value="size">File Size</option>
            </select>
          </div>
        </div>
        
        {isGridView ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredFiles.map((file) => (
              <div key={file.id} className="bg-surface-container-low p-6 rounded-2xl border border-white/5 flex flex-col justify-between hover:bg-surface-container-high transition-all">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">{FILE_TYPE_ICONS[file.type] || 'description'}</span>
                  </div>
                  <button 
                    onClick={() => deleteFile(file.id)}
                    className="text-on-surface-variant hover:text-error transition-colors p-1"
                    aria-label="Delete asset"
                  >
                    <span className="material-symbols-outlined text-[20px]">delete</span>
                  </button>
                </div>
                <div className="mt-4">
                  <h4 className="font-bold text-white truncate">{file.name}</h4>
                  <p className="text-xs text-on-surface-variant mt-1">Modified {file.date} • {file.size}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-surface-container-low rounded-2xl overflow-x-auto border border-white/5 w-full max-w-[calc(100vw-2rem)] sm:max-w-full relative">
            <div className="min-w-[800px]">
              {/* List Header */}
              <div className="grid grid-cols-12 px-6 py-4 border-b border-white/5 text-[10px] uppercase font-black tracking-widest text-on-surface-variant">
                <div className="col-span-6">Name</div>
                <div className="col-span-2 text-center">Size</div>
                <div className="col-span-2 text-center">Owner</div>
                <div className="col-span-2 text-right">Actions</div>
              </div>
              
              {/* List Items */}
              {filteredFiles.length === 0 ? (
                <div className="text-center py-10 text-on-surface-variant text-sm font-medium">No files match your query.</div>
              ) : (
                filteredFiles.map((file) => (
                  <div key={file.id} className="grid grid-cols-12 px-6 py-5 items-center hover:bg-surface-container-high transition-colors group cursor-pointer border-b border-white/5 last:border-0">
                    <div className="col-span-6 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">{FILE_TYPE_ICONS[file.type] || 'description'}</span>
                      </div>
                      <div>
                        <p className="font-bold text-white group-hover:text-primary transition-colors">{file.name}</p>
                        <p className="text-xs text-on-surface-variant">Modified {file.date}</p>
                      </div>
                    </div>
                    <div className="col-span-2 text-center text-sm font-medium text-on-surface-variant">{file.size}</div>
                    <div className="col-span-2 flex justify-center">
                      <img alt={file.owner} className="w-6 h-6 rounded-full border border-white/10" src={file.ownerAvatar} />
                    </div>
                    <div className="col-span-2 flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-on-surface-variant hover:text-primary cursor-pointer"><span className="material-symbols-outlined text-xl">download</span></button>
                      <button className="text-on-surface-variant hover:text-primary cursor-pointer"><span className="material-symbols-outlined text-xl">share</span></button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteFile(file.id);
                        }}
                        className="text-on-surface-variant hover:text-error cursor-pointer"
                        aria-label="Delete asset"
                      >
                        <span className="material-symbols-outlined text-xl">delete</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </section>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
          <div className="bg-surface-container-high border border-white/10 rounded-[2rem] p-8 w-full max-w-md shadow-2xl relative">
            <h3 className="text-2xl font-headline font-bold text-white mb-6">Upload Asset</h3>
            <form onSubmit={handleUploadSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Filename</label>
                <input 
                  type="text" 
                  value={uploadName} 
                  onChange={(e) => setUploadName(e.target.value)}
                  className="w-full bg-surface-container-lowest border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary"
                  placeholder="e.g., Schema_Design_Final.fig"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Category</label>
                  <select 
                    value={uploadType} 
                    onChange={(e) => setUploadType(e.target.value as 'document' | 'asset' | 'design')}
                    className="w-full bg-surface-container-lowest border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary"
                  >
                    <option value="design">Design</option>
                    <option value="document">Document</option>
                    <option value="asset">Asset (Zip)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">File Size</label>
                  <input 
                    type="text" 
                    value={uploadSize} 
                    onChange={(e) => setUploadSize(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary"
                    placeholder="e.g., 4.5 MB"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <button 
                  type="button" 
                  onClick={() => setShowUploadModal(false)}
                  className="flex-1 py-3 border border-white/10 rounded-xl text-white hover:bg-white/5 font-bold transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="flex-1 py-3 bg-primary text-[#002913] rounded-xl font-bold hover:shadow-[0_0_20px_rgba(162,255,191,0.3)] transition-all"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
