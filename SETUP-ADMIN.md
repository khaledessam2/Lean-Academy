# لوحة تحكم المحتوى — دليل الإعداد

مشروعان منفصلان تماماً يشتركان في نفس مشروع Supabase:

- **الموقع العام** (هذا المشروع `lean`) يقرأ محتواه من Supabase، ولو مفيش أي تعديل يرجع للمحتوى الأصلي المدمج في الكود.
- **لوحة الأدمن** مشروع مستقل منفصل على المسار: `C:\Users\khaled\Desktop\lean-admin`
  تسجّل منه الدخول وتعدّل أي نص أو صورة، والتغيير يظهر على الموقع فوراً.

## 1) إعداد قاعدة البيانات (مرة واحدة)
1. افتح مشروعك على Supabase → **SQL Editor** → **New query**.
2. الصق محتوى الملف [`supabase/schema.sql`](supabase/schema.sql) بالكامل واضغط **Run**.
   - ده بيعمل: جدول `site_content` + سياسات الحماية (RLS) + bucket صور اسمه `site-images`.

## 2) إنشاء مستخدم الأدمن
1. **Authentication → Users → Add user**.
2. اكتب إيميلك وكلمة سر، وفعّل **Auto Confirm User**.
3. (مهم للأمان) **Authentication → Providers → Email** → أوقف **Enable email signups**
   عشان محدش يقدر يسجّل حساب جديد غيرك.

## 3) وضع المفاتيح في الكود
من **Project Settings → API** انسخ **Project URL** و **anon public** key، وحطهم في:
- الموقع العام: [`src/environments/environment.ts`](src/environments/environment.ts)
- لوحة الأدمن: `C:\Users\khaled\Desktop\lean-admin\src\environments\environment.ts`

(نفس القيم في المشروعين لأنهما يستخدمان نفس مشروع Supabase.)

## 4) التشغيل محلياً
- الموقع العام (من هذا المجلد):  `npm start`  → http://localhost:4200
- لوحة الأدمن (من مجلد `lean-admin`):  `npm start`  → http://localhost:4300

سجّل الدخول للوحة بإيميل وكلمة سر الأدمن، اختر أي قسم من القائمة الجانبية،
عدّل النصوص/الصور/الأسعار، ثم اضغط **حفظ التغييرات**. افتح الموقع العام لتشوف التغيير.

- زر **رفع صورة جديدة** يرفع الصورة إلى Supabase Storage ويحفظ رابطها تلقائياً.
- زر **إرجاع للأصلي** يمسح تعديلات القسم ويرجّعه لمحتواه الأصلي.

## 5) النشر (Production)
- الموقع العام:  `npm run build`  → `dist/lean` (يعمل بـ SSR: `npm run serve:ssr:lean`).
- لوحة الأدمن (من مجلد `lean-admin`):  `npm run build`  → `dist/lean-admin` (موقع ثابت SPA).
- انشر مخرجات الأدمن على نطاق/ساب-دومين منفصل (مثلاً `admin.leanacademy.me`).
- في إعدادات النشر، تأكد إن أي مسار في الأدمن يرجّع لـ `index.html` (SPA fallback).

## مزامنة موديل المحتوى
الموديل موجود في المشروعين (`src/app/content/`). لو أضفت/غيّرت حقلاً في الموقع العام،
انسخ نفس التغيير لمجلد الأدمن `lean-admin/src/app/content/` (والعكس)، وحدّث السكيمة
في `lean-admin/src/app/editor/schema.ts` لو أضفت حقلاً جديداً تريد تعديله من اللوحة.

## ملاحظات
- مفتاح anon آمن يكون في كود الواجهة (ده تصميم Supabase). الحماية الحقيقية من سياسات RLS:
  القراءة عامة، والكتابة للمستخدم المسجّل فقط.
- المحتوى الافتراضي موجود في `src/app/content/models/` — ملف لكل قسم.
