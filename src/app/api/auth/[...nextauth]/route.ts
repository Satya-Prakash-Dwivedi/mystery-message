import NextAuth from "next-auth/next";
import { autOptions } from "./options";

const handler = NextAuth(autOptions)

export {handler as GET, handler as POST}