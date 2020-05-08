# Migration `20200507205748-test`

This migration has been generated at 5/7/2020, 8:57:48 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200507205748-test
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,13 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+datasource db {
+  provider = "sqlite"
+  url      = env("DATABASE_URL")
+}
+
+model urls {
+  id  Int     @default(autoincrement()) @id
+  url String?
+}
```


