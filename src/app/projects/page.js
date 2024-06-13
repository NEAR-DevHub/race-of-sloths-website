import { Table } from "@/components";

const headers = ["Repositories", "Date", "Score", "Rating"];
export default function Page() {
  return (
    <>
      <h2 className="text-3xl">Projects</h2>
      <Table
        headers={headers}
        body={[
          { repo: "nft", date: "Jun 23, 2024", score: 13, rating: null },
          { repo: "nft2", date: "Jun 21, 2024", score: 1, rating: 123 },
        ]}
      />
    </>
  );
}
