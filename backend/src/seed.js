import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { connectDB } from './config/db.js';
import Admin from './models/Admin.js';
import Contact from './models/Contact.js';
import NewsEvent from './models/NewsEvent.js';
import Partner from './models/Partner.js';
import Project from './models/Project.js';
import SiteSetting from './models/SiteSetting.js';

dotenv.config();

async function seed() {
  await connectDB();

  const adminEmail = process.env.ADMIN_EMAIL || 'admin@vietvanhien.vn';
  const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@123456';

  await Promise.all([
    SiteSetting.deleteMany({}),
    Project.deleteMany({}),
    NewsEvent.deleteMany({}),
    Partner.deleteMany({}),
    Contact.deleteMany({})
  ]);

  const existingAdmin = await Admin.findOne({ email: adminEmail });
  if (!existingAdmin) {
    await Admin.create({
      name: 'Quản trị Việt Văn Hiến',
      email: adminEmail,
      password: adminPassword
    });
  }

  await SiteSetting.create({
    heroTitle: 'Việt Văn Hiến',
    heroSubtitle: 'Gìn giữ giá trị văn hóa Việt, kiến tạo không gian di sản cho tương lai.',
    heroImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1800&q=80',
    heroVideo: '',
    aboutTitle: 'Dấu ấn văn hiến trong từng công trình',
    aboutContent:
      'Việt Văn Hiến đồng hành cùng các tổ chức, địa phương và doanh nghiệp trong bảo tồn, truyền thông, nghiên cứu và phát triển các dự án văn hóa - lịch sử Việt Nam.',
    vision: 'Trở thành đơn vị tiên phong trong phát triển hệ sinh thái văn hóa Việt Nam hiện đại, có chiều sâu và có sức lan tỏa quốc tế.',
    mission:
      'Kết nối tri thức lịch sử, mỹ thuật truyền thống và công nghệ truyền thông để tạo nên các sản phẩm văn hóa đáng tin cậy, giàu bản sắc.',
    activityFields: [
      { title: 'Bảo tồn di sản', description: 'Tư vấn, số hóa và truyền thông giá trị di sản văn hóa.' },
      { title: 'Không gian văn hóa', description: 'Thiết kế trải nghiệm trưng bày, triển lãm và điểm đến văn hóa.' },
      { title: 'Nghiên cứu - xuất bản', description: 'Biên soạn nội dung lịch sử, văn hóa, giáo dục cộng đồng.' },
      { title: 'Sự kiện văn hiến', description: 'Tổ chức tọa đàm, lễ hội, chương trình nghệ thuật truyền thống.' }
    ],
    contactEmail: 'contact@vietvanhien.vn',
    contactPhone: '024 8888 6868',
    contactAddress: 'Hà Nội, Việt Nam'
  });

 await Project.insertMany([
  {
    title: 'Không gian Văn hiến Thăng Long',
    slug: 'khong-gian-van-hien-thang-long',
    description: 'Dự án trưng bày tương tác về lịch sử Thăng Long - Hà Nội qua các thời kỳ.',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80',
    location: 'Hà Nội',
    year: '2026',
    status: 'active',
    featured: true
  },
  {
    title: 'Hành trình Di sản Việt',
    slug: 'hanh-trinh-di-san-viet',
    description: 'Chuỗi hoạt động giáo dục cộng đồng tại các địa danh văn hóa tiêu biểu.',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80',
    location: 'Toàn quốc',
    year: '2025',
    status: 'completed',
    featured: true
  }
]);

  await NewsEvent.insertMany([
    {
      title: 'Tọa đàm Bản sắc Việt trong không gian số',
      summary: 'Chương trình quy tụ chuyên gia văn hóa, nghệ sĩ và nhà phát triển công nghệ.',
      content: 'Nội dung tọa đàm tập trung vào cách chuyển hóa di sản thành trải nghiệm số có trách nhiệm.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
      type: 'event',
      eventDate: new Date('2026-05-20')
    },
    {
      title: 'Ra mắt bộ nhận diện dự án Việt Văn Hiến',
      summary: 'Bộ nhận diện lấy cảm hứng từ sắc vàng son, xanh trầm và họa tiết truyền thống.',
      content: 'Hệ thống nhận diện hướng tới vẻ đẹp trang trọng, hiện đại và dễ ứng dụng.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
      type: 'news',
      eventDate: new Date('2026-04-12')
    }
  ]);

  await Partner.insertMany([
    {
      name: 'Viện Nghiên cứu Văn hóa',
      logo: '',
      website: 'https://example.com',
      description: 'Đối tác học thuật trong các dự án nghiên cứu và phản biện chuyên môn.'
    },
    {
      name: 'Trung tâm Sáng tạo Di sản',
      logo: '',
      website: 'https://example.com',
      description: 'Đối tác triển khai không gian trải nghiệm và chương trình cộng đồng.'
    }
  ]);

  await Contact.create({
    name: 'Nguyễn Văn An',
    email: 'an@example.com',
    phone: '0901234567',
    message: 'Tôi muốn trao đổi về một dự án truyền thông di sản tại địa phương.',
    status: 'new'
  });

  console.log('Seed completed');
  await mongoose.disconnect();
}

seed().catch(async (error) => {
  console.error(error);
  await mongoose.disconnect();
  process.exit(1);
});
