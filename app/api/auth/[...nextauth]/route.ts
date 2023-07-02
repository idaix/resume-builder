import NextAuth, { AuthOptions } from "next-auth";
import Githubprovider from "next-auth/providers/github";
export const authOptions: AuthOptions = {
  providers: [
    Githubprovider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
