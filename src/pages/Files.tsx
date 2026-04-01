export function Files() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pb-24 lg:pb-12">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-black font-headline tracking-tight text-white mb-2">Project Assets</h1>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Centralized repository for all high-fidelity designs, technical documentation, and production assets.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-[#002913] font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all ease-[cubic-bezier(0.22,1,0.36,1)] duration-300 shadow-[0_0_30px_rgba(162,255,191,0.15)] group cursor-pointer">
          <span className="material-symbols-outlined group-hover:rotate-90 transition-transform duration-300">add</span>
          Upload Asset
        </button>
      </header>

      {/* Filter Controls */}
      <div className="flex flex-wrap items-center gap-4 mb-12">
        <div className="flex bg-surface-container-low p-1 rounded-xl overflow-x-auto no-scrollbar max-w-full">
          <button className="px-6 py-2 bg-surface-container-high text-primary font-bold rounded-lg text-sm transition-all cursor-pointer">All Files</button>
          <button className="px-6 py-2 text-on-surface-variant hover:text-white font-medium rounded-lg text-sm transition-all cursor-pointer">Documents</button>
          <button className="px-6 py-2 text-on-surface-variant hover:text-white font-medium rounded-lg text-sm transition-all cursor-pointer">Assets</button>
          <button className="px-6 py-2 text-on-surface-variant hover:text-white font-medium rounded-lg text-sm transition-all cursor-pointer">Designs</button>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-high text-primary border border-white/5 cursor-pointer">
            <span className="material-symbols-outlined">grid_view</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-low text-on-surface-variant hover:text-white cursor-pointer transition-colors">
            <span className="material-symbols-outlined">list</span>
          </button>
        </div>
      </div>

      {/* Recent Assets: Horizontal Editorial Section */}
      <section className="mb-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold font-headline tracking-tight text-white">Recent Assets</h2>
          <a className="text-primary text-sm font-bold hover:underline" href="#">View History</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Recent Card 1 */}
          <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container-high hover:scale-[1.02] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-lg cursor-pointer">
            <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" alt="Abstract 3D render" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKXZiWvOwQ7Bq2jPcazcyXhcjD3uc_YzS62JPYcX4McGYdfuBzt23ymLXXC1IqmoGR-_ASGYM6TTi-3kpMhJyfJl1YC7L-MXtY0XsdGcyA8jzopSakmsE3Px6dkEnNmt4jGt_bDg40hSBENZbLc55D_jlkBDbP6-Qpthb_JqOjSsf8OxC0Ne8fLyCf-JtHk8vhcRcLdKsphYPKxCSVOyMvGZl6qMNJKbp-EMXDnBrnf01T32OSKMsfqkG5GmfUwgK62vN497ThuG4D" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-black tracking-widest bg-primary/20 text-primary px-2 py-0.5 rounded-full uppercase">Visual</span>
              </div>
              <h3 className="font-bold text-white text-lg truncate">Hero_Visual_V2.fig</h3>
              <p className="text-white/60 text-xs">Updated 2h ago</p>
            </div>
          </div>
          
          {/* Recent Card 2 */}
          <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container-high hover:scale-[1.02] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-lg cursor-pointer">
            <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" alt="High-tech workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpy5CAqORGN_ecbayTGF7nNH2xi6S9ZMi9ZtxDBAHbZDqUsiqvPuYhQRhOzrU7dcoWh804pkMy934xFzYoX5vitb2jfsHykjjjpTYMo9bxa0wUvppKmdQmnjA9kmbMqZnxhpCJp6rmt60DLHwm7tgUFa4QbSBttLBcF0yH7vbHrCLXVuQr28xi-nSJm7Ez-VQ3JmMR7utdrboDms3YIcUnKVB-nU6D3yoP-ytehWHwICChlDeQJapDXMmyGxynzNPJupTCY8T4AaQv" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-black tracking-widest bg-tertiary/20 text-tertiary px-2 py-0.5 rounded-full uppercase">Dev</span>
              </div>
              <h3 className="font-bold text-white text-lg truncate">Architecture_Draft.pdf</h3>
              <p className="text-white/60 text-xs">Updated 5h ago</p>
            </div>
          </div>

          {/* Recent Card 3 */}
          <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container-high hover:scale-[1.02] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-lg cursor-pointer">
            <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" alt="Satellites and data network nodes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtye6l0EzlyVprJ8LgdrF0Xzg6HgGh-hOV98fVECVqV6oL3e73zxe-cE7uz8fMuFYiPcSXDSLLFhxoy2agFWBiB6HVlTfCz7vzZSY4-QmgoYjrJjVwmzlx_Q3KheiEShDQFIr3JyZYiXXvYnM4DMVMSrNhLeLfpz5mVMinPj--1nFSBeNqnMGPvVZThlDaXarLJhMuDutlIKSDuPDdX_K0LP2Trrmvb4mobIZmLtKnD7j6tyeRrYohydP1NuIy051YuwAavA0bxY1G" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-black tracking-widest bg-primary/20 text-primary px-2 py-0.5 rounded-full uppercase">Branding</span>
              </div>
              <h3 className="font-bold text-white text-lg truncate">Brand_Guidelines.zip</h3>
              <p className="text-white/60 text-xs">Updated Yesterday</p>
            </div>
          </div>

          {/* Recent Card 4 */}
          <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container-high hover:scale-[1.02] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-lg cursor-pointer">
            <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" alt="Minimalist architectural space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0KAqf0oLXCf-XeYpRGi3_hb_LiYvW3C6cRpn5kBiuwF3Lrhw-rTWcadBziOgKCD8l17wGgCNbqp2cCZhHoox7NQAcqSOeiRz2TyL5c5sAwUwbdIYeXT_qxoNT9br5VipK3sLdQlvl2EvhcCPU5teOOMMPL5wrO4GzM1IAvkMVDnnOZUJVLZxBcIJ54WJeitPsmTHTOXUvA3cZ6607L8RzXMlM-8T3l-qSh9ZAPXOgoMY1drpapqb7uRe8wHlso8q9J_HbxQCuaQbd" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-black tracking-widest bg-error/20 text-error px-2 py-0.5 rounded-full uppercase">Legal</span>
              </div>
              <h3 className="font-bold text-white text-lg truncate">Service_Agreement.docx</h3>
              <p className="text-white/60 text-xs">Updated 2 days ago</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Directory: Detailed List View */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold font-headline tracking-tight text-white">Project Directory</h2>
          <div className="flex items-center gap-2 text-on-surface-variant text-sm">
            <span>Sorting by:</span>
            <button className="flex items-center gap-1 font-bold text-white cursor-pointer hover:text-primary transition-colors">
              Date Modified
              <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
            </button>
          </div>
        </div>
        
        <div className="bg-surface-container-low rounded-2xl overflow-x-auto border border-white/5 w-full max-w-[calc(100vw-2rem)] sm:max-w-full relative">
          <div className="min-w-[800px]">
            {/* List Header */}
            <div className="grid grid-cols-12 px-6 py-4 border-b border-white/5 text-[10px] uppercase font-black tracking-widest text-on-surface-variant">
              <div className="col-span-6">Name</div>
              <div className="col-span-2 text-center">Size</div>
              <div className="col-span-2 text-center">Owner</div>
              <div className="col-span-2 text-right">Actions</div>
            </div>
            
            {/* List Item 1 */}
            <div className="grid grid-cols-12 px-6 py-5 items-center hover:bg-surface-container-high transition-colors group cursor-pointer border-b border-white/5">
              <div className="col-span-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <div>
                  <p className="font-bold text-white group-hover:text-primary transition-colors">Technical_Specs_2024.pdf</p>
                  <p className="text-xs text-on-surface-variant">Modified 12 Oct 2023</p>
                </div>
              </div>
              <div className="col-span-2 text-center text-sm font-medium text-on-surface-variant">2.4 MB</div>
              <div className="col-span-2 flex justify-center">
                <img alt="Alex" className="w-6 h-6 rounded-full border border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkcKBX5u8oZJ67DxK-OligFW305Nh_S3nOixjr6FF8xOt9vnUcEwR7qFek4FTebEiVRKpzUqRVN2egdkrZrgp5TbT4GPzntr6z53BeeHXQmjqV3tMobwPbHHGmXq9qkmjIvY37PFVC03NXkf0XDPlCNxk7skHEtEok3kPbRtfS1fPXKGr-68xn0JtxLkyTx8yWSNqMPXiFvIV8xftRHaSJ6hb6P1qsTml5DoybjEeLr3hnUrQ-9mBTIuI3G1bWYjsV2q46o2wMnNhV" />
              </div>
              <div className="col-span-2 flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-on-surface-variant hover:text-primary cursor-pointer"><span className="material-symbols-outlined text-xl">download</span></button>
                <button className="text-on-surface-variant hover:text-primary cursor-pointer"><span className="material-symbols-outlined text-xl">share</span></button>
                <button className="text-on-surface-variant hover:text-error cursor-pointer"><span className="material-symbols-outlined text-xl">delete</span></button>
              </div>
            </div>

            {/* List Item 2 */}
            <div className="grid grid-cols-12 px-6 py-5 items-center hover:bg-surface-container-high transition-colors group cursor-pointer border-b border-white/5">
              <div className="col-span-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">image</span>
                </div>
                <div>
                  <p className="font-bold text-white group-hover:text-primary transition-colors">Marketing_Kit_Main.zip</p>
                  <p className="text-xs text-on-surface-variant">Modified 11 Oct 2023</p>
                </div>
              </div>
              <div className="col-span-2 text-center text-sm font-medium text-on-surface-variant">145.8 MB</div>
              <div className="col-span-2 flex justify-center">
                <img alt="Sarah" className="w-6 h-6 rounded-full border border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiK3ugqNrEcphiC3-3vK-tswEzOGPuDXeeTI6pD4sNDZy4yU-14vIudfozt1lz_bZNnKL5uh87TgNjjmRM5AzdbQq4F5ilx_dTdGnaEmJV2ZbApe38wQ9wR1kLVOcLJ1U0ztstdmOUhbsmnREQxCX_e1eYlSwLRsyFMDbKP_u6BjvveZ50NOlNkYcKff1YDu3kkBwWn2rtSDdz9KUAQykIUd0x0ywCQ7UlcFuUFKJAkxB0S_DQTMfdZa5P-M4dGzf2H2jnXSbTBNuv" />
              </div>
              <div className="col-span-2 flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-on-surface-variant hover:text-primary cursor-pointer"><span className="material-symbols-outlined text-xl">download</span></button>
                <button className="text-on-surface-variant hover:text-primary cursor-pointer"><span className="material-symbols-outlined text-xl">share</span></button>
                <button className="text-on-surface-variant hover:text-error cursor-pointer"><span className="material-symbols-outlined text-xl">delete</span></button>
              </div>
            </div>

            {/* List Item 3 */}
            <div className="grid grid-cols-12 px-6 py-5 items-center hover:bg-surface-container-high transition-colors group cursor-pointer border-b border-white/5">
              <div className="col-span-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">code</span>
                </div>
                <div>
                  <p className="font-bold text-white group-hover:text-primary transition-colors">System_Interface_Prototype.fig</p>
                  <p className="text-xs text-on-surface-variant">Modified 10 Oct 2023</p>
                </div>
              </div>
              <div className="col-span-2 text-center text-sm font-medium text-on-surface-variant">18.2 MB</div>
              <div className="col-span-2 flex justify-center">
                <img alt="Design Team" className="w-6 h-6 rounded-full border border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_jCYObaI7_eSbsbPXw2FR_4ic4mGZT_ra0cX09I8ft4QJAryJNPlqBJB7ReKH69SvX6fRW_HkDwlkjxB6KFP5uq5mt4Geur6KzIvN4zzlQScPBXipR7eK1Sz8R25-ttN4cWYqsWdqJLYfvcklErjvWMlFkfujPVXbCJ7o3Njo-IdvuREi7vZTC_PZM3v9JnNJX9dpobdeZJmCQIlGGms0RZNvUq7JQDxjKxfbRUZH9BCM5F7symbcc6P7RtuZj756WB1y4sa0ROTI" />
              </div>
              <div className="col-span-2 flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-on-surface-variant hover:text-primary cursor-pointer"><span className="material-symbols-outlined text-xl">download</span></button>
                <button className="text-on-surface-variant hover:text-primary cursor-pointer"><span className="material-symbols-outlined text-xl">share</span></button>
                <button className="text-on-surface-variant hover:text-error cursor-pointer"><span className="material-symbols-outlined text-xl">delete</span></button>
              </div>
            </div>

            {/* List Item 4 */}
            <div className="grid grid-cols-12 px-6 py-5 items-center hover:bg-surface-container-high transition-colors group cursor-pointer">
              <div className="col-span-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">folder</span>
                </div>
                <div>
                  <p className="font-bold text-white group-hover:text-primary transition-colors">Legacy_Archive_2022</p>
                  <p className="text-xs text-on-surface-variant">Modified 01 Oct 2023</p>
                </div>
              </div>
              <div className="col-span-2 text-center text-sm font-medium text-on-surface-variant">--</div>
              <div className="col-span-2 flex justify-center">
                <div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold">SY</div>
              </div>
              <div className="col-span-2 flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-on-surface-variant hover:text-primary cursor-pointer"><span className="material-symbols-outlined text-xl">download</span></button>
                <button className="text-on-surface-variant hover:text-primary cursor-pointer"><span className="material-symbols-outlined text-xl">share</span></button>
                <button className="text-on-surface-variant hover:text-error cursor-pointer"><span className="material-symbols-outlined text-xl">delete</span></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
