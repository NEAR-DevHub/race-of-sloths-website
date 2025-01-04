/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/latest-news",
        destination:
          "https://www.reddit.com/r/RaceOfSloth/comments/1hrv3t8/happy_new_year_from_race_of_sloths/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
