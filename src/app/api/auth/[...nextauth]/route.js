import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    jwt({ token, user, profile }) {
      if (user) token.user = user;
      if (profile) token.profile = profile;

      return token;
    },
    session({ session, token, user }) {
      if (session.user)
        session.user = {
          ...session.user,
          ...token.profile,
        };
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
