export default async function PageLayout({ children }) {
  return (
    <section className="flex w-full flex-col gap-[24px] py-12 px-24">
      {children}
    </section>
  );
}
