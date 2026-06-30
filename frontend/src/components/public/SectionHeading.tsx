type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, light = true }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <RevealText><p className="font-din text-[13px] uppercase tracking-[0.18em] text-gold">{eyebrow}</p></RevealText>
      <RevealText delay={0.08}><h2 className={`mt-3 font-din text-2xl leading-[1.08] md:text-[28px] lg:text-[32px] ${light ? 'text-white' : 'text-deepBlue'}`}>{title}</h2></RevealText>
      {description && <RevealText delay={0.16}><p className={`mt-4 text-sm leading-7 md:text-[15px] ${light ? 'text-white/75' : 'text-ink/70'}`}>{description}</p></RevealText>}
    </div>
  );
}
import RevealText from './RevealText';
