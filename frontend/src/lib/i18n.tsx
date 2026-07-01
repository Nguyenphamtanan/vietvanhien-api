'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Locale = 'vi' | 'en';

export const translations = {
  vi: {
    company: 'Công ty',
    projects: 'Dự án',
    news: 'Tin tức',
    contact: 'Liên hệ',
    slogan: 'Non Sông nghìn thuở - Vững \u00c2u Vàng',

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
    visionSubheading: 'GIÁ TRỊ CỐT LÕI: NH\u00c2N VĂN - TỰ TÔN - TRƯỜNG TỒN',
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

    activityFieldsMenu: 'Lĩnh vực hoạt động',
    activityFieldsEyebrow: 'HỆ SINH THÁI',
    activityFieldsTitle: 'Lĩnh vực hoạt động',
    activityFieldsDescription:
      'Nghiên cứu - phục dựng - sáng tạo - giáo dục - công nghệ - truyền thông - trải nghiệm công chúng được kết nối trong một cấu trúc chiến lược thống nhất.',
    viewAllFields: 'Xem tất cả lĩnh vực',
    explore: 'Khám phá',
    fieldCategory: 'Lĩnh vực hoạt động',
    allFields: 'Tất cả lĩnh vực',
    relatedFields: 'Lĩnh vực liên quan',
    backToAllFields: 'Tất cả lĩnh vực',
    fieldsHeroDescription:
      'Mười nhóm năng lực tạo nên hệ sinh thái văn hóa - lịch sử - sáng tạo - công nghệ của Việt Văn Hiến.',
    fieldNotFound: 'Không tìm thấy lĩnh vực.',

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
    companyAbout: 'Chúng tôi là ai',
    companyVisionMission: 'Tầm nhìn & Sứ mệnh',
    companyPhilosophy: 'Triết lý hoạt động',
    companyCoreValues: 'Giá trị cốt lõi',
    companyCommitment: 'Cam kết',
    companyAboutTitle: 'Việt Văn Hiến Là Ai?',
    companyAboutDescription: 'Tổ chức định hướng nghiên cứu, phát triển và lan tỏa các giá trị văn hóa - lịch sử Việt Nam bằng mô hình tích hợp giữa tri thức, sáng tạo, giáo dục, công nghệ và trải nghiệm công chúng.',
    companyAboutP1:
      'Việt Văn Hiến là tổ chức định hướng nghiên cứu, xây dựng, phát triển và quảng bá các giá trị văn học, lịch sử, di sản văn hóa, điện ảnh, nghệ thuật, khảo cổ và công nghệ giải trí gắn với bản sắc Việt Nam.',
    companyAboutP2:
      'Việt Văn Hiến không tiếp cận di sản như một lớp ký ức tĩnh, mà xem đó là nguồn năng lượng sống có thể được nghiên cứu, phục dựng, tái hiện và chuyển hóa thành những sản phẩm, không gian, chương trình và trải nghiệm có sức lan tỏa.',
    companyAboutP3:
      'Mô hình hoạt động của tổ chức kết hợp nghiên cứu, sưu tầm, phục dựng, sáng tạo, giáo dục, công nghệ và trải nghiệm công chúng, nhằm đưa chiều sâu văn hiến Việt Nam bước vào đời sống đương đại.',
    companyAboutModelTitle: 'Mô hình tích hợp',
    companyAboutModel1: 'Nghiên cứu và sưu tầm tri thức nền về văn hóa - lịch sử Việt Nam.',
    companyAboutModel2: 'Phục dựng, tái hiện và phát triển di sản bằng ngôn ngữ sáng tạo hiện đại.',
    companyAboutModel3: 'Ứng dụng công nghệ, giáo dục và truyền thông để mở rộng khả năng tiếp cận của công chúng.',

    companyVisionMissionTitle: 'Tầm Nhìn & Sứ Mệnh',
    companyVisionMissionDescription: 'Tầm nhìn chiến lược và bốn định hướng sứ mệnh đặt nền cho hệ sinh thái văn hóa - lịch sử - sáng tạo - công nghệ của Việt Văn Hiến.',
    companyStrategicVision: 'Tầm Nhìn Chiến Lược',
    companyVisionP1:
      'Việt Văn Hiến hướng tới trở thành tổ chức tiên phong của Việt Nam trong kiến tạo hệ sinh thái văn hóa - lịch sử - sáng tạo - công nghệ giải trí, nơi di sản được nghiên cứu nghiêm túc và tái hiện bằng những hình thức hiện đại, hấp dẫn.',
    companyVisionP2:
      'Tầm nhìn này không dừng ở việc bảo tồn, mà mở rộng sang việc tạo dựng hạ tầng tri thức, nội dung, trải nghiệm và hợp tác để văn hóa Việt có khả năng lan tỏa bền vững trong xã hội đương đại.',
    companyMissionDirections: 'Bốn Định Hướng Sứ Mệnh',
    companyMission1Title: 'Gìn giữ và phục dựng chiều sâu văn hiến Việt',
    companyMission1Desc: 'Xây dựng nền tảng nghiên cứu, sưu tầm và hệ thống hóa tri thức về lịch sử, văn học, khảo cổ, di sản, nhân vật và biểu tượng văn hóa Việt Nam.',
    companyMission2Title: 'Tái tạo sức sống cho di sản',
    companyMission2Desc: 'Chuyển hóa di sản thành phim, nghệ thuật, không gian trải nghiệm, công viên văn hóa, bảo tàng số và các hình thức sáng tạo có khả năng chạm tới công chúng.',
    companyMission3Title: 'Truyền cảm hứng cho thế hệ trẻ',
    companyMission3Desc: 'Phát triển giáo dục trải nghiệm, chương trình cộng đồng, cuộc thi, festival và nội dung số giúp người trẻ tiếp cận lịch sử bằng cảm xúc, tự hào và hiểu biết.',
    companyMission4Title: 'Kết nối nguồn lực để phát triển hệ sinh thái',
    companyMission4Desc: 'Liên kết cơ quan quản lý, học thuật, nghệ sĩ, giáo dục, công nghệ, truyền thông, nhà đầu tư, địa phương và đối tác quốc tế nhằm tạo năng lực phát triển dài hạn.',

    companyPhilosophyTitle: 'Triết Lý: Truyền Thống & Hiện Đại Cộng Hưởng',
    companyPhilosophyDescription: 'Di sản chỉ thực sự có tương lai khi bước vào đời sống đương đại bằng tri thức, sáng tạo và công nghệ.',
    companyPhilosophyP1:
      'Việt Văn Hiến hoạt động dựa trên triết lý: di sản chỉ thực sự có tương lai khi hòa nhập vào đời sống hiện đại. Bảo tồn là nền tảng, nhưng tái tạo sức sống cho di sản mới là mục tiêu hàng đầu.',
    companyPhilosophyP2:
      'Truyền thống và hiện đại không được đặt trong thế đối lập. Truyền thống cung cấp chiều sâu, bản sắc và hệ giá trị; hiện đại mang đến công cụ, ngôn ngữ, công nghệ và khả năng lan tỏa.',
    companyPhilosophyP3:
      'Khi hai nguồn lực này cộng hưởng, di sản có thể trở thành trải nghiệm sống động, nội dung sáng tạo, chương trình giáo dục và sản phẩm văn hóa có sức sống trong cộng đồng.',
    companyPhilosophyPoint1Title: 'Bảo tồn là nền tảng',
    companyPhilosophyPoint1Desc: 'Mọi sáng tạo cần xuất phát từ sự tôn trọng tri thức, lịch sử, bối cảnh và giá trị tinh thần của di sản.',
    companyPhilosophyPoint2Title: 'Tái tạo sức sống là mục tiêu',
    companyPhilosophyPoint2Desc: 'Di sản cần được chuyển hóa thành trải nghiệm, nội dung và không gian có khả năng đối thoại với công chúng hôm nay.',
    companyPhilosophyPoint3Title: 'Công nghệ là cầu nối',
    companyPhilosophyPoint3Desc: 'Công nghệ không thay thế di sản, mà mở rộng cách tiếp cận, lưu giữ, phục dựng và lan tỏa di sản.',

    companyCoreValuesTitle: 'Sáu Giá Trị Cốt Lõi',
    companyCoreValuesDescription: 'Sáu giá trị định hướng cách Việt Văn Hiến nghiên cứu, sáng tạo, hợp tác và phát triển các dự án văn hóa.',
    companyCoreValue1Title: 'Tự hào dân tộc',
    companyCoreValue1Desc: 'Mọi hoạt động đều tôn trọng, gìn giữ và khơi dậy niềm tự hào về lịch sử, văn hóa và con người Việt Nam.',
    companyCoreValue2Title: 'Chiều sâu tri thức',
    companyCoreValue2Desc: 'Nghiên cứu, học thuật và tính chính xác là nền tảng để xây dựng những sản phẩm văn hóa có giá trị lâu dài.',
    companyCoreValue3Title: 'Tính nhân văn',
    companyCoreValue3Desc: 'Các dự án hướng tới nuôi dưỡng nhân cách, tinh thần cộng đồng, lòng biết ơn và ý thức trách nhiệm với xã hội.',
    companyCoreValue4Title: 'Sáng tạo có trách nhiệm',
    companyCoreValue4Desc: 'Đổi mới hình thức biểu đạt nhưng luôn tôn trọng sự thật lịch sử, bản sắc văn hóa và giá trị tinh thần của di sản.',
    companyCoreValue5Title: 'Hiện đại và mở',
    companyCoreValue5Desc: 'Chủ động ứng dụng công nghệ, truyền thông mới và hợp tác liên ngành để mở rộng khả năng tiếp cận văn hóa.',
    companyCoreValue6Title: 'Tầm nhìn dài hạn',
    companyCoreValue6Desc: 'Xây dựng hạ tầng tri thức, nội dung, trải nghiệm và hợp tác bền vững cho tương lai văn hóa Việt Nam.',

    companyCommitmentTitle: 'Bốn Cam Kết Nền Tảng',
    companyCommitmentDescription: 'Các cam kết nền tảng thể hiện trách nhiệm của Việt Văn Hiến với di sản, thế hệ trẻ, xã hội và quốc gia.',
    companyCommitment1Title: 'Cam kết với di sản',
    companyCommitment1Desc: 'Tiếp cận di sản với sự tôn trọng, trách nhiệm và tư duy dài hạn, giữ gìn trọn vẹn nền tảng giá trị đích thực.',
    companyCommitment2Title: 'Cam kết với thế hệ trẻ',
    companyCommitment2Desc: 'Tạo ra những hình thức tiếp cận mới để thế hệ trẻ hiểu lịch sử, yêu văn hóa và trở thành lực lượng đồng sáng tạo trong phát triển di sản.',
    companyCommitment3Title: 'Cam kết với xã hội',
    companyCommitment3Desc: 'Mỗi sáng kiến hướng tới tác động văn hóa tích cực, đóng góp tri thức và xây dựng đời sống xã hội nhân văn, giàu bản sắc.',
    companyCommitment4Title: 'Cam kết với quốc gia',
    companyCommitment4Desc: 'Nỗ lực đưa mỗi dự án trở thành đóng góp lâu dài nhằm nâng tầm bản sắc, hình ảnh và vị thế văn hóa Việt Nam.',

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
    slogan: 'A Thousand-year land - A Golden Foundation',

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

    activityFieldsMenu: 'Activity Fields',
    activityFieldsEyebrow: 'ECOSYSTEM',
    activityFieldsTitle: 'Activity Fields',
    activityFieldsDescription:
      'Research - restoration - creativity - education - technology - communication - public experiences are connected within one unified strategic structure.',
    viewAllFields: 'View all fields',
    explore: 'Explore',
    fieldCategory: 'Activity Field',
    allFields: 'All fields',
    relatedFields: 'Related fields',
    backToAllFields: 'All fields',
    fieldsHeroDescription:
      'Ten capability groups shape Viet Van Hien’s cultural, historical, creative, and technology ecosystem.',
    fieldNotFound: 'Field not found.',

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
    companyAbout: 'Who We Are',
    companyVisionMission: 'Vision & Mission',
    companyPhilosophy: 'Operating Philosophy',
    companyCoreValues: 'Core Values',
    companyCommitment: 'Commitments',
    companyAboutTitle: 'Who Is Viet Van Hien?',
    companyAboutDescription: 'An organization dedicated to researching, developing, and sharing Vietnamese cultural and historical values through an integrated model of knowledge, creativity, education, technology, and public experience.',
    companyAboutP1:
      'Viet Van Hien is an organization oriented toward researching, building, developing, and promoting the values of literature, history, cultural heritage, cinema, arts, archaeology, and entertainment technology connected to Vietnamese identity.',
    companyAboutP2:
      'Viet Van Hien does not approach heritage as static memory, but as a living source of energy that can be researched, restored, re-created, and transformed into products, spaces, programs, and experiences with broad social resonance.',
    companyAboutP3:
      'The organization’s operating model combines research, collection, restoration, creativity, education, technology, and public experience to bring the depth of Vietnamese civilization into contemporary life.',
    companyAboutModelTitle: 'Integrated Model',
    companyAboutModel1: 'Researching and collecting foundational knowledge about Vietnamese culture and history.',
    companyAboutModel2: 'Restoring, re-creating, and developing heritage through modern creative languages.',
    companyAboutModel3: 'Applying technology, education, and communication to expand public access.',

    companyVisionMissionTitle: 'Vision & Mission',
    companyVisionMissionDescription: 'A strategic vision and four mission directions that form the foundation of Viet Van Hien’s cultural, historical, creative, and technology ecosystem.',
    companyStrategicVision: 'Strategic Vision',
    companyVisionP1:
      'Viet Van Hien aims to become a pioneering Vietnamese organization in building a cultural, historical, creative, and entertainment technology ecosystem where heritage is rigorously researched and re-created through modern, engaging forms.',
    companyVisionP2:
      'This vision goes beyond preservation. It expands toward creating knowledge infrastructure, content, experiences, and partnerships that allow Vietnamese culture to spread sustainably in contemporary society.',
    companyMissionDirections: 'Four Mission Directions',
    companyMission1Title: 'Preserve and restore the depth of Vietnamese civilization',
    companyMission1Desc: 'Build a foundation of research, collection, and systematized knowledge about Vietnamese history, literature, archaeology, heritage, figures, and cultural symbols.',
    companyMission2Title: 'Renew the vitality of heritage',
    companyMission2Desc: 'Transform heritage into films, arts, experiential spaces, cultural parks, digital museums, and creative forms that can reach the public.',
    companyMission3Title: 'Inspire younger generations',
    companyMission3Desc: 'Develop experiential education, community programs, competitions, festivals, and digital content that help young people approach history with emotion, pride, and understanding.',
    companyMission4Title: 'Connect resources to develop the ecosystem',
    companyMission4Desc: 'Link public agencies, academia, artists, education, technology, media, investors, localities, and international partners to create long-term development capacity.',

    companyPhilosophyTitle: 'Philosophy: Tradition & Modernity in Resonance',
    companyPhilosophyDescription: 'Heritage only has a true future when it enters contemporary life through knowledge, creativity, and technology.',
    companyPhilosophyP1:
      'Viet Van Hien operates on the philosophy that heritage only has a true future when it integrates into modern life. Preservation is the foundation, but renewing the vitality of heritage is the central goal.',
    companyPhilosophyP2:
      'Tradition and modernity are not opposites. Tradition provides depth, identity, and a value system; modernity provides tools, language, technology, and the ability to spread.',
    companyPhilosophyP3:
      'When these forces resonate, heritage can become vivid experiences, creative content, educational programs, and cultural products with real life in the community.',
    companyPhilosophyPoint1Title: 'Preservation is the foundation',
    companyPhilosophyPoint1Desc: 'All creativity must begin with respect for knowledge, history, context, and the spiritual values of heritage.',
    companyPhilosophyPoint2Title: 'Renewing vitality is the goal',
    companyPhilosophyPoint2Desc: 'Heritage should be transformed into experiences, content, and spaces that can converse with today’s public.',
    companyPhilosophyPoint3Title: 'Technology is a bridge',
    companyPhilosophyPoint3Desc: 'Technology does not replace heritage; it expands the ways heritage is accessed, preserved, restored, and shared.',

    companyCoreValuesTitle: 'Six Core Values',
    companyCoreValuesDescription: 'Six values guide how Viet Van Hien researches, creates, collaborates, and develops cultural projects.',
    companyCoreValue1Title: 'National Pride',
    companyCoreValue1Desc: 'Every activity respects, preserves, and awakens pride in Vietnamese history, culture, and people.',
    companyCoreValue2Title: 'Intellectual Depth',
    companyCoreValue2Desc: 'Research, scholarship, and accuracy are the foundation for cultural products with long-term value.',
    companyCoreValue3Title: 'Humanistic Values',
    companyCoreValue3Desc: 'Projects aim to nurture character, community spirit, gratitude, and a sense of social responsibility.',
    companyCoreValue4Title: 'Responsible Creativity',
    companyCoreValue4Desc: 'Innovating forms of expression while respecting historical truth, cultural identity, and the spiritual value of heritage.',
    companyCoreValue5Title: 'Modern and Open',
    companyCoreValue5Desc: 'Proactively applying technology, new media, and interdisciplinary collaboration to expand cultural access.',
    companyCoreValue6Title: 'Long-term Vision',
    companyCoreValue6Desc: 'Building sustainable knowledge, content, experience, and partnership infrastructure for the future of Vietnamese culture.',

    companyCommitmentTitle: 'Four Foundational Commitments',
    companyCommitmentDescription: 'These foundational commitments express Viet Van Hien’s responsibility to heritage, younger generations, society, and the nation.',
    companyCommitment1Title: 'Commitment to Heritage',
    companyCommitment1Desc: 'Approaching heritage with respect, responsibility, and long-term thinking while preserving its authentic value foundation.',
    companyCommitment2Title: 'Commitment to Younger Generations',
    companyCommitment2Desc: 'Creating new forms of access so young people understand history, love culture, and become co-creators in heritage development.',
    companyCommitment3Title: 'Commitment to Society',
    companyCommitment3Desc: 'Each initiative aims for positive cultural impact, knowledge contribution, and a humane, identity-rich social life.',
    companyCommitment4Title: 'Commitment to the Nation',
    companyCommitment4Desc: 'Making every project a lasting contribution to elevating Vietnam’s identity, image, and cultural standing.',

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
