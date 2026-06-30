import CompanyPageLayout from '@/components/public/CompanyPageLayout';

const commitments = [
  {
    title: 'Cam kết với di sản',
    description: 'Tôn trọng tính xác thực, chiều sâu lịch sử và giá trị tinh thần của mỗi chất liệu văn hóa.'
  },
  {
    title: 'Cam kết với thế hệ trẻ',
    description: 'Tạo ra những hình thức tiếp cận mới để người trẻ thấy di sản gần gũi, hấp dẫn và đáng tự hào.'
  },
  {
    title: 'Cam kết với xã hội',
    description: 'Góp phần xây dựng đời sống văn hóa lành mạnh, nhân văn và giàu bản sắc trong cộng đồng.'
  },
  {
    title: 'Cam kết với quốc gia',
    description: 'Lan tỏa hình ảnh Việt Nam có chiều sâu, tự tin và hiện đại trong dòng chảy sáng tạo toàn cầu.'
  }
];

export default function CommitmentPage() {
  return (
    <CompanyPageLayout title="Cam kết" description="Mọi dự án của Việt Văn Hiến hướng tới giá trị bền vững cho di sản, cộng đồng và quốc gia.">
      <div className="grid gap-5 md:grid-cols-2">
        {commitments.map((item) => (
          <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-gold/60">
            <div className="mb-8 h-1 w-14 bg-gold" />
            <h2 className="font-din text-xl text-white">{item.title}</h2>
            <p className="mt-4 text-sm leading-7 text-white/75">{item.description}</p>
          </article>
        ))}
      </div>
    </CompanyPageLayout>
  );
}
