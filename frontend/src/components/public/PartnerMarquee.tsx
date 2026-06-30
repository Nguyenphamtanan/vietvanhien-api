import type { Partner } from '@/types';
import { resolveAssetUrl } from '@/lib/api';
import RevealText from './RevealText';

export default function PartnerMarquee({ partners }: { partners: Partner[] }) {
  if (!partners.length) return null;
  const items = [...partners, ...partners];

  return (
    <section className="overflow-hidden border-y border-white/10 bg-[#080e20] py-12">
      <div className="container mb-7 flex items-end justify-between gap-5">
        <div>
          <RevealText><p className="font-din text-[13px] uppercase tracking-[0.18em] text-gold">Đối tác chiến lược</p></RevealText>
          <RevealText delay={0.08}><h2 className="mt-2 font-din text-2xl text-white md:text-[32px]">Cộng hưởng những giá trị bền vững</h2></RevealText>
        </div>
      </div>
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-4 px-4 hover:[animation-play-state:paused]">
        {items.map((partner, index) => (
          <article key={`${partner._id}-${index}`} className="flex h-24 w-72 shrink-0 items-center gap-4 rounded-lg border border-white/10 bg-white/[0.035] px-5">
            {partner.logo ? <img className="h-12 w-12 rounded object-contain" src={resolveAssetUrl(partner.logo)} alt="" /> : <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 font-din text-lg text-gold">VVH</span>}
            <div>
              <RevealText delay={(index % partners.length) * 0.08}><p className="font-din text-[16px] text-white">{partner.name}</p></RevealText>
              {partner.description && <RevealText delay={(index % partners.length) * 0.08 + 0.08}><p className="mt-1 line-clamp-1 text-[13px] text-white/75">{partner.description}</p></RevealText>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
