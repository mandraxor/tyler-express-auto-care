/**
 * TYLER EXPRESS AUTO CARE — MASTER MULTI-PAGE DATA & TRILINGUAL DICTIONARY (EN / ES / VI)
 * 8-Page Architecture + Reference-Locked Photorealistic Before/After Collision Engine
 */

window.TYLER_DATA = {
  business: {
    brandName: "Tyler Express Auto Care",
    mechanical: {
      entity: "Tyler Express Complete Auto Repair LLC",
      name: "Twain Ave Mechanical Repair Hub",
      address: "3915 W Twain Ave, Las Vegas, NV 89103",
      corridor: "Spring Valley / Chinatown / Las Vegas Strip Corridor",
      lead: "Trung \"Kenny\" Chau",
      phoneDisplay: "(702) 969-4596",
      phoneHref: "tel:+17029694596",
      smsHref: "sms:+17029694596",
      emailPrimary: "kenny@tylerexpressauto.com",
      emailSecondary: "Tylerexpress888@gmail.com",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=3915+W+Twain+Ave+Las+Vegas+NV+89103",
      directions: {
        strip: "https://www.google.com/maps/dir/Las+Vegas+Strip,+NV/3915+W+Twain+Ave,+Las+Vegas,+NV+89103",
        springValley: "https://www.google.com/maps/dir/Spring+Valley,+NV/3915+W+Twain+Ave,+Las+Vegas,+NV+89103",
        summerlin: "https://www.google.com/maps/dir/Summerlin,+Las+Vegas,+NV/3915+W+Twain+Ave,+Las+Vegas,+NV+89103",
        henderson: "https://www.google.com/maps/dir/Henderson,+NV/3915+W+Twain+Ave,+Las+Vegas,+NV+89103"
      }
    },
    collision: {
      entity: "Tyler Express Collision Repair",
      name: "Sirius Ave Collision & Body Center",
      address: "3070 W Sirius Ave Unit 108, Las Vegas, NV 89102",
      corridor: "Central Las Vegas / I-15 & Sahara Industrial Corridor",
      lead: "Hector Montes",
      phoneDisplay: "(725) 366-3245",
      phoneHref: "tel:+17253663245",
      smsHref: "sms:+17253663245",
      emailPrimary: "hector@tylerexpressauto.com",
      emailSecondary: "Tylerexpresscollision@gmail.com",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=3070+W+Sirius+Ave+Unit+108+Las+Vegas+NV+89102",
      directions: {
        strip: "https://www.google.com/maps/dir/Las+Vegas+Strip,+NV/3070+W+Sirius+Ave+Unit+108,+Las+Vegas,+NV+89102",
        springValley: "https://www.google.com/maps/dir/Spring+Valley,+NV/3070+W+Sirius+Ave+Unit+108,+Las+Vegas,+NV+89102",
        summerlin: "https://www.google.com/maps/dir/Summerlin,+Las+Vegas,+NV/3070+W+Sirius+Ave+Unit+108,+Las+Vegas,+NV+89102",
        henderson: "https://www.google.com/maps/dir/Henderson,+NV/3070+W+Sirius+Ave+Unit+108,+Las+Vegas,+NV+89102"
      }
    }
  },

  vehicleModels: {
    "Toyota": ["Camry", "Corolla", "RAV4", "Tacoma", "Tundra", "Highlander", "Prius", "4Runner", "Sienna"],
    "Honda": ["Civic", "Accord", "CR-V", "Fit", "Pilot", "Odyssey", "HR-V", "Ridgeline"],
    "BMW": ["3 Series (328i/330i)", "5 Series (530i/540i)", "X3", "X5", "4 Series", "7 Series", "M3 / M4"],
    "Lexus": ["RX 350", "ES 350", "IS 300 / 350", "NX 300", "GX 460", "LS 500", "UX 250h"],
    "Chevrolet": ["Silverado 1500/2500", "Tahoe", "Suburban", "Malibu", "Equinox", "Camaro", "Colorado", "Traverse"],
    "Hyundai": ["Elantra", "Sonata", "Tucson", "Santa Fe", "Palisade", "Kona", "Accent"],
    "Kia": ["Forte", "Optima / K5", "Sportage", "Sorento", "Telluride", "Soul", "Rio"],
    "Ford": ["F-150", "F-250 Super Duty", "Explorer", "Escape", "Mustang", "Edge", "Transit Fleet Van"],
    "Acura": ["TLX Advance", "MDX", "RDX", "ILX", "Integra", "TSX"],
    "Trucks": ["Ram 1500 / 2500", "Ford F-150 / Super Duty", "Chevy Silverado HD", "GMC Sierra 1500", "Toyota Tundra / Tacoma", "Commercial Fleet Van"]
  },

  i18n: {
    en: {
      nav: {
        home: "Home",
        mechanical: "Mechanical Hub",
        collision: "Collision & Body",
        services: "All 25 Services",
        diagnostics: "Symptom Checker",
        photoEstimate: "Photo Estimate",
        reviews: "5.0★ Reviews",
        book: "Book Bay"
      },
      status: {
        openNow: "BAYS OPEN NOW — Walk-Ins Welcome",
        afterHours: "AFTER-HOURS — 24/7 Tow-In & Night Drop Active",
        nightDropLink: "24/7 Night Drop Guide →"
      },
      langBanner: {
        active: false,
        text: "",
        cta: ""
      },
      stickyMobile: {
        callMech: "Call Kenny (Mech)",
        callCol: "Call Hector (Body)",
        bookEst: "Book / Photo Quote"
      },
      home: {
        badge: "VERIFIED 5.0 ★ CARFAX TOP-RATED SHOP • 100% 5-STAR REVIEWS",
        heroTitle: "Precision Mechanical Repair & Factory-Finish Collision Restoration — Any Make, Any Model, Zero Shortcuts",
        heroSub: "\"No Shortcuts to Get the Job Done — Upfront Pricing & Live In-Progress Repair Photos Sent Directly to Your Phone.\"",
        mechPortalTag: "FACILITY 1 • 3915 W TWAIN AVE • SPRING VALLEY / STRIP",
        mechPortalTitle: "Twain Ave Mechanical Repair Hub",
        mechPortalSub: "Led by Trung \"Kenny\" Chau • Express <60-Min Oil Changes, OEM Diagnostics, Brakes & 115°F Desert A/C",
        mechExploreBtn: "Explore Mechanical Hub →",
        mechBookBtn: "Book Mechanical Bay",
        colPortalTag: "FACILITY 2 • 3070 W SIRIUS AVE UNIT 108 • I-15 & SAHARA",
        colPortalTitle: "Sirius Ave Collision & Body Center",
        colPortalSub: "Led by Hector Montes • Frame Straightening, Factory Color-Match Paint Booth & Insurance Deductible Assistance",
        colExploreBtn: "Explore Collision Studio →",
        colPhotoBtn: "60-Sec Photo Estimate"
      },
      slider: {
        eyebrow: "REFERENCE-LOCKED PHOTOREALISTIC RESTORATION STUDIO",
        title: "Interactive \"Before & After\" Collision Restoration Slider",
        subtitle: "Drag the precision metal divider left and right—or click the numbered Damage Hotspot Pins—to inspect frame tolerances, PPG spectrophotometer paint match, and deductible savings.",
        beforeBadge: "BEFORE: Collision Impact & Clear-Coat Damage",
        afterBadge: "AFTER: 0.1mm Frame Alignment & Factory Clear-Coat",
        hotspotPrompt: "Click any pulsing Hotspot Pin (1–4) on the photograph to inspect repair telemetry:"
      },
      locations: {
        todayBadge: "TODAY",
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        hoursValues: [
          "Closed (24/7 Emergency Tow-In & Night Key Drop Active)",
          "8:00 AM – 6:00 PM",
          "8:00 AM – 6:00 PM",
          "8:00 AM – 6:00 PM",
          "8:00 AM – 6:00 PM",
          "8:00 AM – 6:00 PM",
          "8:00 AM – 2:00 PM"
        ]
      }
    },

    es: {
      nav: {
        home: "Inicio",
        mechanical: "Taller Mecánico",
        collision: "Colisión y Pintura",
        services: "25 Servicios",
        diagnostics: "Diagnóstico Virtual",
        photoEstimate: "Cotizar por Fotos",
        reviews: "Reseñas 5.0★",
        book: "Agendar Cita"
      },
      status: {
        openNow: "TALLER ABIERTO AHORA — Aceptamos Clientes Sin Cita",
        afterHours: "FUERA DE HORARIO — Grúa 24/7 y Buzón Nocturno Activo",
        nightDropLink: "Guía Buzón Nocturno →"
      },
      langBanner: {
        active: true,
        text: "Atención directa en Español para Choque y Pintura con Hector Montes — (725) 366-3245",
        cta: "Llamar a Hector Ahora"
      },
      stickyMobile: {
        callMech: "Llamar Kenny (Mec)",
        callCol: "Llamar Hector (Choque)",
        bookEst: "Cita / Cotizar"
      },
      home: {
        badge: "TALLER VERIFICADO 5.0 ★ EN CARFAX • 100% RESEÑAS DE 5 ESTRELLAS",
        heroTitle: "Mecánica de Precisión y Restauración de Colisión Acabado de Fábrica — Todas las Marcas, Cero Atajos",
        heroSub: "\"Sin atajos para hacer bien el trabajo — Precios transparentes y fotos en vivo de su reparación enviadas directo a su celular.\"",
        mechPortalTag: "TALLER 1 • 3915 W TWAIN AVE • SPRING VALLEY / STRIP",
        mechPortalTitle: "Centro Mecánico Twain Ave",
        mechPortalSub: "Dirigido por Trung \"Kenny\" Chau • Aceite en <60 Min, Diagnóstico OEM, Frenos y Aire Acondicionado 115°F",
        mechExploreBtn: "Ver Taller Mecánico →",
        mechBookBtn: "Agendar Cita Mecánica",
        colPortalTag: "TALLER 2 • 3070 W SIRIUS AVE UNIT 108 • I-15 Y SAHARA",
        colPortalTitle: "Centro de Colisión y Pintura Sirius Ave",
        colPortalSub: "Dirigido por Hector Montes • Enderezado de Chasis, Cabina de Pintura Original y Ayuda con Deducible de Seguro",
        colExploreBtn: "Ver Estudio de Colisión →",
        colPhotoBtn: "Cotizar con Fotos en 60s"
      },
      slider: {
        eyebrow: "ESTUDIO FOTORREALISTA DE RESTAURACIÓN DE COLISIÓN",
        title: "Comparador Interactivo \"Antes y Después\" en Alta Definición",
        subtitle: "Deslice la barra metálica o toque los puntos numerados (1–4) sobre la fotografía para inspeccionar la alineación láser de chasis, pintura PPG y ahorro de deducible.",
        beforeBadge: "ANTES: Impacto de Colisión y Daño en Pintura",
        afterBadge: "DESPUÉS: Alineación 0.1mm y Barniz Original de Fábrica",
        hotspotPrompt: "Toque cualquier Punto de Inspección (1–4) en la foto para ver la telemetría:"
      },
      locations: {
        todayBadge: "HOY",
        days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        hoursValues: [
          "Cerrado (Grúa 24/7 y Buzón Nocturno de Llaves Activo)",
          "8:00 AM – 6:00 PM",
          "8:00 AM – 6:00 PM",
          "8:00 AM – 6:00 PM",
          "8:00 AM – 6:00 PM",
          "8:00 AM – 6:00 PM",
          "8:00 AM – 2:00 PM"
        ]
      }
    },

    vi: {
      nav: {
        home: "Trang Chủ",
        mechanical: "Xưởng Máy (Twain)",
        collision: "Đồng Sơn (Sirius)",
        services: "25 Dịch Vụ",
        diagnostics: "Chẩn Đoán Lỗi",
        photoEstimate: "Báo Giá Qua Ảnh",
        reviews: "Đánh Giá 5.0★",
        book: "Đặt Lịch Hẹn"
      },
      status: {
        openNow: "XƯỞNG ĐANG MỞ CỬA — Nhận Xe Ngay Không Cần Hẹn",
        afterHours: "NGOÀI GIỜ — Cứu Hộ 24/7 & Hộp Khóa Đêm Hoạt Động",
        nightDropLink: "Hướng Dẫn Gửi Xe Đêm →"
      },
      langBanner: {
        active: true,
        text: "Hỗ trợ trực tiếp bằng Tiếng Việt với Trung 'Kenny' Chau — (702) 969-4596",
        cta: "Gọi Anh Kenny Ngay"
      },
      stickyMobile: {
        callMech: "Gọi Kenny (Máy)",
        callCol: "Gọi Hector (Đồng Sơn)",
        bookEst: "Đặt Lịch / Báo Giá"
      },
      home: {
        badge: "XƯỞNG ĐẠT CHUẨN 5.0 ★ CARFAX • 100% ĐÁNH GIÁ 5 SAO TUYỆT ĐỐI",
        heroTitle: "Sửa Chữa Máy Móc Chính Xác & Phục Hồi Đồng Sơn Chuẩn Nhà Máy — Mọi Dòng Xe, Không Đi Đường Tắt",
        heroSub: "\"Làm Việc Tận Tâm Không Đi Đường Tắt — Báo Giá Minh Bạch Trước Khi Làm & Gửi Ảnh Chụp Trực Tiếp Qua Điện Thoại.\"",
        mechPortalTag: "CHI NHÁNH 1 • 3915 W TWAIN AVE • SPRING VALLEY / GẦN CHINATOWN",
        mechPortalTitle: "Trung Tâm Sửa Máy Twain Ave",
        mechPortalSub: "Quản lý: Trung \"Kenny\" Chau • Thay Nhớt Nhanh <60 Phút, Chẩn Đoán OEM, Thắng & Máy Lạnh Sa Mạc 115°F",
        mechExploreBtn: "Xem Xưởng Máy Twain Ave →",
        mechBookBtn: "Đặt Lịch Sửa Máy",
        colPortalTag: "CHI NHÁNH 2 • 3070 W SIRIUS AVE UNIT 108 • KHU I-15 & SAHARA",
        colPortalTitle: "Trung Tâm Đồng Sơn & Bảo Hiểm Sirius Ave",
        colPortalSub: "Quản lý: Hector Montes • Kéo Nắn Khung Sườn, Phòng Sơn Hấp Chuẩn Hãng & Hỗ Trợ Tiền Khấu Trừ Bảo Hiểm (Deductible)",
        colExploreBtn: "Xem Xưởng Đồng Sơn →",
        colPhotoBtn: "Báo Giá Qua Ảnh 60s"
      },
      slider: {
        eyebrow: "PHÒNG TRƯNG BÀY PHỤC HỒI ĐỒNG SƠN CHÂN THỰC",
        title: "Thanh Trượt So Sánh \"Trước & Sau\" Khi Phục Hồi Xe Tai Nạn",
        subtitle: "Kéo thanh trượt kim loại qua trái/phải hoặc bấm vào các Điểm Kiểm Định (1–4) trên ảnh thật để xem độ chuẩn khung gầm 0.1mm, mã sơn PPG và mức hỗ trợ Deductible.",
        beforeBadge: "TRƯỚC: Va Chạm Móp Méo & Trầy Xước Sơn",
        afterBadge: "SAU: Kéo Sườn Chuẩn 0.1mm & Nước Sơn Bóng Nhà Máy",
        hotspotPrompt: "Bấm vào các Điểm Kiểm Định (1–4) trên ảnh để xem thông số kỹ thuật:"
      },
      locations: {
        todayBadge: "HÔM NAY",
        days: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
        hoursValues: [
          "Đóng Cửa (Cứu Hộ Kéo Xe 24/7 & Hộp Gửi Chìa Khóa Đêm)",
          "8:00 AM – 6:00 PM",
          "8:00 AM – 6:00 PM",
          "8:00 AM – 6:00 PM",
          "8:00 AM – 6:00 PM",
          "8:00 AM – 6:00 PM",
          "8:00 AM – 2:00 PM"
        ]
      }
    }
  },

  // 3 Reference-Locked Photorealistic Case Studies with Interactive Damage Hotspot Pins
  caseStudies: [
    {
      id: "case-1",
      beforeImg: "assets/images/case1-before.png",
      afterImg: "assets/images/case1-after.png",
      facility: "3070 W Sirius Ave Unit 108 — Hector Montes",
      title: {
        en: "Case 1: Front-Left Bumper & Quarter-Panel Impact Reconstruction",
        es: "Caso 1: Reconstrucción de Impacto en Defensa y Salpicadera Delantera Izquierda",
        vi: "Hồ Sơ 1: Phục Hồi Va Chạm Cản Trước, Đèn Pha & Vè Trước Bên Tài"
      },
      summary: {
        en: "High-energy front-left intersection impact crushed the front bumper fascia, cracked the projector headlight housing, and buckled the front fender. Restored inside our Sirius Ave booth with 0.1mm laser frame verification and PPG gunmetal metallic clear-coat.",
        es: "Impacto frontal izquierdo dañó la defensa, rompió el faro proyector y dobló la salpicadera. Restaurado en Sirius Ave con medición láser de 0.1mm e igualación de pintura metálica PPG.",
        vi: "Va chạm mạnh góc đầu xe bên tài làm vỡ cản trước, nứt cụm đèn pha và móp sâu vè trước. Đã được phục hồi tại xưởng Sirius Ave với độ chuẩn khung gầm 0.1mm và sơn hấp màu xám kim loại PPG."
      },
      metrics: [
        { label: "Laser Frame Spec", value: "0.1mm OEM Tolerance" },
        { label: "PPG Paint Code", value: "1G3 Metallic ΔE 0.08" },
        { label: "Ultrasonic / ADAS", value: "100% Recalibrated" },
        { label: "Deductible Relief", value: "$500 Saved Out-of-Pocket" }
      ],
      hotspots: [
        {
          id: 1,
          x: 38,
          y: 66,
          title: "Pin #1: Front Bumper Fascia & Energy Absorber",
          spec: "Replaced cracked polypropylene fascia and inner high-density impact bar; recalibrated 4 front ultrasonic parking sensors.",
          metric: "OEM Part Fitment • 3.2mm Gap Spec"
        },
        {
          id: 2,
          x: 39,
          y: 53,
          title: "Pin #2: LED Projector Headlight & Core Support",
          spec: "Laser-pulled upper radiator core support (shifted 11.4mm) back to 0.1mm factory datum; installed sealed OEM LED headlamp assembly.",
          metric: "Laser Frame Pull: 11.4mm → 0.1mm"
        },
        {
          id: 3,
          x: 49,
          y: 50,
          title: "Pin #3: Buckled Front-Left Fender Reconstruction",
          spec: "Replaced crushed front-left fender assembly, restored hood-to-fender gap symmetry, and sealed inner wheelhouse apron.",
          metric: "Laser Datum Tolerance: ±0.1mm"
        },
        {
          id: 4,
          x: 64,
          y: 52,
          title: "Pin #4: Driver Door Scrape & PPG Metallic Clear-Coat Blend",
          spec: "Repaired front door impact transfer and baked PPG gunmetal metallic clear coat at 140°F in our Sirius Ave downdraft booth.",
          metric: "Deductible Assistance: $500 Credited"
        }
      ]
    },
    {
      id: "case-2",
      beforeImg: "assets/images/case2-before.png",
      afterImg: "assets/images/case2-after.png",
      facility: "3070 W Sirius Ave Unit 108 — Hector Montes",
      title: {
        en: "Case 2: Rear-End Collision, Trunk Alignment & Sensor Calibration",
        es: "Caso 2: Colisión Trasera, Alineación de Cajuela y Calibración de Sensores",
        vi: "Hồ Sơ 2: Phục Hồi Đụng Đuôi Xe SUV, Cân Chỉnh Cốp Sau & Cảm Biến Điểm Mù"
      },
      summary: {
        en: "I-15 stop-and-go rear-end collision tore off the lower rear bumper fascia, exposed the steel impact reinforcement beam, dented the lower tailgate, and cracked the LED light bar. Restored with 3-stage Tricoat Pearl match.",
        es: "Choque por alcance en la I-15 desprendió la defensa trasera, expuso la barra de impacto, abolló la compuerta trasera y rompió la barra LED. Restaurado con pintura Tricapa Blanco Perla.",
        vi: "Tai nạn tông đuôi xe trên cao tốc I-15 làm vỡ toác cản sau lộ xương sắt chịu lực, móp cốp sau và nứt dải đèn hậu LED. Phục hồi hoàn hảo với màu sơn Trắng Ngọc Trai 3 lớp."
      },
      metrics: [
        { label: "Rear Body Panel", value: "0.1mm Laser Datum" },
        { label: "Paint System", value: "PPG 070 3-Stage Pearl" },
        { label: "Blind-Spot Radar", value: "OEM Angle Verified" },
        { label: "Deductible Relief", value: "$750 Saved Out-of-Pocket" }
      ],
      hotspots: [
        {
          id: 1,
          x: 71,
          y: 69,
          title: "Pin #1: Exposed Rear Reinforcement Beam & Bumper Cover",
          spec: "Replaced deformed steel rear impact bar, lower diffuser valence, and rear fascia with OEM-grade structural components.",
          metric: "Impact Bar Torque: Factory Spec"
        },
        {
          id: 2,
          x: 65,
          y: 59,
          title: "Pin #2: Lower Tailgate Crease & Paint Transfer Removal",
          spec: "Restored tailgate sheet-metal contour, pinch-weld geometry, weatherstrip seal compression, and power liftgate latch alignment.",
          metric: "Panel Gap Symmetry: 3.5mm Even"
        },
        {
          id: 3,
          x: 68,
          y: 47,
          title: "Pin #3: Full-Width LED Taillight Bar Replacement",
          spec: "Installed new OEM full-width LED tail lamp assembly and verified water-tight body seam sealer.",
          metric: "Zero Moisture / Factory Seal"
        },
        {
          id: 4,
          x: 57,
          y: 62,
          title: "Pin #4: Blind-Spot Monitor (BSM) Radar Calibration",
          spec: "Digitally aimed rear-corner millimeter-wave radar bracket and cleared all ADAS fault codes.",
          metric: "Deductible Assistance: $750 Credited"
        }
      ]
    },
    {
      id: "case-3",
      beforeImg: "assets/images/case3-before.png",
      afterImg: "assets/images/case3-after.png",
      facility: "3070 W Sirius Ave Unit 108 — Hector Montes",
      title: {
        en: "Case 3: Deep Side-Door Scrape, Paintless Dent Repair (PDR) & Color-Match Blending",
        es: "Caso 3: Raspón Lateral Profundo en Puertas, Desabolladura y Difuminado de Color",
        vi: "Hồ Sơ 3: Xử Lý Va Quẹt Sâu 2 Cửa Hông Xe Bán Tải & Phun Sơn Pha Màu Vi Tính"
      },
      summary: {
        en: "Heavy side-swipe tore across the driver-side door of this cobalt blue pickup truck, leaving deep horizontal creases and bare-metal gouges. Restored side-impact intrusion beam integrity and mirror-flat metallic blue clear-coat.",
        es: "Raspón lateral profundo a lo largo de la puerta de esta camioneta azul cobalto. Se restauró la línea de carácter de la carrocería y el acabado espejo.",
        vi: "Va quẹt mạnh chạy dọc cánh cửa bên tài của chiếc xe bán tải màu xanh Cobalt, gây móp sâu và trầy xước tới lớp kim loại. Đã rút tôn chuẩn gân zin và sơn hấp bóng soi gương."
      },
      metrics: [
        { label: "Door Character Line", value: "0.0mm Laser Straight" },
        { label: "PPG Paint Code", value: "8X8 Cobalt Metallic" },
        { label: "Turnaround Time", value: "3 Business Days" },
        { label: "Deductible Relief", value: "$500 Saved Out-of-Pocket" }
      ],
      hotspots: [
        {
          id: 1,
          x: 52,
          y: 55,
          title: "Pin #1: Driver Door Deep Horizontal Crease & Skin Repair",
          spec: "Precision metal pulling and finishing along the deep center door crease; verified internal side-impact door intrusion beam.",
          metric: "Sheet Metal Contour: 100% OEM"
        },
        {
          id: 2,
          x: 59,
          y: 61,
          title: "Pin #2: Door-to-Cab Seam & Lower Rocker Alignment",
          spec: "Eliminated deep lower door buckle, restored factory door-to-door acoustic seal gap, and refinished lower rocker panel.",
          metric: "Door Flushness: ±0.1mm"
        },
        {
          id: 3,
          x: 43,
          y: 48,
          title: "Pin #3: Upper Beltline & Mirror Mount Geometry",
          spec: "Aligned upper door character ridge and chrome mirror housing bracket to zero wind-noise factory specification.",
          metric: "Spectrophotometer ΔE: 0.05"
        },
        {
          id: 4,
          x: 66,
          y: 49,
          title: "Pin #4: Multi-Panel Cobalt Metallic Blend & Deductible Relief",
          spec: "Blended PPG 8X8 Cobalt Metallic across adjacent rear cab door with full insurance deductible assistance applied by Hector.",
          metric: "Customer Out-of-Pocket: $0"
        }
      ]
    }
  ],

  // 25 Grounded Services across the exact 6 SOW Categories (5 + 4 + 5 + 3 + 5 + 3 = 25)
  services: [
    // 1. BRAKES & SUSPENSION (5)
    {
      id: "svc-brake-pads",
      category: "brakes",
      facility: "mechanical",
      turnaround: "Same-Day: 90 Mins",
      title: {
        en: "Ceramic Brake Pads & High-Carbon Vented Rotors",
        es: "Balatas Cerámicas y Rotores Ventilados de Alto Carbono",
        vi: "Thay Bố Thắng Gốm Ceramic & Đĩa Thắng Tản Nhiệt"
      },
      desc: {
        en: "Ultra-quiet, low-dust OEM ceramic brake pads paired with heat-treated vented rotors built for Las Vegas highway braking.",
        es: "Balatas cerámicas silenciosas sin polvo negro y discos ventilados resistentes al calor del tráfico en Las Vegas.",
        vi: "Bố thắng Ceramic êm ái không kêu, ít bụi đen mâm xe kết hợp đĩa thắng chịu nhiệt cao cho giao thông Las Vegas."
      }
    },
    {
      id: "svc-brake-hydraulics",
      category: "brakes",
      facility: "mechanical",
      turnaround: "Same-Day Service",
      title: {
        en: "Brake Calipers, Master Cylinder & DOT-4 Fluid Flush",
        es: "Calipers, Cilindro Maestro y Purga de Líquido DOT-4",
        vi: "Sửa Heo Thắng, Tổng Phanh & Thay Dầu Thắng DOT-4"
      },
      desc: {
        en: "Pressurized brake hydraulic fluid exchange, seized caliper replacement, master cylinders, and ABS wheel speed sensor repair.",
        es: "Cambio presurizado de líquido de frenos, reemplazo de calipers pegados, cilindro maestro y sensores ABS.",
        vi: "Thay dầu thắng bằng máy áp suất, thay heo thắng bị kẹt, tổng phanh và xử lý cảm biến thắng ABS."
      }
    },
    {
      id: "svc-struts-shocks",
      category: "brakes",
      facility: "mechanical",
      turnaround: "Same-Day Service",
      title: {
        en: "Front Strut Assemblies, Rear Shocks & Coil Springs",
        es: "Amortiguadores Delanteros (Struts), Traseros y Resortes",
        vi: "Thay Phuộc Nhún Trước/Sau (Struts & Shocks) & Lò Xo"
      },
      desc: {
        en: "Restore factory ride comfort and stopping distance with complete OEM-spec strut assemblies and nitrogen-charged shock absorbers.",
        es: "Recupere la estabilidad y suavidad de manejo con amortiguadores y struts completos calidad original.",
        vi: "Khôi phục độ êm ái và đằm chắc khi qua ổ gà bằng cụm phuộc nhún mới chuẩn thông số nhà máy."
      }
    },
    {
      id: "svc-control-arms",
      category: "brakes",
      facility: "mechanical",
      turnaround: "Same-Day Service",
      title: {
        en: "Control Arms, Ball Joints, Tie Rods & Sway Bar Links",
        es: "Horquillas (Control Arms), Rótulas y Terminales de Dirección",
        vi: "Thay Càng A, Rô-Tuyn Trụ, Rô-Tuyn Lái & Thanh Cân Bằng"
      },
      desc: {
        en: "Eliminate front-end clunking and steering play caused by desert-cracked rubber bushings, worn ball joints, and tie rod ends.",
        es: "Elimine ruidos en la suspensión y juego en el volante causados por bujes resecos por el calor y rótulas gastadas.",
        vi: "Xử lý triệt để tiếng kêu lục cục dưới gầm và rơ vô lăng do nứt vỡ cao su càng A và mòn rô-tuyn."
      }
    },
    {
      id: "svc-wheel-alignment",
      category: "brakes",
      facility: "mechanical",
      turnaround: "Express: 60–90 Mins",
      title: {
        en: "Precision 4-Wheel Alignment, Steering Rack & Hub Bearings",
        es: "Alineación Computarizada, Cremallera y Baleros de Rueda",
        vi: "Cân Chỉnh Thước Lái 4 Bánh, Sửa Thước Lái & Bạc Đạn Bánh Xe"
      },
      desc: {
        en: "Laser camber/caster/toe alignment, hydraulic & EPS steering rack replacement, and quiet wheel hub bearing assemblies.",
        es: "Alineación láser de 4 ruedas, reparación de cremalleras de dirección y cambio de baleros ruidosos.",
        vi: "Chỉnh độ chụm bánh xe bằng tia laser chống ăn vỏ, sửa thước lái xì dầu và thay bạc đạn bánh xe bị hú."
      }
    },

    // 2. DESERT A/C & COOLING (4)
    {
      id: "svc-ac-recharge",
      category: "ac",
      facility: "mechanical",
      turnaround: "Express: 60–90 Mins",
      title: {
        en: "115°F Desert A/C Evacuation & Recharge (R134a & R1234yf)",
        es: "Recarga de Aire Acondicionado 115°F (Gas R134a y R1234yf)",
        vi: "Hút Chân Không & Nạp Gas Máy Lạnh 115°F (R134a & R1234yf)"
      },
      desc: {
        en: "Computerized weight-scale refrigerant recovery and recharge for both R134a and newer R1234yf systems with UV dye & electronic leak test.",
        es: "Carga exacta por computadora para sistemas R134a y el nuevo R1234yf con prueba de fugas electrónica y luz UV.",
        vi: "Nạp gas lạnh chuẩn xác bằng máy điện tử cho cả dòng xe dùng R134a và gas đời mới R1234yf, kèm dò rò rỉ bằng tia UV."
      }
    },
    {
      id: "svc-ac-compressor",
      category: "ac",
      facility: "mechanical",
      turnaround: "Same-Day Turnaround",
      title: {
        en: "A/C Compressor, Condenser, Evaporator & Expansion Valve",
        es: "Reemplazo de Compresor de A/C, Condensador y Evaporador",
        vi: "Thay Lốc Lạnh (Compressor), Dàn Nóng, Dàn Lạnh & Van Tiết Lưu"
      },
      desc: {
        en: "Complete desert-grade A/C rebuilds delivering 38°F–42°F vent temperatures even when stuck in Las Vegas Strip traffic.",
        es: "Reconstrucción completa de A/C garantizando aire frío de 38°F–42°F aún en el tráfico más pesado de Las Vegas.",
        vi: "Thay trọn bộ lốc lạnh, dàn nóng chính hãng và súc rửa đường ống giúp nhiệt độ cửa gió đạt độ lạnh sâu 38°F–42°F."
      }
    },
    {
      id: "svc-radiator-cooling",
      category: "ac",
      facility: "mechanical",
      turnaround: "Same-Day Turnaround",
      title: {
        en: "Heavy-Duty Radiator, Thermostat, Water Pump & Coolant Flush",
        es: "Radiador, Termostato, Bomba de Agua y Limpieza de Sistema",
        vi: "Thay Két Nước Giải Nhiệt, Bơm Nước, Van Hằng Nhiệt & Súc Két"
      },
      desc: {
        en: "Stop engine overheating before it warps your cylinder head with OEM radiators, thermostats, water pumps, and pressure testing.",
        es: "Prevenga calentamientos severos de motor con radiadores nuevos, bombas de agua, termostatos y prueba de presión.",
        vi: "Ngăn chặn nguy cơ sôi nước thổi ron quy-lát bằng két nước mới, bơm nước, van hằng nhiệt chính hãng và nén thử áp suất."
      }
    },
    {
      id: "svc-cooling-fans",
      category: "ac",
      facility: "mechanical",
      turnaround: "Same-Day Turnaround",
      title: {
        en: "Electric Radiator Cooling Fans, Relays & Heater Core Service",
        es: "Ventiladores Eléctricos de Radiador, Relevadores y Calefacción",
        vi: "Thay Quạt Giải Nhiệt Két Nước, Rơ-Le & Sửa Hệ Thống Sưởi"
      },
      desc: {
        en: "Fixes A/C blowing warm at idle and rising temperature gauges at red lights with high-CFM dual cooling fan assemblies.",
        es: "Soluciona cuando el A/C deja de enfriar en semáforos o sube la temperatura al estar detenido en tráfico.",
        vi: "Khắc phục triệt để bệnh dừng đèn đỏ bị mất lạnh hoặc kim nhiệt tăng cao do quạt giải nhiệt két nước quay yếu."
      }
    },

    // 3. ENGINE & DIAGNOSTICS (5)
    {
      id: "svc-oem-diag",
      category: "engine",
      facility: "mechanical",
      turnaround: "Same-Day Diagnostic",
      title: {
        en: "Bi-Directional OEM Computer Diagnostics & Check Engine Triage",
        es: "Diagnóstico por Computadora OEM y Luz Check Engine",
        vi: "Chẩn Đoán Máy Tính Chuyên Hãng OEM & Xử Lý Đèn Check Engine"
      },
      desc: {
        en: "Factory-level OBD-II telemetry, live oscilloscope sensor waveforms, and EVAP smoke testing to pinpoint faults with zero guesswork.",
        es: "Escáner nivel agencia, lectura de sensores en vivo y prueba de humo EVAP para encontrar la falla exacta al primer intento.",
        vi: "Đọc dữ liệu sống (Live Data) bằng máy chuyên hãng và bơm khói dò rò rỉ—bắt đúng bệnh, không đoán mò."
      }
    },
    {
      id: "svc-o2-smog",
      category: "engine",
      facility: "mechanical",
      turnaround: "Same-Day Turnaround",
      title: {
        en: "Oxygen (O2) Sensors, Catalytic Efficiency & Nevada Smog Repair",
        es: "Sensores de Oxígeno (O2), Catalizador y Reparación para Smog",
        vi: "Thay Cảm Biến Oxy (O2 Sensor), Khí Thải & Đậu Smog Check Nevada"
      },
      desc: {
        en: "Praised in our 5.0★ CARFAX reviews: fast, affordable upstream/downstream O2 sensor and emissions repairs to pass Nevada DMV Smog.",
        es: "Destacado en nuestras reseñas 5.0★ CARFAX: cambio rápido y honesto de sensores de oxígeno y emisiones para pasar el Smog.",
        vi: "Được khách hàng khen ngợi 5.0★ trên CARFAX: thay cảm biến Oxy chính hãng nhanh chóng với giá cực tốt để đậu Smog Check."
      }
    },
    {
      id: "svc-ignition-fuel",
      category: "engine",
      facility: "mechanical",
      turnaround: "Same-Day Turnaround",
      title: {
        en: "Spark Plugs, Ignition Coils, Fuel Injectors & Throttle Body",
        es: "Bujías Iridio, Bobinas de Encendido e Inyectores de Gasolina",
        vi: "Thay Bugi Iridium, Mobin Đánh Lửa & Vệ Sinh Kim Phun Họng Ga"
      },
      desc: {
        en: "Cure engine misfires (P0300), rough idle, and hesitation with OEM laser-iridium plugs, direct ignition coils, and fuel system service.",
        es: "Elimine fallas de cilindro (P0300), temblores y alto consumo de gasolina con bujías de Iridio y bobinas originales.",
        vi: "Xử lý dứt điểm lỗi bỏ máy (P0300), rung giật và hao xăng bằng bugi Iridium, mobin đánh lửa mới và súc kim phun."
      }
    },
    {
      id: "svc-timing-gaskets",
      category: "engine",
      facility: "mechanical",
      turnaround: "1–2 Day Precision Job",
      title: {
        en: "Timing Belt / Timing Chain Kits & Engine Oil Leak Resealing",
        es: "Kit de Banda/Cadena de Tiempo y Empaques Contra Fugas de Aceite",
        vi: "Thay Dây Curoa Cam / Sên Cam & Làm Kín Rò Rỉ Nhớt Động Cơ"
      },
      desc: {
        en: "Complete timing kits, valve cover gaskets, oil filter housing seals, and oil pan gaskets—documented with live lift photos sent to your phone.",
        es: "Kits de tiempo, empaques de punterías, base de filtro y cárter documentados con fotos en vivo enviadas a su celular.",
        vi: "Thay trọn bộ cam, ron nắp cò, cụm lọc nhớt và phốt chặn dầu có chụp ảnh thực tế gửi trực tiếp qua điện thoại."
      }
    },
    {
      id: "svc-battery-alternator",
      category: "engine",
      facility: "mechanical",
      turnaround: "Express: 45–90 Mins",
      title: {
        en: "High-Heat Desert Battery, Alternator & Starter Motor Service",
        es: "Baterías para Calor Extremo, Alternadores y Motores de Arranque",
        vi: "Thay Bình Ắc-Quy Chịu Nhiệt, Đinamô Sạc (Alternator) & Củ Đề"
      },
      desc: {
        en: "Beat Las Vegas battery failure with high-CCA batteries, OEM-output alternators, starters, and parasitic draw diagnostics.",
        es: "Baterías reforzadas para el calor de Las Vegas, alternadores OEM, marchas y revisión de sistema de carga.",
        vi: "Bình điện dòng khởi động cao chuyên trị mùa hè Las Vegas, thay đinamô sạc, củ đề và kiểm tra rò điện."
      }
    },

    // 4. TRANSMISSION & DRIVETRAIN (3)
    {
      id: "svc-trans-fluid",
      category: "transmission",
      facility: "mechanical",
      turnaround: "Same-Day: 90 Mins",
      title: {
        en: "OEM Automatic & CVT Transmission Fluid Exchange & Filter",
        es: "Cambio de Fluido y Filtro de Transmisión Automática y CVT",
        vi: "Thay Tuần Hoàn Dầu Hộp Số Tự Động / CVT & Lọc Hộp Số"
      },
      desc: {
        en: "Protect shift quality against desert heat breakdown using exact manufacturer-spec ATF, WS, or CVT fluid and pan filter kits.",
        es: "Proteja su transmisión del calor del desierto con fluido original ATF o CVT específico para su marca y filtro nuevo.",
        vi: "Bảo vệ hộp số mượt mà dưới nắng nóng bằng dầu hộp số chuẩn mã hãng (ATF/CVT) và thay lọc dầu hộp số."
      }
    },
    {
      id: "svc-trans-repair",
      category: "transmission",
      facility: "mechanical",
      turnaround: "1–3 Day Turnaround",
      title: {
        en: "Transmission Solenoids, Valve Body, Torque Converter & Overhaul",
        es: "Solenoides de Cambio, Cuerpo de Válvulas, Turbina y Reconstrucción",
        vi: "Sửa Vỉ Mạch Van Điện Từ (Solenoid), Biến Mô & Đại Tu Hộp Số"
      },
      desc: {
        en: "Complete diagnostics and replacement for slipping gears, delayed engagement, harsh shifting, and P0700 transmission control faults.",
        es: "Solución definitiva para transmisiones que patinan, golpean al cambiar o prenden códigos P0700.",
        vi: "Chẩn đoán và khắc phục triệt để bệnh trượt số, vào số trễ, giật mạnh khi chuyển số hoặc báo lỗi hộp số P0700."
      }
    },
    {
      id: "svc-cv-axles",
      category: "transmission",
      facility: "mechanical",
      turnaround: "Same-Day Turnaround",
      title: {
        en: "CV Axles, Driveshafts, Differentials & Engine/Trans Mounts",
        es: "Flechas Homocinéticas (CV Axles), Diferenciales y Soportes de Motor",
        vi: "Thay Láp Ngang (CV Axles), Cầu Vi Sai & Cao Su Chân Máy / Hộp Số"
      },
      desc: {
        en: "Stop clicking noises on turns and cabin vibrations with new heavy-duty CV axle shafts, differential fluid service, and hydraulic mounts.",
        es: "Elimine tronidos al dar vuelta y vibraciones en cabina con flechas CV nuevas, servicio a diferencial y soportes originales.",
        vi: "Hết ngay tiếng kêu lạch cạch khi đánh lái và rung bần bật trong cabin bằng cây láp mới và cao su chân máy chính hãng."
      }
    },

    // 5. COLLISION, PAINT & FRAME (5) — SIRIUS AVE (HECTOR)
    {
      id: "svc-collision-recon",
      category: "collision",
      facility: "collision",
      turnaround: "Free 15-Min Estimate",
      title: {
        en: "Major Collision Reconstruction & All-Insurance Claims Handling",
        es: "Reconstrucción por Choque Mayor y Trámite con Todos los Seguros",
        vi: "Phục Hồi Xe Tai Nạn Toàn Diện & Giải Quyết Hồ Sơ Mọi Hãng Bảo Hiểm"
      },
      desc: {
        en: "Complete structural & body restoration at 3070 W Sirius Ave Unit 108. Hector handles State Farm, GEICO, Progressive, Allstate & AAA adjusters directly.",
        es: "Restauración estructural y estética en 3070 W Sirius Ave. Hector gestiona todo directamente con el ajustador de su seguro.",
        vi: "Phục hồi xe đâm đụng chuẩn hãng tại 3070 W Sirius Ave. Hector làm việc trực tiếp với giám định viên mọi hãng bảo hiểm."
      }
    },
    {
      id: "svc-deductible-relief",
      category: "collision",
      facility: "collision",
      turnaround: "Instant Savings Credit",
      title: {
        en: "Insurance Deductible Assistance Program (Save $250–$1,000)",
        es: "Programa de Ayuda con el Deducible de Seguro (Ahorre $250–$1,000)",
        vi: "Chương Trình Hỗ Trợ Tiền Khấu Trừ Bảo Hiểm (Giảm $250–$1,000)"
      },
      desc: {
        en: "We help waive or significantly reduce your out-of-pocket insurance deductible on qualifying collision repairs at our Sirius Ave facility.",
        es: "Le ayudamos a reducir o absorber su deducible de seguro para que repare su vehículo sin descapitalizarse.",
        vi: "Hỗ trợ giảm hoặc miễn tiền khấu trừ bảo hiểm (Deductible) tiền túi cho khách hàng sửa xe tai nạn tại chi nhánh Sirius Ave."
      }
    },
    {
      id: "svc-frame-straightening",
      category: "collision",
      facility: "collision",
      turnaround: "0.1mm Laser Verified",
      title: {
        en: "Laser Unibody & Full-Frame Truck Straightening",
        es: "Enderezado de Chasis y Compacto con Medición Láser 0.1mm",
        vi: "Kéo Nắn Khung Gầm & Sườn Xe Bằng Hệ Thống Đo Laser 0.1mm"
      },
      desc: {
        en: "Heavy-tonnage frame rack pulling restores structural crash rails, suspension mounting points, and factory panel gaps to 0.1mm spec.",
        es: "Banco de enderezado de alta precisión para devolver las medidas originales de fábrica al chasis y líneas de carrocería.",
        vi: "Bàn kéo nắn khung sườn công suất lớn kết hợp thước đo laser đưa các điểm chịu lực và khe hở cửa về chuẩn 0.1mm nhà máy."
      }
    },
    {
      id: "svc-paint-booth",
      category: "collision",
      facility: "collision",
      turnaround: "2–4 Day Booth Cure",
      title: {
        en: "PPG Computerized Color-Match Paint Booth & UV Clear-Coat",
        es: "Cabina de Pintura Computarizada PPG y Barniz Transparente UV",
        vi: "Phòng Sơn Hấp Pha Màu Vi Tính PPG & Phủ Bóng Chống Nắng Sa Mạc"
      },
      desc: {
        en: "Spectrophotometer digital paint matching (metallics, 3-stage pearls, OEM finishes) baked in our dust-free downdraft booth.",
        es: "Igualación digital exacta para colores metálicos y tricapa perlados, horneados en cabina libre de polvo con alto brillo.",
        vi: "So màu bằng camera quang phổ chuẩn 99.9% cho cả màu nhũ kim loại và trắng ngọc trai 3 lớp, sấy nhiệt trong phòng sơn kín."
      }
    },
    {
      id: "svc-pdr-bumper",
      category: "collision",
      facility: "collision",
      turnaround: "Same-Day to 48 Hours",
      title: {
        en: "Paintless Dent Repair (PDR), Bumper Replacement & ADAS Calibration",
        es: "Desabolladura sin Pintura (PDR), Defensas y Sensores ADAS",
        vi: "Hút Móp Không Sơn (PDR), Thay Cản Trước/Sau & Cân Chỉnh Cảm Biến"
      },
      desc: {
        en: "Fast removal of door dings and creases without repainting, plus front/rear bumper fascia replacement and parking sensor calibration.",
        es: "Eliminación de abolladuras conservando su pintura original, reemplazo de defensas y calibración de sensores de reversa.",
        vi: "Nắn vết móp cửa xe giữ nguyên sơn zin, thay cản nhựa trước/sau, đèn pha và cân chỉnh cảm biến lùi/điểm mù."
      }
    },

    // 6. EXPRESS OIL & FLEET CARE (3)
    {
      id: "svc-oil-express",
      category: "oil",
      facility: "mechanical",
      turnaround: "Express: Under 60 Mins",
      title: {
        en: "Express <60-Minute Full Synthetic Oil Change & 50-Point Check",
        es: "Cambio de Aceite Sintético en <60 Minutos e Inspección de 50 Puntos",
        vi: "Thay Nhớt Tổng Hợp Full Synthetic Dưới 60 Phút & Khám Xe 50 Hạng Mục"
      },
      desc: {
        en: "Guaranteed in-and-out in under 60 minutes at Twain Ave: premium full synthetic oil, OEM filter, fluid top-off, and live lift photos.",
        es: "Entré y salga en menos de 60 minutos en Twain Ave: aceite 100% sintético, filtro OEM, niveles y fotos en vivo desde la rampa.",
        vi: "Hoàn tất nhanh gọn dưới 60 phút tại Twain Ave: nhớt tổng hợp cao cấp, lọc nhớt OEM, châm nước mát/rửa kính và chụp ảnh gầm xe."
      }
    },
    {
      id: "svc-factory-maintenance",
      category: "oil",
      facility: "mechanical",
      turnaround: "Same-Day Turnaround",
      title: {
        en: "Factory 30K / 60K / 90K / 100K Mile Warranty-Safe Maintenance",
        es: "Mantenimiento de Agencia 30K / 60K / 90K / 100K Millas",
        vi: "Bảo Dưỡng Định Kỳ 30K / 60K / 90K / 100K Miles Giữ Nguyên Bảo Hành"
      },
      desc: {
        en: "Comprehensive mileage intervals (filters, fluids, belts, spark plugs, multipoint inspection) logged directly to your CARFAX history.",
        es: "Servicio completo por kilometraje según manual del fabricante con registro oficial en el historial CARFAX de su auto.",
        vi: "Bảo dưỡng toàn diện theo mốc số miles quy định của hãng và cập nhật trực tiếp lên hồ sơ lịch sử xe CARFAX."
      }
    },
    {
      id: "svc-fleet-trucks",
      category: "oil",
      facility: "mechanical",
      turnaround: "Priority Commercial Bay",
      title: {
        en: "Commercial Truck, Van & Rideshare Fleet Priority Maintenance",
        es: "Mantenimiento Prioritario para Camionetas de Trabajo y Flotillas",
        vi: "Bảo Dưỡng Ưu Tiên Cho Xe Tải Nhỏ (Truck), Xe Van & Đội Xe Dịch Vụ"
      },
      desc: {
        en: "Dedicated turnaround bays and upfront fleet billing for Las Vegas businesses, work trucks, sprinter vans, and high-mileage drivers.",
        es: "Bahías prioritarias para contratistas, camionetas comerciales, vans de reparto y conductores de plataforma en Las Vegas.",
        vi: "Cầu nâng ưu tiên sửa nhanh trong ngày cho xe tải công trình, xe giao hàng và xe thương mại tại Las Vegas."
      }
    }
  ],

  // 8 Diagnostic Symptom Profiles + Master Tech Advice from Kenny & Hector
  symptoms: [
    {
      id: "brakes",
      icon: "🛑",
      facility: "mechanical",
      serviceId: "svc-brake-pads",
      urgencyLevel: "warning",
      urgencyScore: 76,
      obdCode: "C0035 / BRAKE-HYD",
      title: {
        en: "Squeaking or Grinding Brakes",
        es: "Frenos Rechinando o Rozando",
        vi: "Thắng (Phanh) Kêu Két Két Hoặc Rít Kim Loại"
      },
      urgencyBadge: {
        en: "SERVICE WITHIN 48 HRS — PREVENT ROTOR DAMAGE",
        es: "REVISAR EN 48 HRS — EVITE DAÑAR LOS DISCOS",
        vi: "KIỂM TRA TRONG 48 GIỜ — TRÁNH HƯ ĐĨA THẮNG"
      },
      vegasImpact: {
        en: "Heavy stop-and-go traffic on Spring Mountain Rd, Tropicana, and I-15 superheats brake rotors past 500°F. Once pads wear down to the metal backing plate, stopping distance increases by 40%.",
        es: "El tráfico pesado en Las Vegas calienta los discos a más de 500°F. Si las balatas llegan al metal, dañarán los rotores en un solo día.",
        vi: "Kẹt xe liên tục dưới nắng nóng Las Vegas làm đĩa thắng cực nóng. Nếu bố thắng mòn tới sắt sẽ cào xước sâu đĩa thắng rất nhanh."
      },
      culprits: {
        en: [
          "Worn ceramic brake pads contacting the acoustic wear indicator",
          "Heat-warped or grooved brake rotors causing pedal pulsation",
          "Sticking caliper slide pins or moisture-degraded DOT-4 brake fluid"
        ],
        es: [
          "Balatas desgastadas tocando el avisador acústico",
          "Discos (rotores) torcidos por temperatura alta",
          "Pines de caliper pegados o líquido de frenos degradado"
        ],
        vi: [
          "Má phanh đã mòn chạm vạch kim loại báo hiệu",
          "Đĩa thắng bị cong vênh do nhiệt gây rung bàn đạp thắng",
          "Kẹt ắc heo thắng hoặc dầu thắng bị lão hóa"
        ]
      },
      techAdvice: {
        en: "Kenny's Master Tech Advice (Twain Ave): \"Bring it in before grinding starts—if we catch pads at 2mm–3mm, we can often save you money and get you back on the road in 90 minutes with live photos of your rotor thickness.\"",
        es: "Consejo de Kenny (Twain Ave): \"Tráigalo apenas escuche el chillido; le enviaremos foto del grosor exacto de sus balatas y discos en la rampa antes de tocar nada.\"",
        vi: "Lời khuyên từ anh Kenny (Twain Ave): \"Hãy ghé kiểm tra ngay khi mới nghe tiếng kêu nhẹ—thợ sẽ tháo bánh chụp ảnh độ dày bố thắng và đĩa thắng gửi qua điện thoại cho bạn xem trực tiếp.\""
      }
    },
    {
      id: "ac-warm",
      icon: "❄️",
      facility: "mechanical",
      serviceId: "svc-ac-recharge",
      urgencyLevel: "warning",
      urgencyScore: 72,
      obdCode: "B1422 / HVAC-HIGH",
      title: {
        en: "Warm A/C in Vegas Heat",
        es: "Aire Acondicionado Sopla Caliente",
        vi: "Máy Lạnh A/C Không Mát / Thổi Gió Nóng"
      },
      urgencyBadge: {
        en: "SERVICE WITHIN 48 HRS — PROTECT A/C COMPRESSOR",
        es: "REVISAR EN 48 HRS — PROTEJA EL COMPRESOR",
        vi: "KIỂM TRA SỚM — TRÁNH CHÁY LỐC LẠNH"
      },
      vegasImpact: {
        en: "In 115°F Las Vegas summer heat, high-side A/C pressures exceed 325 PSI. Running an undercharged R134a or R1234yf system starves the compressor of PAG oil.",
        es: "Con 115°F en Las Vegas, usar el A/C con poco gas R134a o R1234yf deja sin lubricación interna al compresor.",
        vi: "Dưới nắng 115°F ở Las Vegas, bật A/C khi thiếu gas sẽ làm thiếu dầu bôi trơn và gây bó cháy lốc lạnh rất tốn kém."
      },
      culprits: {
        en: [
          "Low R134a / R1234yf refrigerant charge from dried desert O-rings or condenser",
          "Weak A/C compressor magnetic clutch or expansion valve restriction",
          "Failing electric radiator/condenser fan when idling at traffic lights"
        ],
        es: [
          "Fuga de gas R134a / R1234yf en sellos O-ring o condensador",
          "Falla en el clutch del compresor o válvula de expansión",
          "Ventilador eléctrico del condensador débil en semáforos"
        ],
        vi: [
          "Rò rỉ gas lạnh R134a / R1234yf ở phốt cao su hoặc dàn nóng",
          "Yếu mặt hít lốc lạnh hoặc nghẹt van tiết lưu",
          "Quạt giải nhiệt dàn nóng quay yếu khi dừng đèn đỏ"
        ]
      },
      techAdvice: {
        en: "Kenny's Master Tech Advice (Twain Ave): \"Never use cheap auto-parts store stop-leak cans—they clog modern micro-channel condensers! We recover, vacuum-test, and inject UV dye to find the real leak.\"",
        es: "Consejo de Kenny (Twain Ave): \"No use latas con sellador porque tapan el condensador. Nosotros hacemos vacío profundo e inyectamos tinte UV para hallar la fuga exacta.\"",
        vi: "Lời khuyên từ anh Kenny (Twain Ave): \"Đừng tự bơm bình gas cầm tay có keo chống xì vì sẽ làm nghẹt dàn nóng. Tiệm có máy chuyên dụng hút chân không và soi tia UV tìm đúng chỗ xì.\""
      }
    },
    {
      id: "check-engine",
      icon: "⚠️",
      facility: "mechanical",
      serviceId: "svc-oem-diag",
      urgencyLevel: "warning",
      urgencyScore: 70,
      obdCode: "P0420 / P0300 / P0171",
      title: {
        en: "Check Engine Light / Shaking",
        es: "Luz Check Engine / Motor Temblando",
        vi: "Đèn Check Engine Sáng / Máy Rung Giật"
      },
      urgencyBadge: {
        en: "SOLID: CHECK IN 48 HRS • FLASHING: STOP DRIVING",
        es: "FIJA: 48 HRS • PARPADEANDO: DETENER EL AUTO",
        vi: "SÁNG ĐỨNG: KHÁM SỚM • CHỚP NHÁY: DỪNG XE NGAY"
      },
      vegasImpact: {
        en: "High desert intake temperatures bake rubber vacuum hoses, ignition coils, and Oxygen (O2) sensors—triggering emissions codes that block Nevada DMV registration renewal.",
        es: "El calor reseca mangueras de vacío, bobinas y sensores de oxígeno (O2), impidiendo pasar la prueba de Smog de Nevada.",
        vi: "Khí hậu khô nóng làm ống hơi chân không, mobin đánh lửa và cảm biến Oxy nhanh hỏng, gây rớt đăng kiểm Smog Check."
      },
      culprits: {
        en: [
          "Failing upstream/downstream Oxygen (O2) sensor or catalytic threshold (P0420)",
          "Cylinder misfire from worn spark plugs or cracked coil boots (P0300)",
          "Intake vacuum leak or contaminated Mass Air Flow sensor (P0171)"
        ],
        es: [
          "Sensor de Oxígeno (O2) dañado o eficiencia catalítica (P0420)",
          "Falla de encendido en bujías o bobinas (P0300)",
          "Fuga de vacío o sensor MAF sucio (P0171)"
        ],
        vi: [
          "Hư cảm biến Oxy (O2 sensor) hoặc bầu lọc khí thải (P0420)",
          "Bỏ lửa bugi hoặc chết mobin đánh lửa (P0300)",
          "Bể ống hơi chân không hoặc dơ cảm biến gió MAF (P0171)"
        ]
      },
      techAdvice: {
        en: "Kenny's Master Tech Advice (Twain Ave): \"A P0420 code doesn't always mean you need a $1,500 catalytic converter! We test your live O2 sensor voltage waveform first—many times a new OEM Oxygen sensor solves it.\"",
        es: "Consejo de Kenny (Twain Ave): \"Un código P0420 no siempre requiere cambiar el catalizador completo; revisamos primero la señal en vivo del sensor de oxígeno para ahorrarle dinero.\"",
        vi: "Lời khuyên từ anh Kenny (Twain Ave): \"Báo lỗi P0420 chưa chắc đã phải thay bầu lọc Catalytic đắt tiền! Chúng tôi luôn đo xung điện cảm biến Oxy trước—nhiều xe chỉ cần thay cảm biến O2 là hết bệnh.\""
      }
    },
    {
      id: "steering-shake",
      icon: "🛞",
      facility: "mechanical",
      serviceId: "svc-control-arms",
      urgencyLevel: "warning",
      urgencyScore: 65,
      obdCode: "CHASSIS-ALIGN",
      title: {
        en: "Steering Pull / Vibration",
        es: "Volante Vibrando o Jalando",
        vi: "Vô Lăng Rung Lắc / Xe Bị Nhao Lái"
      },
      urgencyBadge: {
        en: "SERVICE WITHIN 48 HRS — SAVE YOUR TIRES",
        es: "REVISAR EN 48 HRS — PROTEJA SUS LLANTAS",
        vi: "KIỂM TRA SỚM — CHỐNG MÒN LỆCH VỎ XE"
      },
      vegasImpact: {
        en: "65–75 MPH travel on I-215 and US-95 amplifies suspension play and alignment drift, scrubbing tread off tires on scorching asphalt.",
        es: "Manejar en la I-215 y US-95 con bujes o rótulas gastadas destruye las llantas rápidamente sobre el asfalto caliente.",
        vi: "Chạy tốc độ cao trên I-215 khi gầm phuộc rơ hoặc lệch thước lái sẽ làm xe sàng lắc và ăn mòn lốp xe cực nhanh."
      },
      culprits: {
        en: [
          "Torn lower control arm bushings or loose ball joints",
          "Inner/outer tie rod play and 4-wheel alignment drift",
          "Leaking front struts or noisy wheel hub bearing"
        ],
        es: [
          "Bujes de horquilla rotos o rótulas con juego",
          "Terminales de dirección gastadas y desalineación",
          "Amortiguadores vencidos o balero de rueda dañado"
        ],
        vi: [
          "Đứt cao su càng A hoặc rơ rô-tuyn trụ",
          "Rơ rô-tuyn lái và lệch góc đặt bánh xe",
          "Phuộc nhún xì dầu hoặc rơ bạc đạn bánh xe"
        ]
      },
      techAdvice: {
        en: "Kenny's Master Tech Advice (Twain Ave): \"We put your car on the lift and photograph any torn control arm bushings or leaking struts before recommending an alignment.\"",
        es: "Consejo de Kenny (Twain Ave): \"Subimos su auto a la rampa y le mandamos foto de los bujes o rótulas antes de alinear.\"",
        vi: "Lời khuyên từ anh Kenny (Twain Ave): \"Thợ sẽ nâng gầm chụp hình thực tế các cục cao su càng A hoặc rô-tuyn bị rách gửi bạn xem trước khi cân chỉnh thước lái.\""
      }
    },
    {
      id: "battery-crank",
      icon: "🔋",
      facility: "mechanical",
      serviceId: "svc-battery-alternator",
      urgencyLevel: "critical",
      urgencyScore: 88,
      obdCode: "P0562 / VOLT-LOW",
      title: {
        en: "Slow Crank / Battery / Clicking",
        es: "Tarda en Encender / Batería / Clics",
        vi: "Đề Máy Yếu / Bình Điện / Kêu Cạch Cạch"
      },
      urgencyBadge: {
        en: "HIGH STRANDING RISK — INSPECT TODAY AT TWAIN AVE",
        es: "RIESGO DE QUEDARSE TIRADO — REVISAR HOY",
        vi: "NGUY CƠ CHẾT MÁY DỌC ĐƯỜNG — KHÁM NGAY HÔM NAY"
      },
      vegasImpact: {
        en: "Extreme Mojave Desert heat sulfates lead-acid battery plates in 24–30 months and overworks alternator voltage regulators when A/C blowers run at max.",
        es: "El calor de Las Vegas agota las baterías en 24–30 meses y exige al máximo el alternador con el A/C encendido.",
        vi: "Nắng nóng Las Vegas làm bình ắc-quy chỉ thọ khoảng 2–2.5 năm và buộc đinamô sạc hoạt động hết công suất khi bật máy lạnh."
      },
      culprits: {
        en: [
          "Heat-degraded 12V battery failing Cold Cranking Amps (CCA) load test",
          "Failing alternator diode/regulator charging below 13.5V",
          "Worn starter motor solenoid contacts or corroded battery cables"
        ],
        es: [
          "Batería de 12V agotada por calor sin fuerza de arranque",
          "Alternador cargando por debajo de 13.5V",
          "Marcha (motor de arranque) desgastada o terminales sulfatadas"
        ],
        vi: [
          "Bình ắc-quy bị chai sụt áp khi đề máy",
          "Đinamô sạc (Alternator) yếu, điện áp sạc dưới 13.5V",
          "Củ đề (Starter) mòn than hoặc cọc bình oxy hóa"
        ]
      },
      techAdvice: {
        en: "Kenny's Master Tech Advice (Twain Ave): \"Don't guess between a battery and an alternator—we run a digital ripple & load test on both in 15 minutes so you only replace the part that actually failed.\"",
        es: "Consejo de Kenny (Twain Ave): \"Probamos digitalmente la batería, marcha y alternador en 15 minutos para cambiar solo lo necesario.\"",
        vi: "Lời khuyên từ anh Kenny (Twain Ave): \"Tiệm đo kiểm đồng thời cả bình điện, củ đề và dòng sạc đinamô trong 15 phút để biết chính xác hư món nào, tránh thay nhầm tốn tiền.\""
      }
    },
    {
      id: "fluid-leak",
      icon: "💧",
      facility: "mechanical",
      serviceId: "svc-radiator-cooling",
      urgencyLevel: "critical",
      urgencyScore: 94,
      obdCode: "P0128 / COOLANT-LOW",
      title: {
        en: "Fluid Leak / Overheating",
        es: "Fuga de Líquido / Sobrecalentamiento",
        vi: "Rò Rỉ Nước Mát / Nhớt / Nóng Máy"
      },
      urgencyBadge: {
        en: "CRITICAL: STOP DRIVING IF OVERHEATING — REQUEST TOW",
        es: "CRÍTICO: NO MANEJE SI SUBE LA TEMPERATURA",
        vi: "KHẨN CẤP: DỪNG XE NGAY NẾU KIM NHIỆT CAO"
      },
      vegasImpact: {
        en: "Losing coolant pressure on I-15 in 110°F+ heat causes cylinder head warping and head gasket failure in minutes.",
        es: "Perder anticongelante en el calor de Las Vegas puede dañar el empaque de cabeza del motor en pocos minutos.",
        vi: "Hụt nước giải nhiệt giữa trưa nắng Las Vegas sẽ làm cong mặt máy và thổi ron quy-lát chỉ trong vài phút."
      },
      culprits: {
        en: [
          "Split radiator plastic tank, leaking water pump, or cracked thermostat housing",
          "Brittle valve cover gasket, oil filter housing, or oil cooler seal",
          "Transmission cooler line or power steering hose leak"
        ],
        es: [
          "Radiador fisurado, bomba de agua o toma de termostato",
          "Empaque de punterías o base de filtro de aceite reseco",
          "Línea de enfriamiento de transmisión o dirección"
        ],
        vi: [
          "Nứt vai két nước, xì bơm nước hoặc bể cụm van hằng nhiệt",
          "Chai cứng ron nắp cò, cụm lọc nhớt hoặc phốt chặn dầu",
          "Rò rỉ ống dầu hộp số hoặc ống dầu trợ lực lái"
        ]
      },
      techAdvice: {
        en: "Kenny's Master Tech Advice (Twain Ave): \"If your temperature gauge climbs toward H, pull over safely and call us at (702) 969-4596. A tow to Twain Ave is 10x cheaper than a heat-damaged engine!\"",
        es: "Consejo de Kenny (Twain Ave): \"Si la aguja sube a la H, apague el motor y llámenos al (702) 969-4596. ¡Proteja su motor!\"",
        vi: "Lời khuyên từ anh Kenny (Twain Ave): \"Nếu thấy kim nhiệt độ dâng cao gần chữ H, hãy tấp vào lề tắt máy ngay và gọi (702) 969-4596 để bảo vệ động cơ an toàn.\""
      }
    },
    {
      id: "trans-slip",
      icon: "⚙️",
      facility: "mechanical",
      serviceId: "svc-trans-repair",
      urgencyLevel: "critical",
      urgencyScore: 86,
      obdCode: "P0700 / TCM-SLIP",
      title: {
        en: "Transmission Slip / Delayed Shift",
        es: "Transmisión Patina / Cambios Tardíos",
        vi: "Hộp Số Bị Trượt / Sang Số Trễ Hoặc Giật"
      },
      urgencyBadge: {
        en: "HIGH URGENCY — INSPECT BEFORE CLUTCH PACKS BURN",
        es: "URGENTE — EVITE QUEMAR DISCOS DE TRANSMISIÓN",
        vi: "KHẨN CẤP — KIỂM TRA SỚM ĐỂ CỨU HỘP SỐ"
      },
      vegasImpact: {
        en: "Desert heat oxidizes Automatic & CVT transmission fluid rapidly, dropping line pressure and glazing internal clutches.",
        es: "El calor extremo degrada el fluido ATF/CVT, causando pérdida de presión hidráulica en el cuerpo de válvulas.",
        vi: "Nhiệt độ cao làm dầu hộp số (ATF/CVT) mất độ nhớt và tụt áp suất thủy lực, dễ làm cháy lá bố."
      },
      culprits: {
        en: [
          "Thermally degraded or low ATF / CVT transmission fluid",
          "Failing shift solenoid pack or valve body pressure regulator",
          "Torque converter shudder or broken transmission mount"
        ],
        es: [
          "Fluido ATF / CVT quemado o bajo de nivel",
          "Solenoides de cambio o cuerpo de válvulas con falla",
          "Convertidor de par (turbina) o soporte roto"
        ],
        vi: [
          "Thiếu dầu hộp số hoặc dầu ATF/CVT đã cháy đen",
          "Hư van điện từ (solenoid) hoặc vỉ mạch điều khiển hộp số",
          "Mòn biến mô thủy lực hoặc đứt chân hộp số"
        ]
      },
      techAdvice: {
        en: "Kenny's Master Tech Advice (Twain Ave): \"We scan your Transmission Control Module (TCM) live clutch pressures and inspect fluid condition before quoting any major transmission work.\"",
        es: "Consejo de Kenny (Twain Ave): \"Escaneamos el módulo TCM y revisamos la presión y estado del fluido antes de cotizar.\"",
        vi: "Lời khuyên từ anh Kenny (Twain Ave): \"Chúng tôi luôn quét hộp điều khiển TCM kiểm tra áp suất dầu và van điện từ trước để tìm phương án sửa chữa tiết kiệm nhất.\""
      }
    },
    {
      id: "collision-damage",
      icon: "💥",
      facility: "collision",
      serviceId: "svc-collision-recon",
      urgencyLevel: "warning",
      urgencyScore: 75,
      obdCode: "BODY-FRAME / DEDUCTIBLE",
      title: {
        en: "Collision / Bumper / Body Damage",
        es: "Choque / Defensa / Daño en Carrocería",
        vi: "Tai Nạn Va Chạm / Móp Cản / Đồng Sơn"
      },
      urgencyBadge: {
        en: "ROUTE TO SIRIUS AVE (HECTOR) — DEDUCTIBLE RELIEF ACTIVE",
        es: "ATENCIÓN EN SIRIUS AVE (HECTOR) — AYUDA CON DEDUCIBLE",
        vi: "CHUYỂN XƯỞNG SIRIUS AVE (HECTOR) — HỖ TRỢ DEDUCTIBLE"
      },
      vegasImpact: {
        en: "Hidden bumper reinforcement damage compromises crash protection and radiator airflow, while cracked paint peels quickly in Nevada UV sun.",
        es: "Los daños ocultos tras la defensa afectan sensores y enfriamiento, y el sol de Nevada quema la pintura expuesta.",
        vi: "Xương cản bị cong bên trong làm lệch cảm biến an toàn, đồng thời nắng gắt Nevada làm vết nứt sơn bong tróc rất nhanh."
      },
      culprits: {
        en: [
          "Crushed bumper fascia, reinforcement beam, and ADAS sensor brackets",
          "Fender, door, or quarter-panel dent requiring pulling & PPG paint blend",
          "Unibody or frame rail shift requiring 0.1mm laser straightening at Sirius Ave"
        ],
        es: [
          "Defensa rota, alma de acero doblada y sensores desalineados",
          "Abolladura en salpicadera o puerta que requiere enderezado y pintura PPG",
          "Desviación de chasis que requiere alineación láser en Sirius Ave"
        ],
        vi: [
          "Vỡ cản nhựa, cong xương cản sắt và lệch ngàm cảm biến va chạm",
          "Móp vè xe, cửa xe cần rút tôn và sơn hấp pha màu vi tính PPG",
          "Lệch kích thước khung sườn cần kéo nắn laser 0.1mm tại Sirius Ave"
        ]
      },
      techAdvice: {
        en: "Hector's Master Collision Advice (Sirius Ave): \"Before you pay a $500 or $1,000 deductible at a chain shop, text me 4 photos or bring your car to 3070 W Sirius Ave Unit 108—we handle your insurance adjuster and help cover your deductible!\"",
        es: "Consejo de Hector (Sirius Ave): \"Antes de pagar $500 o $1,000 de deducible en otro lado, mándeme 4 fotos o venga a 3070 W Sirius Ave Unit 108. ¡Nosotros le ayudamos con su deducible!\"",
        vi: "Lời khuyên từ Hector (Sirius Ave): \"Trước khi phải trả $500 hay $1,000 tiền khấu trừ bảo hiểm ở nơi khác, hãy gửi 4 tấm ảnh hoặc mang xe qua 3070 W Sirius Ave Unit 108—chúng tôi làm việc với hãng bảo hiểm và hỗ trợ giảm tiền Deductible cho bạn!\""
      }
    }
  ],

  obdCodes: {
    "P0420": {
      code: "P0420",
      symptomId: "check-engine",
      title: "P0420 — Catalyst System Efficiency Below Threshold (Bank 1)",
      detail: "Downstream O2 sensor reading closely mirrors upstream sensor. Kenny's team tests live O2 sensor response and exhaust manifold seals first before condemning the catalytic converter."
    },
    "P0300": {
      code: "P0300",
      symptomId: "check-engine",
      title: "P0300 — Random / Multiple Cylinder Misfire Detected",
      detail: "Multiple cylinders are misfiring under load. If Check Engine Light is flashing, avoid high speeds to protect the catalytic converter. Inspect spark plugs, ignition coils, and fuel injectors."
    },
    "P0171": {
      code: "P0171",
      symptomId: "check-engine",
      title: "P0171 — System Too Lean (Bank 1)",
      detail: "Unmetered air entering intake tract or low fuel rail pressure. Common in Las Vegas due to heat-cracked rubber vacuum hoses and intake boots."
    },
    "P0455": {
      code: "P0455",
      symptomId: "check-engine",
      title: "P0455 — EVAP Emission Control System Gross Leak",
      detail: "Fuel vapor recovery system is not holding vacuum. Typically a failed EVAP purge valve, vent solenoid, or dried gas cap seal blocking Nevada Smog."
    },
    "P0128": {
      code: "P0128",
      symptomId: "fluid-leak",
      title: "P0128 — Coolant Thermostat Below Regulating Temp",
      detail: "Cooling system thermostat stuck open or ECT sensor drift. Critical to service before Las Vegas summer heat causes thermostat seizure."
    },
    "P0700": {
      code: "P0700",
      symptomId: "trans-slip",
      title: "P0700 — Transmission Control System Malfunction Request",
      detail: "TCM has stored a specific shift solenoid, valve body pressure, or speed sensor fault code. Requires OEM transmission sub-code scan at Twain Ave."
    },
    "C0035": {
      code: "C0035",
      symptomId: "brakes",
      title: "C0035 — Left Front Wheel Speed Sensor Circuit (ABS)",
      detail: "ABS module lost clean signal from front-left hub ring or wheel speed sensor harness."
    }
  },

  // All 7 Real Verbatim CARFAX 5.0★ Reviews with Make Filter Tags
  reviews: [
    {
      id: "rev-elantra",
      filters: ["hyundai-kia"],
      vehicle: "Verified 2002 Hyundai Elantra Owner",
      serviceTag: "Oxygen Sensors & Engine Diagnostics • Twain Ave",
      date: "Verified CARFAX Service Record",
      quote: "\"My Oxygen sensors were replaced professionally & quickly by a great mechanic at a great price. An asset to the industry. Highly recommended AAA+++!!!\""
    },
    {
      id: "rev-hector-team",
      filters: ["collision", "trucks-domestic"],
      vehicle: "Verified CARFAX Service Customer",
      serviceTag: "Hector & Tech Team • Full Vehicle Care",
      date: "Verified CARFAX Service Record",
      quote: "\"Hector & all the technicians take excellent care of our vehicle with professionalism & great prices. Highly recommended AAA+++!!!\""
    },
    {
      id: "rev-gregory-truck",
      filters: ["trucks-domestic"],
      vehicle: "Gregory M. — Verified Truck Owner",
      serviceTag: "Live In-Progress Repair Photos Sent to Phone",
      date: "Verified CARFAX Service Record",
      quote: "\"I liked how they took pictures of my truck while they were working on my truck, they were upfront with the work on my truck. I will be taking the rest of my cars to them. A job well done.\""
    },
    {
      id: "rev-camry-oil",
      filters: ["toyota-lexus"],
      vehicle: "Verified 2015 Toyota Camry Owner",
      serviceTag: "Express <60-Minute Oil & Filter Change • Twain Ave",
      date: "Verified CARFAX Service Record",
      quote: "\"The service was fast. I was there for an oil change, in and out in less than 60 minutes.\""
    },
    {
      id: "rev-kia-deductible",
      filters: ["hyundai-kia", "collision"],
      vehicle: "Verified 2020 Kia Forte Owner",
      serviceTag: "Collision Repair & Insurance Deductible Assistance • Sirius Ave",
      date: "Verified CARFAX Service Record",
      quote: "\"Great customer service, assisted with deductible assistance.\""
    },
    {
      id: "rev-acura-tlx",
      filters: ["honda-acura"],
      vehicle: "Verified 2015 Acura TLX Advance Owner",
      serviceTag: "OEM Maintenance & Upfront Pricing",
      date: "Verified CARFAX Service Record",
      quote: "\"Affordable and great customer service.\""
    },
    {
      id: "rev-honda-fit",
      filters: ["honda-acura"],
      vehicle: "Verified 2012 Honda Fit Owner",
      serviceTag: "5.0★ Verified Mechanical Inspection & Service",
      date: "Verified CARFAX Service Record",
      quote: "\"5.0 ★ Verified CARFAX Service Rating — Honest diagnostics, fast turnaround, and upfront pricing with zero shortcuts.\""
    }
  ]
};
