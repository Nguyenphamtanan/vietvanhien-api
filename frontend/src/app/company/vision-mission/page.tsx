import CompanyPageLayout from '@/components/public/CompanyPageLayout';

export default function VisionMissionPage() {
  return (
    <CompanyPageLayout title="Tầm nhìn & Sứ mệnh" description="Định hướng dài hạn cho một hệ sinh thái văn hóa - lịch sử - sáng tạo - công nghệ giải trí của Việt Nam.">
      <div className="grid gap-5 md:grid-cols-2">
        <article className="rounded-lg border border-white/10 bg-white/[0.04] p-8 transition hover:border-gold/60">
          <p className="font-din text-[13px] uppercase tracking-[0.18em] text-gold">Tầm nhìn</p>
          <h2 className="mt-4 font-din text-xl leading-[1.25] text-white md:text-2xl">
            Trở thành tổ chức tiên phong của Việt Nam trong kiến tạo hệ sinh thái văn hóa - lịch sử - sáng tạo - công nghệ giải trí.
          </h2>
        </article>
        <article className="rounded-lg border border-gold/30 bg-burgundy/35 p-8 transition hover:border-gold">
          <p className="font-din text-[13px] uppercase tracking-[0.18em] text-gold">Sứ mệnh</p>
          <h2 className="mt-4 font-din text-xl leading-[1.25] text-white md:text-2xl">
            Gìn giữ, phục dựng và lan tỏa chiều sâu văn hiến Việt Nam bằng hình thức hiện đại, hấp dẫn, có sức lan tỏa.
          </h2>
        </article>
      </div>
    </CompanyPageLayout>
  );
}
