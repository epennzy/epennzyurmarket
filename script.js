const products = [
    { id: 'alightmotion_private_1thn', name: 'ALIGHT MOTION PRIVATE', imageUrl: 'https://b.top4top.io/p_34371zvqx3.png', description: ['Garansi 5 Bulan', 'Akun Dari Seller', 'Support Semua Device'], price: 15000, duration: '1 Tahun', category: 'Aplikasi Video Editing', sellerWhatsAppMessage: 'Siapkan akun Alight Motion Private (1 Tahun).'},
    { id: 'canvapro_designer_1bln', name: 'CANVAPRO - DESIGNER', imageUrl: 'https://a.top4top.io/p_3437i2hv72.jpeg', description: ['Via Invite Email', 'Full Garansi'], price: 5000, duration: '1 Bulan', category: 'Aplikasi Desain Grafis', sellerWhatsAppMessage: 'Kirim invite Canva Pro Designer (1 Bulan).'},
    { id: 'canvapro_designer_3bln', name: 'CANVAPRO - DESIGNER (3BLN)', imageUrl: 'https://a.top4top.io/p_3437i2hv72.jpeg', description: ['Via Invite Email', 'No Garansi'], price: 10000, duration: '3 Bulan', category: 'Aplikasi Desain Grafis', sellerWhatsAppMessage: 'Kirim invite Canva Pro Designer (3 Bulan).'},
    { id: 'canvapro_owner_1bln', name: 'CANVAPRO - OWNER', imageUrl: 'https://a.top4top.io/p_3437i2hv72.jpeg', description: ['Via Invite Email', 'Bisa Invite 100 Member'], price: 20000, duration: '1 Bulan', category: 'Aplikasi Desain Grafis', sellerWhatsAppMessage: 'Kirim invite Canva Pro Owner (1 Bulan).'},
    { id: 'canvapro_lifetime_edu', name: 'CANVAPRO - LIFETIME EDU', imageUrl: 'https://a.top4top.io/p_3437i2hv72.jpeg', description: ['Via Invite Email', 'Garansi 1 Tahun'], price: 25000, duration: 'Lifetime', category: 'Aplikasi Desain Grafis', sellerWhatsAppMessage: 'Kirim invite Canva Pro Lifetime Edu.'},
    { id: 'netflix_shared', name: 'NETFLIX PREMIUM SHARED', imageUrl: 'https://k.top4top.io/p_3437tsyul0.png', description: ['1 Profil 1 User', 'Support All Device', 'Full Garansi Selama Durasi', 'Durasi 25-30 Terhitung 1 Bulan', 'Fix Error 2x24 Jam', 'Fast Fixing', 'Sementara Naik'], price: 35000, duration: '1 Bulan', category: 'Layanan Streaming Film', sellerWhatsAppMessage: 'Siapkan akun Netflix Premium Shared.'},
    { id: 'netflix_semiprivate', name: 'NETFLIX PREMIUM SEMI PRIVATE', imageUrl: 'https://k.top4top.io/p_3437tsyul0.png', description: ['Fast Fixing', 'Support All Device', 'Full Garansi Selama Durasi', 'Durasi 25-30 Terhitung 1 Bulan', 'Fix error 2x24 Jam', 'Free Req Pin Dan Profile'], price: 50000, duration: '1 Bulan', category: 'Layanan Streaming Film', sellerWhatsAppMessage: 'Siapkan akun Netflix Premium Semi Private.'},
    { id: 'netflix_private', name: 'NETFLIX PREMIUM PRIVATE', imageUrl: 'https://k.top4top.io/p_3437tsyul0.png', description: ['No Minus', 'Support All Device', 'Full Garansi Selama Durasi', 'Durasi 25-30 Terhitung 1 Bulan', 'Fix Error 2x24 Jam'], price: 140000, duration: '1 Bulan', category: 'Layanan Streaming Film', sellerWhatsAppMessage: 'Siapkan akun Netflix Premium Private.'},
    { id: 'youtube_famplan', name: 'YOUTUBE PREMIUM FAMPLAN', imageUrl: 'https://k.top4top.io/p_34373yp4a2.jpeg', description: ['Via invite', 'Full Garansi Backfree / Kenon', 'Termasuk YT Music', 'Support Semua Device', 'Email Buyer Wajib Fresh'], price: 6000, duration: '1 Bulan', category: 'Layanan Streaming Video & Musik', sellerWhatsAppMessage: 'Kirim invite YouTube Premium FamPlan.'},
    { id: 'youtube_individual', name: 'YOUTUBE PREMIUM INDIVIDUAL', imageUrl: 'https://k.top4top.io/p_34373yp4a2.jpeg', description: ['Full Garansi Backfree / Kenon', 'Termasuk YT Music', 'Support Semua Device'], price: 15000, duration: '1 Bulan', category: 'Layanan Streaming Video & Musik', sellerWhatsAppMessage: 'Siapkan akun YouTube Premium Individual.'},
    { id: 'lightroom', name: 'LIGHTROOM', imageUrl: 'https://l.top4top.io/p_34372m8x41.png', description: ['Akun Dari Seller', 'Akun Sharing'], price: 30000, duration: 'Sesuai Deskripsi', category: 'Aplikasi Edit Foto', sellerWhatsAppMessage: 'Siapkan akun Lightroom Sharing.'},
    { id: 'vidio_platinum_shared', name: 'VIDIO PREMIUM - PLATINUM (SHARED)', imageUrl: 'https://l.top4top.io/p_3437403bs1.png', description: ['Shared 2U All Device', 'Tanya Stock Sebelum Order', 'Akses Liga 1 - TV Nasional - LA Liga - Bein Sport - 1,2,3 - Film & Series [ Tidak Termasuk Premier League Dan Paket Express ]'], price: 20000, duration: '1 Bulan', category: 'Layanan Streaming Olahraga & Hiburan', sellerWhatsAppMessage: 'Siapkan akun Vidio Platinum Shared.'},
    { id: 'vidio_platinum_private', name: 'VIDIO PREMIUM - PLATINUM (PRIVATE)', imageUrl: 'https://l.top4top.io/p_3437403bs1.png', description: ['Private 2U All Device', 'Tanya Stock Sebelum Order', 'Akses Liga 1 - TV Nasional - LA Liga - Bein Sport - 1,2,3 - Film & Series [ Tidak Termasuk Premier League Dan Paket Express ]'], price: 32000, duration: '1 Bulan', category: 'Layanan Streaming Olahraga & Hiburan', sellerWhatsAppMessage: 'Siapkan akun Vidio Platinum Private.'},
    { id: 'vidio_diamond_private', name: 'VIDIO PREMIUM - DIAMOND (PRIVATE)', imageUrl: 'https://l.top4top.io/p_3437403bs1.png', description: ['Private - 1 Bulan', 'Tanyakan Stock Sebelum Order', 'Akun Dari Seller', 'Full Garansi', 'Akses Liga 1 - TV Nasional - LA Liga - Bein Sport - 1,2,3 - Film & Series - Premier League'], price: 100000, duration: '1 Bulan', category: 'Layanan Streaming Olahraga & Hiburan', sellerWhatsAppMessage: 'Siapkan akun Vidio Diamond Private.'},
    { id: 'capcut_sharing_1bln', name: 'CAPCUT PRO SHARING (1BLN)', imageUrl: 'https://i.top4top.io/p_3437mfl9u0.jpeg', description: ['Tanyakan Stock Sebelum Order', 'Disarankan Order Private Jika Tidak Ingin Limit', 'Akun Dari Admin'], price: 20000, duration: '1 Bulan', category: 'Aplikasi Video Editing', sellerWhatsAppMessage: 'Siapkan akun Capcut Pro Sharing (1 Bulan).'},
    { id: 'capcut_sharing_1mgg', name: 'CAPCUT PRO SHARING (1MGG)', imageUrl: 'https://i.top4top.io/p_3437mfl9u0.jpeg', description: ['Tanyakan Stock Sebelum Order', 'Disarankan Order Private Jika Tidak Ingin Limit', 'Akun Dari Admin'], price: 10000, duration: '1 Minggu', category: 'Aplikasi Video Editing', sellerWhatsAppMessage: 'Siapkan akun Capcut Pro Sharing (1 Minggu).'},
    { id: 'capcut_private_1bln', name: 'CAPCUT PRO PRIVATE (1BLN)', imageUrl: 'https://i.top4top.io/p_3437mfl9u0.jpeg', description: ['Tanyakan Stock Sebelum Order', 'Disarankan Order Private Jika Tidak Ingin Limit', 'Akun Dari Admin'], price: 50000, duration: '1 Bulan', category: 'Aplikasi Video Editing', sellerWhatsAppMessage: 'Siapkan akun Capcut Pro Private (1 Bulan).'},
    { id: 'capcut_private_1mgg', name: 'CAPCUT PRO PRIVATE (1MGG)', imageUrl: 'https://i.top4top.io/p_3437mfl9u0.jpeg', description: ['Tanyakan Stock Sebelum Order', 'Disarankan Order Private Jika Tidak Ingin Limit', 'Akun Dari Admin'], price: 20000, duration: '1 Minggu', category: 'Aplikasi Video Editing', sellerWhatsAppMessage: 'Siapkan akun Capcut Pro Private (1 Minggu).'},
    { id: 'dramabox_sharing', name: 'DRAMABOX - SHARING', imageUrl: 'https://j.top4top.io/p_3437ktyuf1.jpeg', description: ['Sharing', 'Akun Dari Seller', 'Full Garansi Sesuai S&K'], price: 23000, duration: 'Sesuai Deskripsi', category: 'Layanan Streaming Drama', sellerWhatsAppMessage: 'Siapkan akun Dramabox Sharing.'},
    { id: 'wink_sharing', name: 'WINK - SHARING', imageUrl: 'https://k.top4top.io/p_3437djpwb0.png', description: ['Akun Dari Seller', 'Full Garansi Sesuai S&K', 'Ios Only & Support Beberapa Android'], price: 30000, duration: 'Sesuai Deskripsi', category: 'Aplikasi Edit Foto & Video', sellerWhatsAppMessage: 'Siapkan akun Wink Sharing.'},
    { id: 'remini_sharing_web', name: 'REMINI - SHARING WEB', imageUrl: 'https://j.top4top.io/p_34379flad0.jpeg', description: ['Akun Dari Seller', 'Web Ios', 'Full Garansi'], price: 15000, duration: 'Sesuai Deskripsi', category: 'Aplikasi Peningkat Kualitas Foto', sellerWhatsAppMessage: 'Siapkan akun Remini Sharing Web.'},
    { id: 'remini_pro_apk', name: 'REMINI - PRO APK', imageUrl: 'https://j.top4top.io/p_34379flad0.jpeg', description: ['Akun Dari Seller', 'Pro Apk Android', 'Full Garansi'], price: 25000, duration: 'Sesuai Deskripsi', category: 'Aplikasi Peningkat Kualitas Foto', sellerWhatsAppMessage: 'Siapkan akun Remini Pro APK.'}
];

const testimonials = [
    { name: "Andi S.", feedback: "Pelayanan cepat dan produk sesuai deskripsi! Sangat recommended untuk langganan Netflix.", rating: 5 },
    { name: "Budi P.", feedback: "Canva Pro lifetime-nya asli, sudah saya pakai berbulan-bulan tanpa kendala. Mantap!", rating: 5 },
    { name: "Citra D.", feedback: "Awalnya ragu, tapi ternyata Alight Motion-nya berfungsi dengan baik. Adminnya responsif.", rating: 4 },
    { name: "Dewi R.", feedback: "Harga YouTube Premium-nya sangat bersaing, suka sekali!", rating: 5 },
    { name: "Eko F.", feedback: "Lumayan untuk CapCut Pro sharing, semoga nanti ada promo private yang lebih murah lagi.", rating: 4 }
];

// --- MODIFIKASI: Muat data dari localStorage ---
let cart = JSON.parse(localStorage.getItem('epennzyCart')) || [];
let savedItems = JSON.parse(localStorage.getItem('epennzySavedItems')) || [];
let orderHistory = JSON.parse(localStorage.getItem('epennzyOrderHistory')) || [];


let currentFilterCategory = 'Semua';
let previousPage = 'discoverPage';
let currentProductIdForDetail = null; // --- BARU: Untuk tombol bagikan ---

const sellerWhatsAppConfirmationNumber = "6289654291565"; 
const qrisImageUrl = "https://a.top4top.io/p_3437ncyws0.png"; 
const bcaAccountNameConst = "JAJANG NURJAMAN";

const productGrid = document.getElementById('productGrid');
const categoryContainer = document.getElementById('categoryContainer');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartSubtotalEl = document.getElementById('cartSubtotal');
const cartTotalEl = document.getElementById('cartTotal');
const cartItemCountEl = document.getElementById('cartItemCount');
const savedItemsContainer = document.getElementById('savedItemsContainer');
const searchInput = document.getElementById('searchInput');
const searchContainerEl = document.getElementById('searchContainer'); 
const filterButtonEl = document.getElementById('filterButton'); 
const goToCheckoutButton = document.getElementById('goToCheckoutButton');
const customModalEl = document.getElementById('customModal');
const modalTitleEl = document.getElementById('modalTitle');
const modalMessageTextEl = document.getElementById('modalMessageText');
const modalCloseButton = document.getElementById('modalClose');
const filterModalEl = document.getElementById('filterModal');
const filterModalCloseButton = document.getElementById('filterModalClose');
const filterModalApplyButton = document.getElementById('filterModalApply');
const notificationButtonEl = document.getElementById('notificationButton');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const orderConfirmationTitleEl = document.getElementById('orderConfirmationTitle');
const orderConfirmationMessageEl = document.getElementById('orderConfirmationMessage');
const orderConfirmationIconEl = document.getElementById('orderConfirmationIcon');
const orderInfoEl = document.getElementById('orderInfo');
const finalWhatsAppButtonContainerEl = document.getElementById('finalWhatsAppButtonContainer');
const checkoutTotalAmountDisplayEl = document.getElementById('checkoutTotalAmountDisplay');
const qrisTotalAmountDisplayEl = document.getElementById('qrisTotalAmountDisplay');
const bcaAccountNameTextEl = document.getElementById('bcaAccountNameText');
const testimonialsSectionEl = document.getElementById('testimonialsSection');
const qrisPaidButton = document.getElementById('qrisPaidButton'); // --- BARU: Tombol konfirmasi QRIS

// --- BARU: Elemen untuk riwayat pesanan ---
const orderHistoryContainerEl = document.getElementById('orderHistoryContainer');


if (modalCloseButton) modalCloseButton.onclick = function() { customModalEl.classList.remove('active'); }
if (filterModalEl) {
    if (filterModalCloseButton) filterModalCloseButton.onclick = function() { filterModalEl.classList.remove('active'); }
    if (filterModalApplyButton) filterModalApplyButton.onclick = function() { 
        showCustomAlert('Penerapan filter belum diimplementasikan.', 'Info');
        filterModalEl.classList.remove('active'); 
    }
}
window.onclick = function(event) { 
    if (event.target == customModalEl) { customModalEl.classList.remove('active'); }
    if (event.target == filterModalEl) { filterModalEl.classList.remove('active'); }
}
if (notificationButtonEl) {
    notificationButtonEl.onclick = () => { showCustomAlert('Belum ada notifikasi baru saat ini.', 'Notifikasi'); };
}
if (filterButtonEl) { 
    filterButtonEl.onclick = () => { 
        if (filterModalEl) filterModalEl.classList.add('active'); 
        else showCustomAlert('Komponen modal filter tidak ditemukan.', 'Error');
    };
}
if (scrollToTopBtn) {
    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollToTopBtn.classList.remove('hidden');
        } else {
            scrollToTopBtn.classList.add('hidden');
        }
    };
    scrollToTopBtn.onclick = function() { window.scrollTo({top: 0, behavior: 'smooth'}); }
}

function showCustomAlert(message, title = "Informasi") { modalTitleEl.textContent = title; modalMessageTextEl.innerHTML = message; customModalEl.classList.add('active'); }
function formatPrice(price) { return `Rp${price.toLocaleString('id-ID')}`; }

function copyToClipboard(textToCopy, type) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy).then(function() {
            showCustomAlert(`${type} berhasil disalin!`, "Berhasil Disalin!");
        }, function(err) {
            showCustomAlert(`Gagal menyalin ${type}. Coba salin manual.`, "Error");
            console.error('Async: Could not copy text: ', err);
        });
    } else {
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed"; 
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            showCustomAlert(`${type} berhasil disalin!`, "Berhasil Disalin!");
        } catch (err) {
            showCustomAlert(`Gagal menyalin ${type}. Coba salin manual.`, "Error");
            console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textArea);
    }
}

function updateTestimonialsVisibility(filterText) {
    if (testimonialsSectionEl) {
        if (filterText && filterText.trim() !== '') {
            testimonialsSectionEl.classList.add('hidden');
        } else {
            testimonialsSectionEl.classList.remove('hidden');
        }
    }
}

function renderProducts(filter = '', category = 'Semua') {
    productGrid.innerHTML = '';
    const filteredProducts = products.filter(p => {
        const nameMatch = p.name.toLowerCase().includes(filter.toLowerCase());
        const descMatch = p.description.join(' ').toLowerCase().includes(filter.toLowerCase());
        const catMatch = p.category.toLowerCase().includes(filter.toLowerCase());
        const categoryFilterMatch = category === 'Semua' || p.category.startsWith(category);
        return (nameMatch || descMatch || catMatch) && categoryFilterMatch;
    });
    if (filteredProducts.length === 0) { 
        productGrid.innerHTML = `<p class="col-span-full text-center text-secondary-dark">Tidak ada produk yang cocok.</p>`; 
    } else {
        filteredProducts.forEach(product => {
            const isSaved = savedItems.some(item => item.id === product.id);
            productGrid.innerHTML += `
                <div class="product-card card-dark rounded-lg shadow-md overflow-hidden cursor-pointer" onclick="showProductDetail('${product.id}')">
                    <img src="${product.imageUrl}" alt="${product.name}" class="w-full h-32 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/300x300/374151/9CA3AF?text=Error';">
                    <div class="p-3">
                        <h3 class="text-sm font-semibold text-main-dark truncate" title="${product.name}">${product.name}</h3>
                        <p class="text-xs text-secondary-dark mb-1">${product.duration}</p>
                        <div class="flex justify-between items-center">
                            <p class="text-md font-bold text-accent-dark">${formatPrice(product.price)}</p>
                            <button onclick="event.stopPropagation(); toggleSaveItem('${product.id}', this)" class="text-gray-600 hover:text-red-500 p-1 rounded-full ${isSaved ? 'text-red-500' : 'text-gray-500'}"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" /></svg></button>
                        </div></div></div>`;
        });
    }
    updateTestimonialsVisibility(filter);
}

function renderCategories() {
    const uniqueCategories = ['Semua', ...new Set(products.map(p => p.category.split(" - ")[0].trim()))];
    categoryContainer.innerHTML = '';
    uniqueCategories.forEach(category => {
        categoryContainer.innerHTML += `<button class="px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap ${category === currentFilterCategory ? 'active-category-dark' : 'inactive-category-dark'} hover:opacity-80 transition" onclick="filterByCategory('${category}')">${category}</button>`;
    });
}
function filterByCategory(category) { 
    currentFilterCategory = category; 
    renderCategories(); 
    renderProducts(searchInput.value, category);
}
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId); if (!product) return;
    previousPage = getCurrentPageId();
    currentProductIdForDetail = productId; // --- BARU: Simpan ID produk saat ini ---
    document.getElementById('productDetailName').textContent = product.name;
    document.getElementById('productDetailImage').src = product.imageUrl;
    document.getElementById('productDetailImage').onerror = function() { this.src='https://placehold.co/600x400/374151/9CA3AF?text=Error'; };
    document.getElementById('productDetailPrice').textContent = formatPrice(product.price);
    document.getElementById('productDetailDuration').textContent = `Durasi: ${product.duration}`;
    const descriptionEl = document.getElementById('productDetailDescription'); descriptionEl.innerHTML = '';
    product.description.forEach(point => { const li = document.createElement('li'); li.textContent = point; descriptionEl.appendChild(li); });
    const saveButton = document.getElementById('productDetailSaveButton'); const isSaved = savedItems.some(item => item.id === product.id);
    saveButton.classList.toggle('text-red-500', isSaved); saveButton.classList.toggle('text-gray-500', !isSaved);
    saveButton.onclick = () => toggleSaveItem(product.id, saveButton.querySelector('svg'), true);
    document.getElementById('productDetailAddToCartButton').onclick = () => { addToCart(product.id); showCustomAlert(`${product.name} telah ditambahkan ke keranjang!`, "Sukses"); };
    document.getElementById('getUsageIdeasButton').onclick = () => getUsageIdeas(product.name, product.category);
    // --- BARU: Event listener untuk tombol bagikan ---
    document.getElementById('productDetailShareButton').onclick = () => shareProduct(product.id);
    navigateTo('productDetailPage');
}

// --- BARU: Fungsi untuk Bagikan Produk ---
async function shareProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const shareData = {
        title: product.name,
        text: `Cek produk ini di Epennzy Market: ${product.name} - ${formatPrice(product.price)}`,
        url: window.location.href.split('#')[0] // Bagikan URL dasar aplikasi
    };

    try {
        if (navigator.share) {
            await navigator.share(shareData);
            showCustomAlert('Produk berhasil dibagikan!', 'Sukses');
        } else {
            // Fallback jika Web Share API tidak didukung
            copyToClipboard(shareData.url, 'Link Aplikasi');
            showCustomAlert('Link aplikasi telah disalin ke clipboard. Anda bisa membagikannya secara manual.\nFitur bagikan native tidak didukung browser Anda.', 'Info');
        }
    } catch (err) {
        console.error('Error sharing:', err);
        showCustomAlert(`Gagal membagikan: ${err.message}`, 'Error');
    }
}


async function getUsageIdeas(productName, productCategory) { 
    showCustomAlert("Sedang memuat ide penggunaan dari Gemini... ✨", "Memuat...");
    const prompt = `Berikan 3-5 ide kreatif atau tips singkat dan bermanfaat tentang cara penggunaan produk "${productName}" (${productCategory}). Buat dalam format poin-poin singkat dan jelas, masing-masing poin diawali dengan tanda hubung (-). Contoh untuk Canva: - Buat CV menarik. - Desain postingan Instagram. - Bikin presentasi memukau.`;
    // Anda perlu API Key Gemini di sini jika ingin fitur ini berfungsi
    const apiKey = ""; // GANTI DENGAN API KEY ANDA JIKA PERLU 
    if (!apiKey) {
        showCustomAlert("API Key Gemini belum diatur. Fitur ide penggunaan tidak dapat berfungsi.", "Konfigurasi Diperlukan");
        return;
    }
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    try {
        const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ contents: [{ parts: [{text: prompt}] }] }) });
        if (!response.ok) { const errorData = await response.json(); console.error("Gemini API Error:", errorData); showCustomAlert(`Maaf, terjadi kesalahan saat mengambil ide: ${errorData.error?.message || response.statusText}`, "Kesalahan API"); return; }
        const result = await response.json();
        if (result.candidates?.[0]?.content?.parts?.[0]) {
            const text = result.candidates[0].content.parts[0].text;
            let formattedText = text.split('\n').map(line => { line = line.trim(); if (line.startsWith('-') || line.startsWith('*') || /^\d+\./.test(line)) { return `<li>${line.substring(line.indexOf(' ')+1).trim()}</li>`; } return line ? `<p>${line}</p>` : ''; }).join('');
            if (formattedText.includes('<li>')) formattedText = '<ul>' + formattedText + '</ul>';
            showCustomAlert(formattedText || "Tidak ada ide penggunaan yang spesifik saat ini.", `✨ Ide untuk ${productName}`);
        } else { console.error("Unexpected Gemini API response structure:", result); showCustomAlert("Tidak ada ide yang ditemukan atau format respons tidak sesuai.", "Info"); }
    } catch (error) { console.error("Fetch error for Gemini API:", error); showCustomAlert("Gagal terhubung ke layanan ide. Silakan coba lagi nanti.", "Kesalahan Jaringan"); }
}
function getCurrentPageId() { for (let page of document.querySelectorAll('.page')) { if (page.style.display !== 'none' && page.classList.contains('active')) { return page.id; }} return 'discoverPage';}
function goBack() { navigateTo(previousPage || 'discoverPage'); }

function addToCart(productId) { 
    const product = products.find(p => p.id === productId); if (!product) return; 
    if (cart.find(item => item.id === productId)) { showCustomAlert(`${product.name} sudah ada di keranjang.`, "Info"); } 
    else { cart.push({ ...product, quantity: 1 }); } 
    updateCart(); 
}
function removeFromCart(productId) { cart = cart.filter(item => item.id !== productId); updateCart(); }

function updateCart() {
    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) { cartItemsContainer.innerHTML = '<p class="text-secondary-dark text-center">Keranjang belanja Anda kosong.</p>'; goToCheckoutButton.disabled = true; } 
    else { goToCheckoutButton.disabled = false; cart.forEach(item => { cartItemsContainer.innerHTML += `<div class="flex items-center card-dark p-3 rounded-lg border border-gray-700 shadow-sm"><img src="${item.imageUrl}" alt="${item.name}" class="w-16 h-16 object-cover rounded-md mr-3" onerror="this.onerror=null;this.src='https://placehold.co/100x100/374151/9CA3AF?text=Error';"><div class="flex-grow"><h4 class="text-sm font-semibold text-main-dark">${item.name}</h4><p class="text-xs text-secondary-dark">${item.duration}</p><p class="text-sm font-semibold text-accent-dark">${formatPrice(item.price)}</p></div><button onclick="removeFromCart('${item.id}')" class="text-red-500 hover:text-red-700 ml-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button></div>`; });}
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartSubtotalEl.textContent = formatPrice(subtotal); cartTotalEl.textContent = formatPrice(subtotal); 
    if(checkoutTotalAmountDisplayEl) checkoutTotalAmountDisplayEl.textContent = formatPrice(subtotal);
    if(qrisTotalAmountDisplayEl) qrisTotalAmountDisplayEl.textContent = formatPrice(subtotal);
    cartItemCountEl.textContent = cart.length; cartItemCountEl.classList.toggle('hidden', cart.length === 0);
    // --- MODIFIKASI: Simpan keranjang ke localStorage ---
    localStorage.setItem('epennzyCart', JSON.stringify(cart));
}

function toggleSaveItem(productId, iconElement, isFromDetailPage = false) { 
    const productIndex = savedItems.findIndex(item => item.id === productId); const product = products.find(p => p.id === productId);
    if (productIndex > -1) { savedItems.splice(productIndex, 1); if (iconElement) iconElement.classList.replace('text-red-500', 'text-gray-500'); if (isFromDetailPage) document.getElementById('productDetailSaveButton').classList.replace('text-red-500', 'text-gray-500'); showCustomAlert(`${product.name} dihapus dari item tersimpan.`, "Info");} 
    else { const productToSave = products.find(p => p.id === productId); if (productToSave) { savedItems.push(productToSave); if (iconElement) iconElement.classList.replace('text-gray-500','text-red-500'); if (isFromDetailPage) document.getElementById('productDetailSaveButton').classList.replace('text-gray-500','text-red-500'); showCustomAlert(`${product.name} disimpan!`, "Sukses");}}
    updateSavedItemsPage(); if (getCurrentPageId() === 'discoverPage' && !isFromDetailPage) { renderProducts(searchInput.value, currentFilterCategory); }
    // --- MODIFIKASI: Simpan item tersimpan ke localStorage ---
    localStorage.setItem('epennzySavedItems', JSON.stringify(savedItems));
}

function updateSavedItemsPage() { 
    savedItemsContainer.innerHTML = '';
    if (savedItems.length === 0) { savedItemsContainer.innerHTML = '<p class="text-secondary-dark text-center">Belum ada item yang disimpan.</p>';} 
    else { savedItems.forEach(item => { savedItemsContainer.innerHTML += `<div class="flex items-center card-dark p-3 rounded-lg border border-gray-700 shadow-sm"><img src="${item.imageUrl}" alt="${item.name}" class="w-20 h-20 object-cover rounded-md mr-4" onerror="this.onerror=null;this.src='https://placehold.co/100x100/374151/9CA3AF?text=Error';"><div class="flex-grow"><h4 class="text-md font-semibold text-main-dark">${item.name}</h4><p class="text-sm text-secondary-dark">${item.duration}</p><p class="text-lg font-bold text-accent-dark">${formatPrice(item.price)}</p></div><div class="flex flex-col space-y-2 ml-2"><button onclick="addToCart('${item.id}'); showCustomAlert('${item.name} ditambahkan ke keranjang.', 'Sukses');" class="p-2 button-accent-dark rounded-md text-xs">Add to Cart</button><button onclick="toggleSaveItem('${item.id}');" class="p-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-xs">Unsave</button></div></div>`;});}
}

// --- BARU: Fungsi untuk menyimpan pesanan ke riwayat ---
function saveOrderToHistory(paymentMethod) {
    const buyerNameInput = document.getElementById('buyerName');
    const buyerWhatsAppInput = document.getElementById('buyerWhatsApp');
    const buyerName = buyerNameInput ? buyerNameInput.value : "Pelanggan";
    const buyerWhatsAppNum = buyerWhatsAppInput ? buyerWhatsAppInput.value : "Tidak diketahui";

    if (cart.length === 0) return;

    const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const orderItems = cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        duration: item.duration,
        imageUrl: item.imageUrl
    }));

    const newOrder = {
        id: Date.now(), // ID pesanan sederhana berbasis timestamp
        date: new Date().toISOString(),
        items: orderItems,
        totalAmount: totalAmount,
        buyerName: buyerName,
        buyerWhatsApp: buyerWhatsAppNum,
        paymentMethod: paymentMethod,
        status: "Menunggu Konfirmasi Penjual" // Status awal
    };

    orderHistory.push(newOrder);
    localStorage.setItem('epennzyOrderHistory', JSON.stringify(orderHistory));
    
    // Kosongkan keranjang setelah pesanan disimpan
    cart = [];
    updateCart();
    // --- Redirect atau tampilkan pesan sukses ---
    // (Sudah dihandle oleh fungsi prepareAndConfirmOrder)
}

// --- BARU: Fungsi untuk merender halaman riwayat pesanan ---
function renderOrderHistoryPage() {
    if (!orderHistoryContainerEl) return;
    orderHistoryContainerEl.innerHTML = '';

    if (orderHistory.length === 0) {
        orderHistoryContainerEl.innerHTML = '<p class="text-secondary-dark text-center">Belum ada riwayat pesanan.</p>';
        return;
    }
    
    // Urutkan pesanan dari yang terbaru
    const sortedHistory = [...orderHistory].sort((a,b) => new Date(b.date) - new Date(a.date));

    sortedHistory.forEach(order => {
        const orderDate = new Date(order.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        let itemsHtml = '<ul>';
        order.items.forEach(item => {
            itemsHtml += `<li>${item.name} (${item.duration}) - ${formatPrice(item.price)}</li>`;
        });
        itemsHtml += '</ul>';

        orderHistoryContainerEl.innerHTML += `
            <div class="order-history-item">
                <h4>Pesanan #${order.id}</h4>
                <p>Tanggal: ${orderDate}</p>
                <p>Nama Pembeli: ${order.buyerName} (WA: ${order.buyerWhatsApp})</p>
                <p>Total: <strong>${formatPrice(order.totalAmount)}</strong></p>
                <p>Metode Pembayaran: ${order.paymentMethod}</p>
                <p>Status: <span class="font-semibold ${order.status === 'Selesai' ? 'text-green-400' : 'text-yellow-400'}">${order.status}</span></p>
                <p class="mt-1">Item:</p>
                ${itemsHtml}
            </div>
        `;
    });
}


function prepareWhatsAppMessage(paymentMethod = "Transfer Manual") { 
    const buyerNameInput = document.getElementById('buyerName');
    const buyerWhatsAppInput = document.getElementById('buyerWhatsApp');
    const buyerName = buyerNameInput ? buyerNameInput.value : "Pelanggan";
    const buyerWhatsAppNum = buyerWhatsAppInput ? buyerWhatsAppInput.value : "Tidak diketahui";
    if (cart.length === 0) { showCustomAlert("Keranjang Anda kosong.", "Info"); return null;}
    let message = `Halo Epennzy Market,\n\nSaya ${buyerName} (WA: ${buyerWhatsAppNum}) ingin konfirmasi pembayaran untuk pesanan berikut:\n(Order ID: ${Date.now()})\n\n`; // Tambahkan Order ID jika mau
    let totalAmount = 0;
    cart.forEach(item => { message += `- ${item.name} (${item.duration}) - ${formatPrice(item.price)}\n`; totalAmount += item.price; });
    message += `\nTotal Pembayaran: ${formatPrice(totalAmount)}\nMetode Pembayaran: ${paymentMethod}\n\nSaya akan segera mengirimkan bukti transfer.\nMohon info untuk pengambilan data produknya. Terima kasih.`;
    return encodeURIComponent(message);
}

// --- MODIFIKASI: Gabungkan logika konfirmasi ---
function prepareAndConfirmOrder(paymentMethodDisplay, paymentMethodInternal) {
    const buyerNameInput = document.getElementById('buyerName');
    const buyerWhatsAppInput = document.getElementById('buyerWhatsApp');

    if ( (paymentMethodInternal !== "QRIS Direct") && (!buyerNameInput.value || !buyerWhatsAppInput.value)) {
         showCustomAlert("Mohon isi Nama Lengkap dan Nomor WhatsApp Anda di halaman Checkout terlebih dahulu untuk konfirmasi.", "Info Penting");
         if(paymentMethodInternal === "QRIS") navigateTo('checkoutPage'); // Arahkan ke checkout jika dari QRIS tapi belum isi data
         return;
    }
    
    const encodedMessage = prepareWhatsAppMessage(paymentMethodDisplay);
    if (encodedMessage) {
        saveOrderToHistory(paymentMethodDisplay); // Simpan pesanan ke riwayat

        const waUrl = `https://wa.me/${sellerWhatsAppConfirmationNumber}?text=${encodedMessage}`;
        orderConfirmationTitleEl.textContent = `Langkah Terakhir: Konfirmasi via WhatsApp (${paymentMethodDisplay})`;
        orderConfirmationMessageEl.textContent = "Pembayaran Anda bersifat manual. Silakan klik tombol di bawah untuk mengirim detail pesanan Anda ke WhatsApp kami dan lampirkan bukti transfer.";
        orderInfoEl.innerHTML = `<p class="text-sm">Pastikan Anda sudah melakukan transfer dan menyiapkan bukti transfernya.</p>`;
        finalWhatsAppButtonContainerEl.innerHTML = `<a href="${waUrl}" target="_blank" class="w-full button-accent-dark py-3 rounded-lg font-semibold transition inline-block">Chat Penjual via WhatsApp Sekarang</a>`;
        orderConfirmationIconEl.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />`; 
        orderConfirmationIconEl.classList.remove('text-emerald-400', 'text-yellow-400'); orderConfirmationIconEl.classList.add('text-blue-400');
        navigateTo('orderConfirmationPage');
    }
}


if(document.getElementById('confirmViaWhatsAppButton')) {
    document.getElementById('confirmViaWhatsAppButton').addEventListener('click', function() { 
        prepareAndConfirmOrder("Transfer Manual (GoPay/Dana/BCA)", "Manual");
    });
}

// --- MODIFIKASI: Menggunakan fungsi baru untuk tombol QRIS ---
if(qrisPaidButton) {
    qrisPaidButton.addEventListener('click', function() {
        prepareAndConfirmOrder("QRIS", "QRIS");
    });
}

function renderTestimonials() {
    const testimonialsContainer = document.getElementById('testimonialsContainer');
    if (!testimonialsContainer) return; 
    testimonialsContainer.innerHTML = '';
    testimonials.forEach(testimonial => {
        testimonialsContainer.innerHTML += `
            <div class="card-dark p-4 rounded-lg border border-gray-700 shadow-sm">
                <p class="text-main-dark text-sm mb-2">"${testimonial.feedback}"</p>
                <p class="text-secondary-dark text-xs font-semibold">- ${testimonial.name} (${'⭐'.repeat(testimonial.rating)})</p>
            </div>
        `;
    });
}

function handleSearchIconClick() { navigateTo('discoverPage', { openSearch: true }); }

function navigateTo(pageId, context = {}) { 
    document.querySelectorAll('.page').forEach(page => { page.classList.remove('active'); });
    
    setTimeout(() => {
        document.querySelectorAll('.page').forEach(p => { if(p.id !== pageId) p.style.display = 'none'; });
        const targetPage = document.getElementById(pageId);
        if (targetPage) { 
            targetPage.style.display = 'block';
            targetPage.offsetHeight; 
            targetPage.classList.add('active');
        } else { 
            const discoverP = document.getElementById('discoverPage');
            discoverP.style.display = 'block';
            discoverP.offsetHeight;
            discoverP.classList.add('active');
            pageId = 'discoverPage';
        }
        window.scrollTo(0, 0); 

        if (searchContainerEl && searchInput) {
            if (pageId === 'discoverPage') {
                if (context.openSearch) {
                    searchContainerEl.classList.remove('hidden');
                    searchInput.focus();
                } else { 
                    searchContainerEl.classList.add('hidden');
                    if (searchInput.value !== '') { 
                        searchInput.value = '';
                        renderProducts('', currentFilterCategory); 
                    } else { updateTestimonialsVisibility(''); }
                }
            } else { searchContainerEl.classList.add('hidden'); }
        }

    }, 50); 

    document.querySelectorAll('.bottom-nav-item svg.bottom-nav-icon-dark').forEach(icon => icon.classList.remove('active'));
    const activeNavItem = document.querySelector(`.bottom-nav-item[data-page='${pageId}'] svg.bottom-nav-icon-dark`);
    if (activeNavItem) { 
        activeNavItem.classList.add('active'); 
    } else if (pageId === 'searchTrigger' || (context && context.openSearch && pageId === 'discoverPage')) {
        const searchNavIcon = document.querySelector(".bottom-nav-item[data-page='searchTrigger'] svg.bottom-nav-icon-dark");
        if (searchNavIcon) searchNavIcon.classList.add('active');
    } else if (['productDetailPage', 'checkoutPage', 'orderConfirmationPage', 'qrisPage'].includes(pageId)) { 
        let sourcePageForNav = previousPage === 'cartPage' ? 'cartPage' : (previousPage === 'savedItemsPage' ? 'savedItemsPage' : 'discoverPage');
        if(pageId === 'checkoutPage' || pageId === 'qrisPage' || pageId === 'orderConfirmationPage') sourcePageForNav = 'cartPage'; 
        const sourceNavItem = document.querySelector(`.bottom-nav-item[data-page='${sourcePageForNav}'] svg.bottom-nav-icon-dark`);
        if (sourceNavItem) { sourceNavItem.classList.add('active');}
         else { document.querySelector(".bottom-nav-item[data-page='discoverPage'] svg.bottom-nav-icon-dark").classList.add('active'); }
    } else { 
         document.querySelector(".bottom-nav-item[data-page='discoverPage'] svg.bottom-nav-icon-dark").classList.add('active');
    }

    if (pageId === 'cartPage' || pageId === 'checkoutPage' || pageId === 'qrisPage') { updateCart(); } 
    else if (pageId === 'savedItemsPage') { updateSavedItemsPage(); } 
    // --- BARU: Render riwayat pesanan saat navigasi ---
    else if (pageId === 'orderHistoryPage') { renderOrderHistoryPage(); }

    if (pageId === 'qrisPage') { document.getElementById('qrisImage').src = qrisImageUrl; }
    if(pageId === 'checkoutPage' && bcaAccountNameTextEl){ bcaAccountNameTextEl.textContent = bcaAccountNameConst;}
}

searchInput.addEventListener('input', (e) => { 
    renderProducts(e.target.value, currentFilterCategory); 
});

document.addEventListener('DOMContentLoaded', () => { 
    renderCategories(); 
    renderProducts(); 
    renderTestimonials(); 
    updateCart(); 
    // --- BARU: Render riwayat pesanan juga saat load awal, jika diperlukan ---
    // renderOrderHistoryPage(); // Opsional, tergantung mau ditampilkan langsung atau tidak
    navigateTo('discoverPage');
    if(bcaAccountNameTextEl) bcaAccountNameTextEl.textContent = bcaAccountNameConst; 
    
    // --- BARU: Muat data pembeli dari localStorage jika ada ---
    const storedBuyerName = localStorage.getItem('epennzyBuyerName');
    const storedBuyerWhatsApp = localStorage.getItem('epennzyBuyerWhatsApp');
    const buyerNameInput = document.getElementById('buyerName');
    const buyerWhatsAppInput = document.getElementById('buyerWhatsApp');

    if (buyerNameInput && storedBuyerName) buyerNameInput.value = storedBuyerName;
    if (buyerWhatsAppInput && storedBuyerWhatsApp) buyerWhatsAppInput.value = storedBuyerWhatsApp;

    // --- BARU: Simpan data pembeli ke localStorage saat diubah ---
    if (buyerNameInput) {
        buyerNameInput.addEventListener('input', (e) => localStorage.setItem('epennzyBuyerName', e.target.value));
    }
    if (buyerWhatsAppInput) {
        buyerWhatsAppInput.addEventListener('input', (e) => localStorage.setItem('epennzyBuyerWhatsApp', e.target.value));
    }
});
