# Việt Văn Hiến Demo Website

Project demo website công ty Việt Văn Hiến theo kiến trúc tách riêng frontend và backend.

## Cấu trúc

```txt
VVH-Web/
  backend/   Express, MongoDB, Mongoose, JWT
  frontend/  Next.js 14, TypeScript, TailwindCSS
```

## Yêu cầu môi trường

- Node.js 18+
- MongoDB Atlas cluster
- npm

## Backend

### Cài package

```bash
cd backend
npm install
```

### Tạo `.env`

Sao chép file mẫu:

```bash
cp .env.example .env
```

Cập nhật các biến:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster-url>/viet-van-hien?retryWrites=true&w=majority
JWT_SECRET=change_this_to_a_long_secret
ADMIN_EMAIL=admin@vietvanhien.vn
ADMIN_PASSWORD=Admin@123456
CLIENT_URL=http://localhost:3000
```

### Kết nối MongoDB Atlas

1. Tạo cluster trên MongoDB Atlas.
2. Tạo database user và password.
3. Thêm IP hiện tại vào Network Access hoặc dùng `0.0.0.0/0` cho môi trường demo.
4. Copy connection string vào `MONGODB_URI`.

### Seed dữ liệu demo

```bash
npm run seed
```

Script tạo admin mặc định, nội dung landing page, dự án, tin tức, đối tác và liên hệ demo.

### Chạy backend

```bash
npm run dev
```

Backend chạy tại `http://localhost:5000`.

## Frontend

### Cài package

```bash
cd frontend
npm install
```

### Tạo `.env.local`

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Chạy frontend

```bash
npm run dev
```

Frontend chạy tại `http://localhost:3000`.

Trang public lấy dữ liệu từ API backend, không dùng mock data cố định.

## Tài khoản admin mặc định

Sau khi chạy seed:

- Email: `admin@vietvanhien.vn`
- Password: `Admin@123456`

Admin login tại:

```txt
http://localhost:3000/admin/login
```

Dashboard:

```txt
http://localhost:3000/admin/dashboard
```

## API chính

### Public

- `GET /api/site`
- `GET /api/projects`
- `GET /api/news-events`
- `GET /api/partners`
- `POST /api/contacts`

### Admin

- `POST /api/auth/login`
- `PUT /api/admin/site`
- `POST /api/admin/projects`
- `PUT /api/admin/projects/:id`
- `DELETE /api/admin/projects/:id`
- `POST /api/admin/news-events`
- `PUT /api/admin/news-events/:id`
- `DELETE /api/admin/news-events/:id`
- `POST /api/admin/partners`
- `PUT /api/admin/partners/:id`
- `DELETE /api/admin/partners/:id`
- `GET /api/admin/contacts`
- `PUT /api/admin/contacts/:id`

## Deploy sau này

- Backend: deploy lên Render, Railway, Fly.io hoặc VPS Node.js.
- Frontend: deploy lên Vercel hoặc Netlify.
- MongoDB: dùng MongoDB Atlas production cluster.
- Thiết lập biến môi trường tương ứng trên nền tảng deploy.
- Cập nhật `CLIENT_URL` backend theo domain frontend.
- Cập nhật `NEXT_PUBLIC_API_URL` frontend theo domain backend.
