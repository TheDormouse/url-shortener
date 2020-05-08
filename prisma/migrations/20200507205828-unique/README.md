# Migration `20200507205828-unique`

This migration has been generated at 5/7/2020, 8:58:28 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE UNIQUE INDEX "quaint"."urls.url" ON "urls"("url")

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200507205748-test..20200507205828-unique
--- datamodel.dml
+++ datamodel.dml
@@ -3,11 +3,11 @@
 }
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 model urls {
   id  Int     @default(autoincrement()) @id
-  url String?
+  url String? @unique
 }
```


