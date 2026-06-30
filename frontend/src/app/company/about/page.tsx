import CompanyPageLayout from '@/components/public/CompanyPageLayout';

export default function CompanyAboutPage() {
  return (
    <CompanyPageLayout
      title="Chúng tôi là ai"
      description="Một tổ chức văn hóa sáng tạo đặt bản sắc Việt Nam ở trung tâm của nghiên cứu, phục dựng và trải nghiệm đương đại."
    >
      <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
        <p className="font-din text-[13px] uppercase tracking-[0.18em] text-gold"></p>
        <div className="space-y-5 text-sm leading-7 text-white/75 md:text-[16px]">
          <p>
            Việt Văn Hiến là tổ chức định hướng nghiên cứu, xây dựng, phát triển và quảng bá các giá trị văn học, lịch sử,
            di sản văn hóa, điện ảnh, nghệ thuật, khảo cổ và công nghệ giải trí gắn với bản sắc Việt Nam.
          </p>
          <p>
            Chúng tôi theo đuổi mô hình tích hợp giữa nghiên cứu, phục dựng, sáng tạo, giáo dục, công nghệ và trải nghiệm,
            để tri thức văn hiến không chỉ được lưu giữ mà còn được sống trong cộng đồng hôm nay.
          </p>
        </div>
      </div>
    </CompanyPageLayout>
  );
}
