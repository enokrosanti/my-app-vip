import { profile } from "console";
import { Session } from "inspector";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        fullname: { label: "Fullname", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password, fullname } = credentials as {
          email: string;
          password: string;
          fullname: string;
        };
        const user: any = { id: 1, email: email, password: password, fullname: fullname };
        if (user) {        
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, fullname }: any) {
      if (account?.provider === "credentials") {
        token.email = user.email;
        token.fullname = user.fullname;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token.email) {
        session.user = session.user || {};
        session.user.email = token.email;
      }
      if (token.fullname) {
        session.user = session.user || {};
        session.user.fullname = token.fullname;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
