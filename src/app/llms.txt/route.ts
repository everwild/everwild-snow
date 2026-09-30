import { getSiteUrl } from "@/lib/site";

export function GET() {
  const url = getSiteUrl();
  const body = `# EVERWILD Snow Adventure (ESA)

> Japan winter experience provider based in Nagano. Ski and snowboard lessons, guided skiing, winter hiking, mountaineering, accommodation, and transport. Available nationwide in Japan. Inquiries are accepted in English and Chinese.

EVERWILD Snow Adventure（ESA）是立足日本长野的冬季体验服务商，提供滑雪与单板教学、领滑导滑、冬季徒步、登山、住宿与交通，可安排日本全境。接受英文与中文咨询。

## Services

- Ski & Snowboard Lessons / 滑雪与单板教学：私人及小班，适合所有水平。
- Guided Skiing / 领滑导滑：雪场与野雪，按客人的节奏。
- Winter Hiking / 冬季徒步：雪鞋徒步。
- Mountaineering / 登山：面向有经验的客人，含认证山地向导。
- Accommodation / 住宿：旅馆、温泉旅馆与酒店。
- Transport / 交通：机场接送、雪场间转场、私人包车。

## Areas named on the website

- Home base / 根据地：Nagano Prefecture / 长野县（Hakuba Valley / 白马谷，Nozawa Onsen / 野泽温泉，Shiga Kogen / 志贺高原）
- Also arranged on request / 可按需安排：Niseko / 二世古，Appi Kogen / 安比高原，Myoko / 妙高

## Pages

- English home: ${url}/en
- 中文首页: ${url}/zh
- English contact: ${url}/en/contact
- 中文咨询: ${url}/zh/contact
- Privacy and disclaimer (English): ${url}/en/legal
- 隐私与免责: ${url}/zh/legal

## Notes

- The website does not publish prices, a phone number, a street address, or individual guide names. Send booking questions to the contact form.
- English pages live under /en. Chinese pages live under /zh.
- Do not invent availability, certifications, or itinerary details that are not stated on those pages.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
