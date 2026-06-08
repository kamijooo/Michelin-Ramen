/**
 * 店舗データ定義
 * 新しい店舗を追加するときは、この配列に store オブジェクトを追加するだけ。
 * Eleventy が自動で /{region}/{slug}/index.html を生成します。
 */
module.exports = {
  brand: {
    // 業態(サブドメイン)レベルの共通設定
    domain: "michelin-ramen.halal-food-wagyu.com",
    ga4_id: "", // ← 後で GA4 測定IDを入れてください
    brand_name: "Michelin Ramen",
    brand_slug: "michelin-ramen"
  },
  stores: [
    {
      // ===== URL / 識別 =====
      region: "osaka",
      slug: "namba",
      // ===== 店名 =====
      name_full_en: "King Wagyu Ramen Michelin Chef Supervised Halal Dotonbori Restaurant 米其林厨师监督和牛拉面",
      name_short: "King Wagyu Ramen",
      name_cn: "米其林厨师监督和牛拉面",
      name_meta: "King Wagyu Ramen · Dotonbori · Halal",
      // ===== 立地 =====
      city: "Dotonbori",
      station_en: "Namba Station",
      station_jp: "難波駅",
      address_en: "Parkland Building 1F, 2-1-3 Dotonbori, Chuo-ku, Osaka-shi, Osaka",
      address_postal: "542-0071",
      // ===== 連絡先 =====
      tel_display: "070-2388-4392",
      tel_raw: "817023884392",
      email: "",
      // ===== 営業 =====
      hours: "11:00 – 23:00",
      hours_short: "11–23",
      hours_note: "",
      hours_special: "",
      // ===== 席・施設 =====
      seats: "31 seats",
      seats_note: "",
      facilities_main: "Halal-friendly menu · Takeout available · Free Wi-Fi",
      facilities_sub: "Child-friendly · Stroller accessible · Non-smoking · Cashless only",
      payment_note: "Cashless only — credit cards and mobile payments accepted",
      // ===== 予約・SNS =====
      tablecheck_url: "https://www.tablecheck.com/shops/halal-wagyu-namba/reserve",
      instagram_url: "",
      instagram_handle: "",
      // ===== 評価 =====
      rating: "",
      rating_count: "",
      // ===== Maps =====
      maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3913.8017817583786!2d135.4956783!3d34.6688229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e7b16b2c66cf%3A0x545100087d563061!2zV2FneXUgKEhhbGFsKSBSYW1lbiBOb29kbGUgRG90b25ib3JpIE5hbWJhIFJlc3RhdXJhbnQg5ZKM54mbIOmBk-mhv-WggCDmi4npnaIg6aSQ5Y6F!5e1!3m2!1sja!2sjp!4v1779956693320!5m2!1sja!2sjp",
      maps_link: "https://maps.app.goo.gl/Sp9i9PtFMNCSGmK66",
      // ===== Hero image =====
      hero_image: "/assets/ramen1.jpg",
      // ===== Menu (course-only) =====
      courses: [
        {
          name: "Gold",
          kanji: "金",
          items: [
            "Three appetisers",
            "Salmon &amp; avocado, instant-smoked",
            "Seared wagyu belly with caviar",
            "Wagyu bone broth ramen — Shio",
            "Dessert"
          ]
        },
        {
          name: "Platinum",
          kanji: "白 金",
          items: [
            "Three appetisers",
            "Salmon &amp; avocado, instant-smoked",
            "Seared wagyu belly with caviar",
            "Wagyu bone broth ramen (choice of two: Shio / Spicy)",
            "Dessert"
          ]
        }
      ]
    }
    // ===== 2店舗目を追加するときはこの下にもう1つ { ... } を書くだけ =====
  ]
};
