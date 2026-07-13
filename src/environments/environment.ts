export const environment = {
  production: true,
  emailjs: {
    // من لوحة تحكم EmailJS: https://dashboard.emailjs.com
    serviceId: 'service_ftqyoj7', // Email Services
    templateId: 'template_9al12in', // Email Templates
    publicKey: 'Hmsi0NM1CYlsQZA1g', // Account → General → API Keys
  },
  supabase: {
    // من Supabase: Project Settings → API
    // آمن وضعها هنا (المفتاح anon عام بطبيعته، والحماية عبر سياسات RLS في قاعدة البيانات)
    url: 'https://leemptdncwneopgsvgjt.supabase.co',
    anonKey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlZW1wdGRuY3duZW9wZ3N2Z2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM5NjAwNDIsImV4cCI6MjA5OTUzNjA0Mn0.S0bsq8okEdkwFOQvPZznfriNXr7ZFOOpUgWNQgOB7Cs',
  },
};
