import CompanyPageLayout from '@/components/public/CompanyPageLayout';

const ideas = [
  'Di sản chỉ thật sự có tương lai khi bước vào đời sống đương đại.',
  'Bảo tồn là điều kiện cần, tái tạo sức sống cho di sản là điều kiện đủ.',
  'Truyền thống và hiện đại không đối lập mà cộng hưởng.'
];

export default function PhilosophyPage() {
  return (
    <CompanyPageLayout title="Triết lý hoạt động" description="Việt Văn Hiến nhìn di sản như một nguồn năng lượng sống, có thể được tiếp nối bằng tri thức, sáng tạo và công nghệ.">
      <div className="space-y-5">
        {ideas.map((idea, index) => (
          <article key={idea} className="grid gap-6 rounded-lg border border-white/10 bg-white/[0.04] p-7 transition hover:border-gold/60 md:grid-cols-[90px_1fr] md:items-center">
            <span className="font-din text-3xl text-gold/90">0{index + 1}</span>
            <p className="font-din text-xl leading-8 text-white md:text-2xl">{idea}</p>
          </article>
        ))}
      </div>
    </CompanyPageLayout>
  );
}
