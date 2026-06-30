import CompanyPageLayout from '@/components/public/CompanyPageLayout';

const values = [
  'Tự hào dân tộc',
  'Chiều sâu tri thức',
  'Tính nhân văn',
  'Sáng tạo có trách nhiệm',
  'Hiện đại và mở',
  'Tầm nhìn dài hạn'
];

export default function CoreValuesPage() {
  return (
    <CompanyPageLayout title="Giá trị cốt lõi" description="Những nguyên tắc giúp Việt Văn Hiến giữ được chiều sâu khi bước vào các hình thức biểu đạt mới.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {values.map((value, index) => (
          <article key={value} className="min-h-44 rounded-lg border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-gold/60">
            <p className="font-din text-[13px] uppercase tracking-[0.18em] text-gold">Giá trị 0{index + 1}</p>
            <h2 className="mt-6 font-din text-xl leading-tight text-white">{value}</h2>
          </article>
        ))}
      </div>
    </CompanyPageLayout>
  );
}
