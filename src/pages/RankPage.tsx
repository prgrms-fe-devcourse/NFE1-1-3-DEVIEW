import { RankTable } from "@components/RankPage/RankTable";
const rankData = [
  { rank: 1, name: "민정아", team: "학생", recommend: 120423 },
  { rank: 2, name: "민정아", team: "취준생", recommend: 120023 },
  { rank: 3, name: "민정아", team: "취준생", recommend: 10023 },
  { rank: 4, name: "민정아", team: "취준생", recommend: 1234 },
  { rank: 5, name: "민정아", team: "취준생", recommend: 123 },
  { rank: 6, name: "민정아", team: "취준생", recommend: 123 },
  { rank: 7, name: "민정아", team: "취준생", recommend: 123 },
  { rank: 8, name: "민정아", team: "취준생", recommend: 123 },
  { rank: 9, name: "민정아", team: "취준생", recommend: 123 },
  { rank: 10, name: "민정아", team: "취준생", recommend: 123 },
  { rank: 11, name: "민정아", team: "취준생", recommend: 123 },
  { rank: 12, name: "민정아", team: "취준생", recommend: 123 },
  { rank: 13000, name: "민정아", team: "취준생", recommend: 123 }
];

export default function RankPage() {
  return (
    <div className="mx-auto max-w p-16">
      <RankTable data={rankData} />
    </div>
  );
}
