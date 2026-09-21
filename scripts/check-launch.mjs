import {readFileSync} from 'node:fs';
const restaurant=JSON.parse(readFileSync(new URL('../data/restaurant.json',import.meta.url)));
const menu=JSON.parse(readFileSync(new URL('../data/menu.json',import.meta.url)));
const issues=[];
if(!process.env.NEXT_PUBLIC_SITE_URL)issues.push('تحديد الدومين النهائي NEXT_PUBLIC_SITE_URL');
else{try{const u=new URL(process.env.NEXT_PUBLIC_SITE_URL);if(u.protocol!=='https:'||u.pathname!=='/'||u.hostname.endsWith('chatgpt.site'))issues.push('اعتماد دومين المطعم العام قبل طباعة QR');}catch{issues.push('رابط الدومين غير صحيح');}}
if(!restaurant.menuCompleteVerified)issues.push('مطابقة القائمة كاملة بالأصل: الأسماء والمسميات الصغيرة غير المقروءة');
if(menu.some(i=>typeof i.price!=='number'||i.price<=0))issues.push('اعتماد الأسعار والحصص لكل صنف من مصدر المطعم');
if(!restaurant.hours)issues.push('اعتماد ساعات العمل الأسبوعية');
if(!restaurant.locationVerified)issues.push('تأكيد دبوس Google Maps على مدخل المطعم');
if(!restaurant.photosApproved)issues.push('اعتماد الصور المولدة ومطابقتها للأصناف الفعلية');
if(!restaurant.whatsappVerified)issues.push('تأكيد رقم واتساب أو اعتماد الاتصال فقط وتحديث شرط الإطلاق');
if(issues.length){console.error('الإطلاق العام غير مكتمل:\n'+issues.map(x=>'• '+x).join('\n'));process.exitCode=1;}else console.log('جاهز للإطلاق العام. شغّل QR ثم ابنِ الموقع مع LAUNCH_MODE=true.');
