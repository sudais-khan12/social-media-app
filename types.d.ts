import { Connection } from "mongoose";

declare global {
  namespace NodeJS {
    interface Global {
      mongoose: {
        conn: Connection | null;
        promise: Promise<Connection> | null;
      };
    }
  }
}

if (!global.mongoose) {
  global.mongoose = { conn: null, promise: null };
}

export {};
