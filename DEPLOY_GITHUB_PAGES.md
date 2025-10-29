# Deploy ke GitHub Pages

Aplikasi ini telah dikonfigurasi untuk di-deploy ke GitHub Pages.

## Konfigurasi yang Sudah Dilakukan

### 1. Vite Configuration (vite.config.ts)
- **base**: Diatur ke `"/"` untuk berjalan di root directory
- **server.host**: Diatur ke `"0.0.0.0"` untuk akses dari mana saja
- **server.port**: Diatur ke `5000` untuk development di Replit

### 2. Build Script
Script baru `build:github` telah ditambahkan di package.json:
```bash
npm run build:github
```

### 3. GitHub Actions Workflow
File `.github/workflows/deploy.yml` telah dibuat untuk otomatis deploy ke GitHub Pages saat push ke branch main.

## Cara Deploy ke GitHub Pages

### Langkah 1: Push ke GitHub
```bash
git add .
git commit -m "Setup for GitHub Pages deployment"
git push origin main
```

### Langkah 2: Aktifkan GitHub Pages
1. Pergi ke repository settings di GitHub
2. Klik menu **Pages** di sidebar kiri
3. Di **Source**, pilih **GitHub Actions**
4. Workflow akan otomatis berjalan saat Anda push ke branch main

### Langkah 3: Akses Website Anda
Setelah deployment selesai, website Anda akan tersedia di:
```
https://<username>.github.io/<repository-name>/
```

atau jika ini adalah repository utama:
```
https://<username>.github.io/
```

## Jika Deploy ke Subdirectory

Jika Anda deploy ke `username.github.io/nama-repo/`, Anda perlu update `base` di `vite.config.ts`:

```typescript
base: "/nama-repo/",
```

## Build Manual (Opsional)

Untuk build secara manual:
```bash
npm run build:github
```

Hasil build akan tersimpan di folder `dist/`.

## Troubleshooting

### Routing 404 Error
Jika Anda mendapat 404 error saat navigasi, buat file `dist/404.html` yang sama dengan `dist/index.html` atau gunakan hash routing di React Router.

### Assets Tidak Muncul
Pastikan `base` di vite.config.ts sudah sesuai dengan path deployment Anda.
