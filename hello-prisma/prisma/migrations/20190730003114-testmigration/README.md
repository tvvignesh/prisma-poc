# Migration `20190730003114-testmigration`

This migration has been generated by Vignesh T.V. at 7/30/2019, 12:31:14 AM.
You can check out the [state of the datamodel](./datamodel.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "test"."users"("id" text NOT NULL  ,"username" text   ,"email" text NOT NULL DEFAULT '' ,PRIMARY KEY ("id"));

CREATE TABLE "test"."Post"("id" integer NOT NULL DEFAULT 0 ,"createdAt" timestamp(3) NOT NULL  ,"updatedAt" timestamp(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,"title" text NOT NULL DEFAULT '' ,"published" boolean NOT NULL DEFAULT false ,PRIMARY KEY ("id"));

CREATE TABLE "test"."Category"("id" integer NOT NULL DEFAULT 0 ,"name" text NOT NULL DEFAULT '' ,PRIMARY KEY ("id"));

CREATE TABLE "test"."_CategoryToPost"("A" integer NOT NULL  REFERENCES "test"."Category"("id"),"B" integer NOT NULL  REFERENCES "test"."Post"("id"));

ALTER TABLE "test"."Post" ADD COLUMN "author" text NOT NULL  REFERENCES "test"."users"("id");

CREATE UNIQUE INDEX "users.email._UNIQUE" ON "test"."users"("email")
```

## Changes

```diff
diff --git datamodel.mdl datamodel.mdl
migration ..20190730003114-testmigration
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,28 @@
+datasource db {
+    provider = "postgresql"
+    url      = "postgresql://vignesh:tcrocks@localhost:5432/test?schema=test"
+}
+
+model User {
+    id    String  @id @default(cuid())
+    name  String? @map("username")
+    email String  @unique
+
+    @@map("users")
+}
+
+model Post {
+    id         Int        @id
+    createdAt  DateTime   @default(now())
+    updatedAt  DateTime   @updatedAt
+    author     User
+    title      String
+    published  Boolean    @default(false)
+    categories Category[]
+}
+
+model Category {
+    id    Int    @id
+    name  String
+    posts Post[]
+}
```

## Photon Usage

You can use a specific Photon built for this migration (20190730003114-testmigration)
in your `before` or `after` migration script like this:

```ts
import Photon from '@generated/photon/20190730003114-testmigration'

const photon = new Photon()

async function main() {
  const result = await photon.users()
  console.dir(result, { depth: null })
}

main()

```
