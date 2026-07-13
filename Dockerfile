# Menggunakan Node.js versi 18 yang ringan (alpine)
FROM node:18-alpine

# Menentukan direktori kerja di dalam container
WORKDIR /app

# Menyalin file daftar paket
COPY package*.json ./

# Menginstal semua library yang dibutuhkan
RUN npm install

# Menyalin seluruh kodingan backend
COPY . .

# Membuka port 3000 untuk NestJS
EXPOSE 3000

# Menjalankan server development NestJS dengan fitur auto-reload
CMD ["npm", "run", "start:dev"]