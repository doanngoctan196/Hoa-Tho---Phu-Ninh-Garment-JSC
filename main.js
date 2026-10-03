(function () {
  'use strict';

  var EMAIL = 'phuninhhoatho@gmail.com';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var clamp = function (v, a, b) { return Math.min(b === undefined ? 1 : b, Math.max(a === undefined ? 0 : a, v)); };

  /* ================= i18n (EN / VI) ================= */
  var D = {
    en: {
      title: 'Hoa Tho - Phu Ninh Garment JSC | Trouser manufacturer, Vietnam',
      desc: 'Hoa Tho - Phu Ninh Garment JSC sews trousers for buyers in the EU, the US and Japan. Part of the Hoa Tho group, whose roots go back to 1962.',
      brand: 'Hoa Tho - Phu Ninh', n_about: 'About', n_products: 'Trousers', n_markets: 'Markets', n_process: 'Process', n_contact: 'Contact',
      hdr_cta: 'Request a quote',
      hero_co: 'Hoa Tho - Phu Ninh Garment JSC',
      hero_h: 'Trousers sewn for Europe, America and Japan, from central Vietnam.',
      hero_lead: 'We focus on one garment and sew it with the care export buyers expect. Part of the Hoa Tho group, whose roots go back to 1962.',
      hero_cta1: 'Request a quote', hero_cta2: 'See our trousers', hero_hint: 'Scroll to pull up the next page',
      hero_art: 'Trousers with orange topstitching',
      ab_h: 'Part of a textile group that began in 1962.',
      ab_p1: 'Hòa Thọ started in 1962 as a weaving mill in Da Nang and grew into one of the largest garment groups in Vietnam, a member of Vinatex. Hoa Tho - Phu Ninh Garment JSC was founded in 2012 with a factory in the Chợ Lò Industrial Cluster, Phú Ninh.',
      ab_p2: 'Our focus is trousers. One product, made again and again and made well, is how we keep fit, finish and delivery consistent.',
      fk_reg: 'Registered name', fk_en: 'English name', fk_est: 'Registered', fv_est: '15 March 2012',
      fk_grp: 'Group', fv_grp: 'Hoa Tho Textile-Garment Corporation, a member of Vinatex',
      fk_loc: 'Factory', fv_loc: 'Chợ Lò Industrial Cluster, Chiên Đàn Commune, Da Nang City, Vietnam', fk_tax: 'Tax code',
      tl1_t: 'Hòa Thọ weaving mill opens in Da Nang', tl1_p: 'The mill that would grow into the Hoa Tho textile and garment group.',
      tl2_t: 'The group becomes a joint-stock corporation', tl2_p: 'Hoa Tho Textile-Garment Corporation officially begins operating in February 2007.',
      tl3_t: 'Hoa Tho - Phu Ninh is founded', tl3_p: 'Business registered on 15 March, with operations starting on 1 July.',
      tl4_k: 'Today', tl4_t: 'Trousers for buyers in the EU, US and Japan', tl4_p: 'One focused factory, backed by a group with decades of export experience.',
      pr_h: 'Trousers are what we make.', pr_lead: 'The trouser types we are set up to sew.', car_label: 'Trouser types', car_prev: 'Previous trouser type', car_next: 'Next trouser type', car_hint: 'Drag or scroll',
      c1_t: 'Dress and smart-casual trousers', c1_p: 'Woven trousers with clean waistbands, crisp creases and even topstitching, sewn in size sets that stay consistent from the first carton to the last.', c1_tags: 'Woven|Flat-front|Pleated',
      c2_t: 'Workwear trousers', c2_p: 'Made for daily wear: reinforced stress points, bar-tacks, utility pockets and durable stitching that holds up after many washes.', c2_tags: 'Reinforced seams|Utility pockets|Heavy fabrics',
      c3_t: 'Wrinkle-free trousers', c3_p: 'Easy-care fabrics, pressed and finished so they ship flat and look right out of the bag.', c3_tags: 'Easy care|Pressed finish|Travel-ready',
      c4_t: 'Sewn to your tech pack', c4_p: 'Send us your patterns, spec sheet and trims. We sew to your specification, or help develop the pattern and samples with you.', c4_tags: 'Cut and sew|Sampling|Repeat orders',
      mk_h: 'Built around three buyer standards.', mk_lead: 'The Hoa Tho group exports to the US, the EU, Japan and other markets.',
      mk_eu_t: 'European Union', mk_eu_p: 'Buyers ask about chemicals, sustainability and traceability. Share your restricted-substance list and compliance requirements up front, and we plan the order around them.',
      mk_us_t: 'United States', mk_us_p: 'Large programs, firm delivery windows and retailer audits. We plan lines around your ship dates and keep size sets consistent across repeat orders.',
      mk_jp_t: 'Japan', mk_jp_p: 'Buyers inspect closely: straight stitching, clean finishing and careful packing. We sew and check to that standard.',
      st_h: 'Backed by the Hoa Tho group.',
      st1_t: 'Member of Vinatex', st1_p: 'The group belongs to the Vietnam National Textile and Garment Group.',
      st2_t: 'ISO 9001 and ISO 14001', st2_p: 'Quality and environmental management systems run at group level.',
      st3_t: 'Brand experience', st3_p: 'The group has sewn for brands such as Snickers, Haggar, Calvin Klein and Burton.',
      st_note: 'Group-level information from public sources. Ask us which standards apply to your order.',
      pc_h: 'From tech pack to the container.', pc_lead: 'Six steps, each with a check before the next one starts.',
      pc1_t: 'Review the tech pack', pc1_p: 'We read your tech pack, spec sheet and size set before we quote.',
      pc2_t: 'Pattern and sample', pc2_p: 'Patterns are made, a sample is sewn, and it is fitted and approved before bulk.',
      pc3_t: 'Fabric and cutting', pc3_p: 'Fabric is inspected and cut by marker plan to keep waste low.',
      pc4_t: 'Sewing lines', pc4_p: 'Operators sew in lines, with checks at key operations: waistband, fly, pockets and hem.',
      pc5_t: 'Finishing and inspection', pc5_p: 'Pressing, thread trimming, measurement and final inspection.',
      pc6_t: 'Packing and shipping', pc6_p: 'Packed to your instructions and shipped on schedule to the EU, the US or Japan.',
      ct_h: 'Send us your tech pack.', ct_p: 'Tell us the style, quantity and destination. We reply by email.',
      ct_email: 'Email', ct_phone: 'Phone', ct_addr: 'Factory',
      lb_name: 'Your name', lb_email: 'Your email', lb_co: 'Company', lb_mk: 'Destination market', lb_msg: 'Message',
      o_eu: 'European Union', o_us: 'United States', o_jp: 'Japan', o_ot: 'Other',
      map_title: 'Map showing the Hoa Tho - Phu Ninh factory location', map_tap: 'Click or tap to use the map', map_open: 'Open in Google Maps', map_dir: 'Get directions',
      err: 'Please enter your name and a message.', btn_send: 'Open email app to send',
      sent_t: 'Email did not open? Use one of these:', sent_app: 'Open email app', sent_gmail: 'Open in Gmail', sent_copy: 'Copy message', copied: 'Copied. Paste it into an email to phuninhhoatho@gmail.com.',
      ft_tax: 'Tax code', ft_rights: 'All rights reserved.',
      langLabel: 'Chuyển sang tiếng Việt', langBtn: 'VI', skip: 'Skip to content',
      mailSubject: 'Inquiry from ', mailName: 'Name', mailEmail: 'Email', mailCo: 'Company', mailMk: 'Destination market'
    },
    vi: {
      title: 'Công Ty Cổ Phần May Hòa Thọ - Phú Ninh | Sản xuất quần xuất khẩu',
      desc: 'Công Ty Cổ Phần May Hòa Thọ - Phú Ninh may quần cho khách hàng tại EU, Mỹ và Nhật Bản. Thuộc hệ thống Hòa Thọ, với gốc rễ từ năm 1962.',
      brand: 'Hòa Thọ - Phú Ninh', n_about: 'Giới thiệu', n_products: 'Sản phẩm', n_markets: 'Thị trường', n_process: 'Quy trình', n_contact: 'Liên hệ',
      hdr_cta: 'Yêu cầu báo giá',
      hero_co: 'Công Ty Cổ Phần May Hòa Thọ - Phú Ninh',
      hero_h: 'Quần may xuất khẩu cho EU, Mỹ và Nhật, từ miền Trung Việt Nam.',
      hero_lead: 'Chúng tôi tập trung vào một sản phẩm và may với sự kỹ lưỡng mà khách hàng xuất khẩu mong đợi. Thuộc hệ thống Hòa Thọ, với gốc rễ từ năm 1962.',
      hero_cta1: 'Yêu cầu báo giá', hero_cta2: 'Xem các dòng quần', hero_hint: 'Cuộn để kéo trang tiếp theo lên',
      hero_art: 'Chiếc quần với đường chỉ diễu màu cam',
      ab_h: 'Thuộc hệ thống dệt may có gốc rễ từ năm 1962.',
      ab_p1: 'Hòa Thọ khởi đầu từ năm 1962 với nhà máy dệt tại Đà Nẵng, nay là một trong những doanh nghiệp may lớn của Việt Nam và là thành viên của Vinatex. Công Ty Cổ Phần May Hòa Thọ - Phú Ninh được thành lập năm 2012, với nhà máy tại Cụm công nghiệp Chợ Lò, Phú Ninh.',
      ab_p2: 'Sản phẩm trọng tâm của chúng tôi là quần. Tập trung vào một sản phẩm giúp form dáng, đường may và tiến độ giao hàng luôn ổn định.',
      fk_reg: 'Tên đăng ký', fk_en: 'Tên quốc tế', fk_est: 'Đăng ký kinh doanh', fv_est: '15/03/2012',
      fk_grp: 'Hệ thống', fv_grp: 'Tổng công ty CP Dệt May Hòa Thọ, thành viên của Vinatex',
      fk_loc: 'Nhà máy', fv_loc: 'Cụm công nghiệp Chợ Lò, xã Chiên Đàn, TP. Đà Nẵng, Việt Nam', fk_tax: 'Mã số thuế',
      tl1_t: 'Nhà máy Dệt Hòa Thọ ra đời tại Đà Nẵng', tl1_p: 'Tiền thân của Tổng công ty Dệt May Hòa Thọ.',
      tl2_t: 'Chuyển thành Tổng công ty cổ phần', tl2_p: 'Tổng công ty CP Dệt May Hòa Thọ chính thức đi vào hoạt động từ tháng 2/2007.',
      tl3_t: 'Thành lập May Hòa Thọ - Phú Ninh', tl3_p: 'Đăng ký kinh doanh ngày 15/3, bắt đầu hoạt động từ ngày 1/7.',
      tl4_k: 'Hôm nay', tl4_t: 'Quần cho khách hàng tại EU, Mỹ và Nhật', tl4_p: 'Một nhà máy tập trung vào quần, được hỗ trợ bởi hệ thống có nhiều thập kỷ kinh nghiệm xuất khẩu.',
      pr_h: 'Chúng tôi chuyên may quần.', pr_lead: 'Các dòng quần chúng tôi sẵn sàng sản xuất.', car_label: 'Các dòng quần', car_prev: 'Dòng quần trước', car_next: 'Dòng quần tiếp theo', car_hint: 'Kéo hoặc scroll',
      c1_t: 'Quần tây và smart-casual', c1_p: 'Quần dệt thoi với cạp gọn, ly quần sắc nét và đường diễu đều, may theo bộ size ổn định từ thùng hàng đầu đến thùng cuối.', c1_tags: 'Dệt thoi|Ly trơn|Có ly',
      c2_t: 'Quần workwear', c2_p: 'Dành cho mặc hằng ngày: gia cố các điểm chịu lực, bọ, túi tiện ích và đường may bền sau nhiều lần giặt.', c2_tags: 'Gia cố đường may|Túi tiện ích|Vải dày',
      c3_t: 'Quần chống nhăn', c3_p: 'Vải dễ chăm sóc, được ủi và hoàn thiện để hàng phẳng phiu khi giao và đẹp ngay khi mở túi.', c3_tags: 'Dễ chăm sóc|Ủi hoàn thiện|Tiện đi lại',
      c4_t: 'May theo tech pack của bạn', c4_p: 'Gửi rập, bảng thông số và phụ liệu cho chúng tôi. Chúng tôi may đúng thông số, hoặc cùng bạn phát triển rập và hàng mẫu.', c4_tags: 'Gia công cắt may|Làm mẫu|Đơn hàng lặp lại',
      mk_h: 'Xây dựng theo chuẩn của ba thị trường.', mk_lead: 'Tổng công ty Hòa Thọ xuất khẩu sang Mỹ, EU, Nhật Bản và nhiều thị trường khác.',
      mk_eu_t: 'Liên minh châu Âu', mk_eu_p: 'Khách hàng quan tâm đến hóa chất, tính bền vững và truy xuất nguồn gốc. Hãy gửi sớm danh mục chất hạn chế và yêu cầu tuân thủ, chúng tôi sẽ lên kế hoạch đơn hàng theo đó.',
      mk_us_t: 'Hoa Kỳ', mk_us_p: 'Đơn hàng lớn, thời gian giao nghiêm ngặt và các đợt đánh giá của nhà bán lẻ. Chúng tôi sắp xếp chuyền theo ngày giao hàng và giữ bộ size nhất quán giữa các đơn lặp lại.',
      mk_jp_t: 'Nhật Bản', mk_jp_p: 'Khách hàng kiểm tra rất kỹ: đường may thẳng, hoàn thiện sạch và đóng gói cẩn thận. Chúng tôi may và kiểm tra theo chuẩn đó.',
      st_h: 'Có hệ thống Hòa Thọ phía sau.',
      st1_t: 'Thành viên của Vinatex', st1_p: 'Tổng công ty thuộc Tập đoàn Dệt May Việt Nam.',
      st2_t: 'ISO 9001 và ISO 14001', st2_p: 'Hệ thống quản lý chất lượng và môi trường được vận hành ở cấp tổng công ty.',
      st3_t: 'Kinh nghiệm với thương hiệu', st3_p: 'Tổng công ty đã sản xuất cho các nhãn hiệu như Snickers, Haggar, Calvin Klein và Burton.',
      st_note: 'Thông tin cấp tổng công ty từ nguồn công khai. Hãy hỏi chúng tôi về tiêu chuẩn áp dụng cho đơn hàng của bạn.',
      pc_h: 'Từ tech pack đến container.', pc_lead: 'Sáu bước, mỗi bước đều có kiểm tra trước khi sang bước tiếp theo.',
      pc1_t: 'Xem xét tech pack', pc1_p: 'Chúng tôi đọc tech pack, bảng thông số và bộ size trước khi báo giá.',
      pc2_t: 'Rập và hàng mẫu', pc2_p: 'Làm rập, may mẫu, thử form và được duyệt trước khi sản xuất hàng loạt.',
      pc3_t: 'Vải và cắt', pc3_p: 'Vải được kiểm tra và cắt theo sơ đồ để giảm hao hụt.',
      pc4_t: 'Chuyền may', pc4_p: 'Công nhân may theo chuyền, có kiểm tra tại các công đoạn chính: cạp, cửa quần, túi và gấu.',
      pc5_t: 'Hoàn thiện và kiểm tra', pc5_p: 'Ủi, cắt chỉ, đo thông số và kiểm tra cuối.',
      pc6_t: 'Đóng gói và giao hàng', pc6_p: 'Đóng gói theo hướng dẫn của bạn và giao đúng hẹn đến EU, Mỹ hoặc Nhật.',
      ct_h: 'Gửi tech pack cho chúng tôi.', ct_p: 'Cho chúng tôi biết mã hàng, số lượng và nơi nhận. Chúng tôi sẽ phản hồi qua email.',
      ct_email: 'Email', ct_phone: 'Điện thoại', ct_addr: 'Nhà máy',
      lb_name: 'Tên của bạn', lb_email: 'Email của bạn', lb_co: 'Công ty', lb_mk: 'Thị trường đến', lb_msg: 'Nội dung',
      o_eu: 'Liên minh châu Âu', o_us: 'Hoa Kỳ', o_jp: 'Nhật Bản', o_ot: 'Khác',
      map_title: 'Bản đồ vị trí nhà máy May Hòa Thọ - Phú Ninh', map_tap: 'Chạm hoặc nhấp để dùng bản đồ', map_open: 'Mở trong Google Maps', map_dir: 'Chỉ đường',
      err: 'Vui lòng nhập tên và nội dung.', btn_send: 'Mở ứng dụng email để gửi',
      sent_t: 'Email chưa mở? Hãy dùng một trong các cách sau:', sent_app: 'Mở ứng dụng email', sent_gmail: 'Mở bằng Gmail', sent_copy: 'Sao chép nội dung', copied: 'Đã sao chép. Hãy dán vào email gửi tới phuninhhoatho@gmail.com.',
      ft_tax: 'Mã số thuế', ft_rights: 'Bảo lưu mọi quyền.',
      langLabel: 'Switch to English', langBtn: 'EN', skip: 'Chuyển đến nội dung',
      mailSubject: 'Yêu cầu từ ', mailName: 'Họ tên', mailEmail: 'Email', mailCo: 'Công ty', mailMk: 'Thị trường đến'
    }
  };
  var lang = 'en';
  function applyLang(l) {
    var t = D[l] || D.en; lang = D[l] ? l : 'en';
    document.documentElement.lang = lang;
    document.title = t.title;
    var md = $('meta[name="description"]'); if (md) md.setAttribute('content', t.desc);
    $$('[data-i18n]').forEach(function (el) { var k = el.getAttribute('data-i18n'); if (t[k] != null) el.textContent = t[k]; });
    $$('[data-i18n-aria]').forEach(function (el) { var k = el.getAttribute('data-i18n-aria'); if (t[k] != null) el.setAttribute('aria-label', t[k]); });
    $$('[data-i18n-title]').forEach(function (el) { var k = el.getAttribute('data-i18n-title'); if (t[k] != null) el.setAttribute('title', t[k]); });
    var mf = $('#mapFrame');
    if (mf) { var mu = mf.getAttribute('data-src-base') + '&hl=' + lang; if (mf.getAttribute('src') !== mu) mf.setAttribute('src', mu); }
    $$('[data-i18n-list]').forEach(function (ul) {
      var k = ul.getAttribute('data-i18n-list'); if (t[k] == null) return;
      ul.textContent = '';
      t[k].split('|').forEach(function (s) { var li = document.createElement('li'); li.textContent = s; ul.appendChild(li); });
    });
    var b = $('#lang'); b.textContent = t.langBtn; b.setAttribute('aria-label', t.langLabel);
    var sk = $('.skip'); if (sk) sk.textContent = t.skip;
    try { localStorage.setItem('htpn-lang', lang); } catch (e) {}
  }
  var saved = null; try { saved = localStorage.getItem('htpn-lang'); } catch (e) {}
  var initial = saved && D[saved] ? saved : ((navigator.language || '').toLowerCase().indexOf('vi') === 0 ? 'vi' : 'en');
  if (initial !== 'en') applyLang(initial);
  $('#lang').addEventListener('click', function () { applyLang(lang === 'en' ? 'vi' : 'en'); });
  $('#yr').textContent = new Date().getFullYear();

  /* ================= smooth scroll (desktop pointers only; touch stays native) ================= */
  var lenis = null;
  try {
    if (!reduce && window.Lenis && window.matchMedia('(pointer: fine)').matches) {
      lenis = new window.Lenis({ autoRaf: true, lerp: 0.09, smoothWheel: true });
    }
  } catch (e) { lenis = null; }
  var HDR = 60;
  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href') || ''; if (id.charAt(0) !== '#' || id.length < 2) return;
      var target = null; try { target = $(id); } catch (er) { return; }
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: id === '#top' ? 0 : -HDR, duration: 1.4 });
      else target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      if (history.replaceState) { try { history.replaceState(null, '', id); } catch (er) {} }
    });
  });

  /* ================= scrub engine: values follow scroll with easing ================= */
  var scrubs = [];
  var running = false;
  function addScrub(target, apply, k) {
    var s = { target: target, apply: apply, k: k || 0.14, cur: 0, last: -1 };
    s.cur = reduce ? 1 : target(); scrubs.push(s); apply(s.cur); s.last = s.cur; return s;
  }
  function frame() {
    var moving = false;
    for (var i = 0; i < scrubs.length; i++) {
      var s = scrubs[i], t = reduce ? 1 : s.target(), d = t - s.cur;
      if (Math.abs(d) > 0.0005) { s.cur += d * s.k; moving = true; } else { s.cur = t; }
      if (s.cur !== s.last) { s.apply(s.cur); s.last = s.cur; }
    }
    if (moving) requestAnimationFrame(frame); else running = false;
  }
  function kick() { if (!running) { running = true; requestAnimationFrame(frame); } }
  window.addEventListener('scroll', kick, { passive: true });
  var lastW = window.innerWidth;
  window.addEventListener('resize', function () { if (window.innerWidth !== lastW) { lastW = window.innerWidth; measure(); } kick(); });
  window.addEventListener('orientationchange', function () { setTimeout(function () { measure(); kick(); }, 250); });

  /* header background */
  var hdr = $('#hdr');
  function hdrState() { hdr.classList.toggle('sc', (window.pageYOffset || 0) > 12); }
  window.addEventListener('scroll', hdrState, { passive: true }); hdrState();

  /* ---- the thread: a needle stuck in the top edge of each page, thread running up to the top of the screen ---- */
  var NS = 'http://www.w3.org/2000/svg';
  var pullSvg = $('#pull'), hint = $('#heroHint');
  var pulls = $$('main > section.sec').map(function (sec, i) {
    var g = document.createElementNS(NS, 'g');
    var th = document.createElementNS(NS, 'path'); th.setAttribute('class', 'th');
    var th2 = document.createElementNS(NS, 'path'); th2.setAttribute('class', 'th2');
    var nd = document.createElementNS(NS, 'g');
    nd.innerHTML = '<line x1="0" y1="9" x2="0" y2="-36" stroke="#101B33" stroke-width="3.8" stroke-linecap="round"/>' +
      '<line x1="0" y1="9" x2="0" y2="-36" stroke="#DCE3EA" stroke-width="1.8" stroke-linecap="round"/>' +
      '<ellipse cx="0" cy="-29" rx="1.3" ry="5" fill="#101B33"/>';
    g.appendChild(th); g.appendChild(th2); g.appendChild(nd); g.style.display = 'none';
    if (pullSvg) pullSvg.appendChild(g);
    return { sec: sec, g: g, th: th, th2: th2, nd: nd, wrap: $('.wrap', sec), i: i, shown: false };
  });
  var pullQueued = false;
  function updatePull() {
    pullQueued = false;
    var vh = window.innerHeight, vw = window.innerWidth, y = window.pageYOffset || 0;
    if (hint) hint.style.opacity = clamp(1 - y / 140).toFixed(2);
    if (reduce) return;
    for (var k = 0; k < pulls.length; k++) {
      var it = pulls[k], top = it.sec.getBoundingClientRect().top;
      /* the page's content is lifted by the thread as its edge climbs the screen */
      if (it.wrap) {
        var p = clamp((vh - top) / (vh * 0.62));
        it.wrap.style.transform = p >= 1 ? '' : 'translate3d(0,' + ((1 - p) * 70).toFixed(1) + 'px,0)';
      }
      var show = top < vh - 2 && top > 26;
      if (!show) { if (it.shown) { it.g.style.display = 'none'; it.shown = false; } continue; }
      if (!it.shown) { it.g.style.display = ''; it.shown = true; }
      /* hugs the left edge, in the page margin, and sways only a few pixels so it never crosses text */
      var x = Math.min(26, Math.max(11, vw * 0.02)), ey = top - 29;
      var amp = Math.min(7, x - 5) * clamp(top / vh) * Math.sin(top * 0.011 + it.i);
      var d = 'M' + x.toFixed(1) + ',-12 C' + (x + amp).toFixed(1) + ',' + (ey * 0.3).toFixed(1) + ' ' + (x - amp).toFixed(1) + ',' + (ey * 0.7).toFixed(1) + ' ' + x.toFixed(1) + ',' + ey.toFixed(1);
      it.th.setAttribute('d', d); it.th2.setAttribute('d', d);
      it.nd.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + top.toFixed(1) + ')');
      it.g.style.opacity = clamp((top - 26) / 60).toFixed(2);
    }
  }
  function queuePull() { if (!pullQueued) { pullQueued = true; requestAnimationFrame(updatePull); } }
  window.addEventListener('scroll', queuePull, { passive: true });
  window.addEventListener('resize', queuePull);
  updatePull();

  /* ---- thread timelines (about + process) ---- */
  var threads = [];
  function initThread(sel, headAt) {
    var ol = $(sel); if (!ol) return;
    var items = $$('li', ol);
    var th = { ol: ol, items: items, fr: [] };
    threads.push(th);
    addScrub(function () {
      var r = ol.getBoundingClientRect();
      return clamp((window.innerHeight * headAt - r.top) / r.height);
    }, function (v) {
      ol.style.setProperty('--p', v.toFixed(4));
      for (var i = 0; i < items.length; i++) items[i].classList.toggle('on', v >= (th.fr[i] || 0) - 0.001);
    }, 0.14);
  }
  function measure() {
    threads.forEach(function (th) {
      var h = th.ol.offsetHeight || 1;
      th.fr = th.items.map(function (li) { return clamp((li.offsetTop + 14) / h); });
    });
    scrubs.forEach(function (s) { s.last = -1; });
  }
  initThread('#tl', 0.62);
  initThread('#pc', 0.62);
  measure(); kick();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { measure(); kick(); });
  window.addEventListener('load', function () { measure(); kick(); queuePull(); });

  /* ---- products carousel: auto-scroll + native scroll + mouse/touch drag ---- */
  (function initCarousel() {
    var track = $('#car'); if (!track) return;
    var slides = $$('.card', track), n = slides.length;
    var cnt = $('#carCount'), bar = $('#carBar');
    var queued = false, cur = -1;
    var timer = null, resumeTimer = null;
    var AUTO_DELAY = 2000;
    var RESUME_DELAY = 1800;
    var userInteracting = false;

    function padL() { return parseFloat(getComputedStyle(track).paddingLeft) || 0; }
    function leftOf(i) { return slides[i].offsetLeft - padL(); }
    function maxScroll() { return Math.max(0, track.scrollWidth - track.clientWidth); }

    function nearest() {
      var x = track.scrollLeft, best = 0, bd = Infinity, m = maxScroll();
      if (x >= m - 2) return n - 1;
      for (var i = 0; i < n; i++) {
        var d = Math.abs(leftOf(i) - x);
        if (d < bd) { bd = d; best = i; }
      }
      return best;
    }

    function update() {
      queued = false;
      var i = nearest(), m = maxScroll();
      if (i !== cur) {
        cur = i;
        slides.forEach(function (sl, k) { sl.classList.toggle('on', k === i); });
        if (cnt) cnt.textContent = '0' + (i + 1) + ' / 0' + n;
      }
      if (bar) {
        var f = m > 0 ? clamp(track.scrollLeft / m) : 1;
        bar.style.setProperty('--p', (1 / n + f * (1 - 1 / n)).toFixed(4));
      }
    }

    function queue() {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    }

    function goTo(i, instant) {
      i = Math.max(0, Math.min(n - 1, i));
      track.scrollTo({
        left: Math.min(leftOf(i), maxScroll()),
        behavior: (reduce || instant) ? 'auto' : 'smooth'
      });
    }

    function stopAuto() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    function scheduleAuto() {
      stopAuto();
      if (reduce || n < 2) return;
      timer = setInterval(function () {
        if (document.hidden || userInteracting) return;
        var i = nearest();
        if (i >= n - 1) {
          track.scrollTo({ left: 0, behavior: 'auto' });
        } else {
          goTo(i + 1);
        }
      }, AUTO_DELAY);
    }

    function pauseAndResume() {
      stopAuto();
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(function () {
        userInteracting = false;
        scheduleAuto();
      }, RESUME_DELAY);
    }

    track.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue);

    /* Pause while the user is hovering/focusing/dragging/scrolling manually. */
    track.addEventListener('mouseenter', function () {
      userInteracting = true;
      stopAuto();
    });
    track.addEventListener('mouseleave', function () {
      userInteracting = false;
      scheduleAuto();
    });
    track.addEventListener('focusin', function () {
      userInteracting = true;
      stopAuto();
    });
    track.addEventListener('focusout', function () {
      userInteracting = false;
      scheduleAuto();
    });
    track.addEventListener('wheel', pauseAndResume, { passive: true });
    track.addEventListener('touchstart', function () {
      userInteracting = true;
      stopAuto();
    }, { passive: true });
    track.addEventListener('touchend', function () {
      pauseAndResume();
    }, { passive: true });

    /* Mouse drag; touch/pen keep native horizontal scrolling. */
    var drag = null;
    track.addEventListener('pointerdown', function (e) {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      userInteracting = true;
      stopAuto();
      drag = {
        x: e.clientX,
        left: track.scrollLeft,
        idx: nearest(),
        moved: false,
        id: e.pointerId
      };
    });

    track.addEventListener('pointermove', function (e) {
      if (!drag || e.pointerId !== drag.id) return;
      var dx = e.clientX - drag.x;
      if (!drag.moved && Math.abs(dx) < 6) return;
      if (!drag.moved) {
        drag.moved = true;
        track.classList.add('drag');
        try { track.setPointerCapture(e.pointerId); } catch (er) {}
      }
      track.scrollLeft = drag.left - dx;
    });

    function endDrag(e) {
      if (!drag) return;
      var d = drag;
      drag = null;
      track.classList.remove('drag');
      if (d.moved) {
        var dx = e.clientX - d.x;
        goTo(Math.abs(dx) > 50 ? d.idx + (dx < 0 ? 1 : -1) : d.idx);
      }
      pauseAndResume();
    }

    track.addEventListener('pointerup', endDrag);
    track.addEventListener('pointercancel', endDrag);
    track.addEventListener('dragstart', function (e) { e.preventDefault(); });

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stopAuto();
      else if (!userInteracting) scheduleAuto();
    });

    update();
    scheduleAuto();
  })();

  /* ---- wipe reveals: measured on scroll (IntersectionObserver ignores clipped targets) ---- */
  var pending = $$('[data-rv]');
  function checkReveals() {
    if (!pending.length) return;
    var line = window.innerHeight * 0.92;
    pending = pending.filter(function (el) {
      if (reduce || el.getBoundingClientRect().top < line) { el.classList.add('in'); return false; }
      return true;
    });
  }
  window.addEventListener('scroll', checkReveals, { passive: true });
  window.addEventListener('resize', checkReveals);
  checkReveals();

  /* ================= contact form -> opens the visitor's email app ================= */
  var form = $('#form'), err = $('#err'), sent = $('#sent'), copied = $('#copied');
  var lastBody = '', lastSubject = '';
  function copyText(txt) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(txt);
    return new Promise(function (ok, no) {
      var ta = document.createElement('textarea'); ta.value = txt; ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;left:-9999px;top:0;font-size:16px';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy') ? ok() : no(); } catch (e) { no(e); }
      document.body.removeChild(ta);
    });
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = new FormData(form), t = D[lang];
    var name = String(f.get('name') || '').trim(), msg = String(f.get('message') || '').trim();
    var mail = String(f.get('email') || '').trim(), co = String(f.get('company') || '').trim();
    var mk = $('#f-mk'); var mkText = mk.options[mk.selectedIndex].textContent;
    if (!name || !msg) { err.hidden = false; (name ? $('#f-msg') : $('#f-name')).focus(); return; }
    err.hidden = true; copied.textContent = '';
    lastBody = msg + '\n\n---\n' + t.mailName + ': ' + name + (mail ? '\n' + t.mailEmail + ': ' + mail : '') + (co ? '\n' + t.mailCo + ': ' + co : '') + '\n' + t.mailMk + ': ' + mkText;
    lastSubject = t.mailSubject + name + (co ? ' (' + co + ')' : '');
    var q = 'subject=' + encodeURIComponent(lastSubject) + '&body=' + encodeURIComponent(lastBody);
    var mailto = 'mailto:' + EMAIL + '?' + q;
    var gmail = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(EMAIL) + '&' + q;
    $('#aApp').setAttribute('href', mailto);
    $('#aGmail').setAttribute('href', gmail);
    sent.hidden = false;
    window.__ht.lastMailto = mailto; window.__ht.lastGmail = gmail;
    /* try the email app right away (a real anchor click is the most reliable way across browsers) */
    var a = document.createElement('a'); a.href = mailto; a.style.display = 'none';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  });
  $('#bCopy').addEventListener('click', function () {
    var txt = 'To: ' + EMAIL + '\nSubject: ' + lastSubject + '\n\n' + lastBody;
    copyText(txt).then(function () { copied.textContent = D[lang].copied; }, function () { copied.textContent = txt; });
  });

  /* ---- map: opt-in interaction so it never traps page scrolling ---- */
  (function initMap() {
    var box = $('#map'), shield = $('#mapShield'), frame = $('#mapFrame');
    if (!box || !shield) return;
    function on() { box.classList.add('live'); }
    function off() { box.classList.remove('live'); }
    shield.addEventListener('click', on);
    document.addEventListener('pointerdown', function (e) { if (box.classList.contains('live') && !box.contains(e.target)) off(); }, true);
    box.addEventListener('mouseleave', function () { off(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') off(); });
  })();

  window.__ht = { applyLang: applyLang, D: D, kick: kick, updatePull: updatePull, hasLenis: function () { return !!lenis; } };
})();
