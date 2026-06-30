'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Locale = 'vi' | 'en';

export const translations = {
  vi: {
    company: 'Công ty',
    projects: 'Dự án',
    news: 'Tin tức',
    contact: 'Liên hệ',
    slogan: 'Non Sông nghìn thuở - Vững Âu Vàng',

    aboutEyebrow: 'VIỆT VĂN HIẾN',
    aboutTitle: 'CHÚNG TÔI LÀ AI',
    aboutText:
      'Việt Văn Hiến hoạt động với sứ mệnh bảo tồn, phục dựng và phát triển di sản văn hóa Việt Nam, đưa chiều sâu văn hiến dân tộc đến gần hơn với công chúng trong và ngoài nước.',
    aboutFocus: 'Chúng tôi nỗ lực:',
    aboutItem1Title: 'Bảo tồn & Phục dựng:',
    aboutItem1Description: 'Gìn giữ những lớp trầm tích lịch sử - văn hóa quý báu.',
    aboutItem2Title: 'Sống lại di sản:',
    aboutItem2Description: 'Biến di sản thành những trải nghiệm sống động, hấp dẫn.',
    aboutItem3Title: 'Truyền cảm hứng:',
    aboutItem3Description: 'Khơi gợi niềm tự hào dân tộc trong thế hệ trẻ.',
    aboutItem4Title: 'Tôn vinh con người:',
    aboutItem4Description: 'Vinh danh những thế hệ đã có công lao đóng góp cho dân tộc.',

    visionMissionEyebrow: 'TẦM NHÌN & SỨ MỆNH',
    visionTitle: 'TẦM NHÌN',
    visionText: 'Xây dựng hạ tầng văn hóa, tri thức và trải nghiệm cho tương lai.',
    visionSubheading: 'GIÁ TRỊ CỐT LÕI: NHÂN VĂN - TỰ TÔN - TRƯỜNG TỒN',
    visionHumanism: 'Nhân văn',
    visionHumanismDesc: 'Nuôi dưỡng nhân cách, tinh thần cộng đồng, tri thức, lòng biết ơn và ý thức công dân.',
    visionPride: 'Tự tôn',
    visionPrideDesc: 'Tôn vinh lịch sử, văn hóa và chiều sâu văn hiến của dân tộc.',
    visionLegacy: 'Trường tồn',
    visionLegacyDesc: 'Xây dựng hạ tầng văn hóa, tri thức và trải nghiệm có giá trị vững bền cho tương lai dân tộc Việt.',
    missionTitle: 'SỨ MỆNH',
    missionText:
      'Những giá trị tốt đẹp được kế thừa và tôn vinh về văn minh (khoa học, tổ chức xã hội, lối sống) của Việt Nam để chuyển tải cho các thế hệ tương lai.',
    missionQuote:
      'Việt Văn Hiến không chỉ là một cái tên, mà đây là một điều cam kết với cha ông đem văn minh Việt cho các thế hệ tương lai.',

    philosophyEyebrow: 'TRIẾT LÝ',
    philosophyTitle: 'TRIẾT LÝ HOẠT ĐỘNG',
    philosophyText:
      'Việt Văn Hiến hoạt động dựa trên triết lý: di sản chỉ thực sự có tương lai khi hòa nhập vào đời sống hiện đại. Bảo tồn là nền tảng, nhưng tái tạo sức sống cho di sản mới là mục tiêu hàng đầu. Chúng tôi không coi truyền thống và hiện đại là hai thái cực đối lập mà đặt chúng trong mối quan hệ cộng hưởng, tương hỗ.',
    philosophyTradition: 'Truyền thống',
    philosophyTraditionDesc: 'Cung cấp chiều sâu, bản sắc và các giá trị cốt lõi.',
    philosophyModernity: 'Hiện đại',
    philosophyModernityDesc: 'Mang đến công cụ, ngôn ngữ và khả năng lan tỏa.',
    philosophyTechnology: 'Công nghệ',
    philosophyTechnologyDesc: 'Không thay thế mà mở rộng khả năng tiếp cận văn hóa.',
    philosophyEntertainment: 'Giải trí',
    philosophyEntertainmentDesc: 'Trở thành cầu nối đưa lịch sử đến gần hơn với công chúng.',
    philosophyCreativity: 'Sáng tạo',
    philosophyCreativityDesc: 'Giúp bản sắc vững bước vào tương lai.',
    philosophyQuote:
      '“Việt Văn Hiến hướng đến mục tiêu trở thành một tổ chức văn hóa tầm vóc, vừa đảm bảo chiều sâu học thuật, vừa sở hữu năng lực sáng tạo và ứng dụng công nghệ để tạo ra những giá trị bền vững, lan tỏa rộng khắp.”',

    coreValuesTitle: 'GIÁ TRỊ CỐT LÕI',
    coreNationalPride: 'Tự Hào Dân Tộc',
    coreNationalPrideDesc: 'Mọi hoạt động đều tôn trọng và tự hào về lịch sử, văn hóa và con người Việt Nam.',
    coreKnowledge: 'Chiều Sâu Tri Thức',
    coreKnowledgeDesc: 'Coi nghiên cứu và tính học thuật là nền tảng cốt lõi để xây dựng những sản phẩm giá trị lâu dài.',
    coreHumanity: 'Tính Nhân Văn',
    coreHumanityDesc: 'Các dự án hướng tới nuôi dưỡng nhân cách, tinh thần cộng đồng và lòng biết ơn.',
    coreResponsibleCreativity: 'Sáng Tạo Có Trách Nhiệm',
    coreResponsibleCreativityDesc: 'Khuyến khích đổi mới nhưng luôn tôn trọng sự thật lịch sử và bản sắc văn hóa.',
    coreModernOpen: 'Hiện Đại Và Mở',
    coreModernOpenDesc: 'Chủ động ứng dụng công nghệ và các phương pháp truyền thông mới trong thời đại số.',
    coreLongTerm: 'Tầm Nhìn Dài Hạn',
    coreLongTermDesc: 'Xây dựng hạ tầng văn hóa, tri thức và trải nghiệm vững chắc cho tương lai.',

    commitmentTitle: 'CAM KẾT',
    commitmentHeritage: 'Cam kết với di sản',
    commitmentHeritageDesc: 'Tiếp cận di sản với sự tôn trọng, trách nhiệm và tư duy lâu dài, giữ gìn trọn vẹn nền tảng giá trị đích thực.',
    commitmentSociety: 'Cam kết với xã hội',
    commitmentSocietyDesc: 'Mỗi sáng kiến đều hướng tới tác động văn hóa tích cực, đóng góp tri thức và phát triển xã hội có chiều sâu.',
    commitmentYouth: 'Cam kết với thế hệ trẻ',
    commitmentYouthDesc: 'Coi thế hệ trẻ là những người đồng sáng tạo trong việc đổi mới và phát triển di sản Việt Nam.',
    commitmentNation: 'Cam kết với quốc gia',
    commitmentNationDesc: 'Nỗ lực đưa mỗi dự án trở thành một đóng góp lâu dài nhằm nâng tầm bản sắc và vị thế văn hóa dân tộc.',

    featuredProjects: 'Dự án nổi bật',
    projectHeading: 'Kiến tạo không gian văn hóa đẳng cấp',
    projectPrev: 'Dự án trước',
    projectNext: 'Dự án tiếp theo',
    projectsUpdating: 'Dự án đang được cập nhật.',
    projectCompleted: 'Đã hoàn thành',
    projectPlanning: 'Sắp triển khai',
    projectActive: 'Đang triển khai',
    viewDetails: 'Xem chi tiết',
    newsEyebrow: 'Nhịp sống văn hiến',
    newsHeading: 'Tin tức và sự kiện',
    newsTypeNews: 'Tin tức',
    newsTypeEvent: 'Sự kiện',
    readMore: 'Xem thêm',

    contactHeading: 'LIÊN HỆ',
    contactCompany: 'CÔNG TY CỔ PHẦN VIỆT VĂN HIẾN',
    contactAddress: '546 Phạm Văn Đồng, Phường Bình Lợi Trung, TP.HCM',
    contactName: 'Họ và tên',
    contactPhone: 'Số điện thoại',
    contactMessage: 'Nội dung',
    contactConsent: 'Vui lòng để cho chúng tôi biết thêm chi tiết về yêu cầu của bạn',
    contactSubmit: 'Gửi liên hệ',
    contactSuccess: 'Cảm ơn bạn. Việt Văn Hiến sẽ liên hệ trong thời gian sớm nhất.',
    contactError: 'Không thể gửi liên hệ.',

    footerIntro: 'THÔNG ĐIỆP MỞ ĐẦU',
    footerAbout: 'CHÚNG TÔI LÀ AI',
    footerVisionMission: 'TẦM NHÌN / SỨ MỆNH',
    footerPhilosophy: 'TRIẾT LÝ HOẠT ĐỘNG',
    footerCoreCommitment: 'GIÁ TRỊ CỐT LÕI / CAM KẾT',
    footerProjects: 'DỰ ÁN / SẢN PHẨM',
    footerNews: 'TIN TỨC',
    terms: 'Điều khoản sử dụng',
    home: 'Trang chủ',
    termsTitle: 'ĐIỀU KHOẢN SỬ DỤNG',
    termsScope: 'Phạm vi sử dụng website',
    termsScopeText:
      'Website Việt Văn Hiến được xây dựng nhằm giới thiệu thông tin về tổ chức, dự án, tin tức, sự kiện và các hoạt động văn hóa - sáng tạo. Người dùng có thể truy cập, tham khảo và chia sẻ thông tin với mục đích phù hợp, tôn trọng pháp luật và thuần phong mỹ tục.',
    termsOwnership: 'Quyền sở hữu nội dung',
    termsOwnershipText:
      'Toàn bộ nội dung, hình ảnh, tư liệu, thiết kế và nhận diện hiển thị trên website thuộc quyền sở hữu hoặc quyền sử dụng hợp pháp của Việt Văn Hiến và các đối tác liên quan. Việc sao chép, chỉnh sửa hoặc khai thác thương mại cần có sự đồng ý bằng văn bản.',
    termsResponsibility: 'Trách nhiệm người dùng',
    termsResponsibilityText:
      'Người dùng chịu trách nhiệm về tính chính xác của thông tin gửi qua biểu mẫu liên hệ và cam kết không thực hiện các hành vi gây ảnh hưởng đến hệ thống, dữ liệu hoặc trải nghiệm của người dùng khác.',
    termsContactInfo: 'Thông tin liên hệ',
    termsContactInfoText:
      'Mọi câu hỏi liên quan đến điều khoản sử dụng, hợp tác nội dung hoặc quyền sở hữu trí tuệ có thể gửi về Việt Văn Hiến qua email info@vietvanhien.vn hoặc số điện thoại 077 688 7877.'
  },
  en: {
    company: 'Company',
    projects: 'Projects',
    news: 'News',
    contact: 'Contact',
    slogan: 'A THOUSAND-YEAR LAND, A GOLDEN FOUNDATION',

    aboutEyebrow: 'VIET VAN HIEN',
    aboutTitle: 'WHO WE ARE',
    aboutText:
      'Viet Van Hien works with the mission of preserving, restoring, and developing Vietnamese cultural heritage, bringing the depth of national civilization closer to audiences at home and abroad.',
    aboutFocus: 'Our Focus',
    aboutItem1Title: 'Preservation & Restoration:',
    aboutItem1Description: 'Safeguarding precious historical and cultural layers.',
    aboutItem2Title: 'Bringing Heritage to Life:',
    aboutItem2Description: 'Transforming heritage into vivid and engaging experiences.',
    aboutItem3Title: 'Inspiring Pride:',
    aboutItem3Description: 'Awakening national pride among younger generations.',
    aboutItem4Title: 'Honoring People:',
    aboutItem4Description: 'Honoring generations who have contributed to the nation.',

    visionMissionEyebrow: 'VISION & MISSION',
    visionTitle: 'VISION',
    visionText: 'Building cultural, knowledge, and experience infrastructure for the future.',
    visionSubheading: 'CORE VALUES: HUMANISM - NATIONAL PRIDE - ENDURING LEGACY',
    visionHumanism: 'Humanism',
    visionHumanismDesc: 'Nurturing character, community spirit, knowledge, gratitude, and civic awareness.',
    visionPride: 'National Pride',
    visionPrideDesc: 'Honoring the history, culture, and depth of Vietnamese civilization.',
    visionLegacy: 'Enduring Legacy',
    visionLegacyDesc: 'Building cultural, knowledge, and experiential infrastructure with lasting value for Vietnam’s future.',
    missionTitle: 'MISSION',
    missionText:
      'To inherit and honor the finest values of Vietnamese civilization, including science, social organization, and ways of life, and carry them forward for future generations.',
    missionQuote:
      'Viet Van Hien is not only a name, but a commitment to our ancestors to carry Vietnamese civilization into future generations.',

    philosophyEyebrow: 'PHILOSOPHY',
    philosophyTitle: 'OPERATING PHILOSOPHY',
    philosophyText:
      'Viet Van Hien operates on the belief that heritage only has a future when it enters modern life. Preservation is the foundation, but renewing the vitality of heritage is the ultimate goal. We do not see tradition and modernity as opposites, but as forces that resonate and support one another.',
    philosophyTradition: 'Tradition',
    philosophyTraditionDesc: 'Provides depth, identity, and core values.',
    philosophyModernity: 'Modernity',
    philosophyModernityDesc: 'Offers tools, language, and the ability to spread wider.',
    philosophyTechnology: 'Technology',
    philosophyTechnologyDesc: 'Does not replace culture, but expands access to it.',
    philosophyEntertainment: 'Entertainment',
    philosophyEntertainmentDesc: 'Becomes a bridge that brings history closer to the public.',
    philosophyCreativity: 'Creativity',
    philosophyCreativityDesc: 'Helps identity move confidently into the future.',
    philosophyQuote:
      '“Viet Van Hien aims to become a cultural organization of stature, combining academic depth with creative capacity and technological application to create sustainable values with broad impact.”',

    coreValuesTitle: 'CORE VALUES',
    coreNationalPride: 'National Pride',
    coreNationalPrideDesc: 'Every activity respects and takes pride in the history, culture, and people of Vietnam.',
    coreKnowledge: 'Intellectual Depth',
    coreKnowledgeDesc: 'Research and academic rigor form the core foundation for long-lasting cultural products.',
    coreHumanity: 'Humanistic Values',
    coreHumanityDesc: 'Projects aim to nurture character, community spirit, and gratitude.',
    coreResponsibleCreativity: 'Responsible Creativity',
    coreResponsibleCreativityDesc: 'Encouraging innovation while respecting historical truth and cultural identity.',
    coreModernOpen: 'Modern and Open',
    coreModernOpenDesc: 'Actively applying technology and new communication methods in the digital age.',
    coreLongTerm: 'Long-term Vision',
    coreLongTermDesc: 'Building solid cultural, knowledge, and experiential infrastructure for the future.',

    commitmentTitle: 'COMMITMENTS',
    commitmentHeritage: 'Commitment to Heritage',
    commitmentHeritageDesc: 'Approaching heritage with respect, responsibility, and long-term thinking while preserving its authentic values.',
    commitmentSociety: 'Commitment to Society',
    commitmentSocietyDesc: 'Each initiative aims for positive cultural impact, knowledge contribution, and meaningful social development.',
    commitmentYouth: 'Commitment to the Young Generation',
    commitmentYouthDesc: 'Seeing young people as co-creators in renewing and developing Vietnamese heritage.',
    commitmentNation: 'Commitment to the Nation',
    commitmentNationDesc: 'Making every project a lasting contribution to elevating national identity and cultural standing.',

    featuredProjects: 'Featured Projects',
    projectHeading: 'Creating premium cultural spaces',
    projectPrev: 'Previous project',
    projectNext: 'Next project',
    projectsUpdating: 'Projects are being updated.',
    projectCompleted: 'Completed',
    projectPlanning: 'Upcoming',
    projectActive: 'In progress',
    viewDetails: 'View details',
    newsEyebrow: 'Heritage Pulse',
    newsHeading: 'News & Events',
    newsTypeNews: 'News',
    newsTypeEvent: 'Event',
    readMore: 'Read more',

    contactHeading: 'CONTACT',
    contactCompany: 'VIET VAN HIEN JOINT STOCK COMPANY',
    contactAddress: '546 Pham Van Dong, Binh Loi Trung Ward, Ho Chi Minh City',
    contactName: 'Full name',
    contactPhone: 'Phone number',
    contactMessage: 'Message',
    contactConsent: 'Please let us know more details about your request',
    contactSubmit: 'Send Message',
    contactSuccess: 'Thank you. Viet Van Hien will contact you as soon as possible.',
    contactError: 'Unable to send your message.',

    footerIntro: 'OPENING MESSAGE',
    footerAbout: 'WHO WE ARE',
    footerVisionMission: 'VISION / MISSION',
    footerPhilosophy: 'OPERATING PHILOSOPHY',
    footerCoreCommitment: 'CORE VALUES / COMMITMENTS',
    footerProjects: 'PROJECTS / PRODUCTS',
    footerNews: 'NEWS',
    terms: 'Terms of Use',
    home: 'Home',
    termsTitle: 'TERMS OF USE',
    termsScope: 'Website Usage Scope',
    termsScopeText:
      'The Viet Van Hien website is built to introduce information about the organization, projects, news, events, and cultural and creative activities. Users may access, reference, and share information for appropriate purposes while respecting the law and cultural standards.',
    termsOwnership: 'Content Ownership',
    termsOwnershipText:
      'All content, images, materials, design, and identity displayed on the website are owned or lawfully used by Viet Van Hien and relevant partners. Copying, modifying, or commercial use requires written permission.',
    termsResponsibility: 'User Responsibility',
    termsResponsibilityText:
      'Users are responsible for the accuracy of information submitted through contact forms and agree not to perform actions that affect the system, data, or the experience of other users.',
    termsContactInfo: 'Contact Information',
    termsContactInfoText:
      'Questions regarding terms of use, content collaboration, or intellectual property rights may be sent to Viet Van Hien via info@vietvanhien.vn or 077 688 7877.'
  }
} as const;

export type TranslationKey = keyof typeof translations.vi;

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('vi');

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale === 'vi' || savedLocale === 'en') {
      setLocaleState(savedLocale);
    }
  }, []);

  const value = useMemo<LanguageContextValue>(() => {
    function setLocale(nextLocale: Locale) {
      setLocaleState(nextLocale);
      localStorage.setItem('locale', nextLocale);
    }

    function t(key: TranslationKey) {
      return translations[locale][key];
    }

    return { locale, setLocale, t };
  }, [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
