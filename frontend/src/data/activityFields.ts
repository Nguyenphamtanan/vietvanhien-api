export type LocalizedText = {
  vi: string;
  en: string;
};

export type ActivityField = {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  detail: LocalizedText;
  sections: Array<{
    heading: LocalizedText;
    body: LocalizedText;
  }>;
};

const detailHeadings = {
  activity: { vi: 'Nội dung hoạt động', en: 'Scope of Activity' },
  strategy: { vi: 'Ý nghĩa chiến lược', en: 'Strategic Meaning' },
  initiatives: { vi: 'Sáng kiến chiến lược', en: 'Strategic Initiatives' },
  value: { vi: 'Giá trị dài hạn', en: 'Long-term Value' }
};

function makeSections(detail: LocalizedText): ActivityField['sections'] {
  return [
    {
      heading: detailHeadings.activity,
      body: detail
    },
    {
      heading: detailHeadings.strategy,
      body: {
        vi: 'Lĩnh vực này góp phần đặt nền móng cho hệ sinh thái văn hóa - lịch sử - sáng tạo của Việt Văn Hiến, kết nối tri thức nền với những mô hình trải nghiệm hiện đại.',
        en: 'This field helps form the foundation of Viet Van Hien’s cultural, historical, and creative ecosystem by connecting core knowledge with modern experience models.'
      }
    },
    {
      heading: detailHeadings.initiatives,
      body: {
        vi: 'Các sáng kiến được triển khai theo hướng liên ngành, kết hợp nghiên cứu, thiết kế trải nghiệm, truyền thông, công nghệ và giáo dục cộng đồng.',
        en: 'Initiatives are developed through an interdisciplinary approach that combines research, experience design, communication, technology, and public education.'
      }
    },
    {
      heading: detailHeadings.value,
      body: {
        vi: 'Giá trị dài hạn là tạo ra năng lực thực thi bền vững, giúp di sản Việt Nam có đời sống mới trong cộng đồng và trong các ngành công nghiệp sáng tạo.',
        en: 'The long-term value is to create sustainable execution capacity, giving Vietnamese heritage a renewed life in communities and creative industries.'
      }
    }
  ];
}

export const activityFields: ActivityField[] = [
  {
    slug: 'nghien-cuu-tri-thuc-nen',
    title: {
      vi: 'Nghiên cứu, sưu tầm và phát triển tri thức nền về văn hóa - lịch sử Việt Nam',
      en: 'Cultural Knowledge Research'
    },
    summary: {
      vi: 'Xây dựng nền tảng tri thức học thuật về lịch sử, văn học, khảo cổ, di sản, nhân vật, phong tục và biểu tượng văn hóa Việt Nam.',
      en: 'Building an academic knowledge foundation on Vietnamese history, literature, archaeology, heritage, figures, customs, and cultural symbols.'
    },
    detail: {
      vi: 'Hoạt động tập trung vào nghiên cứu, sưu tầm, hệ thống hóa và phát triển tri thức nền, tạo cơ sở học thuật cho các dự án phục dựng, sáng tạo, giáo dục và truyền thông văn hóa.',
      en: 'This activity focuses on researching, collecting, systematizing, and developing foundational knowledge as an academic base for restoration, creative, educational, and cultural communication projects.'
    },
    sections: []
  },
  {
    slug: 'phuc-dung-tai-hien-di-san',
    title: {
      vi: 'Phục dựng và tái hiện di sản văn hóa - lịch sử bằng mô hình sáng tạo hiện đại',
      en: 'Heritage Restoration and Re-creation'
    },
    summary: {
      vi: 'Đưa di sản thoát khỏi trạng thái lưu trữ tĩnh để trở thành trải nghiệm sống động, giàu cảm xúc và gần hơn với công chúng.',
      en: 'Transforming heritage from static archives into vivid, emotional, and accessible public experiences.'
    },
    detail: {
      vi: 'Trọng tâm là bảo tàng số, trải nghiệm tương tác, phim tài liệu số, AR/VR/MR, game, animation và immersive experience để di sản có thể được tiếp cận bằng ngôn ngữ đương đại.',
      en: 'The focus includes digital museums, interactive experiences, digital documentaries, AR/VR/MR, games, animation, and immersive experiences that make heritage accessible through contemporary language.'
    },
    sections: []
  },
  {
    slug: 'cong-vien-van-hoa-lich-su',
    title: {
      vi: 'Phát triển công viên văn hóa - lịch sử - giải trí - giáo dục mang bản sắc Việt',
      en: 'Vietnamese Cultural and Historical Parks'
    },
    summary: {
      vi: 'Kiến tạo không gian trải nghiệm tích hợp văn hóa, lịch sử, giáo dục, du lịch và giải trí bằng ngôn ngữ hiện đại.',
      en: 'Creating integrated spaces for culture, history, education, tourism, and entertainment through a modern experience language.'
    },
    detail: {
      vi: 'Mô hình bao gồm khu chủ đề lịch sử, truyền thuyết, giáo dục tương tác, show đêm, multimedia, AR/VR/MR, lễ hội, ẩm thực và thủ công truyền thống.',
      en: 'The model includes historical theme zones, legends, interactive education, night shows, multimedia, AR/VR/MR, festivals, cuisine, and traditional crafts.'
    },
    sections: []
  },
  {
    slug: 'dien-anh-nghe-thuat-storytelling',
    title: {
      vi: 'Sản xuất điện ảnh, nghệ thuật, sân khấu, âm nhạc và nội dung kể chuyện',
      en: 'Cinema, Arts, and Storytelling'
    },
    summary: {
      vi: 'Chuyển hóa lịch sử và văn hóa Việt Nam thành tác phẩm điện ảnh, nghệ thuật, âm nhạc, sân khấu và storytelling đa phương tiện.',
      en: 'Transforming Vietnamese history and culture into cinema, art, music, stage works, and multimedia storytelling.'
    },
    detail: {
      vi: 'Lĩnh vực nhấn mạnh phim truyện lịch sử, phim tài liệu, docu-series, sân khấu, animation, multimedia storytelling và phát triển IP nhân vật.',
      en: 'This field emphasizes historical feature films, documentaries, docu-series, stage works, animation, multimedia storytelling, and character IP development.'
    },
    sections: []
  },
  {
    slug: 'cong-nghe-di-san',
    title: {
      vi: 'Ứng dụng công nghệ để phục dựng, lưu giữ và quảng bá di sản',
      en: 'Heritage Technology'
    },
    summary: {
      vi: 'Ứng dụng bảo tàng số, dữ liệu di sản, AR/VR/MR, immersive experience, animation, game và bản đồ số để mở rộng khả năng tiếp cận di sản.',
      en: 'Applying digital museums, heritage data, AR/VR/MR, immersive experiences, animation, games, and digital maps to expand access to heritage.'
    },
    detail: {
      vi: 'Công nghệ được xem là công cụ làm di sản sống lại, không phải lớp phủ trình diễn; mỗi ứng dụng cần phục vụ chiều sâu nội dung và khả năng tiếp cận cộng đồng.',
      en: 'Technology is seen as a tool to bring heritage to life, not a superficial display layer; each application must serve content depth and public accessibility.'
    },
    sections: []
  },
  {
    slug: 'giao-duc-trai-nghiem',
    title: {
      vi: 'Xây dựng nền tảng giáo dục trải nghiệm về lịch sử, văn hóa và bản sắc Việt Nam',
      en: 'Experiential Education'
    },
    summary: {
      vi: 'Phát triển học liệu, chương trình, workshop, tour học tập và mô hình giáo dục giúp thế hệ trẻ học lịch sử bằng trải nghiệm.',
      en: 'Developing learning materials, programs, workshops, study tours, and education models that help younger generations learn history through experience.'
    },
    detail: {
      vi: 'Đối tượng bao gồm học sinh, sinh viên, giáo viên, nhà trường, gia đình và cộng đồng học tập, với phương pháp lấy trải nghiệm làm trung tâm.',
      en: 'Audiences include students, teachers, schools, families, and learning communities, with experience-centered methods.'
    },
    sections: []
  },
  {
    slug: 'festival-cong-dong-sang-tao',
    title: {
      vi: 'Tổ chức cuộc thi, festival, chương trình cộng đồng và phong trào sáng tạo',
      en: 'Festivals and Creative Communities'
    },
    summary: {
      vi: 'Tạo không gian để nghệ sĩ, chuyên gia, người trẻ và cộng đồng tham gia làm mới di sản bằng ngôn ngữ sáng tạo.',
      en: 'Creating spaces where artists, experts, young people, and communities renew heritage through creative languages.'
    },
    detail: {
      vi: 'Hoạt động gồm cuộc thi phim, ảnh, hội họa, thiết kế, âm nhạc, nội dung số, festival, workshop và lab sáng tạo.',
      en: 'Activities include competitions in film, photography, painting, design, music, digital content, festivals, workshops, and creative labs.'
    },
    sections: []
  },
  {
    slug: 'vinh-danh-con-nguoi-viet',
    title: {
      vi: 'Chương trình vinh danh con người Việt Nam và các giá trị làm rạng danh dân tộc',
      en: 'Honoring Vietnamese People'
    },
    summary: {
      vi: 'Tôn vinh cá nhân, cộng đồng, danh nhân, anh hùng dân tộc và các giá trị góp phần làm rạng danh Việt Nam.',
      en: 'Honoring individuals, communities, historical figures, national heroes, and values that bring distinction to Vietnam.'
    },
    detail: {
      vi: 'Chương trình có hồ sơ nhân vật, triển lãm, phim ngắn, giải thưởng, không gian tôn vinh và nội dung giáo dục truyền cảm hứng.',
      en: 'Programs include profiles, exhibitions, short films, awards, honoring spaces, and inspirational educational content.'
    },
    sections: []
  },
  {
    slug: 'truyen-thong-van-hoa',
    title: {
      vi: 'Truyền thông thương hiệu văn hóa và quảng bá hình ảnh Việt Nam',
      en: 'Cultural Communication'
    },
    summary: {
      vi: 'Xây dựng chiến lược truyền thông văn hóa để đưa lịch sử, di sản và hình ảnh Việt Nam đến công chúng trong nước và quốc tế.',
      en: 'Building cultural communication strategies to bring Vietnamese history, heritage, and image to domestic and international audiences.'
    },
    detail: {
      vi: 'Bao gồm brand storytelling, nội dung đa nền tảng, chiến dịch chủ đề, hồ sơ nhân vật và hợp tác với nghệ sĩ, KOL, nền tảng truyền thông.',
      en: 'This includes brand storytelling, multi-platform content, thematic campaigns, character profiles, and collaboration with artists, KOLs, and media platforms.'
    },
    sections: []
  },
  {
    slug: 'hop-tac-he-sinh-thai',
    title: {
      vi: 'Kết nối đầu tư, hợp tác liên ngành và phát triển hệ sinh thái văn hóa - sáng tạo - công nghệ',
      en: 'Ecosystem Partnerships'
    },
    summary: {
      vi: 'Kết nối cơ quan quản lý, học thuật, nghệ sĩ, giáo dục, công nghệ, truyền thông, nhà đầu tư, địa phương và đối tác quốc tế.',
      en: 'Connecting public agencies, academia, artists, education, technology, media, investors, localities, and international partners.'
    },
    detail: {
      vi: 'Mục tiêu là quy tụ nguồn lực, mở rộng năng lực thực thi và bảo đảm phát triển dài hạn cho hệ sinh thái văn hóa - sáng tạo - công nghệ.',
      en: 'The goal is to gather resources, expand execution capacity, and ensure long-term development for the cultural, creative, and technology ecosystem.'
    },
    sections: []
  }
].map((field) => ({
  ...field,
  sections: makeSections(field.detail)
}));

export function getActivityField(slug: string) {
  return activityFields.find((field) => field.slug === slug);
}

export function getRelatedActivityFields(slug: string, limit = 3) {
  return activityFields.filter((field) => field.slug !== slug).slice(0, limit);
}
