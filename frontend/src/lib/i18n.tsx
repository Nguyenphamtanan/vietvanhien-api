'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Locale = 'vi' | 'en';

export const translations = {
  vi: {
    company: 'CÃ´ng ty',
    projects: 'Dá»± Ã¡n',
    news: 'Tin tá»©c',
    contact: 'LiÃªn há»‡',
    slogan: 'NON SÃ”NG NGHÃŒN THUá»ž - Vá»®NG Ã‚U VÃ€NG',

    aboutEyebrow: 'VIá»†T VÄ‚N HIáº¾N',
    aboutTitle: 'CHÃšNG TÃ”I LÃ€ AI',
    aboutText:
      'Viá»‡t VÄƒn Hiáº¿n hoáº¡t Ä‘á»™ng vá»›i sá»© má»‡nh báº£o tá»“n, phá»¥c dá»±ng vÃ  phÃ¡t triá»ƒn di sáº£n vÄƒn hÃ³a Viá»‡t Nam, Ä‘Æ°a chiá»u sÃ¢u vÄƒn hiáº¿n dÃ¢n tá»™c Ä‘áº¿n gáº§n hÆ¡n vá»›i cÃ´ng chÃºng trong vÃ  ngoÃ i nÆ°á»›c.',
    aboutFocus: 'ChÃºng tÃ´i ná»— lá»±c:',
    aboutItem1Title: 'Báº£o tá»“n & Phá»¥c dá»±ng:',
    aboutItem1Description: 'GÃ¬n giá»¯ nhá»¯ng lá»›p tráº§m tÃ­ch lá»‹ch sá»­ - vÄƒn hÃ³a quÃ½ bÃ¡u.',
    aboutItem2Title: 'Sá»‘ng láº¡i di sáº£n:',
    aboutItem2Description: 'Biáº¿n di sáº£n thÃ nh nhá»¯ng tráº£i nghiá»‡m sá»‘ng Ä‘á»™ng, háº¥p dáº«n.',
    aboutItem3Title: 'Truyá»n cáº£m há»©ng:',
    aboutItem3Description: 'KhÆ¡i gá»£i niá»m tá»± hÃ o dÃ¢n tá»™c trong tháº¿ há»‡ tráº».',
    aboutItem4Title: 'TÃ´n vinh con ngÆ°á»i:',
    aboutItem4Description: 'Vinh danh nhá»¯ng tháº¿ há»‡ Ä‘Ã£ cÃ³ cÃ´ng lao Ä‘Ã³ng gÃ³p cho dÃ¢n tá»™c.',

    visionMissionEyebrow: 'Táº¦M NHÃŒN & Sá»¨ Má»†NH',
    visionTitle: 'Táº¦M NHÃŒN',
    visionText: 'XÃ¢y dá»±ng háº¡ táº§ng vÄƒn hÃ³a, tri thá»©c vÃ  tráº£i nghiá»‡m cho tÆ°Æ¡ng lai.',
    visionSubheading: 'GIÃ TRá»Š Cá»T LÃ•I: NHÃ‚N VÄ‚N - Tá»° TÃ”N - TRÆ¯á»œNG Tá»’N',
    visionHumanism: 'NhÃ¢n vÄƒn',
    visionHumanismDesc: 'NuÃ´i dÆ°á»¡ng nhÃ¢n cÃ¡ch, tinh tháº§n cá»™ng Ä‘á»“ng, tri thá»©c, lÃ²ng biáº¿t Æ¡n vÃ  Ã½ thá»©c cÃ´ng dÃ¢n.',
    visionPride: 'Tá»± tÃ´n',
    visionPrideDesc: 'TÃ´n vinh lá»‹ch sá»­, vÄƒn hÃ³a vÃ  chiá»u sÃ¢u vÄƒn hiáº¿n cá»§a dÃ¢n tá»™c.',
    visionLegacy: 'TrÆ°á»ng tá»“n',
    visionLegacyDesc: 'XÃ¢y dá»±ng háº¡ táº§ng vÄƒn hÃ³a, tri thá»©c vÃ  tráº£i nghiá»‡m cÃ³ giÃ¡ trá»‹ vá»¯ng bá»n cho tÆ°Æ¡ng lai dÃ¢n tá»™c Viá»‡t.',
    missionTitle: 'Sá»¨ Má»†NH',
    missionText:
      'Nhá»¯ng giÃ¡ trá»‹ tá»‘t Ä‘áº¹p Ä‘Æ°á»£c káº¿ thá»«a vÃ  tÃ´n vinh vá» VÄƒn Minh (khoa há»c, tá»• chá»©c xÃ£ há»™i, lá»‘i sá»‘ng) cá»§a Viá»‡t Nam Ä‘á»ƒ chuyá»ƒn táº£i cho cÃ¡c tháº¿ há»‡ tÆ°Æ¡ng lai.',
    missionQuote:
      'Viá»‡t VÄƒn Hiáº¿n khÃ´ng chá»‰ lÃ  má»™t cÃ¡i tÃªn, mÃ  Ä‘Ã¢y lÃ  má»™t Ä‘iá»u cam káº¿t vá»›i cha Ã´ng Ä‘em VÄƒn minh Viá»‡t cho cÃ¡c tháº¿ há»‡ tÆ°Æ¡ng lai.',

    philosophyEyebrow: 'TRIáº¾T LÃ',
    philosophyTitle: 'TRIáº¾T LÃ HOáº T Äá»˜NG',
    philosophyText:
      'Viá»‡t VÄƒn Hiáº¿n hoáº¡t Ä‘á»™ng dá»±a trÃªn triáº¿t lÃ½: di sáº£n chá»‰ thá»±c sá»± cÃ³ tÆ°Æ¡ng lai khi hÃ²a nháº­p vÃ o Ä‘á»i sá»‘ng hiá»‡n Ä‘áº¡i. Báº£o tá»“n lÃ  ná»n táº£ng, nhÆ°ng tÃ¡i táº¡o sá»©c sá»‘ng cho di sáº£n má»›i lÃ  má»¥c tiÃªu hÃ ng Ä‘áº§u. ChÃºng tÃ´i khÃ´ng coi truyá»n thá»‘ng vÃ  hiá»‡n Ä‘áº¡i lÃ  hai thÃ¡i cá»±c Ä‘á»‘i láº­p mÃ  Ä‘áº·t chÃºng trong má»‘i quan há»‡ cá»™ng hÆ°á»Ÿng, tÆ°Æ¡ng há»—.',
    philosophyTradition: 'Truyá»n thá»‘ng',
    philosophyTraditionDesc: 'Cung cáº¥p chiá»u sÃ¢u, báº£n sáº¯c vÃ  cÃ¡c giÃ¡ trá»‹ cá»‘t lÃµi.',
    philosophyModernity: 'Hiá»‡n Ä‘áº¡i',
    philosophyModernityDesc: 'Mang Ä‘áº¿n cÃ´ng cá»¥, ngÃ´n ngá»¯ vÃ  kháº£ nÄƒng lan tá»a.',
    philosophyTechnology: 'CÃ´ng nghá»‡',
    philosophyTechnologyDesc: 'KhÃ´ng thay tháº¿ mÃ  má»Ÿ rá»™ng kháº£ nÄƒng tiáº¿p cáº­n vÄƒn hÃ³a.',
    philosophyEntertainment: 'Giáº£i trÃ­',
    philosophyEntertainmentDesc: 'Trá»Ÿ thÃ nh cáº§u ná»‘i Ä‘Æ°a lá»‹ch sá»­ Ä‘áº¿n gáº§n hÆ¡n vá»›i cÃ´ng chÃºng.',
    philosophyCreativity: 'SÃ¡ng táº¡o',
    philosophyCreativityDesc: 'GiÃºp báº£n sáº¯c vá»¯ng bÆ°á»›c vÃ o tÆ°Æ¡ng lai.',
    philosophyQuote:
      'â€œViá»‡t VÄƒn Hiáº¿n hÆ°á»›ng Ä‘áº¿n má»¥c tiÃªu trá»Ÿ thÃ nh má»™t tá»• chá»©c vÄƒn hÃ³a táº§m vÃ³c, vá»«a Ä‘áº£m báº£o chiá»u sÃ¢u há»c thuáº­t, vá»«a sá»Ÿ há»¯u nÄƒng lá»±c sÃ¡ng táº¡o vÃ  á»©ng dá»¥ng cÃ´ng nghá»‡ Ä‘á»ƒ táº¡o ra nhá»¯ng giÃ¡ trá»‹ bá»n vá»¯ng, lan tá»a rá»™ng kháº¯p.â€',

    coreValuesTitle: 'GIÃ TRá»Š Cá»T LÃ•I',
    coreNationalPride: 'Tá»± HÃ o DÃ¢n Tá»™c',
    coreNationalPrideDesc: 'Má»i hoáº¡t Ä‘á»™ng Ä‘á»u tÃ´n trá»ng vÃ  tá»± hÃ o vá» lá»‹ch sá»­, vÄƒn hÃ³a vÃ  con ngÆ°á»i Viá»‡t Nam.',
    coreKnowledge: 'Chiá»u SÃ¢u Tri Thá»©c',
    coreKnowledgeDesc: 'Coi nghiÃªn cá»©u vÃ  tÃ­nh há»c thuáº­t lÃ  ná»n táº£ng cá»‘t lÃµi Ä‘á»ƒ xÃ¢y dá»±ng nhá»¯ng sáº£n pháº©m giÃ¡ trá»‹ lÃ¢u dÃ i.',
    coreHumanity: 'TÃ­nh NhÃ¢n VÄƒn',
    coreHumanityDesc: 'CÃ¡c dá»± Ã¡n hÆ°á»›ng tá»›i nuÃ´i dÆ°á»¡ng nhÃ¢n cÃ¡ch, tinh tháº§n cá»™ng Ä‘á»“ng vÃ  lÃ²ng biáº¿t Æ¡n.',
    coreResponsibleCreativity: 'SÃ¡ng Táº¡o CÃ³ TrÃ¡ch Nhiá»‡m',
    coreResponsibleCreativityDesc: 'Khuyáº¿n khÃ­ch Ä‘á»•i má»›i nhÆ°ng luÃ´n tÃ´n trá»ng sá»± tháº­t lá»‹ch sá»­ vÃ  báº£n sáº¯c vÄƒn hÃ³a.',
    coreModernOpen: 'Hiá»‡n Äáº¡i VÃ  Má»Ÿ',
    coreModernOpenDesc: 'Chá»§ Ä‘á»™ng á»©ng dá»¥ng cÃ´ng nghá»‡ vÃ  cÃ¡c phÆ°Æ¡ng phÃ¡p truyá»n thÃ´ng má»›i trong thá»i Ä‘áº¡i sá»‘.',
    coreLongTerm: 'Táº§m NhÃ¬n DÃ i Háº¡n',
    coreLongTermDesc: 'XÃ¢y dá»±ng háº¡ táº§ng vÄƒn hÃ³a, tri thá»©c vÃ  tráº£i nghiá»‡m vá»¯ng cháº¯c cho tÆ°Æ¡ng lai.',

    commitmentTitle: 'CAM Káº¾T',
    commitmentHeritage: 'Cam káº¿t vá»›i di sáº£n',
    commitmentHeritageDesc: 'Tiáº¿p cáº­n di sáº£n vá»›i sá»± tÃ´n trá»ng, trÃ¡ch nhiá»‡m vÃ  tÆ° duy lÃ¢u dÃ i, giá»¯ gÃ¬n trá»n váº¹n ná»n táº£ng giÃ¡ trá»‹ Ä‘Ã­ch thá»±c.',
    commitmentSociety: 'Cam káº¿t vá»›i xÃ£ há»™i',
    commitmentSocietyDesc: 'Má»—i sÃ¡ng kiáº¿n Ä‘á»u hÆ°á»›ng tá»›i tÃ¡c Ä‘á»™ng vÄƒn hÃ³a tÃ­ch cá»±c, Ä‘Ã³ng gÃ³p tri thá»©c vÃ  phÃ¡t triá»ƒn xÃ£ há»™i cÃ³ chiá»u sÃ¢u.',
    commitmentYouth: 'Cam káº¿t vá»›i tháº¿ há»‡ tráº»',
    commitmentYouthDesc: 'Coi tháº¿ há»‡ tráº» lÃ  nhá»¯ng ngÆ°á»i Ä‘á»“ng sÃ¡ng táº¡o trong viá»‡c Ä‘á»•i má»›i vÃ  phÃ¡t triá»ƒn di sáº£n Viá»‡t Nam.',
    commitmentNation: 'Cam káº¿t vá»›i quá»‘c gia',
    commitmentNationDesc: 'Ná»— lá»±c Ä‘Æ°a má»—i dá»± Ã¡n trá»Ÿ thÃ nh má»™t Ä‘Ã³ng gÃ³p lÃ¢u dÃ i nháº±m nÃ¢ng táº§m báº£n sáº¯c vÃ  vá»‹ tháº¿ vÄƒn hÃ³a dÃ¢n tá»™c.',

    featuredProjects: 'Dá»± Ã¡n ná»•i báº­t',
    projectHeading: 'Kiáº¿n táº¡o khÃ´ng gian vÄƒn hÃ³a Ä‘áº³ng cáº¥p',
    projectPrev: 'Dá»± Ã¡n trÆ°á»›c',
    projectNext: 'Dá»± Ã¡n tiáº¿p theo',
    projectsUpdating: 'Dá»± Ã¡n Ä‘ang Ä‘Æ°á»£c cáº­p nháº­t.',
    projectCompleted: 'ÄÃ£ hoÃ n thÃ nh',
    projectPlanning: 'Sáº¯p triá»ƒn khai',
    projectActive: 'Äang triá»ƒn khai',
    viewDetails: 'Xem chi tiáº¿t',
    newsEyebrow: 'Nhá»‹p sá»‘ng vÄƒn hiáº¿n',
    newsHeading: 'Tin tá»©c vÃ  sá»± kiá»‡n',
    newsTypeNews: 'Tin tá»©c',
    newsTypeEvent: 'Sá»± kiá»‡n',
    readMore: 'Xem thÃªm',

    contactHeading: 'LIÃŠN Há»†',
    contactCompany: 'CÃ”NG TY Cá»” PHáº¦N VIá»†T VÄ‚N HIáº¾N',
    contactAddress: '546 Phạm Văn Đồng, Phường Bình Lợi Trung, TP.HCM',
    contactName: 'Há» vÃ  tÃªn',
    contactPhone: 'Sá»‘ Ä‘iá»‡n thoáº¡i',
    contactMessage: 'Ná»™i dung',
    contactConsent: 'Vui lÃ²ng Ä‘á»ƒ cho chÃºng tÃ´i biáº¿t thÃªm chi tiáº¿t vá» yÃªu cáº§u cá»§a báº¡n',
    contactSubmit: 'Gá»­i liÃªn há»‡',
    contactSuccess: 'Cáº£m Æ¡n báº¡n. Viá»‡t VÄƒn Hiáº¿n sáº½ liÃªn há»‡ trong thá»i gian sá»›m nháº¥t.',
    contactError: 'KhÃ´ng thá»ƒ gá»­i liÃªn há»‡.',

    footerIntro: 'THÃ”NG ÄIá»†P Má»ž Äáº¦U',
    footerAbout: 'CHÃšNG TÃ”I LÃ€ AI',
    footerVisionMission: 'Táº¦M NHÃŒN / Sá»¨ Má»†NH',
    footerPhilosophy: 'TRIáº¾T LÃ HOáº T Äá»˜NG',
    footerCoreCommitment: 'GIÃ TRá»Š Cá»T LÃ•I / CAM Káº¾T',
    footerProjects: 'Dá»° ÃN / Sáº¢N PHáº¨M',
    footerNews: 'TIN Tá»¨C',
    terms: 'Äiá»u khoáº£n sá»­ dá»¥ng',
    home: 'Trang chá»§',
    termsTitle: 'ÄIá»€U KHOáº¢N Sá»¬ Dá»¤NG',
    termsScope: 'Pháº¡m vi sá»­ dá»¥ng website',
    termsScopeText:
      'Website Viá»‡t VÄƒn Hiáº¿n Ä‘Æ°á»£c xÃ¢y dá»±ng nháº±m giá»›i thiá»‡u thÃ´ng tin vá» tá»• chá»©c, dá»± Ã¡n, tin tá»©c, sá»± kiá»‡n vÃ  cÃ¡c hoáº¡t Ä‘á»™ng vÄƒn hÃ³a - sÃ¡ng táº¡o. NgÆ°á»i dÃ¹ng cÃ³ thá»ƒ truy cáº­p, tham kháº£o vÃ  chia sáº» thÃ´ng tin vá»›i má»¥c Ä‘Ã­ch phÃ¹ há»£p, tÃ´n trá»ng phÃ¡p luáº­t vÃ  thuáº§n phong má»¹ tá»¥c.',
    termsOwnership: 'Quyá»n sá»Ÿ há»¯u ná»™i dung',
    termsOwnershipText:
      'ToÃ n bá»™ ná»™i dung, hÃ¬nh áº£nh, tÆ° liá»‡u, thiáº¿t káº¿ vÃ  nháº­n diá»‡n hiá»ƒn thá»‹ trÃªn website thuá»™c quyá»n sá»Ÿ há»¯u hoáº·c quyá»n sá»­ dá»¥ng há»£p phÃ¡p cá»§a Viá»‡t VÄƒn Hiáº¿n vÃ  cÃ¡c Ä‘á»‘i tÃ¡c liÃªn quan. Viá»‡c sao chÃ©p, chá»‰nh sá»­a hoáº·c khai thÃ¡c thÆ°Æ¡ng máº¡i cáº§n cÃ³ sá»± Ä‘á»“ng Ã½ báº±ng vÄƒn báº£n.',
    termsResponsibility: 'TrÃ¡ch nhiá»‡m ngÆ°á»i dÃ¹ng',
    termsResponsibilityText:
      'NgÆ°á»i dÃ¹ng chá»‹u trÃ¡ch nhiá»‡m vá» tÃ­nh chÃ­nh xÃ¡c cá»§a thÃ´ng tin gá»­i qua biá»ƒu máº«u liÃªn há»‡ vÃ  cam káº¿t khÃ´ng thá»±c hiá»‡n cÃ¡c hÃ nh vi gÃ¢y áº£nh hÆ°á»Ÿng Ä‘áº¿n há»‡ thá»‘ng, dá»¯ liá»‡u hoáº·c tráº£i nghiá»‡m cá»§a ngÆ°á»i dÃ¹ng khÃ¡c.',
    termsContactInfo: 'ThÃ´ng tin liÃªn há»‡',
    termsContactInfoText:
      'Má»i cÃ¢u há»i liÃªn quan Ä‘áº¿n Ä‘iá»u khoáº£n sá»­ dá»¥ng, há»£p tÃ¡c ná»™i dung hoáº·c quyá»n sá»Ÿ há»¯u trÃ­ tuá»‡ cÃ³ thá»ƒ gá»­i vá» Viá»‡t VÄƒn Hiáº¿n qua email info@vietvanhien.vn hoáº·c sá»‘ Ä‘iá»‡n thoáº¡i 077 688 7877.'
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
    visionLegacyDesc: 'Building cultural, knowledge, and experiential infrastructure with lasting value for Vietnamâ€™s future.',
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
      'â€œViet Van Hien aims to become a cultural organization of stature, combining academic depth with creative capacity and technological application to create sustainable values with broad impact.â€',

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
    contactAddress: '546 Pham Van Dong Street, Binh Loi Trung Ward, Ho Chi Minh City',
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

